/**
 * Chapter 9 — Songs for the Journey (QR codes)
 *
 * HOW TO ADD YOUR QR CODES
 * ------------------------
 * 1. Drop exactly four QR images into public/images/qr/ :
 *      soothing.png   dance.png   bhakti.png   lullabies.png
 * 2. Paste the matching Spotify playlist link into `spotifyUrl`.
 *
 * A missing QR file never shows a broken image — a soft placeholder appears.
 */

export type MusicCategory = {
  id: "soothing" | "dance" | "bhakti" | "lullabies";
  title: string;
  icon: string;
  description: string;
  qrImage: string;
  spotifyUrl: string;
  /** soft background wash for the card */
  wash: string;
  /** accent used for the QR frame */
  frame: string;
};

export const musicIntro = {
  eyebrow: "Chapter Nine",
  title: "Songs for the little one 🎵",
  description: "Some songs are meant to be heard.\nSome become memories.",
  hint: "Scan a code with your phone camera, or tap a card to open the playlist in Spotify.",
};

export const musicOutro = {
  lines: [
    "Play a song.",
    "Make a memory.",
    "One day Baby will hear these songs and know they were part of the story. ❤️",
  ],
  cta: "See our growing memories",
};

export const musicCategories: MusicCategory[] = [
  {
    id: "soothing",
    title: "Songs for Soothing",
    icon: "🌿",
    description: "Peaceful little songs for quiet moments with Mom & Baby.",
    qrImage: "/images/qr/soothing.png",
    spotifyUrl: "",
    wash: "linear-gradient(140deg, var(--sky-soft), var(--cream))",
    frame: "var(--sky-soft)",
  },
  {
    id: "dance",
    title: "Songs to Make Baby Dance",
    icon: "💃",
    description: "For those moments when Baby needs a little music and fun.",
    qrImage: "/images/qr/dance.png",
    spotifyUrl: "",
    wash: "linear-gradient(140deg, var(--blush-soft), var(--cream))",
    frame: "var(--blush-soft)",
  },
  {
    id: "bhakti",
    title: "Bhakti Songs for Baby",
    icon: "🪔",
    description: "A little music, a little prayer, and lots of blessings.",
    qrImage: "/images/qr/bhakti.png",
    spotifyUrl: "",
    wash: "linear-gradient(140deg, var(--cream), var(--blush-soft))",
    frame: "var(--cream)",
  },
  {
    id: "lullabies",
    title: "Lullabies",
    icon: "🌙",
    description: "Soft songs for peaceful nights and sweet dreams.",
    qrImage: "/images/qr/lullabies.png",
    spotifyUrl: "",
    wash: "linear-gradient(140deg, var(--sky-soft), var(--blush-soft))",
    frame: "var(--sky-soft)",
  },
];
