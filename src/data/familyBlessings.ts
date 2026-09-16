/**
 * Chapter 5 — Blessings From Our Family
 *
 * HOW TO EDIT THE 15 FAMILY MEMBERS
 * ---------------------------------
 * 1. Portrait photos go in:        public/images/family/       (e.g. person-01.jpg)
 * 2. Blessing photos go in:        public/images/blessings/    (e.g. person-01.jpg)
 * 3. Blessing videos go in:        public/videos/blessings/    (e.g. person-01.mp4)
 * 4. Edit the entries below: change `name`, `relation`, the `blessing`
 *    (text / image / video) and the `media` array.
 *
 * A blessing can be:
 *    { type: "text",  content: "Your words here…" }
 *    { type: "image", src: "/images/blessings/person-01.jpg" }
 *    { type: "video", src: "/videos/blessings/person-01.mp4" }
 *
 * Any missing file shows a gentle placeholder instead of a broken image.
 */

import type { MediaItem } from "./milestones";

export type Blessing =
  | { type: "text"; content: string }
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; poster?: string };

export type FamilyMember = {
  id: number;
  name: string;
  relation: string;
  /** portrait photo — place the file in public/images/family/ */
  photo: string;
  blessing: Blessing;
  media: MediaItem[];
};

export const blessingsIntro = {
  eyebrow: "Chapter Five",
  title: "Blessings for Mom & Baby",
  description: "Fifteen people. One little baby. So much love already waiting.",
  welcome: ["15 people.", "One little Baby.", "So much love already waiting."],
  prompt: "Tap a face to read their blessing.",
  mediaHeading: "Your blessing for Mom & Baby ❤️",
};

export const diya = {
  hint: "Tap the diya",
  lines: [
    "With God’s grace above and family’s love around,",
    "this beautiful journey begins with joy, health,",
    "and countless blessings.",
  ],
};

const placeholderBlessing = (name: string) =>
  `A little blessing from ${name} will live here. Replace this text in src/data/familyBlessings.ts, or swap it for a photo or video message.`;

const people: Array<[string, string]> = [
  ["Aaji", "Grandmother"],
  ["Ajoba", "Grandfather"],
  ["Aai", "Mom"],
  ["Baba", "Dad"],
  ["Maushi", "Aunt"],
  ["Kaka", "Uncle"],
  ["Mama", "Uncle"],
  ["Mami", "Aunt"],
  ["Didi", "Elder Sister"],
  ["Dada", "Elder Brother"],
  ["Bhabhi", "Sister-in-law"],
  ["Jiju", "Brother-in-law"],
  ["Chhoti", "Cousin"],
  ["Bunty", "Cousin"],
  ["Me", "Your Sibling"],
];

export const familyMembers: FamilyMember[] = people.map(([name, relation], i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    id: i + 1,
    name,
    relation,
    photo: `/images/family/person-${n}.jpg`,
    blessing: { type: "text", content: placeholderBlessing(name) },
    media: [
      { type: "image", src: `/images/blessings/person-${n}.jpg`, alt: `${name}'s blessing` },
      { type: "video", src: `/videos/blessings/person-${n}.mp4` },
    ],
  } satisfies FamilyMember;
});
