import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
