import { cn } from "@/lib/utils";
import { Fragment } from "react";

export function KeepTogetherText({
  parts,
  className,
}: {
  parts: readonly string[];
  className?: string;
}) {
  return (
    <span className={cn("text-pretty", className)}>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="whitespace-nowrap">{part}</span>
        </Fragment>
      ))}
    </span>
  );
}
