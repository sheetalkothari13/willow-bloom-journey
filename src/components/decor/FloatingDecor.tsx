import { useMemo } from "react";
import { cn } from "@/lib/utils";

type DecorKind = "petal" | "heart" | "sparkle" | "cloud" | "butterfly";

function Glyph({ kind, className }: { kind: DecorKind; className?: string }) {
  switch (kind) {
    case "heart":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 20s-7.5-4.7-7.5-10A4.5 4.5 0 0 1 12 7.6 4.5 4.5 0 0 1 19.5 10c0 5.3-7.5 10-7.5 10Z"
            fill="currentColor"
          />
        </svg>
      );
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 2c.7 5.4 3.9 8.6 9.3 9.3-5.4.7-8.6 3.9-9.3 9.3-.7-5.4-3.9-8.6-9.3-9.3C8.1 10.6 11.3 7.4 12 2Z" fill="currentColor" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 48 24" className={className} aria-hidden="true">
          <path
            d="M12 20a7 7 0 0 1 .8-13.9A9 9 0 0 1 30 6.5 6.5 6.5 0 1 1 34 20Z"
            fill="currentColor"
          />
        </svg>
      );
    case "butterfly":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 12c-2.6-4.7-9.4-6.2-9.4-1.2 0 4 4.3 6.9 9.4 5.4 5.1 1.5 9.4-1.4 9.4-5.4 0-5-6.8-3.5-9.4 1.2Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            d="M12 2c3.2 2.4 4.8 5.6 4.8 9.5 0 4.4-2.1 8-4.8 10.5-2.7-2.5-4.8-6.1-4.8-10.5C7.2 7.6 8.8 4.4 12 2Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

const palette = ["text-blush", "text-sky", "text-gold"];

/**
 * Ambient background layer of drifting petals, hearts and sparkles.
 * Purely decorative and pointer-transparent.
 */
export function FloatingDecor({
  count = 14,
  kinds = ["petal", "heart", "sparkle", "butterfly"],
  className,
}: {
  count?: number;
  kinds?: DecorKind[];
  className?: string;
}) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        kind: kinds[i % kinds.length]!,
        left: (i * 37) % 96,
        size: 12 + ((i * 13) % 22),
        delay: (i * 1.6) % 14,
        duration: 14 + ((i * 5) % 12),
        color: palette[i % palette.length]!,
        opacity: 0.25 + ((i * 7) % 30) / 100,
      })),
    [count, kinds],
  );

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {items.map((item, i) => (
        <span
          key={i}
          className={cn("absolute bottom-0 animate-rise-away", item.color)}
          style={{
            left: `${item.left}%`,
            width: item.size,
            height: item.size,
            opacity: item.opacity,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          <Glyph kind={item.kind} className="h-full w-full animate-float-drift" />
        </span>
      ))}
    </div>
  );
}

/** A few soft clouds parked near the top of a section. */
export function CloudLayer({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-x-0 top-0", className)}>
      {[
        { left: "6%", top: "8%", w: 120, d: "0s" },
        { left: "62%", top: "3%", w: 170, d: "2.5s" },
        { left: "38%", top: "18%", w: 90, d: "5s" },
      ].map((c, i) => (
        <span
          key={i}
          className="absolute animate-float-drift text-card"
          style={{ left: c.left, top: c.top, width: c.w, animationDelay: c.d, opacity: 0.75 }}
        >
          <Glyph kind="cloud" className="h-full w-full" />
        </span>
      ))}
    </div>
  );
}
