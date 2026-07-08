"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { BEFORE_AFTER_ITEMS } from "@/lib/landing-data";
import { ArrowRight } from "lucide-react";

export function BeforeAfterSection() {
  return (
    <SectionShell className="section-dark">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            팀 AI 활용은
            <br />
            <span className="gradient-text">이렇게 달라집니다.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {BEFORE_AFTER_ITEMS.map((item, i) => (
          <FadeIn key={item.before} delay={0.08 * i}>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-theme p-5 md:flex-row md:items-stretch md:gap-4 md:p-6">
              <div className="flex-1 rounded-xl border border-theme bg-[color-mix(in_srgb,var(--theme-fg)_4%,transparent)] px-4 py-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-theme-faint">
                  Before
                </p>
                <p className="text-sm leading-relaxed text-theme-subtle md:text-base">
                  {item.before}
                </p>
              </div>

              <div className="flex items-center justify-center md:flex-col">
                <ArrowRight className="h-4 w-4 rotate-90 text-theme-faint md:rotate-0" />
              </div>

              <div className="flex-1 rounded-xl border border-[#5ee496]/25 bg-[#5ee496]/[0.08] px-4 py-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[#5ee496]/80">
                  After
                </p>
                <p className="text-sm font-medium leading-relaxed text-theme md:text-base">
                  {item.after}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
