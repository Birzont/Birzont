"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GlowButton } from "@/components/ui/GlowButton";
import { KeepTogetherText } from "@/components/ui/KeepTogetherText";
import { SectionShell } from "@/components/ui/SectionShell";
import { cn } from "@/lib/utils";
import { PRICING_COMPARISON, PRICING_PLANS } from "@/lib/landing-data";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <SectionShell id="pricing" className="section-light">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            팀 규모에 맞는
            <br />
            <span className="text-birzont-blue">요금제를 선택하세요.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-light-muted md:text-lg">
            플랜이 올라갈수록 연결되는 지식, 동기화 빈도, 팀 맥락 공유 범위가
            넓어집니다.
          </p>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {PRICING_PLANS.map((plan, i) => (
          <FadeIn key={plan.name} delay={0.08 * i}>
            <div
              className={cn(
                "pricing-card relative flex h-full flex-col rounded-2xl border p-7 text-birzont-black transition-all hover:-translate-y-1",
                plan.highlighted
                  ? "border-birzont-black/20 bg-white ring-1 ring-birzont-black/10"
                  : "border-birzont-black/10 bg-white",
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-birzont-black px-3 py-1 text-[11px] font-semibold text-white">
                  {plan.badge}
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-birzont-black">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-birzont-black">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm font-medium text-birzont-black/75">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-birzont-black/70">
                  <KeepTogetherText parts={plan.descriptionParts} />
                </p>
              </div>

              <GlowButton
                href="https://birzont.ai/pricing"
                variant={plan.highlighted ? "primary" : "outline-dark"}
                className={cn(
                  "w-full justify-center",
                  plan.highlighted && "pricing-card-primary-btn",
                )}
              >
                {plan.cta}
              </GlowButton>

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-birzont-black/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-birzont-green-dark" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15}>
        <div className="mt-16 overflow-hidden rounded-2xl border border-birzont-black/10 bg-white text-birzont-black">
          <div className="border-b border-birzont-black/8 px-6 py-5">
            <h3 className="text-lg font-bold text-birzont-black md:text-xl">요금제별 기능 비교</h3>
            <p className="mt-1 text-sm text-birzont-black/70">
              상위 플랜일수록 더 많은 소스, 더 빠른 동기화, 더 넓은 팀 맥락을 제공합니다.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-birzont-black/8 bg-birzont-mint/30 text-left">
                  <th className="px-6 py-4 font-semibold text-birzont-black/70">기능</th>
                  <th className="px-4 py-4 font-semibold text-birzont-black/70">Free</th>
                  <th className="px-4 py-4 font-semibold text-birzont-black">Pro</th>
                  <th className="px-4 py-4 font-semibold text-birzont-black/70">Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-birzont-black/6">
                {PRICING_COMPARISON.map((row) => (
                  <tr key={row.feature} className="hover:bg-birzont-mint/20">
                    <td className="px-6 py-3.5 font-medium text-birzont-black/75">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3.5 text-birzont-black/60">{row.free}</td>
                    <td className="px-4 py-3.5 font-medium text-birzont-black/80">{row.pro}</td>
                    <td className="px-4 py-3.5 text-birzont-black/80">{row.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  );
}
