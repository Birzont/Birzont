"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionShell } from "@/components/ui/SectionShell";
import { OUTPUT_EXAMPLES } from "@/lib/landing-data";
import { FileCode2 } from "lucide-react";

export function OutputExamplesSection() {
  return (
    <SectionShell className="section-dark">
      <FadeIn>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            AI가 바로 읽을 수 있는
            <br />
            <span className="gradient-text">형태로 바뀝니다.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {OUTPUT_EXAMPLES.map((example, i) => (
          <FadeIn key={example.title} delay={0.08 * i}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-theme bg-[color-mix(in_srgb,var(--theme-fg)_4%,transparent)] shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-2 border-b border-theme px-4 py-3">
                <FileCode2 className="h-4 w-4 text-birzont-blue/70" />
                <span className="text-sm font-semibold text-theme">{example.title}</span>
              </div>
              <div className="flex-1 p-4">
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-theme-subtle md:text-[13px]">
                  {example.title === "CLAUDE.md" && (
                    <>
                      <span className="text-[#5ee496]/80"># Project Context</span>
                      {"\n\n"}
                    </>
                  )}
                  {example.title === "Cursor Rules" && (
                    <>
                      <span className="text-[#3899f7]/80">---</span>
                      {"\n"}
                    </>
                  )}
                  {example.snippet}
                </pre>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
