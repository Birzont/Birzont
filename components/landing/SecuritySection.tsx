"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { SECURITY_FAQ, SECURITY_ITEMS } from "@/lib/landing-data";
import { Check, Shield } from "lucide-react";

export function SecuritySection() {
  return (
    <SectionShell id="security" className="section-dark border-t border-theme">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-subtle">
            <Shield className="h-3.5 w-3.5 text-birzont-blue/70" />
            Security & Control
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            팀 지식은
            <br />
            <span className="gradient-text">팀이 통제합니다.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-theme-muted md:text-lg">
            연결된 문서는 언제든 해제할 수 있고, 동기화 대상과 AI 작업공간을 팀 단위로
            관리할 수 있습니다.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {SECURITY_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-theme bg-[color-mix(in_srgb,var(--theme-fg)_4%,transparent)] px-4 py-3.5"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5ee496]" />
              <span className="text-sm font-medium text-theme">{item}</span>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-theme-faint">
            FAQ
          </h3>
          {SECURITY_FAQ.map((item) => (
            <div
              key={item.q}
              className="rounded-xl border border-theme bg-[color-mix(in_srgb,var(--theme-fg)_3%,transparent)] px-5 py-4"
            >
              <p className="text-sm font-semibold text-theme">Q. {item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-theme-subtle">A. {item.a}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionShell>
  );
}
