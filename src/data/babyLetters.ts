/**
 * Chapter 7 — Letters For Baby (IMAGES + VIDEOS)
 *
 * HOW TO ADD REAL LETTERS
 * -----------------------
 * 1. Cover / thumbnail images:  public/images/letters/     (e.g. grandma-cover.jpg)
 * 2. Letter photos:             public/images/letters/     (e.g. grandma-letter.jpg)
 * 3. Video messages:            public/videos/letters/     (e.g. grandma-message.mp4)
 * 4. Edit the entries below — each person can have any mix of images and videos.
 *
 *      {
 *        id: 1, name: "Grandma", relation: "Grandmother",
 *        thumbnail: "/images/letters/grandma-cover.jpg",
 *        media: [
 *          { type: "image", src: "/images/letters/grandma-letter.jpg" },
 *          { type: "video", src: "/videos/letters/grandma-message.mp4" },
 *        ],
 *      }
 *
 * Missing files never break — a soft "Your letter will live here." placeholder shows instead.
 */

import type { MediaItem } from "./milestones";

export type BabyLetter = {
  id: number;
  name: string;
  relation: string;
  /** small cover image shown on the envelope — optional */
  thumbnail?: string;
  /** optional short line shown under the name */
  note?: string;
  media: MediaItem[];
};

export const lettersIntro = {
  eyebrow: "Chapter Seven",
  title: "Letters For Baby 💌",
  description: "You haven't met us yet… but you're already loved.",
  prompt: "Tap an envelope to open that letter.",
};

export const lettersOutro = {
  lines: ["So many people.", "So many blessings.", "❤️ One very lucky little baby. ❤️"],
  transition: "And this is only the beginning…",
  cta: "Keep going ✨",
};

const people: Array<[string, string, string]> = [
  ["Grandma", "Grandmother", "grandma"],
  ["Grandpa", "Grandfather", "grandpa"],
  ["Aai", "Nani", "aai"],
  ["Baba", "Nana", "baba"],
  ["Maushi", "Aunt", "maushi"],
  ["Kaka", "Uncle", "kaka"],
  ["Didi", "Elder Sister", "didi"],
  ["Dada", "Elder Brother", "dada"],
  ["Best Friend", "Mom's Best Friend", "bestie"],
  ["Cousins", "Your Cousins", "cousins"],
  ["Papa", "Your Dad", "papa"],
  ["Me", "Your Mama's Sibling", "me"],
];

export const babyLetters: BabyLetter[] = people.map(([name, relation, slug], i) => ({
  id: i + 1,
  name,
  relation,
  thumbnail: `/images/letters/${slug}-cover.jpg`,
  media: [
    { type: "image", src: `/images/letters/${slug}-letter.jpg`, alt: `A letter from ${name}` },
    { type: "video", src: `/videos/letters/${slug}-message.mp4` },
  ],
}));
