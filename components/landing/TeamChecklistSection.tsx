"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionShell } from "@/components/ui/SectionShell";
import { CTA_LINKS, TEAM_CHECKLIST_ITEMS } from "@/lib/landing-data";
import {
  saveChecklistItems,
} from "@/lib/checklist-transfer";
import { Check } from "lucide-react";
import { useState } from "react";

export function TeamChecklistSection() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;

  const handleDiagnosis = () => {
    const selected = TEAM_CHECKLIST_ITEMS.filter((_, i) => checked[i]);
    saveChecklistItems(selected);
    document.getElementById("beta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionShell id="checklist" className="section-light">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            우리 팀도 이런가요?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-on-light-muted md:text-lg">
            3개 이상 해당된다면, 팀 AI 활용 방식을 점검할 때입니다.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-birzont-black/10 bg-white p-6 md:p-8">
          <ul className="space-y-3">
            {TEAM_CHECKLIST_ITEMS.map((item, i) => {
              const isChecked = !!checked[i];
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-start gap-3 rounded-xl border border-birzont-black/8 bg-birzont-mint/20 px-4 py-3.5 text-left transition-colors hover:border-birzont-green/30 hover:bg-birzont-mint/40"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                        isChecked
                          ? "border-birzont-green-dark bg-birzont-green-dark text-white"
                          : "border-birzont-black/20 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="h-3 w-3" strokeWidth={3} />}
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-birzont-black md:text-base">
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {checkedCount >= 3 && (
            <p className="mt-4 text-center text-sm font-medium text-birzont-green-dark">
              {checkedCount}개 해당 — 팀 AI 활용 진단을 추천합니다.
            </p>
          )}

          <div className="mt-8 flex justify-center">
            <GlowButton onClick={handleDiagnosis} variant="outline-dark">
              {CTA_LINKS.diagnosis.label}
            </GlowButton>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
