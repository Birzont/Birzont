"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { PROBLEMS } from "@/lib/landing-data";

export function ProblemSection() {
  return (
    <SectionShell id="problem" className="bg-birzont-cream text-birzont-black">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            AI 에이전트는 강력합니다.
            <br />
            <span className="text-birzont-black/45">하지만 우리 팀을 모릅니다.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-birzont-black/55 md:text-lg">
            문제는 AI의 성능이 아니라, AI가 참고할 팀 맥락이 없다는 것입니다.
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((problem, i) => (
          <FadeIn key={problem.title} delay={0.1 * i}>
            <div className="glass-card-light group h-full p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-birzont-mint ring-1 ring-birzont-green/20 transition-colors group-hover:bg-birzont-green/15">
                <problem.icon className="h-5 w-5 text-birzont-green-dark" />
              </div>
              <h3 className="text-xl font-bold">{problem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-birzont-black/55">
                {problem.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
