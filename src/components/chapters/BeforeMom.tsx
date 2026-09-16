import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import { ScrapbookGallery } from "@/components/gallery/ScrapbookGallery";
import { memories, memoriesIntro, memoriesOutro } from "@/data/memories";

export function BeforeMom() {
  const scrollNext = () =>
    document.getElementById("letters")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="before"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* soft pink/blue paper texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_15%_0%,var(--blush-soft),transparent_60%),radial-gradient(900px_500px_at_85%_100%,var(--sky-soft),transparent_60%)] opacity-70"
      />
      <FloatingDecor count={8} kinds={["petal", "heart", "sparkle"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{memoriesIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{memoriesIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {memoriesIntro.description}
            </p>
          </Reveal>
        </header>

        <div className="mt-12">
          <ScrapbookGallery items={memories} />
        </div>

        <Reveal variant="scale" className="mt-20 text-center">
          <p className="font-display text-3xl leading-snug text-balance">
            <span className="text-gradient-petal">{memoriesOutro.line}</span>
          </p>
          <div className="mx-auto mt-6 max-w-md space-y-1">
            {memoriesOutro.verse.map((line) => (
              <p
                key={line}
                className="text-lg leading-relaxed text-foreground/80"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                {line}
              </p>
            ))}
          </div>
          <button
            type="button"
            onClick={scrollNext}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {memoriesOutro.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
