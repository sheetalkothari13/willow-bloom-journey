export type SiteSection = {
  /** anchor id used for in-page navigation */
  id: string;
  /** short label used in the navigation */
  label: string;
  /** section heading */
  title: string;
  /** small uppercase kicker above the title */
  eyebrow: string;
  /** one-line description — replace with real content per section later */
  description: string;
};

/**
 * Section order for the whole experience.
 * Each entry gets a container on the home page; content is filled in later,
 * one section at a time.
 */
export const sections: SiteSection[] = [
  {
    id: "surprise",
    label: "The Surprise",
    eyebrow: "Chapter One",
    title: "The Surprise",
    description: "An envelope waiting to be opened, and a secret waiting to be told.",
  },
  {
    id: "journey",
    label: "Pregnancy Journey",
    eyebrow: "Chapter Two",
    title: "Your Pregnancy Journey",
    description: "Week by week, baby's growth and your own.",
  },
  {
    id: "guide",
    label: "Mom-to-Be Guide",
    eyebrow: "Chapter Three",
    title: "Mom-to-Be Guide",
    description: "Gentle guidance on nourishment, rest, movement and care.",
  },
  {
    id: "ahead",
    label: "Journey Ahead",
    eyebrow: "Chapter Four",
    title: "The Journey Ahead",
    description: "The milestones and little moments still to come.",
  },
  {
    id: "blessings",
    label: "Blessings",
    eyebrow: "Chapter Five",
    title: "Family Blessings",
    description: "Blessings for mother and child.",
  },
  {
    id: "before",
    label: "Before You Became Mom",
    eyebrow: "Chapter Six",
    title: "Before You Became Mom",
    description: "A scrapbook of the girl you were before this beautiful new name.",
  },
  {
    id: "letters",
    label: "Letters for Baby",
    eyebrow: "Chapter Seven",
    title: "Letters for Baby",
    description: "Notes from everyone who already loves this little one.",
  },
  {
    id: "fun",
    label: "Just for Fun",
    eyebrow: "Chapter Eight",
    title: "Just for Fun",
    description: "Playful guesses, name ideas and family predictions.",
  },
  {
    id: "songs",
    label: "Songs",
    eyebrow: "Chapter Nine",
    title: "Songs for the Journey",
    description: "A calm little playlist for slow evenings.",
  },
  {
    id: "memories",
    label: "Growing Memories",
    eyebrow: "Chapter Ten",
    title: "Our Growing Memories",
    description: "An album that keeps filling itself — before, and long after, Baby arrives.",
  },
];
