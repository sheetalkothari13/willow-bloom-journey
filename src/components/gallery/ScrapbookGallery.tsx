import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SafeImage } from "@/components/media/SafeMedia";
import { Lightbox } from "@/components/media/Lightbox";
import type { MediaItem } from "@/data/milestones";
import { memoryCategories, memoriesIntro, type Memory, type MemoryCategory } from "@/data/memories";

const rotations = ["-2deg", "1.4deg", "-1deg", "2deg", "-1.6deg", "0.8deg", "1.8deg", "-0.6deg"];

/** Small paper-tape strip pinned to the top of a polaroid. */
function Tape({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-5 w-16 rounded-[2px] bg-[linear-gradient(120deg,var(--blush-soft),var(--sky-soft))] opacity-80 shadow-[var(--shadow-soft)]",
        className,
      )}
    />
  );
}

/**
 * Reusable, data-driven scrapbook gallery — images only.
 */
export function ScrapbookGallery({ items }: { items: Memory[] }) {
  const [filter, setFilter] = useState<MemoryCategory | "all">("all");
  const [openId, setOpenId] = useState<number | null>(null);

  const shown = useMemo(
    () => (filter === "all" ? items : items.filter((m) => m.category === filter)),
    [items, filter],
  );

  const used = useMemo(
    () => memoryCategories.filter((c) => items.some((m) => m.category === c.id)),
    [items],
  );

  const media: MediaItem[] = shown.map((m) => ({
    type: "image",
    src: m.src,
    alt: m.alt ?? m.caption ?? "A memory",
    caption: [m.caption, m.date].filter(Boolean).join(" · "),
  }));

  const startIndex = Math.max(
    0,
    shown.findIndex((m) => m.id === openId),
  );

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Chip active={filter === "all"} onClick={() => setFilter("all")}>
          {memoriesIntro.filterAll}
        </Chip>
        {used.map((c) => (
          <Chip key={c.id} active={filter === c.id} onClick={() => setFilter(c.id)}>
            <span aria-hidden="true" className="mr-1">
              {c.emoji}
            </span>
            {c.label}
          </Chip>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
        {shown.map((m, i) => (
          <Reveal key={m.id} variant="scale" delay={(i % 3) * 90}>
            <PolaroidPhoto
              memory={m}
              rotate={rotations[i % rotations.length]!}
              onOpen={() => setOpenId(m.id)}
            />
          </Reveal>
        ))}
      </div>

      {openId !== null ? (
        <Lightbox
          items={media}
          startIndex={startIndex}
          title="Before you became Mom"
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-9 rounded-full px-4 py-1.5 text-xs tracking-wide transition-all duration-400 ease-[var(--ease-soft)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        active
          ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
          : "bg-card/80 text-muted-foreground hover:-translate-y-0.5 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function PolaroidPhoto({
  memory,
  rotate,
  onOpen,
}: {
  memory: Memory;
  rotate: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ rotate }}
      className={cn(
        "group relative block w-full rounded-[var(--radius-md)] bg-card p-2.5 pb-5 text-left shadow-[var(--shadow-soft)]",
        "transition-all duration-500 ease-[var(--ease-soft)]",
        "hover:rotate-0 hover:-translate-y-2 hover:shadow-[var(--shadow-float)] active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <Tape className="-top-2 left-1/2 -translate-x-1/2 -rotate-2" />

      <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-sm)] bg-muted">
        <SafeImage src={memory.src} alt={memory.alt ?? memory.caption} />
      </div>

      <div className="flex items-end justify-between gap-2 px-1.5 pt-3">
        {memory.caption ? (
          <p
            className="line-clamp-2 text-base leading-tight text-foreground/85"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            {memory.caption}
          </p>
        ) : (
          <span />
        )}
        {memory.date ? (
          <span className="shrink-0 text-[0.65rem] tabular-nums tracking-wide text-muted-foreground">
            {memory.date}
          </span>
        ) : null}
      </div>
    </button>
  );
}
