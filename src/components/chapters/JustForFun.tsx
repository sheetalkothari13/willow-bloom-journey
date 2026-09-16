import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { FloatingDecor } from "@/components/decor/FloatingDecor";
import { FunQuiz } from "@/components/fun/FunQuiz";
import { ResponsesModal, ViewOthersButton } from "@/components/fun/ResponsesModal";
import { FamilyGallery } from "@/components/gallery/FamilyGallery";
import { funIntro } from "@/data/funQuestions";
import { familyGallery, familyGalleryIntro, familyGalleryOutro } from "@/data/familyGallery";

export function JustForFun() {
  const [showResponses, setShowResponses] = useState(false);

  return (
    <section id="fun" className="relative scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_460px_at_20%_0%,var(--sky-soft),transparent_62%),radial-gradient(900px_480px_at_85%_80%,var(--blush-soft),transparent_62%)] opacity-80"
      />
      <FloatingDecor count={10} kinds={["heart", "sparkle", "butterfly"]} />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="text-center">
          <Reveal>
            <p className="eyebrow">{funIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{funIntro.title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              {funIntro.description}
            </p>
          </Reveal>
          {/* Mobile: button sits under the intro */}
          <Reveal delay={260} className="mt-6 lg:hidden">
            <ViewOthersButton
              label={funIntro.viewOthersCta}
              onClick={() => setShowResponses(true)}
            />
          </Reveal>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
          <Reveal variant="scale">
            <FunQuiz onOpenResponses={() => setShowResponses(true)} />
          </Reveal>

          {/* Desktop: button on the right of the quiz area */}
          <Reveal delay={120} className="hidden lg:block lg:sticky lg:top-28">
            <div className="surface-card p-6 text-center">
              <p className="text-3xl" aria-hidden="true">
                💌
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Curious what everyone else guessed?
              </p>
              <ViewOthersButton
                className="mt-4 w-full"
                label={funIntro.viewOthersCta}
                onClick={() => setShowResponses(true)}
              />
            </div>
          </Reveal>
        </div>

        {/* Family photo gallery */}
        <div className="mt-24">
          <header className="text-center">
            <Reveal>
              <h3 className="text-balance font-display text-3xl sm:text-4xl">
                {familyGalleryIntro.title}
              </h3>
            </Reveal>
            <Reveal delay={140} className="mx-auto mt-5 max-w-[6rem]">
              <div className="gold-rule" />
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                {familyGalleryIntro.description}
              </p>
            </Reveal>
          </header>

          <div className="mt-12">
            <FamilyGallery items={familyGallery} />
          </div>
        </div>

        <Reveal variant="scale" className="mt-20 text-center">
          <div className="space-y-1">
            {familyGalleryOutro.lines.map((line) => (
              <p key={line} className="font-display text-3xl leading-snug text-balance">
                <span className="text-gradient-petal">{line}</span>
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {showResponses ? <ResponsesModal onClose={() => setShowResponses(false)} /> : null}
    </section>
  );
}
