"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type GlowButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline-light" | "outline-dark";
  className?: string;
  onClick?: () => void;
};

export function GlowButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: GlowButtonProps) {
  const base = cn(
    "btn-glow inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]",
    variant === "primary" &&
      "gradient-cta text-birzont-black shadow-[0_4px_24px_rgba(94,228,150,0.35)] hover:shadow-[0_8px_32px_rgba(59,153,247,0.3)]",
    variant === "secondary" &&
      "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15",
    variant === "outline-light" &&
      "border border-white/25 bg-transparent text-white hover:bg-white/10",
    variant === "outline-dark" &&
      "border border-birzont-black/15 bg-white text-birzont-black hover:bg-birzont-mint/50",
    className,
  );

  const inner = <span className="relative z-10">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
