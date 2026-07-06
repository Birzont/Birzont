"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  CheckCircle2,
  FileCode2,
  FileText,
  FolderOpen,
  Layers,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const SOURCES = [
  { label: "Notion", icon: Layers, color: "text-white" },
  { label: "Confluence", icon: BookOpen, color: "text-blue-400" },
  { label: "로컬 폴더", icon: FolderOpen, color: "text-amber-400" },
  { label: "사내 문서", icon: FileText, color: "text-emerald-400" },
  { label: "프롬프트 라이브러리", icon: Sparkles, color: "text-violet-400" },
];

const STEPS = [
  "문서 읽는 중",
  "핵심 지식 요약 중",
  "에이전트용 문맥 정리 중",
  "Markdown 변환 중",
  "CLAUDE.md 생성 중",
  "Cursor Rules 업데이트 중",
];

const OUTPUTS = [
  { label: "Markdown", icon: FileText, active: true },
  { label: "CLAUDE.md", icon: FileCode2, active: false },
  { label: "Cursor Rules", icon: FileCode2, active: false },
  { label: "에이전트 작업공간", icon: Bot, active: false },
];

function FlowDot({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
      initial={{ left: "8%", opacity: 0 }}
      animate={{
        left: ["8%", "50%", "92%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{ top: "50%" }}
    />
  );
}

export function AgentDemo() {
  const [stepIndex, setStepIndex] = useState(0);
  const [outputIndex, setOutputIndex] = useState(0);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStepIndex((i) => (i + 1) % STEPS.length);
    }, 2200);
    const outTimer = setInterval(() => {
      setOutputIndex((i) => (i + 1) % OUTPUTS.length);
    }, 2200);
    return () => {
      clearInterval(stepTimer);
      clearInterval(outTimer);
    };
  }, []);

  return (
    <motion.div
      className="relative mx-auto mt-16 w-full max-w-5xl"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-blue-500/5 to-emerald-500/10 blur-2xl" />

      <GlassCard className="relative overflow-hidden p-4 md:p-6">
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* flow lines */}
        <div className="relative hidden md:block">
          <div className="absolute left-[22%] right-[22%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
          <FlowDot delay={0} />
          <FlowDot delay={1.1} />
          <FlowDot delay={2.2} />
        </div>

        <div className="relative grid gap-4 md:grid-cols-[1fr_1.1fr_1fr] md:gap-3">
          {/* Sources */}
          <div className="space-y-2">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-white/40">
              지식 출처
            </p>
            {SOURCES.map((src, i) => (
              <motion.div
                key={src.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-black/40 px-3 py-2.5"
              >
                <src.icon className={cn("h-4 w-4 shrink-0", src.color)} />
                <span className="text-sm text-white/80">{src.label}</span>
                <motion.span
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Birzont panel */}
          <div className="flex flex-col">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-white/40">
              Birzont
            </p>
            <div className="glow-green flex flex-1 flex-col rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.08] to-blue-500/[0.04] p-4">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold">지식 처리 패널</span>
              </div>

              <div className="flex-1 space-y-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stepIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-lg border border-white/[0.08] bg-black/50 px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="h-2 w-2 rounded-full bg-emerald-400"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-sm text-white/90">{STEPS[stepIndex]}</span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-400"
                        animate={{ width: ["20%", "85%", "100%"] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="space-y-1.5 pt-1">
                  {STEPS.slice(0, 3).map((step, i) => (
                    <div
                      key={step}
                      className={cn(
                        "flex items-center gap-2 text-xs",
                        i <= stepIndex % STEPS.length ? "text-white/50" : "text-white/20",
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "h-3 w-3",
                          i < stepIndex % STEPS.length ? "text-emerald-400" : "text-white/20",
                        )}
                      />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Outputs */}
          <div className="space-y-2">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-white/40">
              에이전트 출력
            </p>
            {OUTPUTS.map((out, i) => (
              <motion.div
                key={out.label}
                animate={{
                  borderColor:
                    i === outputIndex ? "rgba(34,197,94,0.35)" : "rgba(255,255,255,0.06)",
                  backgroundColor:
                    i === outputIndex ? "rgba(34,197,94,0.06)" : "rgba(0,0,0,0.4)",
                }}
                className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5"
              >
                <out.icon
                  className={cn(
                    "h-4 w-4 shrink-0",
                    i === outputIndex ? "text-emerald-400" : "text-white/40",
                  )}
                />
                <span
                  className={cn(
                    "text-sm",
                    i === outputIndex ? "text-white" : "text-white/60",
                  )}
                >
                  {out.label}
                </span>
                {i === outputIndex && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-400"
                  >
                    sync
                  </motion.span>
                )}
              </motion.div>
            ))}

            <motion.div
              className="mt-3 flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-300">
                에이전트가 최신 상태입니다
              </span>
            </motion.div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
