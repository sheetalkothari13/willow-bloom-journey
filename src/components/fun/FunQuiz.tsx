import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { funIntro, funOutro, funQuestions, type FunQuestion } from "@/data/funQuestions";
import { submitResponse, type Answer } from "@/services/responses";

type Values = Record<string, string[]>;

/** Subtle celebration: floating hearts, sparkles and tiny confetti. */
function Celebration() {
  const bits = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        i,
        left: `${(i * 5.4 + ((i * 37) % 11)) % 100}%`,
        delay: `${(i % 7) * 0.12}s`,
        glyph: ["💗", "✨", "🎉", "💙", "⭐"][i % 5]!,
        size: `${0.8 + ((i * 13) % 7) / 10}rem`,
      })),
    [],
  );
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((b) => (
        <span
          key={b.i}
          className="absolute bottom-0 animate-[confetti-fall_2.6s_var(--ease-soft)_forwards] opacity-0"
          style={{
            left: b.left,
            fontSize: b.size,
            animationDelay: b.delay,
            animationDirection: "reverse",
          }}
        >
          {b.glyph}
        </span>
      ))}
    </div>
  );
}

function Dots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn(
            "h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-soft)]",
            i === current
              ? "w-6 bg-primary"
              : i < current
                ? "w-3 bg-sky"
                : "w-1.5 bg-border",
          )}
        />
      ))}
    </div>
  );
}

function OptionButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-12 rounded-full px-5 py-2.5 text-sm tracking-wide shadow-[var(--shadow-soft)]",
        "transition-all duration-400 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        active
          ? "bg-primary text-primary-foreground"
          : "bg-card/85 text-foreground/80 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}

