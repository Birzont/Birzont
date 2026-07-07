"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = direction === "up" ? 28 : direction === "down" ? -28 : 0;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: offset > 0 ? 12 : offset < 0 ? -12 : 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
