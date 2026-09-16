/**
 * Chapter 8 — Just for Fun
 *
 * All quiz content lives here. Add / remove / reorder questions freely —
 * the UI is fully data-driven and the progress indicator adapts automatically.
 *
 * Question types:
 *   "choice"   → pick exactly one option
 *   "multi"    → pick any number of options
 *   "text"     → short free text
 *   "list"     → one or more short free-text entries (e.g. name suggestions)
 */

export type FunQuestionType = "choice" | "multi" | "text" | "list";

export type FunQuestion = {
  id: string;
  emoji: string;
  question: string;
  type: FunQuestionType;
  note?: string;
  placeholder?: string;
  options?: string[];
  /** short label used in the "What everyone said" table */
  shortLabel: string;
};

export const funIntro = {
  eyebrow: "Chapter Eight",
  title: "Just for Fun",
  description: "Everyone has an opinion about this little baby already. 😂💗",
  namePrompt: "What should Baby remember you as?",
  namePlaceholder: "Your name or nickname…",
  nameHint: "No sign-ups, no emails — just your name. 💗",
  startCta: "Let's play ✨",
  viewOthersCta: "View What Others Had To Tell 💌",
};

export const funOutro = {
  thanks: "Thank you! 💗",
  saved: "Your answers have been added to Baby's little collection of memories. 💗",
  waiting: "Baby already has one more little message waiting.",
  seeOthers: "See what everyone else said →",
  again: "Answer again",
};

export const funQuestions: FunQuestion[] = [
  {
    id: "spoil-baby",
    emoji: "💗",
    question: "Who do you think will spoil Baby the most?",
    shortLabel: "Who will spoil Baby?",
    type: "choice",
    options: ["Grandma", "Grandpa", "Mom", "Dad", "Aunt", "Uncle", "Everyone 😂"],
  },
  {
    id: "your-role",
    emoji: "👶",
    question: "What are YOU going to be to Baby?",
    shortLabel: "Their role for Baby",
    type: "choice",
    options: [
      "Grandma",
      "Grandpa",
      "Aunt",
      "Uncle",
      "Cousin",
      "Friend",
      "The favorite person 😎",
      "Other",
    ],
  },
  {
    id: "love-most",
    emoji: "🥹",
    question: "Who do you think will love Baby the most?",
    shortLabel: "Who will love Baby most?",
    type: "choice",
    options: [
      "Mom",
      "Dad",
      "Grandma",
      "Grandpa",
      "Aunt",
      "Uncle",
      "Big cousin",
      "Honestly, everyone ❤️",
    ],
  },
  {
    id: "boy-or-girl",
    emoji: "🎀",
    question: "Just for fun… what do you think Baby will be?",
    shortLabel: "Boy or Girl?",
    type: "choice",
    note: "Just for fun — no scientific predictions here. ❤️",
    options: ["Girl 💗", "Boy 💙", "Surprise! 👶"],
  },
  {
    id: "name-ideas",
    emoji: "📝",
    question: "What names would you suggest for Baby?",
    shortLabel: "Baby name suggestion",
    type: "list",
    placeholder: "Type a name and press Add…",
  },
  {
    id: "personality",
    emoji: "🧸",
    question: "What do you think Baby will be like?",
    shortLabel: "Baby will be…",
    type: "multi",
    note: "Pick as many as you like.",
    options: [
      "Calm & cuddly",
      "Mischievous 😂",
      "Always hungry",
      "Sleepy",
      "Super energetic",
      "A little bit of everything",
    ],
  },
  {
    id: "looks-like",
    emoji: "😂",
    question: "Who will Baby look like?",
    shortLabel: "Baby will look like",
    type: "choice",
    options: ["Mom", "Dad", "Grandma", "Grandpa", "Someone completely new!"],
  },
  {
    id: "first-thing",
    emoji: "✨",
    question: "What is the first thing you want to do with Baby?",
    shortLabel: "First thing with Baby",
    type: "text",
    placeholder: "Hold those tiny hands…",
  },
  {
    id: "first-word",
    emoji: "🗣️",
    question: "What do you think Baby's first word will be?",
    shortLabel: "Baby's first word",
    type: "text",
    placeholder: "Ma? Papa? Something silly?",
  },
  {
    id: "advice",
    emoji: "🍼",
    question: "One tiny piece of advice for the new Mom?",
    shortLabel: "Advice for Mom",
    type: "text",
    placeholder: "Sleep when the baby sleeps…",
  },
  {
    id: "wish",
    emoji: "❤️",
    question: "Leave one little wish for Baby.",
    shortLabel: "Wish for Baby",
    type: "text",
    placeholder: "May you always be…",
  },
];
