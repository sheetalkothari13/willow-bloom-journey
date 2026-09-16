import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

type RevealVariant = "up" | "left" | "scale";

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  scale: "reveal-scale",
};

export function Reveal({
  children,
  className,
  variant = "up",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** delay in ms */
  delay?: number;
  as?: ElementType;
}) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      data-revealed={revealed}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn(variantClass[variant], className)}
    >
      {children}
    </Tag>
  );
}
