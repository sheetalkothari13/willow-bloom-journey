/**
 * Chapter 4 — The Journey Ahead
 *
 * HOW TO ADD YOUR OWN PHOTOS / VIDEOS
 * -----------------------------------
 * 1. Drop image files into:  public/images/milestones/
 * 2. Drop video files into:  public/videos/milestones/
 * 3. Point the `media` array of a milestone below at those files, e.g.
 *
 *      media: [
 *        { type: "image", src: "/images/milestones/first-scan-1.jpg", alt: "First scan" },
 *        { type: "video", src: "/videos/milestones/first-scan.mp4", poster: "/images/milestones/first-scan-1.jpg" },
 *      ]
 *
 * Leave `media: []` (or a path with no file yet) and a soft
 * "Memory coming soon..." placeholder is shown instead — never a broken image.
 */

export type MediaItem =
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "video"; src: string; poster?: string; caption?: string };

export type Milestone = {
  id: string;
  emoji: string;
  title: string;
  /** one short line, 1–2 lines max */
  caption: string;
  media: MediaItem[];
};

export const milestonesIntro = {
  eyebrow: "Chapter Four",
  title: "The Journey Ahead",
  description: "Little moments that become lifelong memories.",
};

export const milestonesOutro = {
  line: "Every little moment becomes a memory.",
  transition: "And now… a few blessings from the people who already love you and Baby. ❤️",
  cta: "Read the blessings 🌸",
};

export const milestones: Milestone[] = [
  {
    id: "week-6",
    emoji: "🌱",
    title: "Week 6 / First Beginning",
    caption: "The week we found out you were on your way.",
    media: [],
  },
  {
    id: "first-scan",
    emoji: "🩺",
    title: "First Scan",
    caption: "Our first little glimpse of you.",
    media: [],
  },
  {
    id: "early-changes",
    emoji: "💗",
    title: "Early Pregnancy Changes",
    caption: "Tiny signs that something big was happening.",
    media: [],
  },
  {
    id: "first-kicks",
    emoji: "🫶",
    title: "First Little Kicks",
    caption: "The first hello, from the inside.",
    media: [],
  },
  {
    id: "first-trimester",
    emoji: "🌸",
    title: "First Trimester",
    caption: "Slow mornings, big news, quiet joy.",
    media: [],
  },
  {
    id: "second-trimester",
    emoji: "🦋",
    title: "Second Trimester",
    caption: "The glow everyone keeps talking about.",
    media: [],
  },
  {
    id: "growing-baby",
    emoji: "👣",
    title: "Growing Baby / More Kicks",
    caption: "Little feet, learning to dance.",
    media: [],
  },
  {
    id: "baby-shower",
    emoji: "🎀",
    title: "Baby Shower",
    caption: "A room full of love, all for you two.",
    media: [],
  },
  {
    id: "maternity",
    emoji: "📸",
    title: "Maternity Memories",
    caption: "You, glowing, exactly as you are.",
    media: [],
  },
  {
    id: "third-trimester",
    emoji: "🍼",
    title: "Third Trimester",
    caption: "Almost there, little one.",
    media: [],
  },
  {
    id: "preparing",
    emoji: "🎁",
    title: "Preparing for Baby",
    caption: "Tiny clothes folded with the biggest hopes.",
    media: [],
  },
  {
    id: "meeting-baby",
    emoji: "👶",
    title: "Meeting Baby",
    caption: "The moment the whole story begins.",
    media: [],
  },
];
