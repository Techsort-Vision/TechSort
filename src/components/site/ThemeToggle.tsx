import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";
const KEY = "ts_theme_v1";

function applyTheme(t: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", t === "light");
  root.classList.toggle("dark", t === "dark");
  root.style.colorScheme = t;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    const saved = (localStorage.getItem(KEY) as Theme | null) ?? "light";
    setTheme(saved);
    applyTheme(saved);
  }, []);
  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem(KEY, next);
  };
  return { theme, toggle };
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative size-9 rounded-md border border-border bg-surface/60 hover:bg-surface grid place-items-center transition-colors ${className}`}
    >
      <Sun className={`size-4 absolute transition-all ${theme === "dark" ? "opacity-0 -rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
      <Moon className={`size-4 absolute transition-all ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-45 scale-75"}`} />
    </button>
  );
}
