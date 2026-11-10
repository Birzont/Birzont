-- Shortcut service schema
-- Uses only:
-- 1) public.shortcut_organizations
-- 2) public.shortcut_shortcuts
--
-- Assumes Supabase Auth is enabled (auth.users).

begin;

create extension if not exists pgcrypto;

-- =========================================================
-- 1) Organizations
-- =========================================================
create table if not exists public.shortcut_organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_id uuid not null references auth.users(id) on delete cascade,
  member_user_ids uuid[] not null default '{}',
  member_aliases jsonb not null default '{}'::jsonb,
  icon text null,
  bg_url text null,
  logo_url text null,
  invite_code text null,
  invite_expires_at timestamptz null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists shortcut_organizations_invite_code_uq
  on public.shortcut_organizations (invite_code)
  where invite_code is not null;

create index if not exists shortcut_organizations_owner_idx
  on public.shortcut_organizations (owner_id);

create index if not exists shortcut_organizations_member_gin_idx
  on public.shortcut_organizations using gin (member_user_ids);

-- =========================================================
-- 2) Shortcut pages (personal / organization member pages)
-- =========================================================
create table if not exists public.shortcut_shortcuts (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid null references public.shortcut_organizations(id) on delete cascade,
  page_owner_user_id uuid not null references auth.users(id) on delete cascade,
  ranking integer null,
  shortcuts_json jsonb not null default '[]'::jsonb,
  bg_url text null,
  logo_url text null,
  is_private boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint shortcut_shortcuts_owner_org_unique unique (organization_id, page_owner_user_id)
);

create index if not exists shortcut_shortcuts_owner_idx
  on public.shortcut_shortcuts (page_owner_user_id);

create index if not exists shortcut_shortcuts_org_idx
  on public.shortcut_shortcuts (organization_id);

create index if not exists shortcut_shortcuts_json_gin_idx
  on public.shortcut_shortcuts using gin (shortcuts_json);

create index if not exists shortcut_shortcuts_ranking_idx
  on public.shortcut_shortcuts (page_owner_user_id, ranking);

alter table public.shortcut_organizations
  add column if not exists icon text null;

alter table public.shortcut_organizations
  add column if not exists member_aliases jsonb not null default '{}'::jsonb;

alter table public.shortcut_shortcuts
  add column if not exists ranking integer null;

-- =========================================================
-- updated_at trigger
-- =========================================================
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_shortcut_organizations_updated_at on public.shortcut_organizations;
create trigger trg_shortcut_organizations_updated_at
before update on public.shortcut_organizations
for each row execute function public.set_updated_at();

drop trigger if exists trg_shortcut_shortcuts_updated_at on public.shortcut_shortcuts;
create trigger trg_shortcut_shortcuts_updated_at
before update on public.shortcut_shortcuts
for each row execute function public.set_updated_at();

-- =========================================================
-- RLS
-- =========================================================
alter table public.shortcut_organizations enable row level security;
alter table public.shortcut_shortcuts enable row level security;

-- Organizations: owner or member can read
drop policy if exists "org_select_member_or_owner" on public.shortcut_organizations;
create policy "org_select_member_or_owner"
on public.shortcut_organizations
for select
to authenticated
using (
  owner_id = auth.uid()
  or auth.uid() = any(member_user_ids)
);

-- Organizations: only owner can insert own org
drop policy if exists "org_insert_owner_only" on public.shortcut_organizations;
create policy "org_insert_owner_only"
on public.shortcut_organizations
for insert
to authenticated
with check (
  owner_id = auth.uid()
);

-- Organizations: only owner can update/delete
drop policy if exists "org_update_owner_only" on public.shortcut_organizations;
create policy "org_update_owner_only"
on public.shortcut_organizations
for update
to authenticated
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

