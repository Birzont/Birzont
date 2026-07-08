"use client";

import { KnowledgeFlowDemo } from "@/components/landing/KnowledgeFlowDemo";

export function ProductVisualizationSection() {
  return (
    <section id="product" className="section-dark scroll-mt-24 border-t border-theme px-4 pb-16 pt-8 md:pb-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <KnowledgeFlowDemo />
      </div>
    </section>
  );
}
