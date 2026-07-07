"use client";

import { BlobBackground } from "@/components/ui/BlobBackground";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/GlowButton";
import { KnowledgeFlowDemo } from "@/components/landing/KnowledgeFlowDemo";

export function HeroSection() {
  return (
    <section
      id="product"
      className="relative min-h-screen overflow-hidden bg-[#050607] pt-28 pb-16 text-white md:pt-36 md:pb-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050607] via-[#0a0b0f] to-[#050607]" />
      <BlobBackground variant="dark" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 lg:gap-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/70 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5ee496]" />
              팀 지식을 모든 AI 에이전트 안으로
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
              AI에게 매번 설명하는
              <br />
              <span className="gradient-text">시대는 끝났습니다.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/60 md:text-lg">
              Birzont는 흩어진 팀 지식을 정리하고, 에이전트가 바로 읽을 수 있는 형태로
              변환해 Cursor, Claude, AI 작업공간에 자동으로 동기화합니다.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <GlowButton href="https://birzont.ai">팀 지식 연결하기</GlowButton>
              <GlowButton href="#how-it-works" variant="secondary">
                30초 데모 보기
              </GlowButton>
            </div>
          </FadeIn>
        </div>

        <KnowledgeFlowDemo />
      </div>
    </section>
  );
}