function ListInput({
  values,
  placeholder,
  onChange,
}: {
  values: string[];
  placeholder?: string | undefined;
  onChange: (v: string[]) => void;
}) {
  const [draft, setDraft] = useState("");
  const add = () => {
    const v = draft.trim();
    if (!v) return;
    onChange([...values, v]);
    setDraft("");
  };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
          placeholder={placeholder ?? "Type here…"}
          className="min-h-12 min-w-0 flex-1 rounded-full border border-border/70 bg-card/85 px-5 py-3 text-base outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="button"
          onClick={add}
          className="min-h-12 rounded-full bg-sky/60 px-5 text-sm tracking-wide transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Add
        </button>
      </div>
      {values.length > 0 ? (
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {values.map((v, i) => (
            <li key={`${v}-${i}`}>
              <button
                type="button"
                onClick={() => onChange(values.filter((_, j) => j !== i))}
                aria-label={`Remove ${v}`}
                className="rounded-full bg-blush-soft px-4 py-1.5 text-sm text-foreground/85 transition-colors hover:bg-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {v} <span aria-hidden="true">✕</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function QuestionBody({
  q,
  value,
  onChange,
}: {
  q: FunQuestion;
  value: string[];
  onChange: (v: string[]) => void;
}) {
  if (q.type === "choice" || q.type === "multi") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {(q.options ?? []).map((opt) => {
          const active = value.includes(opt);
          return (
            <OptionButton
              key={opt}
              label={opt}
              active={active}
              onClick={() =>
                q.type === "multi"
                  ? onChange(active ? value.filter((v) => v !== opt) : [...value, opt])
                  : onChange(active ? [] : [opt])
              }
            />
          );
        })}
      </div>
    );
  }

  if (q.type === "list") {
    return <ListInput values={value} placeholder={q.placeholder} onChange={onChange} />;
  }

  return (
    <textarea
      value={value[0] ?? ""}
      onChange={(e) => onChange([e.target.value])}
      rows={3}
      placeholder={q.placeholder ?? "Write something sweet…"}
      className="w-full resize-none rounded-[var(--radius-md)] border border-border/70 bg-card/85 px-5 py-4 text-lg leading-relaxed outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      style={{ fontFamily: "var(--font-hand)" }}
    />
  );
}

export function FunQuiz({ onOpenResponses }: { onOpenResponses: () => void }) {
  const [stage, setStage] = useState<"name" | "quiz" | "done">("name");
  const [person, setPerson] = useState("");
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [saving, setSaving] = useState(false);

  const total = funQuestions.length;
  const q = funQuestions[step]!;
  const value = values[q.id] ?? [];
  const isLast = step === total - 1;

  const setValue = (v: string[]) => setValues((prev) => ({ ...prev, [q.id]: v }));

  const submit = async () => {
    setSaving(true);
    const answers: Answer[] = funQuestions
      .map((question) => ({
        questionId: question.id,
        question: question.shortLabel,
        value: values[question.id] ?? [],
      }))
      .filter((a) => a.value.some((v) => v.trim().length > 0));
    await submitResponse({ person, answers });
    setSaving(false);
    setStage("done");
  };

  return (
    <div className="surface-card relative overflow-hidden p-6 sm:p-10">
      {stage === "name" ? (
        <div className="mx-auto max-w-lg text-center">
          <p className="text-4xl" aria-hidden="true">
            🍼
          </p>
          <h3 className="mt-4 font-display text-3xl">{funIntro.namePrompt}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{funIntro.nameHint}</p>
          <form
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (person.trim()) setStage("quiz");
            }}
          >
            <input
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              placeholder={funIntro.namePlaceholder}
              aria-label={funIntro.namePrompt}
              className="min-h-12 w-full rounded-full border border-border/70 bg-card/85 px-5 py-3 text-base outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              disabled={!person.trim()}
              className="min-h-12 w-full shrink-0 rounded-full bg-primary px-7 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] disabled:opacity-50 disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
            >
              {funIntro.startCta}
            </button>
          </form>
        </div>
      ) : stage === "quiz" ? (
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
              ✨ Question {step + 1} / {total}
            </p>
            <div className="mt-3">
              <Dots total={total} current={step} />
            </div>
          </div>

          <div key={q.id} className="mt-8 opacity-0 animate-[reveal-in_0.5s_var(--ease-soft)_forwards]">
            <h3 className="text-center font-display text-3xl leading-snug text-balance">
              <span aria-hidden="true">{q.emoji} </span>
              {q.question}
            </h3>
            {q.note ? (
              <p className="mt-2 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {q.note}
              </p>
            ) : null}

            <div className="mt-7">
              <QuestionBody q={q} value={value} onChange={setValue} />
            </div>
          </div>

          <div className="mt-9 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="min-h-12 rounded-full px-5 text-sm text-muted-foreground transition-colors hover:text-foreground disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              ← Back
            </button>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Answering as <span className="text-foreground/80">{person}</span>
            </p>
            {isLast ? (
              <button
                type="button"
                onClick={() => void submit()}
                disabled={saving}
                className="min-h-12 rounded-full bg-primary px-7 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {saving ? "Sending…" : "Submit 💗"}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
                className="min-h-12 rounded-full bg-primary px-7 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Next →
              </button>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
            Answering as {person}
          </p>
        </div>
      ) : (
        <div className="relative mx-auto max-w-lg text-center">
          <Celebration />
          <div className="relative opacity-0 animate-[reveal-in_0.6s_var(--ease-soft)_forwards]">
            <p className="text-4xl" aria-hidden="true">
              💗
            </p>
            <h3 className="mt-4 font-display text-4xl">{funOutro.thanks}</h3>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
              {funOutro.saved}
            </p>
            <p
              className="mt-4 text-xl leading-relaxed text-foreground/85"
              style={{ fontFamily: "var(--font-hand)" }}
            >
              {funOutro.waiting}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onOpenResponses}
                className="min-h-12 rounded-full bg-primary px-7 text-sm tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {funOutro.seeOthers}
              </button>
              <button
                type="button"
                onClick={() => {
                  setValues({});
                  setStep(0);
                  setStage("name");
                }}
                className="min-h-12 rounded-full px-6 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {funOutro.again}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
