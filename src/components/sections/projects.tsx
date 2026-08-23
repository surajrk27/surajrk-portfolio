"use client";

import { useEffect, useState } from "react";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import { ProjectCard } from "@/components/ui/project-card";
import { projects as allProjects, type Project } from "@/lib/data";

/**
 * In a real app this would be a TanStack Query / fetch call to a CMS
 * or API. The timeout here stands in for that network request so the
 * skeleton state is genuinely demonstrated on load, not just decorative.
 */
function useProjects(delayMs = 700) {
  const [data, setData] = useState<Project[] | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setData(allProjects), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return data;
}

export function Projects() {
  const projects = useProjects();
  const isLoading = projects === null;

  return (
    <section id="projects" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="mb-10 flex items-baseline justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Selected projects</h2>
        </div>
        <p className="font-mono text-xs text-muted" aria-hidden="true">
          {isLoading ? "fetching…" : `${allProjects.length} results`}
        </p>
      </div>

      <div
        className="grid gap-5 md:grid-cols-2"
        aria-busy={isLoading}
        aria-live="polite"
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
