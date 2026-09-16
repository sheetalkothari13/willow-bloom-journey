import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor, CloudLayer } from "@/components/decor/FloatingDecor";
import {
  currentWeek,
  journeyIntro,
  pregnancyWeeks,
  type PregnancyWeek,
} from "@/data/pregnancy-weeks";

/** Soft illustrated "baby's world" bubble — line-art, never clinical. */
function BabyBubble({ week }: { week: number }) {
  const progress = Math.min(1, Math.max(0, (week - 6) / 34));
  const scale = 0.55 + progress * 0.45;

  return (
    <div className="relative mx-auto grid size-40 place-items-center sm:size-48">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full blur-2xl opacity-60"
        style={{ background: "var(--gradient-petal)" }}
      />
      <div className="surface-card relative grid size-full place-items-center rounded-full">
        <svg
          viewBox="0 0 100 100"
          className="size-28 text-blush sm:size-32"
          style={{ transform: `scale(${scale})`, transition: "transform 700ms var(--ease-soft)" }}
          aria-hidden="true"
        >
          <circle cx="50" cy="38" r="20" fill="currentColor" opacity="0.35" />
          <path
            d="M50 56c14 0 22 10 22 22 0 6-9 10-22 10s-22-4-22-10c0-12 8-22 22-22Z"
            fill="currentColor"
            opacity="0.25"
          />
          <circle cx="43" cy="38" r="2.2" fill="currentColor" />
          <circle cx="57" cy="38" r="2.2" fill="currentColor" />
          <path
            d="M45 46c1.6 1.8 3.2 2.6 5 2.6s3.4-.8 5-2.6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <span className="absolute -right-1 -top-1 text-2xl animate-breathe" aria-hidden="true">
        ✨
      </span>
      <span className="absolute -bottom-1 -left-2 text-xl animate-float-drift" aria-hidden="true">
        🌸
      </span>
    </div>
  );
}

