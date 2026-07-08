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
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary backdrop-blur-sm",
    variant === "outline-light" && "btn-outline-light",
    variant === "outline-dark" && "btn-outline-dark",
    className,
  );

  const inner = (
    <span
      className={cn(
        "relative z-10",
        variant === "primary" && "text-[var(--theme-btn-primary-fg)]",
        variant === "secondary" && "text-[var(--theme-btn-secondary-fg)]",
        variant === "outline-light" && "text-[var(--theme-btn-secondary-fg)]",
        variant === "outline-dark" && "text-birzont-black",
      )}
    >
      {children}
    </span>
  );

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
