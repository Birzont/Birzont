"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
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
  { label: "Notion", icon: Layers, color: "text-white", connected: true },
  { label: "Confluence", icon: BookOpen, color: "text-sage-300", connected: true },
  { label: "로컬 폴더", icon: FolderOpen, color: "text-amber-400", connected: true },
  { label: "사내 문서", icon: FileText, color: "text-sage-400", connected: true },
  { label: "프롬프트 라이브러리", icon: Sparkles, color: "text-violet-400", connected: false },
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
  { label: "Markdown", icon: FileText },
  { label: "CLAUDE.md", icon: FileCode2 },
  { label: "Cursor Rules", icon: FileCode2 },
  { label: "에이전트 작업공간", icon: Bot },
];

const PIPELINE = [
  { label: "연결", desc: "5개 소스" },
  { label: "변환", desc: "처리 중" },
  { label: "동기화", desc: "4개 출력" },
];

function ColumnConnector() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <div className="flex flex-col items-center gap-1">
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <ArrowRight className="h-3.5 w-3.5 text-sage-400/50" strokeWidth={2} />
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      </div>
    </div>
  );
}

function ColumnHeader({
  label,
  badge,
  active,
}: {
  label: string;
  badge: string;
  active?: boolean;
}) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <p className="text-[11px] font-medium uppercase tracking-widest text-white/40">
        {label}
      </p>
      <span
        className={cn(
          "rounded-full px-2 py-0.5 text-[10px] font-medium",
          active
            ? "bg-sage-500/15 text-sage-400 ring-1 ring-sage-500/25"
            : "bg-white/[0.04] text-white/35 ring-1 ring-white/[0.06]",
        )}
      >
        {badge}
      </span>
    </div>
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

  const connectedCount = SOURCES.filter((s) => s.connected).length;

  return (
    <motion.div
      className="relative mx-auto mt-16 w-full max-w-5xl"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sage-500/12 via-sage-600/6 to-sage-500/12 blur-2xl" />

      <GlassCard className="relative overflow-hidden p-4 md:p-6">
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Pipeline stepper — replaces floating dots/lines */}
        <div className="relative mb-6 rounded-xl border border-white/[0.06] bg-black/30 px-4 py-3">
          <div className="flex items-center justify-between gap-2">
            {PIPELINE.map((stage, i) => (
              <div key={stage.label} className="flex flex-1 items-center gap-2">
                <div className="flex flex-col items-center gap-0.5 min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
                        i === 1
                          ? "bg-sage-500/20 text-sage-400 ring-1 ring-sage-500/30"
                          : "bg-white/[0.06] text-white/50 ring-1 ring-white/10",
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        "text-xs font-medium",
                        i === 1 ? "text-white" : "text-white/50",
                      )}
                    >
                      {stage.label}
                    </span>
                  </div>
                  <span className="text-[10px] text-white/30">{stage.desc}</span>
                </div>
                {i < PIPELINE.length - 1 && (
                  <div className="hidden h-px flex-1 max-w-[40px] bg-gradient-to-r from-white/10 to-white/5 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative grid gap-4 md:grid-cols-[1fr_24px_1.1fr_24px_1fr] md:gap-2 md:items-start">
          {/* Sources */}
          <div>
            <ColumnHeader
              label="지식 출처"
              badge={`${connectedCount}개 연결`}
            />
            <div className="space-y-2">
              {SOURCES.map((src, i) => (
                <motion.div
                  key={src.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl border px-3 py-2.5",
                    src.connected
                      ? "border-white/[0.08] bg-black/40"
                      : "border-white/[0.04] bg-black/20 opacity-60",
                  )}
                >
                  <src.icon className={cn("h-4 w-4 shrink-0", src.color)} />
                  <span className="text-sm text-white/80">{src.label}</span>
                  {src.connected ? (
                    <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-sage-400/70" />
                  ) : (
                    <span className="ml-auto text-[10px] text-white/25">대기</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <ColumnConnector />

          {/* Birzont panel */}
          <div className="flex flex-col">
            <ColumnHeader label="Birzont" badge="처리 중" active />
            <div className="glow-green flex flex-1 flex-col rounded-2xl border border-sage-500/30 bg-gradient-to-b from-sage-600/[0.12] to-sage-700/[0.05] p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sage-500/20">
                  <Sparkles className="h-3.5 w-3.5 text-sage-400" />
                </div>
                <span className="text-sm font-semibold">지식 처리 패널</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg border border-white/[0.08] bg-black/50 px-3 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-400" />
                    </span>
                    <span className="text-sm text-white/90">{STEPS[stepIndex]}</span>
                  </div>
                  <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-sage-500 to-sage-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                      key={stepIndex}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-3 space-y-1.5">
                {STEPS.map((step, i) => {
                  const done = i < stepIndex;
                  const current = i === stepIndex;
                  return (
                    <div
                      key={step}
                      className={cn(
                        "flex items-center gap-2 text-xs transition-colors",
                        done && "text-white/40 line-through decoration-white/20",
                        current && "font-medium text-sage-300/90",
                        !done && !current && "text-white/20",
                      )}
                    >
                      <CheckCircle2
                        className={cn(
                          "h-3 w-3 shrink-0",
                          done && "text-sage-400/60",
                          current && "text-sage-400",
                          !done && !current && "text-white/15",
                        )}
                      />
                      {step}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <ColumnConnector />

          {/* Outputs */}
          <div>
            <ColumnHeader label="에이전트 출력" badge="실시간 동기화" active />
            <div className="space-y-2">
              {OUTPUTS.map((out, i) => (
                <motion.div
                  key={out.label}
                  animate={{
                    borderColor:
                      i === outputIndex ? "rgba(76,184,94,0.38)" : "rgba(255,255,255,0.06)",
                  backgroundColor:
                      i === outputIndex ? "rgba(76,184,94,0.1)" : "rgba(0,0,0,0.4)",
                  }}
                  className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5"
                >
                  <out.icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      i === outputIndex ? "text-sage-400" : "text-white/40",
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
                  {i === outputIndex ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="ml-auto rounded-full bg-sage-500/20 px-2 py-0.5 text-[10px] text-sage-400"
                    >
                      sync
                    </motion.span>
                  ) : (
                    <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-white/15" />
                  )}
                </motion.div>
              ))}

              <div className="mt-3 flex items-center gap-2 rounded-xl border border-sage-500/20 bg-sage-500/[0.06] px-3 py-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sage-400" />
                <span className="text-xs font-medium text-sage-300/90">
                  에이전트가 최신 상태입니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
