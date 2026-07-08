"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Shield, Lock, Eye } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Shield, label: "엔터프라이즈급 보안" },
  { icon: Lock, label: "전송·저장 데이터 암호화" },
  { icon: Eye, label: "팀별 접근 권한 관리" },
];

export function SecuritySection() {
  return (
    <section id="security" className="section-dark border-t border-theme px-4 py-16 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16">
        {TRUST_ITEMS.map((item, i) => (
          <FadeIn key={item.label} delay={0.08 * i}>
            <div className="flex items-center gap-3 text-theme-subtle">
              <item.icon className="h-5 w-5 text-birzont-blue/70" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
