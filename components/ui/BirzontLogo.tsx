import { cn } from "@/lib/utils";

type BirzontLogoProps = {
  size?: number;
  className?: string;
};

export function BirzontLogo({ size = 32, className }: BirzontLogoProps) {
  const clampedSize = Math.min(Math.max(size, 24), 96);

  return (
    <img
      src="/birzont-logo.png"
      alt="Birzont"
      width={clampedSize}
      height={clampedSize}
      className={cn("shrink-0 object-contain drop-shadow-sm", className)}
      style={{
        width: clampedSize,
        height: clampedSize,
        maxWidth: clampedSize,
        maxHeight: clampedSize,
      }}
    />
  );
}
