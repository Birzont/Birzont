import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("relative px-4 py-24 md:py-32 lg:px-8", className)}>
      <div className={cn("mx-auto max-w-6xl", containerClassName)}>{children}</div>
    </section>
  );
}
