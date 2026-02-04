import { browser } from "$app/environment";

export type Theme = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

export function getTheme(): Theme {
  if (!browser) return "system";

  return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
}

export function applyTheme(theme: Theme, withTransition = true) {
  if (!browser) return;

  const root = document.documentElement;

  if (!withTransition) {
    root.classList.add("no-transition");
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark =
    theme === "dark" || (theme === "system" && prefersDark);

  root.classList.toggle("dark", isDark);

  localStorage.setItem("theme", theme);

  if (!withTransition) {
    requestAnimationFrame(() => {
      root.classList.remove("no-transition");
    });
  }
}

