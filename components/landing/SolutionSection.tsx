"use client";

import { BlobBackground } from "@/components/ui/BlobBackground";
import { FadeIn, HookQuote } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { HOOKING_QUOTES, SOLUTIONS } from "@/lib/landing-data";

export function SolutionSection() {
  return (
    <SectionShell id="solution" className="relative overflow-hidden bg-birzont-black">
      <BlobBackground variant="dark" />

      <FadeIn>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Birzont는 AI 에이전트를 위한
            <br />
            <span className="gradient-text">지식 동기화 레이어</span>
            입니다.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
            팀 지식을 한 번 연결하면, 모든 에이전트가 같은 맥락으로 일합니다.
          </p>
        </div>
      </FadeIn>

      <div className="relative mt-16 grid gap-5 sm:grid-cols-2">
        {SOLUTIONS.map((item, i) => (
          <FadeIn key={item.title} delay={0.08 * i}>
            <div className="glass-card group h-full p-7 transition-all hover:border-birzont-green/20 hover:bg-white/[0.08]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-birzont-green/15 to-birzont-blue/10 ring-1 ring-white/10">
                <item.icon className="h-5 w-5 text-birzont-green" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{item.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <HookQuote quote={HOOKING_QUOTES[1]} />
    </SectionShell>
  );
}
