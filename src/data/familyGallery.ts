/**
 * Chapter 8 — Moments We've Shared (PHOTO ONLY)
 *
 * HOW TO ADD YOUR PHOTOS
 * ----------------------
 * 1. Drop photo files into:  public/images/family-gallery/
 * 2. Add / remove / reorder entries below. Order here = order on the page.
 * 3. `caption`, `event` and `date` are optional.
 *
 * A missing file never shows a broken image — a soft placeholder appears instead.
 */

export type FamilyPhoto = {
  id: number;
  src: string;
  caption?: string;
  event?: string;
  date?: string;
  alt?: string;
};

export const familyGalleryIntro = {
  title: "Moments We've Shared ❤️",
  description:
    "Festivals, weddings, birthdays and all the ordinary days in between — the family this little one is being born into.",
};

export const familyGalleryOutro = {
  lines: [
    "So many memories.",
    "So many people.",
    "And now… one more little person to make memories with. ❤️",
  ],
  cta: "Continue the story",
};

export const familyGallery: FamilyPhoto[] = [
  { id: 1, src: "/images/family-gallery/family-01.jpg", caption: "Diwali with the family ✨", event: "Diwali", date: "2025" },
  { id: 2, src: "/images/family-gallery/family-02.jpg", caption: "Just another family day ❤️", event: "Home" },
  { id: 3, src: "/images/family-gallery/family-03.jpg", caption: "Everyone dressed up!", event: "Wedding", date: "2024" },
  { id: 4, src: "/images/family-gallery/family-04.jpg", caption: "Cake on the face, as always 😂", event: "Birthday", date: "2024" },
  { id: 5, src: "/images/family-gallery/family-05.jpg", caption: "Holi colours everywhere", event: "Holi", date: "2025" },
  { id: 6, src: "/images/family-gallery/family-06.jpg", caption: "That trip we still talk about", event: "Trip", date: "2023" },
  { id: 7, src: "/images/family-gallery/family-07.jpg", caption: "Rakhi mornings", event: "Raksha Bandhan" },
  { id: 8, src: "/images/family-gallery/family-08.jpg", caption: "Someone was definitely laughing 😄", event: "Funny" },
  { id: 9, src: "/images/family-gallery/family-09.jpg", caption: "The whole gang together", event: "Gathering", date: "2025" },
  { id: 10, src: "/images/family-gallery/family-10.jpg", caption: "Late-night chai and stories", event: "Home" },
  { id: 11, src: "/images/family-gallery/family-11.jpg", caption: "Festival lights and full plates", event: "Festival", date: "2024" },
  { id: 12, src: "/images/family-gallery/family-12.jpg", caption: "One more for the album 📸", event: "Special" },
];
