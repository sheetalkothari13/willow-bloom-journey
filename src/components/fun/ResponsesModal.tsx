import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { getResponses, onResponsesChanged, toRows, type FunResponse } from "@/services/responses";

export function ResponsesModal({ onClose }: { onClose: () => void }) {
  const [responses, setResponses] = useState<FunResponse[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let alive = true;
    const load = () => {
      void getResponses().then((r) => {
        if (alive) setResponses(r);
      });
    };
    load();
    const off = onResponsesChanged(load);
    return () => {
      alive = false;
      off();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const rows = useMemo(() => {
    const all = toRows(responses);
    const q = query.trim().toLowerCase();
    return q ? all.filter((r) => r.person.toLowerCase().includes(q)) : all;
  }, [responses, query]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="What everyone had to say"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-sm opacity-0 animate-[reveal-in_0.35s_var(--ease-soft)_forwards]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="surface-card relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden p-4 sm:p-6"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-card/90 text-lg shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ✕
        </button>

        <header className="pr-12">
          <h3 className="font-display text-2xl sm:text-3xl">What Everyone Had To Say 💗</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {rows.length} little {rows.length === 1 ? "answer" : "answers"} so far
          </p>
        </header>

        <label className="mt-4 block">
          <span className="sr-only">Search by name</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name…"
            className="w-full rounded-full border border-border/70 bg-card/80 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
          {rows.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted-foreground">
              No answers yet — be the first. 💌
            </p>
          ) : (
            <>
              {/* Desktop table */}
              <table className="hidden w-full border-collapse text-left text-sm sm:table">
                <thead>
                  <tr className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    <th className="sticky top-0 bg-card/95 px-3 py-2 font-normal">Person</th>
                    <th className="sticky top-0 bg-card/95 px-3 py-2 font-normal">Question</th>
                    <th className="sticky top-0 bg-card/95 px-3 py-2 font-normal">Their Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-border/60 align-top">
                      <td className="px-3 py-3 text-foreground/90">{r.person}</td>
                      <td className="px-3 py-3 text-muted-foreground">{r.question}</td>
                      <td
                        className="px-3 py-3 text-base text-foreground/90"
                        style={{ fontFamily: "var(--font-hand)" }}
                      >
                        {r.answer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile cards */}
              <ul className="space-y-3 sm:hidden">
                {rows.map((r) => (
                  <li
                    key={r.id}
                    className="rounded-[var(--radius-md)] bg-card/80 p-4 shadow-[var(--shadow-soft)]"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {r.person}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{r.question}</p>
                    <p
                      className="mt-1 text-lg leading-snug text-foreground/90"
                      style={{ fontFamily: "var(--font-hand)" }}
                    >
                      {r.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function ViewOthersButton({
  onClick,
  className,
  label,
}: {
  onClick: () => void;
  className?: string;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full bg-card/90 px-6 py-3 text-sm tracking-wide shadow-[var(--shadow-soft)]",
        "transition-all duration-500 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-float)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {label}
    </button>
  );
}
