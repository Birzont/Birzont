"use client";

import { AgentDemo } from "@/components/landing/AgentDemo";
import { GlowButton } from "@/components/ui/GlowButton";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden pt-32 pb-8 md:pt-40 md:pb-12">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sage-500/[0.08] via-sage-600/[0.03] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
            AI 에이전트를 위한 팀 지식 동기화 레이어
          </motion.div>

          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl lg:text-[4.25rem]">
            팀의 지식을,{" "}
            <span className="bg-gradient-to-r from-white via-sage-400 to-sage-300 bg-clip-text text-transparent">
              모든 AI 에이전트 안으로.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/55 md:text-lg">
            Birzont는 Notion, 사내 문서, 로컬 폴더의 지식을 에이전트가 읽기 좋은 형태로
            정리하고, Cursor·Claude·각종 AI 작업환경에 자동으로 동기화합니다.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <GlowButton href="https://birzont.ai">지금 연결하기</GlowButton>
            <GlowButton href="#how-it-works" variant="secondary">
              데모 보기
            </GlowButton>
          </div>
        </motion.div>

        <AgentDemo />
      </div>
    </section>
  );
}
