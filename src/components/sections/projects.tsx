import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <div className="mb-10 flex items-baseline justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">Selected projects</h2>
        </div>
        <p className="font-mono text-xs text-muted" aria-hidden="true">
          {projects.length} results
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
