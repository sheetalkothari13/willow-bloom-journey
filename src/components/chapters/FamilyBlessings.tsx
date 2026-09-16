import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { Lightbox } from "@/components/media/Lightbox";
import { MediaPlaceholder, MediaThumb, SafeImage, SafeVideo } from "@/components/media/SafeMedia";
import {
  blessingsIntro,
  diya,
  familyMembers,
  type FamilyMember,
} from "@/data/familyBlessings";

/** Subtle rangoli-inspired ring behind the section heading. */
function RangoliMark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" className="mx-auto h-20 w-20 text-gold/60">
      {Array.from({ length: 12 }, (_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="34"
          rx="7"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${i * 30} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="6" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function Diya() {
  const [lit, setLit] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setLit((v) => !v)}
        aria-pressed={lit}
        aria-label={lit ? "Dim the diya" : "Light the diya"}
        className="relative grid place-items-center rounded-full p-4 transition-transform duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {lit ? (
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gold/35 blur-xl animate-breathe"
          />
        ) : null}

        {lit
          ? Array.from({ length: 6 }, (_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="absolute bottom-10 size-1 rounded-full bg-gold animate-float-up-fade"
                style={{
                  left: `${38 + i * 5}%`,
                  ["--hx" as string]: `${(i % 2 ? 1 : -1) * (6 + i * 2)}px`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: "3.4s",
                  animationIterationCount: "infinite",
                }}
              />
            ))
          : null}

        <svg viewBox="0 0 64 48" className="relative h-14 w-20" aria-hidden="true">
          {/* flame */}
          <path
            d="M32 4c4 5.5 6 9 6 12.5A6 6 0 0 1 26 16.5C26 13 28 9.5 32 4Z"
            className={cn(
              "origin-bottom transition-opacity duration-700",
              lit ? "fill-gold opacity-100 animate-breathe" : "opacity-0",
            )}
          />
          {/* lamp */}
          <path
            d="M8 28h48c0 9-10.7 14-24 14S8 37 8 28Z"
            className={cn(lit ? "fill-gold-soft" : "fill-blush-soft")}
          />
          <path d="M8 28h48" stroke="currentColor" className="text-gold/50" strokeWidth="1.5" />
        </svg>
      </button>

      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
        {diya.hint}
      </span>

      <div
        className={cn(
          "grid transition-all duration-700 ease-[var(--ease-soft)]",
          lit ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="text-center font-display text-xl leading-relaxed text-foreground">
            {diya.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

function Portrait({
  member,
  active,
  onSelect,
}: {
  member: FamilyMember;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "group flex w-full min-w-24 flex-col items-center gap-2 rounded-[var(--radius-lg)] p-2 text-center",
        "transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-1 active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active && "bg-card/70 shadow-[var(--shadow-soft)]",
      )}
    >
      <span
        className={cn(
          "relative block size-16 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-background transition-all duration-500 sm:size-20",
          active ? "scale-105 ring-gold" : "ring-blush-soft group-hover:ring-sky",
        )}
      >
        <SafeImage
          src={member.photo}
          alt=""
          fallback={<MediaPlaceholder icon="🌼" label="" />}
        />
      </span>
      <span className="block text-xs font-medium leading-tight text-foreground">{member.name}</span>
      <span className="block text-[0.65rem] leading-tight text-muted-foreground">
        {member.relation}
      </span>
    </button>
  );
}

export function FamilyBlessings() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const selected = familyMembers.find((m) => m.id === selectedId) ?? null;

  return (
    <section
      id="blessings"
      className="relative scroll-mt-24 overflow-hidden bg-blush-soft/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{blessingsIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={60} className="mt-4">
            <RangoliMark />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-2 text-balance text-4xl sm:text-5xl">
              🌸 {blessingsIntro.title} 🌸
            </h2>
          </Reveal>
          <Reveal delay={160} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={220} className="mt-8">
            <Diya />
          </Reveal>
        </header>

        {/* Family grid — horizontally scrollable on very small screens */}
        <Reveal className="mt-14">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
            {familyMembers.map((m) => (
              <Portrait
                key={m.id}
                member={m}
                active={selected?.id === m.id}
                onSelect={() => setSelectedId(m.id)}
              />
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">{blessingsIntro.prompt}</p>
        </Reveal>

        {/* Blessing area */}
        <div className="mt-12">
          {!selected ? (
            <div className="surface-card mx-auto max-w-xl p-10 text-center">
              <p className="font-display text-3xl leading-snug">
                {blessingsIntro.welcome.map((l) => (
                  <span key={l} className="block text-gradient-petal">
                    {l}
                  </span>
                ))}
              </p>
            </div>
          ) : (
            <div
              key={selected.id}
              className="surface-card p-6 opacity-0 animate-[reveal-in_0.6s_var(--ease-soft)_forwards] sm:p-10"
            >
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                <span className="block size-28 shrink-0 overflow-hidden rounded-full ring-2 ring-gold ring-offset-4 ring-offset-card sm:size-32">
                  <SafeImage
                    src={selected.photo}
                    alt=""
                    fallback={<MediaPlaceholder icon="🌼" label="" />}
                  />
                </span>

                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <h3 className="font-display text-3xl">{selected.name}</h3>
                  <p className="eyebrow mt-1">{selected.relation}</p>

                  <div className="mt-5">
                    {selected.blessing.type === "text" ? (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        “{selected.blessing.content}”
                      </p>
                    ) : selected.blessing.type === "image" ? (
                      <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] bg-muted">
                        <SafeImage
                          src={selected.blessing.src}
                          alt={selected.blessing.alt ?? `${selected.name}'s blessing`}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] bg-muted">
                        <SafeVideo src={selected.blessing.src} poster={selected.blessing.poster} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {selected.media.length ? (
                <div className="mt-10">
                  <p className="text-center font-display text-xl">{blessingsIntro.mediaHeading}</p>
                  <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {selected.media.map((item, i) => (
                      <button
                        key={`${item.src}-${i}`}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-muted shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-float)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <MediaThumb item={item} />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {selected && lightboxIndex !== null ? (
        <Lightbox
          items={selected.media}
          startIndex={lightboxIndex}
          title={selected.name}
          caption={selected.relation}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </section>
  );
}
