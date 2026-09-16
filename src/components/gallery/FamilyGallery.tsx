import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SafeImage } from "@/components/media/SafeMedia";
import { Lightbox } from "@/components/media/Lightbox";
import type { MediaItem } from "@/data/milestones";
import type { FamilyPhoto } from "@/data/familyGallery";

const rotations = ["-2deg", "1.6deg", "-1.2deg", "2.2deg", "-1.8deg", "1deg", "-0.7deg", "1.9deg"];

function Tape({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-5 w-16 rounded-[2px] bg-[linear-gradient(120deg,var(--sky-soft),var(--blush-soft))] opacity-80 shadow-[var(--shadow-soft)]",
        className,
      )}
    />
  );
}

/** Photo-only scrapbook gallery for the family moments. */
export function FamilyGallery({ items }: { items: FamilyPhoto[] }) {
  const [openId, setOpenId] = useState<number | null>(null);

  const media: MediaItem[] = useMemo(
    () =>
      items.map((p) => ({
        type: "image" as const,
        src: p.src,
        alt: p.alt ?? p.caption ?? "A family memory",
        caption: [p.caption, p.event, p.date].filter(Boolean).join(" · "),
      })),
    [items],
  );

  const startIndex = Math.max(
    0,
    items.findIndex((p) => p.id === openId),
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-3">
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
              <Tape className="-top-2 left-1/2 -translate-x-1/2 rotate-2" />
              <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-sm)] bg-muted">
                <SafeImage src={p.src} alt={p.alt ?? p.caption} />
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
                {p.date || p.event ? (
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
          title="Moments We've Shared"
          imagePlaceholderLabel="Photo coming soon…"
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}
