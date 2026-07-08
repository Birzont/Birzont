"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={cn("animate-fade-in-up opacity-0", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

type HookQuoteProps = {
  quote: string;
  className?: string;
};

export function HookQuote({ quote, className }: HookQuoteProps) {
  return (
    <FadeIn className={cn("py-8 text-center", className)}>
      <p className="mx-auto max-w-2xl text-lg font-medium italic text-white/40 md:text-xl">
        &ldquo;{quote}&rdquo;
      </p>
    </FadeIn>
  );
}

export function HookQuoteLight({ quote, className }: HookQuoteProps) {
  return (
    <FadeIn className={cn("py-8 text-center", className)}>
      <p className="mx-auto max-w-2xl text-lg font-medium italic text-birzont-black/35 md:text-xl">
        &ldquo;{quote}&rdquo;
      </p>
    </FadeIn>
  );
}
