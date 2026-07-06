"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { motion } from "framer-motion";

const METRICS = [
  { value: "80%", label: "에이전트 설정 시간 감소" },
  { value: "20%+", label: "반복 질문으로 낭비되는 토큰 절약" },
  { value: "더 정확한 답변", label: "팀 맥락이 반영된 에이전트 응답", large: true },
];

export function MetricsSection() {
  return (
    <SectionShell id="pricing" className="border-t border-white/[0.04]">
      <div className="grid gap-5 md:grid-cols-3">
        {METRICS.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
          >
            <GlassCard className="relative overflow-hidden p-8 text-center">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-blue-500/[0.04]" />
              <p
                className={
                  metric.large
                    ? "text-2xl font-semibold tracking-tight md:text-3xl"
                    : "bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl"
                }
              >
                {metric.value}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-white/50">
                {metric.label}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-white/30">
        초기 워크플로우 기준 추정치입니다.
      </p>
    </SectionShell>
  );
}
