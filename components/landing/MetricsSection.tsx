"use client";

import { FadeIn, HookQuote } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { HOOKING_QUOTES, METRICS } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

export function MetricsSection() {
  return (
    <SectionShell id="metrics" className="relative overflow-hidden bg-birzont-black">
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
            <div className="glass-card flex h-full flex-col items-center p-8 text-center transition-all hover:border-birzont-blue/20">
              <span
                className={cn(
                  "font-bold tracking-tight text-birzont-green",
                  metric.isText ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl",
                )}
              >
                {metric.value}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-white/50">{metric.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-8 text-center text-xs text-white/30">
          초기 워크플로우 기준 추정치입니다.
        </p>
      </FadeIn>

      <HookQuote quote={HOOKING_QUOTES[2]} />
    </SectionShell>
  );
}
