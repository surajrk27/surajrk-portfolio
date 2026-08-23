"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <h2 className="mb-10 font-display text-2xl font-bold text-ink">Education</h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border border-border bg-surface p-5"
          >
            <p className="mb-1 font-mono text-xs text-muted">{item.period}</p>
            <h3 className="mb-1 font-display text-base font-bold text-ink">{item.degree}</h3>
            <p className="text-sm text-muted">{item.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
