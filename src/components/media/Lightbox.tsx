import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/data/milestones";
import { MediaPlaceholder, SafeImage, SafeVideo } from "./SafeMedia";

/**
 * Accessible, mobile-friendly media lightbox with prev/next and a 1 / n indicator.
 */
export function Lightbox({
  items,
  startIndex = 0,
  title,
  subtitle,
  caption,
  imagePlaceholderLabel,
  imagePlaceholderIcon,
  videoPlaceholderLabel,
  onClose,
}: {
  items: MediaItem[];
  startIndex?: number;
  title?: string | undefined;
  subtitle?: string | undefined;
  caption?: string | undefined;
  imagePlaceholderLabel?: string | undefined;
  imagePlaceholderIcon?: string | undefined;
  videoPlaceholderLabel?: string | undefined;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const touchX = useRef<number | null>(null);
  const count = items.length;


  const go = useCallback(
    (dir: number) => setIndex((i) => (count ? (i + dir + count) % count : 0)),
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, onClose]);

  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Media"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-sm opacity-0 animate-[reveal-in_0.35s_var(--ease-soft)_forwards]"
      onClick={onClose}
    >
      <div
        className="surface-card relative w-full max-w-3xl overflow-hidden p-3 sm:p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-card/90 text-lg shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ✕
        </button>

        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)] bg-muted sm:aspect-video"
          onTouchStart={(e) => {
            touchX.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            const end = e.changedTouches[0]?.clientX;
            touchX.current = null;
            if (start == null || end == null || count < 2) return;
            const dx = end - start;
            if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
          }}
        >
          {!item ? (
            <MediaPlaceholder
              label={imagePlaceholderLabel ?? "Memory coming soon…"}
              icon={imagePlaceholderIcon ?? "📷"}
              hint="Add your file, then it appears here."
            />
          ) : item.type === "image" ? (
            <SafeImage
              src={item.src}
              alt={item.alt ?? title}
              className="object-contain"
              fallback={
                <MediaPlaceholder
                  label={imagePlaceholderLabel ?? "Memory coming soon…"}
                  icon={imagePlaceholderIcon ?? "📷"}
                  hint="Add your file, then it appears here."
                />
              }
            />
          ) : (
            <SafeVideo
              src={item.src}
              poster={item.poster}
              className="object-contain"
              placeholderLabel={videoPlaceholderLabel ?? "Video coming soon…"}
            />
          )}
        </div>

        <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
          <div className="min-w-0">
            {title ? <p className="truncate font-display text-lg">{title}</p> : null}
            {subtitle ? (
              <p className="truncate text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                {subtitle}
              </p>
            ) : null}
            {item?.caption ?? caption ? (
              <p className="truncate text-xs text-muted-foreground">{item?.caption ?? caption}</p>
            ) : null}
          </div>


          {count > 1 ? (
            <div className="flex shrink-0 items-center gap-2">
              <NavBtn label="Previous" onClick={() => go(-1)}>
                ←
              </NavBtn>
              <span className="text-xs tabular-nums text-muted-foreground">
                {index + 1} / {count}
              </span>
              <NavBtn label="Next" onClick={() => go(1)}>
                →
              </NavBtn>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function NavBtn({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={cn(
        "grid size-10 place-items-center rounded-full bg-card/90 shadow-[var(--shadow-soft)]",
        "transition-transform duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      )}
    >
      {children}
    </button>
  );
}
