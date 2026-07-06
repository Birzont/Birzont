"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

type GlowButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
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
    "btn-glow inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]",
    variant === "primary" &&
      "bg-white text-black shadow-[0_0_30px_rgba(76,184,94,0.22)] hover:shadow-[0_0_40px_rgba(76,184,94,0.32)]",
    variant === "secondary" &&
      "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",
    className,
  );

  const inner = <span className="relative z-10">{children}</span>;

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.98 }}>
        <Link href={href} className={base}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} className={base} whileTap={{ scale: 0.98 }}>
      {inner}
    </motion.button>
  );
}
