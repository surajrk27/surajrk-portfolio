"use client";

import { motion } from "framer-motion";
import { profile, stack } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 26 } },
};

function CropMarks() {
  return (
    <>
      <span aria-hidden="true" className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-ink/25" />
      <span aria-hidden="true" className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-ink/25" />
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-ink/25" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-ink/25" />
    </>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-6 py-20 md:py-24">
      <CropMarks />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-14 md:grid-cols-12 md:items-start md:gap-8"
      >
        <div className="md:col-span-7">
          <motion.p
            variants={item}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            Profile — <span className="text-signal">Senior Frontend Engineer</span> · 6+ yrs
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-7 font-display text-[15vw] font-black leading-[0.86] tracking-[-0.03em] text-ink sm:text-[5.5rem] md:text-[4.75rem] lg:text-[5.75rem]"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mb-9 max-w-sm text-base leading-relaxed text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-signal-ink transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              View projects
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              className="group inline-flex items-center gap-2.5 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative border border-border bg-surface md:col-span-5"
        >
          <CropMarks />

          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p id="stack-heading" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Stack
            </p>
            <span className="-rotate-3 border border-signal px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-signal">
              Open to work
            </span>
          </div>

          <ul aria-labelledby="stack-heading" className="divide-y divide-border">
            {stack.map((label, i) => (
              <li key={label} className="flex items-center gap-3 px-4 py-3">
                <span aria-hidden="true" className="font-mono text-[11px] tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-border" />
                <span className="font-mono text-sm text-ink">{label}</span>
              </li>
            ))}
          </ul>

          <p aria-hidden="true" className="border-t border-border px-4 py-2 font-mono text-[10px] text-muted">
            X 0000 · Y 0000 · SCALE 100%
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
