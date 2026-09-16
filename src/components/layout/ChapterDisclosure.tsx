import { useLayoutEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ChapterDisclosure({
  chapter,
  title,
  description,
  open = false,
  onOpenChange,
  children,
}: {
  chapter: string;
  title: string;
  description: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  const summaryRef = useRef<HTMLElement | null>(null);
  const pendingTopRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const previousTop = pendingTopRef.current;
    const summary = summaryRef.current;

    if (!open || previousTop === null || !summary) return;

    const currentTop = summary.getBoundingClientRect().top;
    window.scrollBy({ top: currentTop - previousTop, behavior: "auto" });
    pendingTopRef.current = null;
  }, [open]);

  return (
    <details open={open} className="group">
      <summary
        className={cn(
          "cursor-pointer list-none px-5 py-5 outline-none sm:px-8",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
          "[&::-webkit-details-marker]:hidden",
        )}
        ref={summaryRef}
        onClick={(event) => {
          if (!onOpenChange) return;

          event.preventDefault();
          if (!open) {
            pendingTopRef.current = event.currentTarget.getBoundingClientRect().top;
          }
          onOpenChange(!open);
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5">
          <div>
            <p className="eyebrow">{chapter}</p>
            <h2 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">{description}</p>
          </div>
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card/80 text-xl text-foreground transition-transform duration-300 group-open:rotate-180"
          >
            ↓
          </span>
        </div>
      </summary>
      {children}
    </details>
  );
}
