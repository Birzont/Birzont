"use client";

import { GlowButton } from "@/components/ui/GlowButton";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative px-4 py-28 md:py-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sage-600/[0.04] via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          매번 설명하지 마세요.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/50 md:text-lg">
          팀 지식은 한 번 연결하고, 모든 에이전트는 계속 최신 상태로 유지하세요.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <GlowButton href="https://birzont.ai">먼저 시작하기</GlowButton>
          <GlowButton href="mailto:contact@birzont.com" variant="secondary">
            도입 문의하기
          </GlowButton>
        </div>
      </motion.div>
    </section>
  );
}
