import { useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import {
  guideCards,
  guideTransition,
  momGuideIntro,
  notSureCategories,
  notSureIntro,
} from "@/data/mom-guide";

function GuideCardItem({
  card,
  open,
  onToggle,
}: {
  card: (typeof guideCards)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={cn("surface-card overflow-hidden", !open && "surface-card-hover")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-blush-soft/70 text-lg">
          {card.emoji}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-xl text-foreground">{card.title}</span>
          <span className="block text-sm text-muted-foreground">{card.teaser}</span>
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "text-gold transition-transform duration-500 ease-[var(--ease-soft)]",
            open && "rotate-45",
          )}
        >
          ✦
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-500 ease-[var(--ease-soft)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
            {card.points.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-blush" aria-hidden="true">
                  ·
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function MomGuide() {
  const [openId, setOpenId] = useState<string | null>(guideCards[0]!.id);
  const [category, setCategory] = useState<string | null>(null);
  const active = notSureCategories.find((c) => c.id === category);

  return (
    <section
      id="guide"
      className="relative scroll-mt-24 overflow-hidden bg-sky-soft/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <FloatingDecor count={7} kinds={["heart", "sparkle"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{momGuideIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{momGuideIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {momGuideIntro.subtitle}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-3 max-w-xl text-sm italic text-muted-foreground/80">
              {momGuideIntro.note}
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {guideCards.map((card, i) => (
            <Reveal key={card.id} delay={i * 60} variant="scale">
              <GuideCardItem
                card={card}
                open={openId === card.id}
                onToggle={() => setOpenId((v) => (v === card.id ? null : card.id))}
              />
            </Reveal>
          ))}
        </div>

        {/* Not sure about something? */}
        <div className="mt-20 text-center">
          <Reveal>
            <h3 className="font-display text-3xl">{notSureIntro.title}</h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 text-sm text-muted-foreground">{notSureIntro.subtitle}</p>
          </Reveal>

          <Reveal delay={140} className="mt-8 flex flex-wrap justify-center gap-3">
            {notSureCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory((v) => (v === c.id ? null : c.id))}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2 text-sm transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5",
                  category === c.id
                    ? "bg-card text-foreground shadow-[var(--shadow-float)]"
                    : "bg-card/70 text-muted-foreground backdrop-blur",
                )}
              >
                <span aria-hidden="true">{c.emoji}</span>
                {c.label}
              </button>
            ))}
          </Reveal>

          {active ? (
            <div
              key={active.id}
              className="surface-card mx-auto mt-8 max-w-xl p-8 text-left opacity-0 animate-[reveal-in_0.7s_var(--ease-soft)_forwards]"
            >
              <p className="eyebrow">
                {active.emoji} {active.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.body}</p>
            </div>
          ) : null}
        </div>

        {/* Disclaimer + sources */}
        {/*
          <div className="mt-16 text-center text-xs leading-relaxed text-muted-foreground/80">
            <p className="mx-auto max-w-xl">{guideDisclaimer}</p>
            <p className="mt-2">
              General information adapted from{" "}
              {guideSources.map((s, i) => (
                <span key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    {s.label}
                  </a>
                  {i < guideSources.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
          </div>
          */}

        {/* Transition to Chapter 4 */}
        <Reveal variant="scale" className="mt-20 text-center">
          <p className="mx-auto max-w-lg text-balance font-display text-3xl leading-snug">
            <span className="text-gradient-petal">{guideTransition.text}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
