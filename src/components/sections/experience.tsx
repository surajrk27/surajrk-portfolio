"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-signal">Sheet 03</p>
      <h2 className="mb-10 font-display text-2xl font-bold text-ink">Experience</h2>

      <ol className="relative space-y-10 border-l border-border pl-8">
        {experience.map((item, i) => (
          <motion.li
            key={item.company + item.period}
            initial={{ x: -12 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[2.31rem] top-1.5 h-3 w-3 border-2 border-bg bg-signal"
            />
            <p className="mb-1 font-mono text-xs text-muted">{item.period} · {item.location}</p>
            <h3 className="font-display text-lg font-bold text-ink">{item.role}</h3>
            <p className="mb-3 font-mono text-sm text-signal">{item.company}</p>
            <ul className="space-y-1.5">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-signal" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
