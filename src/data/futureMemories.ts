/**
 * Chapter 10 — Section A · Happy Memories
 *
 * HOW TO ADD PHOTOS
 * -----------------
 * Drop files into:  public/images/future/happy-memories/
 * Then point `image` at the file below. Add as many entries as you like.
 * Missing files show a soft "waiting for this memory" placeholder.
 */

export type FutureMemory = {
  id: number;
  image: string;
  caption?: string;
  event?: string;
  date?: string;
  alt?: string;
};

export const happyMemoriesIntro = {
  title: "Happy Memories ❤️",
  description:
    "Every celebration, festival and ordinary happy day that comes after Baby arrives will live right here.",
};

export const happyMemories: FutureMemory[] = [
  { id: 1, image: "/images/future/happy-memories/memory-01.jpg", caption: "Baby's arrival ❤️", event: "The big day" },
  { id: 2, image: "/images/future/happy-memories/memory-02.jpg", caption: "Our first family gathering together", event: "Family Celebration" },
  { id: 3, image: "/images/future/happy-memories/memory-03.jpg", caption: "Baby's first festival ✨", event: "Festival" },
  { id: 4, image: "/images/future/happy-memories/memory-04.jpg", caption: "The welcome party", event: "Baby Shower" },
  { id: 5, image: "/images/future/happy-memories/memory-05.jpg", caption: "First little outing 🌸", event: "First Outing" },
  { id: 6, image: "/images/future/happy-memories/memory-06.jpg", caption: "Somewhere new, all together", event: "Family Trip" },
  { id: 7, image: "/images/future/happy-memories/memory-07.jpg", caption: "Cake, candles and chaos 🎂", event: "Birthday" },
  { id: 8, image: "/images/future/happy-memories/memory-08.jpg", caption: "Just a random happy day", event: "Home" },
  { id: 9, image: "/images/future/happy-memories/memory-09.jpg", caption: "One more memory to come…", event: "Someday" },
];
