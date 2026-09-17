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

// const people: Array<{
//   name: string;
//   relation: string;
//   message: string;
// }> = [
//   {
//     name: "GK",
//     relation: "Husband",
//     message:
//       "Our little one, you are already surrounded by so much love. I cannot wait to meet you, hold you close, and begin this beautiful journey together as a family.",
//   },
//   {
//     name: "Mummy",
//     relation: "Mom",
//     message:
//       "My dear daughter and little one, you both are always in my prayers. May our home be filled with happiness, good health, and the beautiful laughter of our little blessing.",
//   },
//   {
//     name: "Daddy",
//     relation: "Dad",
//     message:
//       "A new little member is joining our family, and our hearts are already full. Wishing you both a safe, healthy, and beautiful journey ahead.",
//   },
//   {
//     name: "Atta",
//     relation: "Mom-in-law",
//     message:
//       "Our little baby, you are coming into a family that is eagerly waiting to shower you with love. You are already a precious part of our family.",
//   },
//   {
//     name: "Chachu",
//     relation: "Chachu",
//     message:
//       "Little one, your Chachu is already excited to meet you! You have so many adventures, laughs, and memories waiting for you.",
//   },
//   {
//     name: "Chachi",
//     relation: "Chachi",
//     message:
//       "Sending all my love and blessings to Mom and Baby. Our little one is already so cherished and eagerly awaited by everyone.",
//   },
//   {
//     name: "Baba",
//     relation: "Baba",
//     message:
//       "Little one, you are joining a family filled with love, traditions, and blessings. Your arrival will bring a new kind of happiness into all our lives.",
//   },
//   {
//     name: "Vinay",
//     relation: "Bro",
//     message:
//       "Hey little one! Your Bro is already waiting to spoil you, make you laugh, and create some unforgettable memories with you.",
//   },
//   {
//     name: "Tillu",
//     relation: "Tillu Anna",
//     message:
//       "Our little star, you are already loved more than you know. Tillu Anna is waiting for the day we finally get to meet you!",
//   },
//   {
//     name: "Sheetu",
//     relation: "Sister",
//     message:
//       "To Mom and our little baby, sending you both endless love. I cannot wait to watch our family grow and make beautiful memories together.",
//   },
//   {
//     name: "Kanni",
//     relation: "Small Bro",
//     message:
//       "Little baby, you already have one very excited uncle waiting for you! Get ready for lots of love, laughter, and fun.",
//   },
//   {
//     name: "Ritesh",
//     relation: "Brother-in-law",
//     message:
//       "Sending heartfelt blessings to Mom and Baby. May this new chapter bring our family even more happiness, love, and wonderful memories.",
//   },
// ];

const people: Array<{
  name: string;
  relation: string;
  photo: string;
  message: string;
}> = [
  {
    name: "GK",
    relation: "Husband",
    photo: "/images/blessings/person-01.jpg",
    message:
      "Our little one, you are already surrounded by so much love. I cannot wait to meet you, hold you close, and begin this beautiful journey together as a family.",
  },
  {
    name: "Mummy",
    relation: "Mom",
    photo: "/images/blessings/person-02.jpg",
    message:
      "My dear daughter and little one, you both are always in my prayers. Our home will be filled with happiness, good health, and the beautiful laughter of our little blessing.",
  },
  {
    name: "Daddy",
    relation: "Dad",
    photo: "/images/blessings/person-03.jpg",
    message:
      "A new little member is joining our family, and our hearts are already full. Wishing you both a safe, healthy, and beautiful journey ahead.",
  },
  {
    name: "Atta",
    relation: "Mom-in-law",
    photo: "/images/blessings/person-04.jpg",
    message:
      "Our little baby, you are coming into a family that is eagerly waiting to shower you with love. You are already a precious part of our family.",
  },
  {
    name: "Chachu",
    relation: "Chachu",
    photo: "/images/blessings/person-05.jpg",
    message:
      "Little one, your Chachu is already excited to meet you! You have so many adventures, laughs, and memories waiting for you.",
  },
  {
    name: "Chachi",
    relation: "Chachi",
    photo: "/images/blessings/person-06.jpg",
    message:
      "Sending all my love and blessings to Mom and Baby. Our little one is already so cherished and eagerly awaited by everyone.",
  },
  {
    name: "Baba",
    relation: "Baba",
    photo: "/images/blessings/person-07.jpg",
    message:
      "Little one, you are joining a family filled with love, traditions, and blessings. Your arrival will bring a new kind of happiness into all our lives.",
  },
  {
    name: "Vinay",
    relation: "Bro",
    photo: "/images/blessings/person-08.jpg",
    message:
      "Hey little one! Your Bro is already waiting to spoil you, make you laugh, and create some unforgettable memories with you.",
  },
  {
    name: "Tillu",
    relation: "Tillu Anna",
    photo: "/images/blessings/person-09.jpg",
    message:
      "Our little star, you are already loved more than you know. Tillu Anna is waiting for the day we finally get to meet you!",
  },
  {
    name: "Sheetu",
    relation: "Sister",
    photo: "/images/blessings/person-10.jpg",
    message:
      "To Mom and our little baby, sending you both endless love. I cannot wait to watch our family grow and make beautiful memories together.",
  },
  {
    name: "Kanni",
    relation: "Small Bro",
    photo: "/images/blessings/person-11.jpg",
    message:
      "Little baby, you already have one very excited uncle waiting for you! Get ready for lots of love, laughter, and fun.",
  },
  {
    name: "Ritesh",
    relation: "Brother-in-law",
    photo: "/images/blessings/person-12.jpg",
    message:
      "Sending heartfelt blessings to Mom and Baby. This new chapter will bring our family even more happiness, love, and wonderful memories.",
  },
];

// export const familyMembers: FamilyMember[] = people.map(([name, relation], i) => {

//   const n = String(i + 1).padStart(2, "0");
//   return {
//     id: i + 1,
//     name,
//     relation,
//     photo: `/images/family/person-${n}.jpg`,
//     blessing: { type: "text", content: placeholderBlessing(name) },
//     media: [
//       { type: "image", src: `/images/blessings/person-${n}.jpg`, alt: `${name}'s blessing` },
//       { type: "video", src: `/videos/blessings/person-${n}.mp4` },
//     ],
//   } satisfies FamilyMember;
// });

// export const familyMembers: FamilyMember[] = people.map(({ name, relation, message }, i) => {
//   const n = String(i + 1).padStart(2, "0");

//   return {
//     id: i + 1,
//     name,
//     relation,
//     photo: `/images/blessings/person-${n}.jpg`,
//     blessing: {
//       type: "text",
//       content: message,
//     },
//     media: [
//       {
//         type: "image",
//         src: `/images/blessings/person-${n}.jpg`,
//         alt: `${name}'s photo`,
//       },
//       { type: "video", src: `/videos/blessings/person-${n}.mp4` },
//     ],
//   } satisfies FamilyMember;
// });

export const familyMembers: FamilyMember[] = people.map(
  ({ name, relation, photo, message }, i) => ({
    id: i + 1,
    name,
    relation,
    photo,

    blessing: {
      type: "text",
      content: message,
    },

    media: [
      {
        type: "image",
        src: photo,
        alt: `${name}'s photo`,
      },
      {
        type: "video",
        src: `/videos/blessings/person-${String(i + 1).padStart(2, "0")}.mp4`,
      },
    ],
  }),
);
