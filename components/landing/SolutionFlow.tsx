"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { motion } from "framer-motion";
import { ArrowRight, Link2, RefreshCcw, Wand2 } from "lucide-react";

const STEPS = [
  {
    icon: Link2,
    step: "01",
    title: "연결",
    body: "Notion, Confluence, 로컬 폴더, 사내 문서, 프롬프트 라이브러리를 연결합니다.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "변환",
    body: "팀 지식을 요약하고 구조화해 Markdown, CLAUDE.md, Cursor Rules 형태로 변환합니다.",
  },
  {
    icon: RefreshCcw,
    step: "03",
    title: "동기화",
    body: "에이전트 작업 폴더에 자동 적용하고, 문서가 바뀌면 최신 상태로 업데이트합니다.",
  },
];

export function SolutionFlow() {
  return (
    <SectionShell id="how-it-works" className="border-t border-white/[0.04]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.75rem]">
          Birzont는 AI 에이전트를 위한
          <br />
          <span className="bg-gradient-to-r from-sage-400 to-sage-500 bg-clip-text text-transparent">
            지식 동기화 레이어
          </span>
          입니다.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
          흩어진 팀 지식을 정리하고, 요약하고, 에이전트가 바로 읽을 수 있는 형태로
          자동 변환합니다.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              <GlassCard className="relative h-full p-6">
                <span className="text-xs font-medium tracking-widest text-sage-400/80">
                  {step.step}
                </span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sage-500/15 to-sage-700/10 ring-1 ring-white/10">
                  <step.icon className="h-5 w-5 text-sage-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{step.body}</p>
              </GlassCard>

              {i < STEPS.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                  <ArrowRight className="h-4 w-4 text-white/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
