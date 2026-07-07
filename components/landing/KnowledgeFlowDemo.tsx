"use client";

import { BirzontLogo } from "@/components/ui/BirzontLogo";
import { cn } from "@/lib/utils";
import {
  AGENT_OUTPUT_FORMATS,
  KNOWLEDGE_SOURCES,
  PROCESS_STATUSES,
} from "@/lib/landing-data";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const cardClass =
  "flex items-center gap-2.5 rounded-3xl border border-white/10 bg-white/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md";

function FlowParticle({ delay, path }: { delay: number; path: "in" | "out" }) {
  return (
    <motion.div
      className={cn(
        "absolute h-1.5 w-1.5 rounded-full",
        path === "in" ? "bg-[#5ee496]/80" : "bg-[#3899f7]/80",
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
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-[#5ee496]/10 via-transparent to-[#3899f7]/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
        <div className="pointer-events-none absolute inset-0">
          {[0, 0.8, 1.6].map((d) => (
            <FlowParticle key={`in-${d}`} delay={d} path="in" />
          ))}
          {[0.4, 1.2, 2].map((d) => (
            <FlowParticle key={`out-${d}`} delay={d} path="out" />
          ))}
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-5">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/40">
              지식 출처
            </p>
            <div className="space-y-2.5">
              {KNOWLEDGE_SOURCES.map((src, i) => (
                <motion.div
                  key={src.label}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className={cardClass}
                >
                  <src.icon className="h-4 w-4 shrink-0 text-[#5ee496]" />
                  <span className="text-sm font-medium text-white/85">{src.label}</span>
                  <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-[#5ee496]/70" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-2 lg:py-0">
            <div className="relative flex h-48 w-48 items-center justify-center md:h-56 md:w-56">
              <motion.div
                className="absolute inset-0 rounded-[45%_55%_52%_48%] bg-gradient-to-br from-[#5ee496]/30 via-[#3899f7]/20 to-black/40 blur-sm"
                animate={{ rotate: [0, 3, -2, 0], scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-2 rounded-[48%_52%_50%_50%] border border-white/10 bg-white/10 shadow-[0_8px_32px_rgba(94,228,150,0.15)] backdrop-blur-md" />
              <motion.div
                className="relative z-10 flex flex-col items-center gap-2"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <BirzontLogo size={56} />
                <span className="text-xs font-semibold text-white/90">Birzont Core</span>
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={statusIndex}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.85, y: -4 }}
                className="mt-5 w-full max-w-[240px] rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5ee496] opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5ee496]" />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {PROCESS_STATUSES[statusIndex]}
                  </span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={statusIndex}
                    className="h-full rounded-full bg-gradient-to-r from-[#5ee496] to-[#3899f7]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/40">
              변환 · 동기화
            </p>
            <div className="space-y-2.5">
              {AGENT_OUTPUT_FORMATS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  className={cn(
                    cardClass,
                    item.active && "border-[#3899f7]/25 bg-[#3899f7]/10",
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      item.active ? "text-[#3899f7]" : "text-white/40",
                    )}
                  />
                  <span className="text-sm font-medium text-white/90">{item.label}</span>
                  {item.active && (
                    <span className="ml-auto rounded-full bg-[#5ee496]/15 px-2 py-0.5 text-[10px] font-semibold text-[#5ee496]">
                      sync
                    </span>
                  )}
                </motion.div>
              ))}

              <div className="mt-3 flex items-center gap-2 rounded-3xl border border-[#5ee496]/20 bg-[#5ee496]/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5ee496]" />
                <span className="text-xs font-medium text-[#5ee496]">
                  에이전트가 최신 상태입니다
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
