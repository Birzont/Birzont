"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/GlowButton";

export function CTASection() {
  return (
    <section className="section-dark relative overflow-hidden px-4 py-28 md:py-36 lg:px-8">
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem]">
            팀 지식을 연결하세요.
            <br />
            <span className="gradient-text">AI가 달라집니다.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-theme-muted md:text-lg">
            Birzont로 모든 에이전트를 최신 팀 맥락에 연결하세요.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlowButton href="https://birzont.ai">먼저 시작하기</GlowButton>
            <GlowButton href="mailto:contact@birzont.com" variant="secondary">
              도입 문의하기
            </GlowButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
