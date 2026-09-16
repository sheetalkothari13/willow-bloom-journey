import { useState } from "react";
import { cn } from "@/lib/utils";
import { SafeImage, MediaPlaceholder } from "@/components/media/SafeMedia";
import type { MusicCategory } from "@/data/music";

/** One category card: a big scannable QR, the title, a note and a Spotify button. */
export function MusicCard({ category }: { category: MusicCategory }) {
  const [hover, setHover] = useState(false);
  const clickable = Boolean(category.spotifyUrl);

  return (
    <div
      className={cn(
        "surface-card relative overflow-hidden p-6 text-center sm:p-8",
        "transition-all duration-500 ease-[var(--ease-soft)]",
        "hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[var(--shadow-float)]",
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: category.wash }}
      />

      {hover ? (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {["🎵", "🎶", "✨"].map((n, i) => (
            <span
              key={n}
              className="absolute text-base animate-[float-drift_2.8s_var(--ease-soft)_infinite]"
              style={{
                left: `${18 + i * 26}%`,
                bottom: "14%",
                animationDelay: `${i * 320}ms`,
                opacity: 0.7,
              }}
            >
              {n}
            </span>
          ))}
        </span>
      ) : null}

      <div className="relative">
        <div
          className="mx-auto w-full max-w-[17rem] rounded-[var(--radius-md)] p-3"
          style={{ background: category.frame }}
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-sm)] bg-card">
            <SafeImage
              src={category.qrImage}
              alt={`QR code for the ${category.title} playlist`}
              className="object-contain p-2"
              fallback={
                <MediaPlaceholder
                  label="QR code coming soon…"
                  icon="🎵"
                  hint={`Drop ${category.id}.png in public/images/qr/`}
                />
              }
            />
          </div>
        </div>

        <h3 className="mt-6 font-display text-2xl leading-snug sm:text-3xl">
          <span aria-hidden="true">{category.icon} </span>
          {category.title}
        </h3>

        <p
          className="mx-auto mt-3 max-w-xs text-base leading-snug text-foreground/80"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          “{category.description}”
        </p>

        {clickable ? (
          <a
            href={category.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-7 py-2.5 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Open Spotify
          </a>
        ) : (
          <span className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-muted px-7 py-2.5 text-sm tracking-wide text-muted-foreground">
            Link coming soon
          </span>
        )}
      </div>
    </div>
  );
}
