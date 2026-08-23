import { Mail, Phone, Linkedin, FileText } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-border px-6 py-16">
      <h2 className="mb-4 font-display text-2xl font-bold text-ink">Get in touch</h2>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted">
        Open to senior frontend roles and interesting product work. Reach out directly, I read
        everything myself.
      </p>

      <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
          >
            <Mail size={16} aria-hidden="true" />
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={`tel:+91${profile.phones[0]}`}
            className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
          >
            <Phone size={16} aria-hidden="true" />
            {profile.phones[0]}
          </a>
        </li>
        <li>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
          >
            <Linkedin size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={profile.resumeUrl}
            className="flex items-center gap-2 text-sm text-ink transition-colors hover:text-signal"
          >
            <FileText size={16} aria-hidden="true" />
            Download résumé
          </a>
        </li>
      </ul>

      <p className="mt-16 font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
      </p>
    </section>
  );
}