-- Members can update only aliases through RPC below (table update policy stays owner-only).
create or replace function public.set_org_member_alias(
  p_org_id uuid,
  p_alias text,
  p_target_user_id uuid default auth.uid()
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_org public.shortcut_organizations%rowtype;
  v_uid uuid := auth.uid();
  v_target uuid := coalesce(p_target_user_id, auth.uid());
  v_aliases jsonb;
  v_trimmed text := nullif(btrim(coalesce(p_alias, '')), '');
begin
  if v_uid is null then
    raise exception 'not authenticated';
  end if;

  select *
  into v_org
  from public.shortcut_organizations
  where id = p_org_id;

  if not found then
    raise exception 'organization not found';
  end if;

  if not (v_uid = v_org.owner_id or v_uid = any(v_org.member_user_ids)) then
    raise exception 'forbidden: not organization member';
  end if;

  -- owner can edit anyone, member can edit only self
  if not (v_uid = v_org.owner_id or v_target = v_uid) then
    raise exception 'forbidden: cannot edit another member alias';
  end if;

  if not (v_target = v_org.owner_id or v_target = any(v_org.member_user_ids)) then
    raise exception 'target user is not a member of this organization';
  end if;

  v_aliases := coalesce(v_org.member_aliases, '{}'::jsonb);
  if v_trimmed is null then
    v_aliases := v_aliases - (v_target::text);
  else
    v_aliases := jsonb_set(v_aliases, array[v_target::text], to_jsonb(v_trimmed), true);
  end if;

  update public.shortcut_organizations
  set member_aliases = v_aliases
  where id = v_org.id;
end;
$$;

grant execute on function public.set_org_member_alias(uuid, text, uuid) to authenticated;

drop policy if exists "org_delete_owner_only" on public.shortcut_organizations;
create policy "org_delete_owner_only"
on public.shortcut_organizations
for delete
to authenticated
using (owner_id = auth.uid());

-- Shortcuts: authenticated users can read:
-- - own page
-- - org pages in org they belong to, but only if page is public or requester is owner of page
drop policy if exists "shortcuts_select_policy" on public.shortcut_shortcuts;
create policy "shortcuts_select_policy"
on public.shortcut_shortcuts
for select
to authenticated
using (
  page_owner_user_id = auth.uid()
  or (
    organization_id is not null
    and exists (
      select 1
      from public.shortcut_organizations o
      where o.id = shortcut_shortcuts.organization_id
        and (
          o.owner_id = auth.uid()
          or auth.uid() = any(o.member_user_ids)
        )
    )
    and (is_private = false or page_owner_user_id = auth.uid())
  )
);

-- Insert shortcuts:
-- - personal page: only self
-- - org page: self or org owner can create/update target row
drop policy if exists "shortcuts_insert_policy" on public.shortcut_shortcuts;
create policy "shortcuts_insert_policy"
on public.shortcut_shortcuts
for insert
to authenticated
with check (
  (
    organization_id is null
    and page_owner_user_id = auth.uid()
  )
  or (
    organization_id is not null
    and exists (
      select 1
      from public.shortcut_organizations o
      where o.id = shortcut_shortcuts.organization_id
        and (
          o.owner_id = auth.uid()
          or page_owner_user_id = auth.uid()
        )
    )
  )
);

-- Update shortcuts:
-- - personal: owner only
-- - org: page owner or org owner
drop policy if exists "shortcuts_update_policy" on public.shortcut_shortcuts;
create policy "shortcuts_update_policy"
on public.shortcut_shortcuts
for update
to authenticated
using (
  (
    organization_id is null
    and page_owner_user_id = auth.uid()
  )
  or (
    organization_id is not null
    and exists (
      select 1
      from public.shortcut_organizations o
      where o.id = shortcut_shortcuts.organization_id
        and (
          o.owner_id = auth.uid()
          or page_owner_user_id = auth.uid()
        )
    )
  )
)
with check (
  (
    organization_id is null
    and page_owner_user_id = auth.uid()
  )
  or (
    organization_id is not null
    and exists (
      select 1
      from public.shortcut_organizations o
      where o.id = shortcut_shortcuts.organization_id
        and (
          o.owner_id = auth.uid()
          or page_owner_user_id = auth.uid()
        )
    )
  )
);

drop policy if exists "shortcuts_delete_policy" on public.shortcut_shortcuts;
create policy "shortcuts_delete_policy"
on public.shortcut_shortcuts
for delete
to authenticated
using (
  page_owner_user_id = auth.uid()
  or (
    organization_id is not null
    and exists (
      select 1
      from public.shortcut_organizations o
      where o.id = shortcut_shortcuts.organization_id
        and o.owner_id = auth.uid()
    )
  )
);

commit;
