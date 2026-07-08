"use client";

import { BirzontLogo } from "@/components/ui/BirzontLogo";
import { cn } from "@/lib/utils";
import { AGENT_OUTPUT_FORMATS, KNOWLEDGE_SOURCES } from "@/lib/landing-data";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const scrollViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -120px 0px",
} as const;

const PIPELINE_STEPS = [
  { num: "01", title: "지식 연결" },
  { num: "02", title: "Birzont 변환" },
  { num: "03", title: "에이전트 동기화" },
] as const;

const ENGINE_STEPS = [
  "문서 읽는 중",
  "핵심 맥락 추출",
  "에이전트용 구조화",
  "Markdown / CLAUDE.md / Cursor Rules 생성",
  "작업공간 반영",
] as const;

const INFLOW_PATHS = [
  "M 26 9 C 34 9, 38 42, 50 42",
  "M 26 17 C 34 17, 38 42, 50 42",
  "M 26 25 C 34 25, 38 42, 50 42",
  "M 26 33 C 34 33, 38 42, 50 42",
  "M 26 41 C 34 41, 38 42, 50 42",
  "M 26 49 C 34 49, 38 42, 50 42",
];

const OUTFLOW_PATHS = [
  "M 50 42 C 62 42, 66 12, 74 12",
  "M 50 42 C 62 42, 66 28, 74 28",
  "M 50 42 C 62 42, 66 44, 74 44",
  "M 50 42 C 62 42, 66 60, 74 60",
];

function PipelineStepper({ activeStep }: { activeStep: number }) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-2 md:mb-12">
      {PIPELINE_STEPS.map((step, i) => {
        const isComplete = i < activeStep;
        const isActive = i === activeStep;

        return (
          <div key={step.num} className="flex items-center gap-2 sm:gap-3">
            <div
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-[border-color,background-color,box-shadow] duration-500 ease-out",
                isActive &&
                  "border-[#5ee496]/30 bg-[#5ee496]/[0.08] shadow-[0_0_24px_rgba(94,228,150,0.12)]",
                isComplete && "border-[#5ee496]/20 bg-[#5ee496]/[0.05]",
                !isActive && !isComplete && "border-white/[0.06] bg-white/[0.02]",
              )}
            >
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-colors duration-500 ease-out",
                  isActive && "bg-[#5ee496] text-[#050607]",
                  isComplete && "bg-[#5ee496]/20 text-[#5ee496]",
                  !isActive && !isComplete && "bg-white/[0.06] text-white/40",
                )}
              >
                {isComplete ? "✓" : step.num}
              </span>
              <span
                className={cn(
                  "text-sm font-semibold transition-colors duration-500 ease-out",
                  isActive && "text-white",
                  isComplete && "text-white/80",
                  !isActive && !isComplete && "text-white/45",
                )}
              >
                {step.title}
              </span>
            </div>
            {i < PIPELINE_STEPS.length - 1 && (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-white/20 sm:block" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ColumnHeader({
  title,
  description,
  accent,
}: {
  title: string;
  description: string;
  accent: "green" | "blue";
}) {
  return (
    <div className="mb-5">
      <p
        className={cn(
          "mb-1 text-[11px] font-semibold uppercase tracking-widest",
          accent === "green" ? "text-[#5ee496]/70" : "text-[#3899f7]/70",
        )}
      >
        {accent === "green" ? "입력" : "출력"}
      </p>
      <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-white/45">{description}</p>
    </div>
  );
}

