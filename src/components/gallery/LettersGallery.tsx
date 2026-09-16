import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Lightbox } from "@/components/media/Lightbox";
import { MediaPlaceholder, SafeImage } from "@/components/media/SafeMedia";
import type { BabyLetter } from "@/data/babyLetters";

const rotations = ["-1.4deg", "1.1deg", "-0.7deg", "1.6deg", "-1.1deg", "0.8deg"];

/**
 * Reusable envelope grid for Chapter 7. Fully data-driven.
 */
export function LettersGallery({ items }: { items: BabyLetter[] }) {
  const [openId, setOpenId] = useState<number | null>(null);
  const active = items.find((l) => l.id === openId);

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {items.map((l, i) => (
          <Reveal key={l.id} variant="scale" delay={(i % 4) * 80}>
            <EnvelopeCard
              letter={l}
              rotate={rotations[i % rotations.length]!}
              open={openId === l.id}
              onOpen={() => setOpenId(l.id)}
            />
          </Reveal>
        ))}
      </div>

      {active ? (
        <Lightbox
          items={active.media}
          title={active.name}
          subtitle={active.relation}
          caption={active.note}
          imagePlaceholderLabel="Your letter will live here."
          imagePlaceholderIcon="💌"
          videoPlaceholderLabel="Your message will live here."
          onClose={() => setOpenId(null)}
        />
      ) : null}
    </>
  );
}

function EnvelopeCard({
  letter,
  rotate,
  open,
  onOpen,
}: {
  letter: BabyLetter;
  rotate: string;
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      style={{ rotate }}
      aria-label={`Open the letter from ${letter.name}`}
      className={cn(
        "group relative block w-full rounded-[var(--radius-lg)] bg-card p-3 pb-4 text-center shadow-[var(--shadow-soft)]",
        "transition-all duration-500 ease-[var(--ease-soft)]",
        "hover:rotate-0 hover:-translate-y-2 hover:shadow-[var(--shadow-float)] active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-lg)] bg-primary/10 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] bg-[linear-gradient(150deg,var(--blush-soft),var(--cream),var(--sky-soft))]">
        {letter.thumbnail ? (
          <SafeImage
            src={letter.thumbnail}
            alt={`${letter.name}'s letter`}
            fallback={<MediaPlaceholder label="Your letter will live here." icon="💌" />}
          />
        ) : (
          <MediaPlaceholder label="Your letter will live here." icon="💌" />
        )}

        {/* envelope flap that lifts on hover / open */}
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-1/2 origin-top",
            "bg-[linear-gradient(160deg,var(--cream),var(--blush-soft))] opacity-90",
            "[clip-path:polygon(0_0,100%_0,50%_100%)]",
            "transition-transform duration-700 ease-[var(--ease-soft)]",
            open ? "-rotate-x-[170deg]" : "group-hover:[transform:rotateX(-28deg)]",
          )}
          style={open ? { transform: "rotateX(-165deg)" } : undefined}
        />
      </div>

      <p className="mt-3 font-display text-base leading-tight sm:text-lg">
        <span aria-hidden="true" className="mr-1">
          💌
        </span>
        From {letter.name}
      </p>
      <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
        {letter.relation}
      </p>
    </button>
  );
}