function InfoCard({
  emoji,
  label,
  tone,
  delay,
  children,
}: {
  emoji: string;
  label: string;
  tone: "blush" | "sky" | "cream" | "gold";
  delay: number;
  children: React.ReactNode;
}) {
  const toneRing = {
    blush: "bg-blush-soft/60",
    sky: "bg-sky-soft/60",
    cream: "bg-cream/80",
    gold: "bg-gold-soft/40",
  }[tone];

  return (
    <div
      className="surface-card surface-card-hover h-full p-6 opacity-0 animate-[reveal-in_0.8s_var(--ease-soft)_forwards] sm:p-7"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className={cn("grid size-10 place-items-center rounded-full text-lg", toneRing)}>
          {emoji}
        </span>
        <p className="eyebrow">{label}</p>
      </div>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function WeekContent({ data }: { data: PregnancyWeek }) {
  return (
    <div key={data.week} className="mt-10">
      <div
        className="text-center opacity-0 animate-[reveal-in_0.8s_var(--ease-soft)_forwards]"
        style={{ animationDelay: "60ms" }}
      >
        <p className="eyebrow text-gold">
          Week {data.week} · Trimester {data.trimester}
        </p>
        <h3 className="mt-3 text-balance font-display text-3xl sm:text-4xl">
          <span className="text-foreground">{data.title}</span>
        </h3>
        <div className="mx-auto mt-5 w-16">
          <div className="gold-rule" />
        </div>
      </div>

      <div
        className="mt-8 opacity-0 animate-[reveal-in_0.9s_var(--ease-soft)_forwards]"
        style={{ animationDelay: "160ms" }}
      >
        <BabyBubble week={data.week} />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <InfoCard emoji="👶" label="Baby's world" tone="sky" delay={240}>
          <ul className="space-y-2">
            {data.baby.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-sky" aria-hidden="true">
                  ·
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard emoji="🤰" label="Mom's world" tone="blush" delay={320}>
          <ul className="space-y-2">
            {data.mom.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-blush" aria-hidden="true">
                  ·
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-muted-foreground/80">
            Every pregnancy is different — not everyone notices these.
          </p>
        </InfoCard>

        <InfoCard emoji="📏" label="Size comparison" tone="cream" delay={400}>
          <div className="flex items-center gap-4">
            <span
              className="grid size-16 shrink-0 place-items-center rounded-full bg-blush-soft/70 font-display text-lg text-foreground animate-breathe"
              aria-hidden="true"
            >
              {data.week}
            </span>
            <div>
              <p className="font-display text-2xl text-foreground">{data.size.label}</p>
              <p className="mt-1">{data.size.note}</p>
            </div>
          </div>
        </InfoCard>

        <InfoCard emoji="✨" label="This week's little fact" tone="gold" delay={480}>
          <ul className="space-y-2">
            {data.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </InfoCard>
      </div>

      <div
        className="mt-6 rounded-[var(--radius-2xl)] border border-gold-soft bg-cream/70 p-8 text-center opacity-0 animate-[reveal-in_0.9s_var(--ease-soft)_forwards]"
        style={{ animationDelay: "560ms" }}
      >
        <p className="eyebrow">💗 A message for mom</p>
        <p className="mx-auto mt-4 max-w-xl text-pretty font-display text-2xl leading-snug">
          {data.message}
        </p>
      </div>
    </div>
  );
}

function WeekSelector({ selected, onSelect }: { selected: number; onSelect: (w: number) => void }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const el = track?.querySelector<HTMLElement>(`[data-week="${selected}"]`);
    if (!track || !el) return;

    const targetLeft = el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2;
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    track.scrollTo({
      left: Math.max(0, Math.min(targetLeft, maxScrollLeft)),
      behavior: "smooth",
    });
  }, [selected]);

  const shift = (dir: -1 | 1) => {
    const index = pregnancyWeeks.findIndex((w) => w.week === selected);
    const next = pregnancyWeeks[Math.min(pregnancyWeeks.length - 1, Math.max(0, index + dir))];
    if (next) onSelect(next.week);
  };

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => shift(-1)}
          aria-label="Previous week"
          className="hidden size-10 shrink-0 place-items-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:bg-card sm:grid"
        >
          <ChevronLeft className="size-4" />
        </button>

        <div
          ref={trackRef}
          className="flex flex-1 gap-2 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pregnancyWeeks.map((w) => {
            const active = w.week === selected;
            return (
              <button
                key={w.week}
                type="button"
                data-week={w.week}
                onClick={() => onSelect(w.week)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2 text-xs tracking-wide transition-all duration-500 ease-[var(--ease-soft)]",
                  active
                    ? "bg-card text-foreground shadow-[var(--shadow-float)]"
                    : "text-muted-foreground hover:text-foreground",
                  w.week === currentWeek && !active && "ring-1 ring-gold",
                )}
              >
                Week {w.week}
                {w.week === currentWeek && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-0.5 -top-0.5 text-[10px]"
                    title="You are here"
                  >
                    💗
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => shift(1)}
          aria-label="Next week"
          className="hidden size-10 shrink-0 place-items-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:bg-card sm:grid"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* compact selector for very small screens */}
      <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
        <label htmlFor="week-select" className="eyebrow">
          Jump to
        </label>
        <select
          id="week-select"
          value={selected}
          onChange={(e) => onSelect(Number(e.target.value))}
          className="rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-foreground backdrop-blur"
        >
          {pregnancyWeeks.map((w) => (
            <option key={w.week} value={w.week}>
              Week {w.week} — {w.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function PregnancyJourney() {
  const [selected, setSelected] = useState(currentWeek);
  const data = useMemo(
    () => pregnancyWeeks.find((w) => w.week === selected) ?? pregnancyWeeks[0]!,
    [selected],
  );

  const onSelect = useCallback((w: number) => setSelected(w), []);

  return (
    <section
      id="journey"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <CloudLayer />
      <FloatingDecor count={8} kinds={["petal", "sparkle", "heart"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{journeyIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{journeyIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {journeyIntro.subtitle}
            </p>
          </Reveal>
          {selected === currentWeek ? (
            <Reveal delay={260}>
              <p className="mt-4 text-sm text-gold">💗 You are here — week {currentWeek}</p>
            </Reveal>
          ) : (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => onSelect(currentWeek)}
                className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Back to week {currentWeek}
              </button>
            </div>
          )}
        </header>

        <WeekSelector selected={selected} onSelect={onSelect} />

        <WeekContent data={data} />

        {/*
          <footer className="mt-14 text-center text-xs leading-relaxed text-muted-foreground/80">
            <p>{journeyIntro.disclaimer}</p>
            <p className="mt-2">
              General information adapted from{" "}
              {journeySources.map((s, i) => (
                <span key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                  {i < journeySources.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
          </footer>
          */}
      </div>
    </section>
  );
}
