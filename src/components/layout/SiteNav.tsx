import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(sections[0]!.id);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("willow-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("willow-theme", nextDark ? "dark" : "light");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-4 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-3" : "py-6",
        )}
      >
        <a
          href="#surprise"
          className="font-display text-xl tracking-tight text-foreground sm:text-2xl"
        >
          Little One <span className="text-gradient-petal">·</span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {sections.slice(0, 6).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-full px-3 py-2 text-xs tracking-wide transition-colors duration-300",
                active === s.id
                  ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          title={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:bg-card lg:ml-2"
        >
          {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-colors hover:bg-card lg:ml-0"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div
        className={cn(
          "mx-4 overflow-hidden rounded-3xl transition-all duration-500 ease-[var(--ease-soft)] sm:mx-8",
          open ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="surface-card grid gap-1 p-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-blush-soft/70 hover:text-foreground"
            >
              <span className="font-display text-base text-gold">{s.eyebrow.split(" ")[1]}</span>
              <span>{s.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
