"use client";

import { BirzontLogo } from "@/components/ui/BirzontLogo";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";
import {
  AGENT_TARGETS,
  KNOWLEDGE_SOURCES,
  PROCESS_STATUSES,
} from "@/lib/landing-data";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

function FlowParticle({ delay, path }: { delay: number; path: "in" | "out" }) {
  return (
    <motion.div
      className={cn(
        "absolute h-1.5 w-1.5 rounded-full",
        path === "in" ? "bg-birzont-green/80" : "bg-birzont-blue/80",
      )}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
        left: path === "in" ? ["8%", "50%"] : ["50%", "92%"],
        top: ["45%", "48%", "52%", "45%"],
      }}
      transition={{
        duration: 2.8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function KnowledgeFlowDemo() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((i) => (i + 1) % PROCESS_STATUSES.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-birzont-green/10 via-transparent to-birzont-blue/10 blur-2xl" />

      <GlassCard className="relative overflow-hidden p-5 md:p-8">
        <div className="pointer-events-none absolute inset-0">
          {[0, 0.8, 1.6].map((d) => (
            <FlowParticle key={`in-${d}`} delay={d} path="in" />
          ))}
          {[0.4, 1.2, 2].map((d) => (
            <FlowParticle key={`out-${d}`} delay={d} path="out" />
          ))}
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-4">
          {/* Sources */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/35">
              지식 출처
            </p>
            <div className="space-y-2">
              {KNOWLEDGE_SOURCES.map((src, i) => (
                <motion.div
                  key={src.label}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className="flex items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-black/30 px-3.5 py-2.5"
                >
                  <src.icon className="h-4 w-4 shrink-0 text-birzont-green/80" />
                  <span className="text-sm text-white/75">{src.label}</span>
                  <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-birzont-green/60" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Birzont Core */}
          <div className="flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="relative flex h-48 w-48 items-center justify-center md:h-56 md:w-56">
              <motion.div
                className="absolute inset-0 rounded-[45%_55%_52%_48%] bg-gradient-to-br from-birzont-green/30 via-birzont-blue/20 to-birzont-black/40 blur-sm"
                animate={{ rotate: [0, 3, -2, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-2 rounded-[48%_52%_50%_50%] border border-birzont-green/25 bg-gradient-to-b from-birzont-green/15 to-birzont-blue/10 shadow-glow"
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="relative z-10 flex flex-col items-center gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <BirzontLogo size={56} />
                <span className="text-xs font-semibold text-white/80">Birzont Core</span>
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={statusIndex}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.85, y: -4 }}
                className="mt-4 w-full max-w-[220px] rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-center"
              >
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-birzont-green opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-birzont-green" />
                  </span>
                  <span className="text-sm text-white/90">{PROCESS_STATUSES[statusIndex]}</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={statusIndex}
                    className="h-full rounded-full bg-gradient-to-r from-birzont-green to-birzont-blue"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Agent targets */}
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/35">
              AI 에이전트 작업공간
            </p>
            <div className="space-y-2">
              {AGENT_TARGETS.map((agent, i) => (
                <motion.div
                  key={agent.label}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className={cn(
                    "flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5",
                    agent.active
                      ? "border-birzont-blue/25 bg-birzont-blue/[0.08]"
                      : "border-white/[0.06] bg-black/20 opacity-60",
                  )}
                >
                  <agent.icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      agent.active ? "text-birzont-blue" : "text-white/30",
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm",
                      agent.active ? "text-white/90" : "text-white/50",
                    )}
                  >
                    {agent.label}
                  </span>
                  {agent.active && (
                    <span className="ml-auto rounded-full bg-birzont-green/15 px-2 py-0.5 text-[10px] font-medium text-birzont-green">
                      sync
                    </span>
                  )}
                </motion.div>
              ))}

              <div className="mt-3 flex items-center gap-2 rounded-2xl border border-birzont-green/20 bg-birzont-green/[0.06] px-3.5 py-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-birzont-green" />
                <span className="text-xs font-medium text-birzont-green/90">
                  에이전트가 최신 상태입니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
