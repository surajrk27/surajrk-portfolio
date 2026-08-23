"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <h2 className="mb-10 font-display text-2xl font-bold text-ink">Areas of expertise</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
          >
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-muted">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-border px-3 py-1.5 text-sm text-ink transition-colors hover:border-signal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
