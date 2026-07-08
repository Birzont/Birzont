"use client";

import { FadeIn, HookQuoteLight } from "@/components/ui/FadeIn";
import { KeepTogetherText } from "@/components/ui/KeepTogetherText";
import { SectionShell } from "@/components/ui/SectionShell";
import { HOOKING_QUOTES, HOW_IT_WORKS } from "@/lib/landing-data";
import { ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <SectionShell id="how-it-works" className="section-light">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            30초면 팀 지식이
            <br />
            <span className="text-birzont-blue">에이전트 안으로</span> 들어갑니다.
          </h2>
        </div>
      </FadeIn>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-birzont-green/20 to-transparent md:block" />

        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <FadeIn key={step.title} delay={0.12 * i} className="relative">
              <div className="glass-card-light h-full p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
                <span className="text-xs font-bold tracking-widest text-birzont-green-dark">
                  {step.step}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-light-muted">
                  <KeepTogetherText parts={step.bodyParts} />
                </p>
              </div>

              {i < HOW_IT_WORKS.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="h-4 w-4 text-birzont-black/15" />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>

      <HookQuoteLight quote={HOOKING_QUOTES[4]} />
    </SectionShell>
  );
}
