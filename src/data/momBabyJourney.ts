/**
 * Chapter 10 — Section B · Mom & Baby, 9 Months of Love
 *
 * HOW TO ADD PHOTOS
 * -----------------
 * Drop files into:  public/images/future/mom/
 * Named:  month-01.jpg … month-09.jpg
 * Missing months show a gentle "coming soon" card, never a broken image.
 */

export type MonthEntry = {
  month: number;
  title: string;
  image: string;
  caption: string;
};

export const momBabyIntro = {
  title: "Mom & Baby — 9 Months of Love 🤰❤️",
  description: "One photo a month, from the very beginning to the day everything changes.",
};

export const momBabyJourney: MonthEntry[] = [
  { month: 1, title: "Month 1", image: "/images/future/mom/month-01.jpg", caption: "Where our journey began…" },
  { month: 2, title: "Month 2", image: "/images/future/mom/month-02.jpg", caption: "Growing together…" },
  { month: 3, title: "Month 3", image: "/images/future/mom/month-03.jpg", caption: "A little secret, still ours." },
  { month: 4, title: "Month 4", image: "/images/future/mom/month-04.jpg", caption: "The world starts to notice ✨" },
  { month: 5, title: "Month 5", image: "/images/future/mom/month-05.jpg", caption: "First little flutters." },
  { month: 6, title: "Month 6", image: "/images/future/mom/month-06.jpg", caption: "Halfway, and glowing." },
  { month: 7, title: "Month 7", image: "/images/future/mom/month-07.jpg", caption: "Little kicks, big love." },
  { month: 8, title: "Month 8", image: "/images/future/mom/month-08.jpg", caption: "Almost ready for you 🌸" },
  { month: 9, title: "Month 9", image: "/images/future/mom/month-09.jpg", caption: "So close to meeting you…" },
];
