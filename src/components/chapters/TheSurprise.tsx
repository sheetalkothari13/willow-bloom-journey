import { useCallback, useMemo, useState } from "react";
import { chapterOne } from "@/data/chapter-one";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor, CloudLayer } from "@/components/decor/FloatingDecor";

type Phase = "sealed" | "opening" | "revealed";

/** Small, tasteful confetti + hearts burst, rendered only while opening. */
function Burst() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        x: ((i * 53) % 100) - 50,
        y: 30 + ((i * 17) % 40),
        r: ((i * 71) % 360) + 180,
        delay: ((i * 7) % 9) / 10,
        size: 5 + ((i * 3) % 6),
        tone: ["bg-blush", "bg-sky", "bg-gold"][i % 3],
        round: i % 4 === 0,
      })),
    [],
  );

  const hearts = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        left: 12 + ((i * 27) % 76),
        x: ((i * 41) % 60) - 30,
        delay: ((i * 5) % 12) / 10,
        size: 10 + ((i * 5) % 12),
        tone: ["text-blush", "text-sky", "text-gold"][i % 3],
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={`c-${i}`}
          className={cn(
            "absolute left-1/2 top-1/2 animate-confetti-fall",
            p.tone,
            p.round ? "rounded-full" : "rounded-[2px]",
          )}
          style={{
            width: p.size,
            height: p.round ? p.size : p.size * 1.8,
            animationDelay: `${p.delay}s`,
            ["--cx" as string]: `${p.x * 4}px`,
            ["--cy" as string]: `${p.y}vh`,
            ["--cr" as string]: `${p.r}deg`,
          }}
        />
      ))}
      {hearts.map((h, i) => (
        <span
          key={`h-${i}`}
          className={cn("absolute bottom-1/3 animate-float-up-fade", h.tone)}
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDelay: `${h.delay}s`,
            ["--hx" as string]: `${h.x}px`,
          }}
        >
          <svg viewBox="0 0 24 24" className="h-full w-full">
            <path
              d="M12 20s-7.5-4.7-7.5-10A4.5 4.5 0 0 1 12 7.6 4.5 4.5 0 0 1 19.5 10c0 5.3-7.5 10-7.5 10Z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

function Envelope({ phase }: { phase: Phase }) {
  const opening = phase !== "sealed";

  return (
    <div
      className={cn(
        "relative mx-auto w-[min(84vw,25rem)] [perspective:1200px]",
        opening && "animate-envelope-settle",
      )}
    >
      <div className="relative aspect-[3/2] w-full">
        {/* envelope body */}
        <div className="absolute inset-0 rounded-xl bg-blush shadow-[var(--shadow-float)]" />

        {/* letter sliding out */}
        <div
          className={cn(
            "absolute inset-x-[8%] bottom-[10%] top-[14%] z-30 rounded-xl border border-gold-soft bg-card px-4 py-6 text-center shadow-[var(--shadow-soft)]",
            opening ? "animate-letter-rise opacity-0" : "opacity-0",
          )}
        >
          <p className="font-display text-2xl font-bold text-foreground">
            {chapterOne.envelopeLabel}
          </p>
          <div className="mx-auto mt-3 w-12">
            <div className="gold-rule" />
          </div>
        </div>

        {/* front pocket, drawn above the letter */}
        <div
          className="absolute inset-0 z-10 rounded-xl bg-sky"
          style={{ clipPath: "polygon(0 30%, 50% 78%, 100% 30%, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 z-10 rounded-xl bg-blush/85"
          style={{ clipPath: "polygon(0 100%, 50% 40%, 100% 100%)" }}
        />

        {/* flap */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 z-20 h-[58%] origin-top",
            opening && "animate-flap-open",
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="h-full w-full bg-gold-soft shadow-[var(--shadow-soft)]"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          />
        </div>

        {/* wax seal */}
        <div
          className={cn(
            "absolute left-1/2 top-[52%] grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[10px] tracking-[0.2em] text-primary-foreground transition-opacity duration-500",
            opening ? "opacity-0" : "opacity-100 animate-breathe",
          )}
          style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-soft)" }}
        >
          <span className="font-display text-sm text-foreground">♡</span>
        </div>
      </div>

      {/* sealed label under envelope */}
      <p
        className={cn(
          "mt-6 text-center font-display text-xl transition-opacity duration-500",
          opening ? "opacity-0" : "opacity-100",
        )}
      >
        {chapterOne.envelopeLabel}
      </p>
    </div>
  );
}

export function TheSurprise() {
  const [phase, setPhase] = useState<Phase>("sealed");
  /** the surprise always plays fresh on every visit — no persistence */
  const instant = false;

  const open = useCallback(() => {
    if (phase !== "sealed") return;
    setPhase("opening");
    window.setTimeout(() => setPhase("revealed"), 2400);
  }, [phase]);

  const scrollNext = useCallback(() => {
    document
      .getElementById(chapterOne.nextSectionId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const showReveal = phase === "revealed";

  return (
    <section
      id="surprise"
      className="relative flex min-h-svh scroll-mt-24 items-center justify-center overflow-hidden px-5 py-28 sm:px-8"
    >
      <CloudLayer />
      <FloatingDecor count={12} />

      {/* soft pink/blue glow that blooms on opening */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[38rem] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
          phase === "sealed" ? "opacity-20" : instant ? "opacity-35" : "animate-glow-bloom",
        )}
        style={{ background: "var(--gradient-petal)" }}
      />

      {phase === "opening" && <Burst />}

      <div className="relative w-full max-w-2xl text-center">
        {!showReveal && (
          <div
            className={cn("transition-opacity duration-700", phase === "opening" && "opacity-0")}
          >
            <Reveal>
              <p className="eyebrow">{chapterOne.openingMessage}</p>
            </Reveal>
            <Reveal delay={120} variant="scale" className="mt-10">
              <Envelope phase={phase} />
            </Reveal>
            <Reveal delay={240}>
              <button
                type="button"
                onClick={open}
                className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {chapterOne.openButton}
              </button>
            </Reveal>
          </div>
        )}

        {phase === "opening" && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <Envelope phase={phase} />
          </div>
        )}

        {showReveal && (
          <div
            className={cn(
              "mx-auto max-w-xl",
              !instant &&
                "[&>*]:opacity-0 [&>*]:animate-[reveal-in_1.1s_var(--ease-soft)_forwards]",
            )}
          >
            <p
              className="eyebrow text-gold"
              style={!instant ? { animationDelay: "120ms" } : undefined}
            >
              {chapterOne.congratulationsMessage}
            </p>
            <h1
              className="mt-6 text-balance font-display text-4xl leading-[1.08] sm:text-6xl"
              style={!instant ? { animationDelay: "420ms" } : undefined}
            >
              <span className="text-foreground">{chapterOne.headline}</span>
            </h1>
            <div
              className="mx-auto mt-8 w-24"
              style={!instant ? { animationDelay: "700ms" } : undefined}
            >
              <div className="gold-rule" />
            </div>
            <p
              className="mt-8 whitespace-pre-line font-display text-2xl leading-snug sm:text-3xl"
              style={!instant ? { animationDelay: "900ms" } : undefined}
            >
              {chapterOne.subtitle}
            </p>
            <p
              className="mx-auto mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground"
              style={!instant ? { animationDelay: "1150ms" } : undefined}
            >
              {chapterOne.note}
            </p>
            <div style={!instant ? { animationDelay: "1400ms" } : undefined}>
              <button
                type="button"
                onClick={scrollNext}
                className="mt-12 inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card/80 px-8 py-3 text-sm tracking-wide text-foreground backdrop-blur transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {chapterOne.cta}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
