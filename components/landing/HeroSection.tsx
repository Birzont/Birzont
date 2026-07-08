"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/GlowButton";
import { CTA_LINKS } from "@/lib/landing-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-theme pt-[72px] pb-10 text-theme sm:pt-20 md:pt-36 md:pb-24">
      <div className="relative mx-auto flex max-w-6xl flex-col px-4 lg:px-8">
        <div className="mx-auto w-full max-w-3xl text-center md:max-w-3xl">
          <FadeIn>
            <h1 className="w-full max-w-full text-[clamp(2.125rem,8.5vw,2.625rem)] font-bold leading-[1.12] tracking-tight text-theme md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
              AI에게 매번 설명하는
              <br />
              <span className="gradient-text">시대는 끝났습니다.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-theme-muted md:mt-6 md:text-lg">
              <span className="hidden md:inline">
                AI를 팀 단위로 쓰기 시작한 스타트업과 제품팀을 위해, Birzont는 흩어진 팀
                지식을 Cursor, Claude, AI 에이전트가 바로 참고하는 공통 맥락으로
                동기화합니다.
              </span>
              <span className="md:hidden">
                팀의 Notion, 회의록, 문서, 프롬프트를 AI 에이전트가 바로 참고하는 공통
                맥락으로 바꿉니다.
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
              <GlowButton href={CTA_LINKS.primary.href}>{CTA_LINKS.primary.label}</GlowButton>
              <GlowButton href={CTA_LINKS.secondary.href} variant="secondary">
                {CTA_LINKS.secondary.label}
              </GlowButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
