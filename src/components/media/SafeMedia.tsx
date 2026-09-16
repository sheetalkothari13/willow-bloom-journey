import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { MediaItem } from "@/data/milestones";

/**
 * Image that never shows a broken-image icon.
 * If the file is missing, a soft "coming soon" placeholder is rendered instead.
 */
export function SafeImage({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt?: string | undefined;
  className?: string | undefined;
  fallback?: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setFailed(false);
    // catches images that already failed before hydration attached onError
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) return <>{fallback ?? <MediaPlaceholder />}</>;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt ?? ""}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}


/** Video that falls back to a placeholder when the file is missing. */
export function SafeVideo({
  src,
  poster,
  controls = true,
  className,
  thumbnail = false,
  placeholderLabel = "Video coming soon…",
}: {
  src: string;
  poster?: string | undefined;
  controls?: boolean;
  className?: string | undefined;
  thumbnail?: boolean;
  placeholderLabel?: string | undefined;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (failed) return <MediaPlaceholder label={placeholderLabel} icon="🎬" />;

  return (
    <video
      src={src}
      poster={poster}
      controls={controls}
      muted={thumbnail}
      playsInline
      preload="metadata"
      onError={() => setFailed(true)}
      className={cn("h-full w-full bg-muted object-cover", className)}
    />
  );
}

export function MediaPlaceholder({
  label = "Memory coming soon…",
  icon = "📷",
  hint,
  className,
}: {
  label?: string;
  icon?: string;
  hint?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(150deg,var(--blush-soft),var(--cream),var(--sky-soft))] p-4 text-center",
        className,
      )}
    >
      <span className="text-2xl animate-breathe" aria-hidden="true">
        {icon}
      </span>
      <span className="text-xs tracking-wide text-muted-foreground">{label}</span>
      {hint ? <span className="text-[0.65rem] text-muted-foreground/70">{hint}</span> : null}
    </div>
  );
}

/** Renders a single media item inside a fixed-ratio frame. */
export function MediaThumb({ item, className }: { item?: MediaItem | undefined; className?: string | undefined }) {
  if (!item) return <MediaPlaceholder className={className} />;
  if (item.type === "image")
    return <SafeImage src={item.src} alt={item.alt} className={className} />;
  return (
    <div className="relative h-full w-full">
      <SafeVideo src={item.src} poster={item.poster} controls={false} thumbnail className={className} />
      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="grid size-11 place-items-center rounded-full bg-card/85 text-lg shadow-[var(--shadow-soft)]">
          ▶
        </span>
      </span>
    </div>
  );
}
