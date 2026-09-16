import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { MediaThumb } from "@/components/media/SafeMedia";
import { Lightbox } from "@/components/media/Lightbox";
import type { Milestone } from "@/data/milestones";

const rotations = ["-1.6deg", "1.2deg", "-0.8deg", "1.8deg", "-1.2deg", "0.9deg"];

/**
 * Reusable polaroid gallery. Fully data-driven — pass any Milestone[].
 */
export function MilestoneGallery({ items }: { items: Milestone[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = items.find((m) => m.id === openId);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
        {items.map((m, i) => (
          <Reveal key={m.id} variant="scale" delay={(i % 3) * 90}>
            <Polaroid
              milestone={m}
              rotate={rotations[i % rotations.length]!}
              onOpen={() => setOpenId(m.id)}
            />
          </Reveal>
        ))}
      </div>

      {active ? (
        <Lightbox
          items={active.media}
          title={active.title}
          caption={active.caption}
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}

function Polaroid({
  milestone,
  rotate,
  onOpen,
}: {
  milestone: Milestone;
  rotate: string;
  onOpen: () => void;
}) {
  const count = milestone.media.length;

  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ rotate }}
      className={cn(
        "group block w-full rounded-[var(--radius-md)] bg-card p-2.5 pb-4 text-left shadow-[var(--shadow-soft)]",
        "transition-all duration-500 ease-[var(--ease-soft)]",
        "hover:rotate-0 hover:-translate-y-2 hover:shadow-[var(--shadow-float)] active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-sm)] bg-muted">
        <MediaThumb item={milestone.media[0]} />
        {count > 1 ? (
          <span className="absolute bottom-2 right-2 rounded-full bg-card/90 px-2 py-0.5 text-[0.65rem] tabular-nums text-muted-foreground">
            1 / {count}
          </span>
        ) : null}
      </div>

      <div className="px-1.5 pt-3">
        <p className="font-display text-base leading-tight text-foreground sm:text-lg">
          <span className="mr-1" aria-hidden="true">
            {milestone.emoji}
          </span>
          {milestone.title}
        </p>
        <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">
          “{milestone.caption}”
        </p>
      </div>
    </button>
  );
}
