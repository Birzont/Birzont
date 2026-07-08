"use client";

import { FadeIn, HookQuoteLight } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { HOOKING_QUOTES, USE_CASES } from "@/lib/landing-data";

export function UseCaseSection() {
  return (
    <SectionShell id="use-cases" className="section-light">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            AI를 팀 단위로 쓰기 시작했다면
            <br />
            <span className="text-birzont-blue">필요합니다.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {USE_CASES.map((item, i) => (
          <FadeIn key={item.title} delay={0.08 * i}>
            <div className="glass-card-light h-full p-7 transition-all hover:-translate-y-1">
              <div className="mb-3 inline-flex rounded-full bg-birzont-blue/10 px-3 py-1 text-xs font-semibold text-birzont-blue">
                Use Case
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-light-muted">{item.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <HookQuoteLight quote={HOOKING_QUOTES[6]} />
    </SectionShell>
  );
}