function EngineSteps({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="space-y-1.5">
      {ENGINE_STEPS.map((step, i) => {
        const isActive = i === activeIndex;
        const isDone = i < activeIndex;

        return (
          <div
            key={step}
            className={cn(
              "flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-[opacity,border-color,background-color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isActive &&
                "translate-x-0.5 border-[#5ee496]/25 bg-[#5ee496]/[0.08] opacity-100",
              isDone && !isActive && "border-transparent opacity-55",
              !isActive && !isDone && "border-transparent opacity-35",
            )}
          >
            <span
              className={cn(
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-[background-color,color] duration-500 ease-out",
                isActive && "bg-[#5ee496] text-[#050607]",
                isDone && !isActive && "bg-[#5ee496]/20 text-[#5ee496]",
                !isActive && !isDone && "bg-white/[0.06] text-white/30",
              )}
            >
              {isDone && !isActive ? "✓" : i + 1}
            </span>
            <span
              className={cn(
                "text-xs leading-snug transition-[color,font-weight] duration-500 ease-out md:text-[13px]",
                isActive ? "font-medium text-white/90" : "font-normal text-white/50",
              )}
            >
              {step}
            </span>
            {isActive && (
              <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-[#5ee496]" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FlowConnectors({ visible }: { visible: boolean }) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 hidden transition-opacity duration-700 ease-out lg:block",
        visible ? "opacity-100" : "opacity-0",
      )}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <marker
          id="flow-arrow-green"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#5ee496" fillOpacity="0.5" />
        </marker>
        <marker
          id="flow-arrow-blue"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#3899f7" fillOpacity="0.5" />
        </marker>
      </defs>
      {INFLOW_PATHS.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="#5ee496"
          strokeOpacity={0.28}
          strokeWidth={0.22}
          vectorEffect="non-scaling-stroke"
          markerEnd="url(#flow-arrow-green)"
        />
      ))}
      {OUTFLOW_PATHS.map((d) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="#3899f7"
          strokeOpacity={0.28}
          strokeWidth={0.22}
          vectorEffect="non-scaling-stroke"
          markerEnd="url(#flow-arrow-blue)"
        />
      ))}
    </svg>
  );
}

export function KnowledgeFlowDemo({ className }: { className?: string }) {
  const [engineStepIndex, setEngineStepIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, scrollViewport);
  const prefersReducedMotion = useReducedMotion();
  const hasRevealed = prefersReducedMotion || isInView;

  const activePipelineStep =
    engineStepIndex >= 4 ? 2 : engineStepIndex >= 1 ? 1 : 0;

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setEngineStepIndex((i) => (i + 1) % ENGINE_STEPS.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isInView, prefersReducedMotion]);

  return (
    <div
      ref={sectionRef}
      className={cn("relative w-full scroll-mt-24 py-4 md:py-8", className)}
    >
      <div
        className={cn(
          "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          hasRevealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          prefersReducedMotion && "translate-y-0 opacity-100",
        )}
      >
        <PipelineStepper activeStep={activePipelineStep} />

        <div className="relative">
          <FlowConnectors visible={hasRevealed} />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-6 xl:gap-8">
            <div>
              <ColumnHeader
                title="팀 지식"
                description="흩어진 문서를 한곳에서 연결"
                accent="green"
              />
              <div className="space-y-2">
                {KNOWLEDGE_SOURCES.map((src) => (
                  <div
                    key={src.label}
                    className="flex items-center gap-2.5 rounded-xl border border-[#5ee496]/15 bg-[#5ee496]/[0.04] px-4 py-2.5 transition-[border-color,background-color] duration-300 hover:border-[#5ee496]/30 hover:bg-[#5ee496]/[0.08]"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#5ee496]/10">
                      <src.icon className="h-3.5 w-3.5 text-[#5ee496]" />
                    </div>
                    <span className="text-sm font-medium text-white/85">{src.label}</span>
                    <span className="ml-auto rounded-full bg-[#5ee496]/10 px-2 py-0.5 text-[10px] font-medium text-[#5ee496]/80">
                      source
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs italic text-white/30 lg:text-left">
                흩어진 팀 지식
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-5 w-full text-center lg:text-left">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                  처리
                </p>
                <h3 className="text-lg font-bold text-white md:text-xl">Birzont Engine</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/45">
                  읽고, 정리하고, 변환하고, 동기화합니다
                </p>
              </div>

              <div className="relative flex h-[248px] w-[248px] items-center justify-center md:h-[290px] md:w-[290px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5ee496]/20 via-[#3899f7]/10 to-transparent blur-xl" />
                <div className="absolute inset-3 rounded-full border border-white/10 bg-white/[0.03]" />
                <div className="relative z-10 flex flex-col items-center gap-2.5">
                  <BirzontLogo size={72} />
                  <span className="text-sm font-semibold text-white/90">Birzont Engine</span>
                </div>
              </div>

              <div className="mt-6 w-full max-w-[280px]">
                <EngineSteps activeIndex={engineStepIndex} />
              </div>
            </div>

            <div>
              <ColumnHeader
                title="에이전트 작업공간"
                description="AI가 바로 읽고 사용하는 형태로 반영"
                accent="blue"
              />
              <div className="space-y-2">
                {AGENT_OUTPUT_FORMATS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-[#3899f7]/25 bg-[#3899f7]/[0.08] px-4 py-2.5 shadow-[0_0_16px_rgba(56,153,247,0.08)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#3899f7]/40 hover:bg-[#3899f7]/[0.12]"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#3899f7]/15">
                      <item.icon className="h-3.5 w-3.5 text-[#3899f7]" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{item.label}</span>
                    <span className="ml-auto flex items-center gap-1 rounded-full bg-[#5ee496]/15 px-2 py-0.5 text-[10px] font-semibold text-[#5ee496]">
                      <CheckCircle2 className="h-3 w-3" />
                      synced
                    </span>
                  </div>
                ))}

                <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-[#3899f7]/30 bg-gradient-to-r from-[#3899f7]/[0.12] to-[#5ee496]/[0.08] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5ee496]" />
                  <span className="text-xs font-semibold text-[#5ee496]">
                    에이전트가 최신 상태입니다
                  </span>
                </div>
              </div>
              <p className="mt-4 text-center text-xs italic text-[#3899f7]/60 lg:text-right">
                에이전트가 바로 쓰는 최신 맥락
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
