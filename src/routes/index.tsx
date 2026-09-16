import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { TheSurprise } from "@/components/chapters/TheSurprise";
import { PregnancyJourney } from "@/components/chapters/PregnancyJourney";
import { MomGuide } from "@/components/chapters/MomGuide";
import { JourneyAhead } from "@/components/chapters/JourneyAhead";
import { FamilyBlessings } from "@/components/chapters/FamilyBlessings";
import { BeforeMom } from "@/components/chapters/BeforeMom";
import { LettersForBaby } from "@/components/chapters/LettersForBaby";
import { JustForFun } from "@/components/chapters/JustForFun";
import { SongsForJourney } from "@/components/chapters/SongsForJourney";
import { GrowingMemories } from "@/components/chapters/GrowingMemories";
import { ChapterDisclosure } from "@/components/layout/ChapterDisclosure";
import { sections } from "@/data/sections";

const title = "Bump & Beyond";
const description =
  "A gentle, handmade keepsake for my sister — a pregnancy journey, family blessings and letters for the little one on the way.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  return (
    <main className="relative overflow-x-hidden">
      <SiteNav />

      <TheSurprise />
      <ChapterDisclosure
        chapter={sections[1].eyebrow}
        title={sections[1].title}
        description={sections[1].description}
        open={openChapter === sections[1].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[1].id : null)}
      >
        <PregnancyJourney />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[2].eyebrow}
        title={sections[2].title}
        description={sections[2].description}
        open={openChapter === sections[2].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[2].id : null)}
      >
        <MomGuide />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[3].eyebrow}
        title={sections[3].title}
        description={sections[3].description}
        open={openChapter === sections[3].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[3].id : null)}
      >
        <JourneyAhead />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[4].eyebrow}
        title={sections[4].title}
        description={sections[4].description}
        open={openChapter === sections[4].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[4].id : null)}
      >
        <FamilyBlessings />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[5].eyebrow}
        title={sections[5].title}
        description={sections[5].description}
        open={openChapter === sections[5].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[5].id : null)}
      >
        <BeforeMom />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[6].eyebrow}
        title={sections[6].title}
        description={sections[6].description}
        open={openChapter === sections[6].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[6].id : null)}
      >
        <LettersForBaby />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[7].eyebrow}
        title={sections[7].title}
        description={sections[7].description}
        open={openChapter === sections[7].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[7].id : null)}
      >
        <JustForFun />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[8].eyebrow}
        title={sections[8].title}
        description={sections[8].description}
        open={openChapter === sections[8].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[8].id : null)}
      >
        <SongsForJourney />
      </ChapterDisclosure>
      <ChapterDisclosure
        chapter={sections[9].eyebrow}
        title={sections[9].title}
        description={sections[9].description}
        open={openChapter === sections[9].id}
        onOpenChange={(open) => setOpenChapter(open ? sections[9].id : null)}
      >
        <GrowingMemories />
      </ChapterDisclosure>

      <SiteFooter />
    </main>
  );
}
