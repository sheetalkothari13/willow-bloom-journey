/**
 * Chapter 6 — Before You Became Mom (IMAGES ONLY)
 *
 * HOW TO ADD YOUR PHOTOS
 * ----------------------
 * 1. Drop photo files into:  public/images/scrapbook/
 * 2. Add / remove / reorder entries in `memories` below. Order here = order on the page.
 * 3. `caption`, `date` and `category` are all optional.
 *
 *      { id: 1, category: "childhood", src: "/images/scrapbook/childhood-01.jpg",
 *        caption: "Little Sheetal ❤️", date: "2005" }
 *
 * A missing file never shows a broken image — a soft placeholder appears instead.
 */

export type MemoryCategory =
  | "childhood"
  | "school"
  | "college"
  | "career"
  | "family"
  | "special"
  | "funny"
  | "recent";

export type Memory = {
  id: number;
  src: string;
  caption?: string;
  date?: string;
  category?: MemoryCategory;
  alt?: string;
};

export const memoryCategories: Array<{ id: MemoryCategory; label: string; emoji: string }> = [
  { id: "childhood", label: "Childhood", emoji: "👧" },
  { id: "school", label: "School", emoji: "🏫" },
  { id: "college", label: "College", emoji: "🎓" },
  { id: "career", label: "Career", emoji: "👩‍💻" },
  { id: "family", label: "Family", emoji: "👨‍👩‍👧" },
  { id: "special", label: "Special Memories", emoji: "❤️" },
  { id: "funny", label: "Funny Moments", emoji: "😂" },
  { id: "recent", label: "Recent Memories", emoji: "✨" },
];

export const memoriesIntro = {
  eyebrow: "Chapter Six",
  title: "Before You Became Mom",
  description: "The girl, the sister, the friend — every version of you that led to this one.",
  filterAll: "Everything",
};

export const memoriesOutro = {
  line: "And now begins your most beautiful chapter yet…",
  verse: ["From being a daughter,", "a sister,", "a friend,", "a woman…", "to becoming MOM. ❤️"],
  cta: "Read the letters 💌",
};

export const memories: Memory[] = [
  { id: 1, category: "childhood", src: "/images/scrapbook/childhood-01.jpg", caption: "Little you, big smile.", date: "2000" },
  { id: 2, category: "childhood", src: "/images/scrapbook/childhood-02.jpg", caption: "Sunday afternoons at home.", date: "2002" },
  { id: 3, category: "school", src: "/images/scrapbook/school-01.jpg", caption: "Uniform, ribbons, and mischief.", date: "2006" },
  { id: 4, category: "school", src: "/images/scrapbook/school-02.jpg", caption: "Those were the days…", date: "2008" },
  { id: 5, category: "college", src: "/images/scrapbook/college-01.jpg", caption: "Late nights, best friends.", date: "2012" },
  { id: 6, category: "college", src: "/images/scrapbook/college-02.jpg", caption: "Dreaming out loud.", date: "2013" },
  { id: 7, category: "career", src: "/images/scrapbook/career-01.jpg", caption: "First day, first paycheck.", date: "2016" },
  { id: 8, category: "career", src: "/images/scrapbook/career-02.jpg", caption: "You made it look easy.", date: "2018" },
  { id: 9, category: "family", src: "/images/scrapbook/family-01.jpg", caption: "Our whole world, in one frame." },
  { id: 10, category: "family", src: "/images/scrapbook/family-02.jpg", caption: "Home is wherever you are." },
  { id: 11, category: "special", src: "/images/scrapbook/special-01.jpg", caption: "The day everything changed." },
  { id: 12, category: "special", src: "/images/scrapbook/special-02.jpg", caption: "Held close, always." },
  { id: 13, category: "funny", src: "/images/scrapbook/funny-01.jpg", caption: "We still laugh about this one.", date: "2019" },
  { id: 14, category: "funny", src: "/images/scrapbook/funny-02.jpg", caption: "Caught mid-giggle." },
  { id: 15, category: "recent", src: "/images/scrapbook/recent-01.jpg", caption: "Glowing, even before we knew.", date: "2026" },
  { id: 16, category: "recent", src: "/images/scrapbook/recent-02.jpg", caption: "Just before the news.", date: "2026" },
];
