"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-300/60 dark:border-white/10 transition-all duration-300 focus:outline-none flex items-center justify-center ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      id="theme-toggle-btn"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-all duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 rotate-0 scale-100 transition-all duration-300" />
      )}
    </button>
  );
}
