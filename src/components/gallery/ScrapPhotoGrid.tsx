import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SafeImage, MediaPlaceholder } from "@/components/media/SafeMedia";
import { Lightbox } from "@/components/media/Lightbox";
import type { MediaItem } from "@/data/milestones";

export type ScrapPhoto = {
  id: string | number;
  image: string;
  caption?: string;
  event?: string;
  date?: string;
  alt?: string;
  /** small label shown on the tape, e.g. "Month 3" */
  badge?: string;
};

const rotations = ["-2deg", "1.5deg", "-1.1deg", "2.1deg", "-1.7deg", "0.9deg", "1.8deg", "-0.6deg"];

function Tape({ label, className }: { label?: string | undefined; className?: string | undefined }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute grid h-5 min-w-16 place-items-center rounded-[2px] px-2 text-[0.6rem] tracking-[0.14em] text-foreground/60",
        "bg-[linear-gradient(120deg,var(--blush-soft),var(--sky-soft))] opacity-85 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {label}
    </span>
  );
}

/**
 * Reusable Polaroid scrapbook grid for Chapter 10.
 * Missing photos become gentle "waiting for this memory" cards.
 */
export function ScrapPhotoGrid({
  items,
  title,
  emptyIcon = "🌸",
  emptyLabel = "This little moment hasn't happened yet…",
  columns = "three",
}: {
  items: ScrapPhoto[];
  title: string;
  emptyIcon?: string;
  emptyLabel?: string;
  columns?: "three" | "four";
}) {
  const [openId, setOpenId] = useState<string | number | null>(null);

  const media: MediaItem[] = useMemo(
    () =>
      items.map((p) => ({
        type: "image" as const,
        src: p.image,
        alt: p.alt ?? p.caption ?? title,
        caption: [p.caption, p.event, p.date].filter(Boolean).join(" · "),
      })),
    [items, title],
  );

  const startIndex = Math.max(
    0,
    items.findIndex((p) => p.id === openId),
  );

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 gap-5 sm:gap-7",
          columns === "three" ? "lg:grid-cols-3" : "sm:grid-cols-3 lg:grid-cols-4",
        )}
      >
        {items.map((p, i) => (
          <Reveal key={p.id} variant="scale" delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setOpenId(p.id)}
              style={{ rotate: rotations[i % rotations.length]! }}
              className={cn(
                "group relative block w-full rounded-[var(--radius-md)] bg-card p-2.5 pb-5 text-left shadow-[var(--shadow-soft)]",
                "transition-all duration-500 ease-[var(--ease-soft)]",
                "hover:rotate-0 hover:-translate-y-2 hover:shadow-[var(--shadow-float)] active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
            >
              <Tape label={p.badge} className="-top-2 left-1/2 -translate-x-1/2 -rotate-2" />

              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-sm)] bg-muted">
                <SafeImage
                  src={p.image}
                  alt={p.alt ?? p.caption}
                  fallback={
                    <MediaPlaceholder
                      icon={emptyIcon}
                      label={p.badge ? `Your ${p.badge} memory will live here.` : emptyLabel}
                      hint="Waiting for this one ✨"
                    />
                  }
                />
              </div>

              <div className="flex items-end justify-between gap-2 px-1.5 pt-3">
                {p.caption ? (
                  <p
                    className="line-clamp-2 text-base leading-tight text-foreground/85"
                    style={{ fontFamily: "var(--font-hand)" }}
                  >
                    {p.caption}
                  </p>
                ) : (
                  <span />
                )}
                {p.date ?? p.event ? (
                  <span className="shrink-0 text-[0.65rem] tracking-wide text-muted-foreground">
                    {p.date ?? p.event}
                  </span>
                ) : null}
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {openId !== null ? (
        <Lightbox
          items={media}
          startIndex={startIndex}
          title={title}
          imagePlaceholderLabel="This memory hasn't happened yet…"
          imagePlaceholderIcon={emptyIcon}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}
