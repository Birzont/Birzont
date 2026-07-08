"use client";

import { FadeIn, HookQuote } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { HOOKING_QUOTES, METRICS } from "@/lib/landing-data";

export function MetricsSection() {
  return (
    <SectionShell id="metrics" className="section-dark relative overflow-hidden">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            에이전트 설정은 짧게,
            <br />
            <span className="gradient-text">답변 품질은 높게.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {METRICS.map((metric, i) => (
          <FadeIn key={metric.label} delay={0.1 * i}>
            <div className="glass-card flex h-full flex-col items-center p-8 text-center transition-all hover:[border-color:var(--theme-card-hover-border)]">
              <span className="inline-flex min-h-12 items-center justify-center text-5xl font-bold tracking-tight text-birzont-green md:min-h-[3.75rem] md:text-6xl">
                {metric.value}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-theme-subtle">{metric.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-8 text-center text-xs text-theme-faint">
          초기 워크플로우 기준 추정치입니다.
        </p>
      </FadeIn>

      <HookQuote quote={HOOKING_QUOTES[2]} />
    </SectionShell>
  );
}
