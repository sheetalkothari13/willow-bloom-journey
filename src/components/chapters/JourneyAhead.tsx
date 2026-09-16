import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import { MilestoneGallery } from "@/components/gallery/MilestoneGallery";
import { milestones, milestonesIntro, milestonesOutro } from "@/data/milestones";

export function JourneyAhead() {
  return (
    <section
      id="ahead"
      className="relative scroll-mt-24 overflow-hidden bg-cream/70 px-5 py-24 sm:px-8 sm:py-32"
    >
      <FloatingDecor count={8} kinds={["petal", "sparkle", "butterfly"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{milestonesIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{milestonesIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {milestonesIntro.description}
            </p>
          </Reveal>
        </header>

        <div className="mt-14">
          <MilestoneGallery items={milestones} />
        </div>

        <Reveal variant="scale" className="mt-20 text-center">
          <p className="font-display text-3xl leading-snug text-balance">
            <span className="text-gradient-petal">{milestonesOutro.line}</span>
          </p>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
            {milestonesOutro.transition}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
