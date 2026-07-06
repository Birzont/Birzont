"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { motion } from "framer-motion";
import { Copy, RefreshCw, Users } from "lucide-react";

const PROBLEMS = [
  {
    icon: Copy,
    title: "팀 지식은 에이전트 밖에 있습니다",
    body: "문서, 회의록, 업무 규칙은 여러 도구에 흩어져 있지만 에이전트는 그 맥락을 알지 못합니다.",
  },
  {
    icon: RefreshCw,
    title: "문서가 바뀌어도 에이전트는 모릅니다",
    body: "새로운 정보가 생길 때마다 누군가 직접 복사하고, 정리하고, 붙여넣어야 합니다. 결국 최신 상태는 유지되지 않습니다.",
  },
  {
    icon: Users,
    title: "팀원마다 다른 AI 환경을 씁니다",
    body: "각자 다른 에이전트, 다른 프롬프트, 다른 맥락으로 일합니다. 같은 팀이어도 답변의 기준이 달라집니다.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function ProblemSection() {
  return (
    <SectionShell id="use-cases" className="border-t border-white/[0.04]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          AI 에이전트는 강력합니다.
          <br />
          <span className="text-white/50">하지만 우리 팀을 모릅니다.</span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 grid gap-5 md:grid-cols-3"
      >
        {PROBLEMS.map((problem) => (
          <motion.div key={problem.title} variants={item}>
            <GlassCard className="group h-full p-6 transition-colors hover:border-white/[0.12] hover:bg-white/[0.06]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] ring-1 ring-white/10 transition-colors group-hover:bg-emerald-500/10 group-hover:ring-emerald-500/20">
                <problem.icon className="h-5 w-5 text-white/70 group-hover:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold leading-snug">{problem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{problem.body}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
