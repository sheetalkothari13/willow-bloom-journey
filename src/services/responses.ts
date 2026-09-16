/**
 * Response service — the ONLY place the UI talks to for quiz answers.
 *
 * Today it runs on an in-memory store seeded with sample responses, so the
 * whole experience is testable with zero backend, zero keys, zero accounts.
 *
 * TO MAKE RESPONSES SHARED BETWEEN EVERYONE (later):
 * replace the body of `submitResponse` / `getResponses` with a call to a free
 * hosted database (e.g. Lovable Cloud / Supabase). Nothing in the UI changes —
 * it only ever imports these two functions and the types below.
 */

export type Answer = {
  questionId: string;
  /** short human label for the question, stored with the answer for easy display */
  question: string;
  /** one or many values, always normalised to an array */
  value: string[];
};

export type FunResponse = {
  id: string;
  person: string;
  answers: Answer[];
  createdAt: string;
};

export type NewResponse = {
  person: string;
  answers: Answer[];
};

/** Flat row used by the "What everyone had to say" table. */
export type ResponseRow = {
  id: string;
  person: string;
  question: string;
  answer: string;
  createdAt: string;
};

const sampleResponses: FunResponse[] = [
  {
    id: "sample-1",
    person: "Priya Bua",
    createdAt: "2026-08-01T10:00:00.000Z",
    answers: [
      { questionId: "spoil-baby", question: "Who will spoil Baby?", value: ["Grandma"] },
      { questionId: "your-role", question: "Their role for Baby", value: ["Aunt"] },
      { questionId: "boy-or-girl", question: "Boy or Girl?", value: ["Girl 💗"] },
      { questionId: "name-ideas", question: "Baby name suggestion", value: ["Aarohi", "Myra"] },
      { questionId: "wish", question: "Wish for Baby", value: ["Always be happy, always be kind."] },
    ],
  },
  {
    id: "sample-2",
    person: "Rahul",
    createdAt: "2026-08-02T09:15:00.000Z",
    answers: [
      { questionId: "spoil-baby", question: "Who will spoil Baby?", value: ["Everyone 😂"] },
      { questionId: "boy-or-girl", question: "Boy or Girl?", value: ["Boy 💙"] },
      { questionId: "looks-like", question: "Baby will look like", value: ["Dad"] },
      { questionId: "personality", question: "Baby will be…", value: ["Mischievous 😂", "Always hungry"] },
      { questionId: "first-thing", question: "First thing with Baby", value: ["Teach them cricket, obviously."] },
    ],
  },
  {
    id: "sample-3",
    person: "Anu Didi",
    createdAt: "2026-08-03T18:40:00.000Z",
    answers: [
      { questionId: "name-ideas", question: "Baby name suggestion", value: ["Aarav", "Ishaan"] },
      { questionId: "love-most", question: "Who will love Baby most?", value: ["Honestly, everyone ❤️"] },
      { questionId: "advice", question: "Advice for Mom", value: ["Rest when you can. The dishes can wait."] },
      { questionId: "first-word", question: "Baby's first word", value: ["Ma, for sure!"] },
    ],
  },
  {
    id: "sample-4",
    person: "Riya",
    createdAt: "2026-08-04T20:05:00.000Z",
    answers: [
      { questionId: "your-role", question: "Their role for Baby", value: ["The favorite person 😎"] },
      { questionId: "boy-or-girl", question: "Boy or Girl?", value: ["Surprise! 👶"] },
      { questionId: "personality", question: "Baby will be…", value: ["Calm & cuddly"] },
      { questionId: "wish", question: "Wish for Baby", value: ["A life full of laughter and long naps."] },
    ],
  },
];

/** In-memory store (module scope) — swap for a hosted DB later. */
let store: FunResponse[] = [...sampleResponses];

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());

/** Subscribe to store changes; returns an unsubscribe function. */
export function onResponsesChanged(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export async function getResponses(): Promise<FunResponse[]> {
  return [...store].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function submitResponse(input: NewResponse): Promise<FunResponse> {
  const saved: FunResponse = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `local-${Date.now()}`,
    person: input.person.trim() || "Someone who loves Baby",
    answers: input.answers.filter((a) => a.value.some((v) => v.trim().length > 0)),
    createdAt: new Date().toISOString(),
  };
  store = [saved, ...store];
  notify();
  return saved;
}

/** Convenience: flatten responses into table rows. */
export function toRows(responses: FunResponse[]): ResponseRow[] {
  return responses.flatMap((r) =>
    r.answers.map((a, i) => ({
      id: `${r.id}-${a.questionId}-${i}`,
      person: r.person,
      question: a.question,
      answer: a.value.join(", "),
      createdAt: r.createdAt,
    })),
  );
}
