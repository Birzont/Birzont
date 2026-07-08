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
        "glass-card rounded-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
