"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/GlowButton";
import { cn } from "@/lib/utils";
import {
  CHECKLIST_UPDATED_EVENT,
  loadChecklistItems,
} from "@/lib/checklist-transfer";
import { FormEvent, useEffect, useState } from "react";

const TEAM_SIZES = ["1–5명", "6–15명", "16–50명", "51명 이상"] as const;

const AI_TOOLS = ["Cursor", "Claude", "ChatGPT", "Perplexity", "기타"] as const;

const KNOWLEDGE_SOURCES = [
  "Notion",
  "Confluence",
  "Google Drive",
  "Slack",
  "로컬 폴더",
  "기타",
] as const;

type FormData = {
  teamSize: string;
  aiTools: string[];
  knowledgeSources: string[];
  painPoint: string;
  betaInterest: string;
  email: string;
  checklistItems: string[];
};

const initialForm: FormData = {
  teamSize: "",
  aiTools: [],
  knowledgeSources: [],
  painPoint: "",
  betaInterest: "",
  email: "",
  checklistItems: [],
};

function CheckboxGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  const toggle = (option: string) => {
    onChange(
      selected.includes(option)
        ? selected.filter((v) => v !== option)
        : [...selected, option],
    );
  };

  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold text-theme">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggle(option)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors md:text-sm",
                active
                  ? "border-[#5ee496]/40 bg-[#5ee496]/15 text-theme"
                  : "border-theme bg-[color-mix(in_srgb,var(--theme-fg)_4%,transparent)] text-theme-subtle hover:border-theme-muted",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function BetaFormSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const syncChecklist = () => {
      const items = loadChecklistItems();
      if (items.length === 0) return;

      setForm((prev) => ({
        ...prev,
        checklistItems: items,
        painPoint: prev.painPoint.trim()
          ? prev.painPoint
          : items.map((item) => `• ${item}`).join("\n"),
      }));
    };

    syncChecklist();
    window.addEventListener(CHECKLIST_UPDATED_EVENT, syncChecklist);
    return () => window.removeEventListener(CHECKLIST_UPDATED_EVENT, syncChecklist);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("[BetaForm] submission:", form);
    setSubmitted(true);
    alert("진단 신청이 접수되었습니다. 곧 연락드리겠습니다.");
  };

  return (
    <section
      id="beta-form"
      className="section-dark relative scroll-mt-24 overflow-hidden px-4 py-24 md:py-32 lg:px-8"
    >
      <div className="relative mx-auto max-w-2xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              우리 팀에 맞는
              <br />
              <span className="gradient-text">AI 활용 방식을 진단받아보세요.</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6 rounded-2xl border border-theme bg-[color-mix(in_srgb,var(--theme-fg)_4%,transparent)] p-6 md:p-8"
          >
            {form.checklistItems.length > 0 && (
              <div className="rounded-xl border border-[#5ee496]/30 bg-[#5ee496]/10 p-4">
                <p className="text-sm font-semibold text-theme">
                  체크리스트에서 선택한 항목 ({form.checklistItems.length}개)
                </p>
                <p className="mt-1 text-xs text-theme-subtle">
                  아래 진단 신청에 반영됩니다.
                </p>
                <ul className="mt-3 space-y-2">
                  {form.checklistItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-theme"
                    >
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#5ee496]/25 text-[#5ee496]">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <label htmlFor="team-size" className="mb-2 block text-sm font-semibold text-theme">
                팀 규모
              </label>
              <select
                id="team-size"
                required
                value={form.teamSize}
                onChange={(e) => setForm((f) => ({ ...f, teamSize: e.target.value }))}
                className="w-full rounded-xl border border-theme bg-theme px-4 py-3 text-sm text-theme outline-none focus:border-[#5ee496]/40"
              >
                <option value="">선택하세요</option>
                {TEAM_SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <CheckboxGroup
              label="현재 쓰는 AI 도구"
              options={AI_TOOLS}
              selected={form.aiTools}
              onChange={(aiTools) => setForm((f) => ({ ...f, aiTools }))}
            />

            <CheckboxGroup
              label="팀 지식이 있는 곳"
              options={KNOWLEDGE_SOURCES}
              selected={form.knowledgeSources}
              onChange={(knowledgeSources) => setForm((f) => ({ ...f, knowledgeSources }))}
            />

            <div>
              <label htmlFor="pain-point" className="mb-2 block text-sm font-semibold text-theme">
                가장 불편한 문제
              </label>
              <textarea
                id="pain-point"
                required
                rows={3}
                value={form.painPoint}
                onChange={(e) => setForm((f) => ({ ...f, painPoint: e.target.value }))}
                placeholder="예: 매번 제품 설명을 AI에게 붙여넣어야 합니다."
                className="w-full resize-none rounded-xl border border-theme bg-theme px-4 py-3 text-sm text-theme outline-none placeholder:text-theme-faint focus:border-[#5ee496]/40"
              />
            </div>

            <div>
              <label htmlFor="beta-interest" className="mb-2 block text-sm font-semibold text-theme">
                베타 사용 의향
              </label>
              <select
                id="beta-interest"
                required
                value={form.betaInterest}
                onChange={(e) => setForm((f) => ({ ...f, betaInterest: e.target.value }))}
                className="w-full rounded-xl border border-theme bg-theme px-4 py-3 text-sm text-theme outline-none focus:border-[#5ee496]/40"
              >
                <option value="">선택하세요</option>
                <option value="바로 사용하고 싶습니다">바로 사용하고 싶습니다</option>
                <option value="데모 후 결정하겠습니다">데모 후 결정하겠습니다</option>
                <option value="출시 알림만 받고 싶습니다">출시 알림만 받고 싶습니다</option>
              </select>
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-theme">
                이메일
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-theme bg-theme px-4 py-3 text-sm text-theme outline-none placeholder:text-theme-faint focus:border-[#5ee496]/40"
              />
            </div>

            <GlowButton type="submit" className="w-full justify-center" disabled={submitted}>
              {submitted ? "접수 완료" : "진단 신청하기"}
            </GlowButton>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
