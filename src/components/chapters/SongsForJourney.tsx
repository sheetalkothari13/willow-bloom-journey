import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import { MusicCard } from "@/components/music/MusicCard";
import { musicCategories, musicIntro, musicOutro } from "@/data/music";

export function SongsForJourney() {
  const scrollNext = () =>
    document.getElementById("memories")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="songs" className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_15%_0%,var(--sky-soft),transparent_62%),radial-gradient(900px_480px_at_85%_85%,var(--blush-soft),transparent_62%)] opacity-70"
      />
      <FloatingDecor count={10} kinds={["sparkle", "petal"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{musicIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{musicIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl whitespace-pre-line text-pretty text-base leading-relaxed text-muted-foreground">
              {musicIntro.description}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-4 max-w-md text-xs tracking-wide text-muted-foreground/80">
              {musicIntro.hint}
            </p>
          </Reveal>
        </header>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {musicCategories.map((c, i) => (
            <Reveal key={c.id} variant="scale" delay={(i % 2) * 120}>
              <MusicCard category={c} />
            </Reveal>
          ))}
        </div>


        <Reveal variant="scale" className="mt-20 text-center">
          <div className="space-y-1">
            {musicOutro.lines.map((line) => (
              <p key={line} className="font-display text-3xl leading-snug text-balance">
                <span className="text-gradient-petal">{line}</span>
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {musicOutro.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
