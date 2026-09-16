import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Standard wrapper for every chapter of the story.
 * Gives consistent rhythm, headings and reveal animation.
 */
export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "plain",
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  tone?: "plain" | "blush" | "sky" | "cream";
  className?: string;
}) {
  const toneClass = {
    plain: "",
    blush: "bg-blush-soft/50",
    sky: "bg-sky-soft/50",
    cream: "bg-cream/70",
  }[tone];

  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32", toneClass, className)}
    >
      <div className="mx-auto w-full max-w-5xl">
        <header className="text-center">
          {eyebrow ? (
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
          ) : null}
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance text-4xl sm:text-5xl">{title}</h2>
          </Reveal>
          <Reveal delay={140} className="mx-auto mt-6 max-w-[6rem]">
            <div className="gold-rule" />
          </Reveal>
          {description ? (
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </Reveal>
          ) : null}
        </header>

        {children ? <div className="mt-14">{children}</div> : null}
      </div>
    </section>
  );
}

/** Simple placeholder body used until a chapter is built out. */
export function SectionPlaceholder({ note }: { note?: string }) {
  return (
    <Reveal variant="scale" className="surface-card surface-card-hover p-10 text-center">
      <p className="font-display text-2xl">Coming soon</p>
      <p className="mt-3 text-sm text-muted-foreground">
        {note ?? "This chapter is being written with love."}
      </p>
    </Reveal>
  );
}
