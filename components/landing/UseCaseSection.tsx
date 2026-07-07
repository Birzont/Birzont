"use client";

import { FadeIn, HookQuoteLight } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { HOOKING_QUOTES, USE_CASES } from "@/lib/landing-data";

export function UseCaseSection() {
  return (
    <SectionShell id="use-cases" className="bg-gradient-to-b from-birzont-mint/40 to-white">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-birzont-black md:text-4xl lg:text-5xl">
            이런 팀에게 필요합니다.
          </h2>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 sm:grid-cols-2">
        {USE_CASES.map((item, i) => (
          <FadeIn key={item.title} delay={0.08 * i}>
            <div className="glass-card-light h-full p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-3 inline-flex rounded-full bg-birzont-blue/10 px-3 py-1 text-xs font-semibold text-birzont-blue">
                Use Case
              </div>
              <h3 className="text-xl font-bold text-birzont-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-birzont-black/55">{item.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <HookQuoteLight quote={HOOKING_QUOTES[6]} />
    </SectionShell>
  );
}
