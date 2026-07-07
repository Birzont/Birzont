"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type BlobBackgroundProps = {
  variant?: "dark" | "light" | "cta";
  className?: string;
};

export function BlobBackground({ variant = "dark", className }: BlobBackgroundProps) {
  const greenOpacity = variant === "cta" ? "opacity-50" : "opacity-30";
  const blueOpacity = variant === "cta" ? "opacity-40" : "opacity-25";

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className={cn(
          "absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full blob-green blur-3xl",
          greenOpacity,
        )}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute -right-24 top-1/4 h-[380px] w-[380px] rounded-full blob-blue blur-3xl",
          blueOpacity,
        )}
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full blob-dark blur-3xl opacity-40"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      {variant === "light" && (
        <div className="absolute inset-0 bg-gradient-to-b from-birzont-cream via-white to-birzont-mint/30" />
      )}
    </div>
  );
}
