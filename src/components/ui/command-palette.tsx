"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  Command,
  Search,
  ArrowUpRight,
  Sun,
  Moon,
  Mail,
  FileText,
  Linkedin,
  CornerDownLeft,
} from "lucide-react";
import { profile } from "@/lib/data";

type Item = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ElementType;
  action: () => void;
};

function useCommandItems(close: () => void) {
  const { resolvedTheme, setTheme } = useTheme();

  return useMemo<Item[]>(() => {
    const goTo = (hash: string) => () => {
      const el = document.querySelector(hash);
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", hash);
      close();
    };

    return [
      { id: "top", label: "Go to top", icon: ArrowUpRight, action: goTo("#top") },
      { id: "projects", label: "Go to Projects", icon: ArrowUpRight, action: goTo("#projects") },
      { id: "experience", label: "Go to Experience", icon: ArrowUpRight, action: goTo("#experience") },
      { id: "skills", label: "Go to Skills", icon: ArrowUpRight, action: goTo("#skills") },
      { id: "education", label: "Go to Education", icon: ArrowUpRight, action: goTo("#education") },
      { id: "contact", label: "Go to Contact", icon: ArrowUpRight, action: goTo("#contact") },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        icon: resolvedTheme === "dark" ? Sun : Moon,
        action: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          close();
        },
      },
      {
        id: "email",
        label: "Copy email address",
        hint: profile.email,
        icon: Mail,
        action: () => {
          navigator.clipboard.writeText(profile.email);
          close();
        },
      },
      {
        id: "resume",
        label: "Download résumé",
        icon: FileText,
        action: () => {
          window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
          close();
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        icon: Linkedin,
        action: () => {
          window.open(profile.linkedin, "_blank", "noopener,noreferrer");
          close();
        },
      },
    ];
  }, [resolvedTheme, setTheme, close]);
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = () => setOpen(false);
  const items = useCommandItems(close);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter((item) => item.label.toLowerCase().includes(q));
  }, [items, query]);

  // Global ⌘K / Ctrl+K shortcut, plus "/" as a lighter-weight alternative
  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      const isTypingElsewhere =
        document.activeElement instanceof HTMLElement &&
        ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName) &&
        document.activeElement !== inputRef.current;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "/" && !isTypingElsewhere && !open) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [open]);

  // Reset state on open, restore focus + scroll on close
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  function onDialogKeydown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 border border-border px-2.5 text-ink transition-colors hover:border-signal"
      >
        <Command size={14} aria-hidden="true" />
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.1em] text-muted sm:inline">
          ⌘K
        </span>
        <span className="sr-only">Open command palette</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/40 px-4 pt-24 backdrop-blur-sm"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={onDialogKeydown}
            className="w-full max-w-md border border-border bg-surface shadow-xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search size={16} className="text-muted" aria-hidden="true" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or run a command…"
                aria-label="Search commands"
                aria-controls="command-list"
                aria-activedescendant={
                  filtered[activeIndex] ? `command-item-${filtered[activeIndex].id}` : undefined
                }
                role="combobox"
                aria-expanded="true"
                aria-autocomplete="list"
                className="w-full bg-transparent font-mono text-sm text-ink placeholder:text-muted focus:outline-none"
              />
              <kbd className="hidden shrink-0 border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">
                esc
              </kbd>
            </div>

            <ul
              id="command-list"
              ref={listRef}
              role="listbox"
              aria-label="Commands"
              className="max-h-72 overflow-y-auto py-2"
            >
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center font-mono text-xs text-muted">
                  No matching command.
                </li>
              )}
              {filtered.map((item, i) => {
                const Icon = item.icon;
                const active = i === activeIndex;
                return (
                  <li
                    key={item.id}
                    id={`command-item-${item.id}`}
                    data-index={i}
                    role="option"
                    aria-selected={active}
                  >
                    <button
                      type="button"
                      onClick={item.action}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left font-mono text-sm transition-colors ${
                        active ? "bg-ink/5 text-ink" : "text-muted"
                      }`}
                    >
                      <Icon size={15} aria-hidden="true" className="shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      {item.hint && <span className="text-xs text-muted">{item.hint}</span>}
                      {active && <CornerDownLeft size={13} aria-hidden="true" className="shrink-0 text-signal" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
