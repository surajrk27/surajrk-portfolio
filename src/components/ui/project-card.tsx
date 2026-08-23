"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative border border-border bg-surface p-6 transition-[transform,border-color] hover:-translate-y-1 hover:border-signal"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2.5 left-5 border border-border bg-bg px-2 py-0.5 font-mono text-[11px] text-muted opacity-0 transition-opacity group-hover:opacity-100"
      >
        &lt;ProjectCard /&gt;
      </span>

      <p className="mb-1 font-mono text-xs text-muted">
        {project.company} · {project.period}
      </p>
      <h3 className="mb-2 font-display text-lg font-bold text-ink">{project.title}</h3>
      <p className="mb-5 text-sm leading-relaxed text-muted">{project.description}</p>

      <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
