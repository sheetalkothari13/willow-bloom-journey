/**
 * Chapter 10 — Section C · Baby's First Year
 *
 * HOW TO ADD PHOTOS
 * -----------------
 * Drop files into:  public/images/future/baby/
 * Named:  month-01.jpg … month-11.jpg  and  birthday.jpg
 * Missing months show a gentle "coming soon" card, never a broken image.
 */

import type { MonthEntry } from "./momBabyJourney";

export const babyYearIntro = {
  title: "Baby's First Year 👶🏻",
  description: "Twelve little chapters — from hello, world to one whole year of you.",
};

export const babyFirstYear: MonthEntry[] = [
  { month: 1, title: "Month 1", image: "/images/future/baby/month-01.jpg", caption: "Hello, world. ❤️" },
  { month: 2, title: "Month 2", image: "/images/future/baby/month-02.jpg", caption: "Two months of loving you." },
  { month: 3, title: "Month 3", image: "/images/future/baby/month-03.jpg", caption: "That first real smile 🌸" },
  { month: 4, title: "Month 4", image: "/images/future/baby/month-04.jpg", caption: "Little giggles all day." },
  { month: 5, title: "Month 5", image: "/images/future/baby/month-05.jpg", caption: "Rolling into everything." },
  { month: 6, title: "Month 6", image: "/images/future/baby/month-06.jpg", caption: "Half a year of you already." },
  { month: 7, title: "Month 7", image: "/images/future/baby/month-07.jpg", caption: "Sitting up like a big one." },
  { month: 8, title: "Month 8", image: "/images/future/baby/month-08.jpg", caption: "Crawling, curious, unstoppable." },
  { month: 9, title: "Month 9", image: "/images/future/baby/month-09.jpg", caption: "Nine months out, nine months in." },
  { month: 10, title: "Month 10", image: "/images/future/baby/month-10.jpg", caption: "Tiny steps, big cheers." },
  { month: 11, title: "Month 11", image: "/images/future/baby/month-11.jpg", caption: "Almost one, already everything." },
  { month: 12, title: "1st Birthday", image: "/images/future/baby/birthday.jpg", caption: "One whole year of you. 🎂" },
];
