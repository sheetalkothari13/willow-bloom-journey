import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import { ScrapPhotoGrid, type ScrapPhoto } from "@/components/gallery/ScrapPhotoGrid";
import { happyMemories, happyMemoriesIntro } from "@/data/futureMemories";
import { momBabyIntro, momBabyJourney } from "@/data/momBabyJourney";
import { babyFirstYear, babyYearIntro } from "@/data/babyFirstYear";
import { babyName } from "@/data/babyName";

const closing = {
  lines: ["From the first little beginning…", "…to every memory that comes after."],
  big: ["❤️ A lifetime of memories awaits. ❤️", "👶🏻 Welcome to the family, Little One. 👶🏻"],
};

function SubHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="text-center">
      <Reveal>
        <h3 className="text-balance font-display text-3xl sm:text-4xl">{title}</h3>
      </Reveal>
      <Reveal delay={140} className="mx-auto mt-5 max-w-[6rem]">
        <div className="gold-rule" />
      </Reveal>
      <Reveal delay={200}>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </Reveal>
    </header>
  );
}

export function GrowingMemories() {
  const happy: ScrapPhoto[] = happyMemories.map((m) => ({
    id: `happy-${m.id}`,
    image: m.image,
    ...(m.caption ? { caption: m.caption } : {}),
    ...(m.event ? { event: m.event } : {}),
    ...(m.date ? { date: m.date } : {}),
  }));

  const mom: ScrapPhoto[] = momBabyJourney.map((m) => ({
    id: `mom-${m.month}`,
    image: m.image,
    caption: m.caption,
    badge: m.title,
    event: m.title,
  }));

  const baby: ScrapPhoto[] = babyFirstYear.map((m) => ({
    id: `baby-${m.month}`,
    image: m.image,
    caption: m.caption,
    badge: m.title,
    event: m.title,
  }));

  return (
    <section
      id="memories"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_80%_0%,var(--blush-soft),transparent_62%),radial-gradient(900px_480px_at_10%_70%,var(--sky-soft),transparent_62%)] opacity-75"
      />
      <FloatingDecor count={12} kinds={["heart", "petal", "sparkle"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">Chapter Ten</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">Our Growing Memories</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              An album that isn't finished yet — it fills itself, one memory at a time.
            </p>
          </Reveal>
        </header>

        {/* A — Happy Memories */}
        <div className="mt-20">
          <SubHeader
            title={happyMemoriesIntro.title}
            description={happyMemoriesIntro.description}
          />
          <div className="mt-12">
            <ScrapPhotoGrid items={happy} title="Happy Memories" emptyIcon="🌸" />
          </div>
        </div>

        {/* B — Mom & Baby */}
        <div className="mt-24">
          <SubHeader title={momBabyIntro.title} description={momBabyIntro.description} />
          <div className="mt-12">
            <ScrapPhotoGrid items={mom} title="Mom & Baby" emptyIcon="🤍" columns="four" />
          </div>
        </div>

        {/* C — Baby's First Year */}
        <div className="mt-24">
          <SubHeader title={babyYearIntro.title} description={babyYearIntro.description} />
          <div className="mt-12">
            <ScrapPhotoGrid items={baby} title="Baby's First Year" emptyIcon="✨" columns="four" />
          </div>
        </div>

        {/* Final moment */}
        <div className="mt-28 text-center">
          {closing.lines.map((line, i) => (
            <Reveal key={line} delay={i * 160}>
              <p className="mt-2 font-display text-2xl leading-snug text-muted-foreground sm:text-3xl">
                {line}
              </p>
            </Reveal>
          ))}

          <Reveal variant="scale" delay={320} className="mt-10">
            <div className="space-y-3">
              {closing.big.map((line) => (
                <p
                  key={line}
                  className="font-display text-4xl leading-snug text-balance sm:text-5xl"
                >
                  <span className="text-gradient-petal">{line}</span>
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={420} className="mt-10">
            <div
              className="mx-auto flex max-w-xs items-center justify-center gap-3 text-2xl"
              aria-hidden="true"
            >
              {["❤️", "🌸", "✨", "🌙", "🤍"].map((e, i) => (
                <span
                  key={e}
                  className="animate-breathe"
                  style={{ animationDelay: `${i * 260}ms` }}
                >
                  {e}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Final reveal — Baby's name */}
          <Reveal variant="scale" delay={520} className="mt-24 sm:mt-32">
            <div className="relative mx-auto max-w-2xl px-6 py-16 sm:py-20">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[var(--radius-xl)] bg-[radial-gradient(420px_240px_at_35%_35%,var(--blush-soft),transparent_70%),radial-gradient(420px_240px_at_65%_65%,var(--sky-soft),transparent_70%)] opacity-90"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
              >
                {["✨", "✨", "✨", "✨"].map((s, i) => (
                  <span
                    key={i}
                    className="absolute animate-twinkle text-sm"
                    style={{
                      left: `${12 + i * 24}%`,
                      top: i % 2 === 0 ? "18%" : "72%",
                      animationDelay: `${i * 700}ms`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </span>

              <div className="relative">
                <p className="eyebrow">{babyName.label}</p>
                <p className="mt-6 font-display text-5xl leading-tight text-balance sm:text-6xl">
                  <span className="text-gradient-petal">{babyName.name}</span>
                </p>
                <p className="mt-8 text-2xl animate-breathe" aria-hidden="true">
                  {babyName.closingEmoji}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
