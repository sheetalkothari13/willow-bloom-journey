import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import { LettersGallery } from "@/components/gallery/LettersGallery";
import { babyLetters, lettersIntro, lettersOutro } from "@/data/babyLetters";

export function LettersForBaby() {
  return (
    <section
      id="letters"
      className="relative scroll-mt-24 overflow-hidden bg-cream/70 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_80%_0%,var(--blush-soft),transparent_62%),radial-gradient(800px_460px_at_10%_90%,var(--sky-soft),transparent_62%)] opacity-70"
      />
      <FloatingDecor count={9} kinds={["heart", "petal", "sparkle"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{lettersIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{lettersIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p
              className="mx-auto mt-6 max-w-md text-pretty text-xl leading-relaxed text-foreground/80"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              {lettersIntro.description}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {lettersIntro.prompt}
            </p>
          </Reveal>
        </header>

        <div className="mt-12">
          <LettersGallery items={babyLetters} />
        </div>

        <Reveal variant="scale" className="mt-20 text-center">
          <div className="space-y-1">
            {lettersOutro.lines.map((line) => (
              <p key={line} className="font-display text-3xl leading-snug text-balance">
                <span className="text-gradient-petal">{line}</span>
              </p>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
            {lettersOutro.transition}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
