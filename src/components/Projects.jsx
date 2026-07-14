import { ArrowUpRight, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { projects } from '../data/content';
import SectionHeading from './SectionHeading';

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="reveal card-lift grid grid-cols-1 gap-8 rounded-[var(--radius-md)] border border-[var(--color-rule)] p-6 transition-colors duration-[var(--dur-base)] hover:border-[var(--color-accent)] sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
    >
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono-label rounded-[var(--radius-xs)] border border-[var(--color-rule)] px-1.5 py-0.5 text-[var(--color-ink-muted)]"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="text-[length:var(--text-xl)] text-[var(--color-ink)]">
          {project.title}
        </h3>
        <p className="mt-3 text-[length:var(--text-sm)] text-[var(--color-ink-muted)]">
          {project.summary}
        </p>
        <ul className="mt-4 space-y-2.5">
          {project.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-[length:var(--text-sm)] text-[var(--color-ink-2)]">
              <Check size={15} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn mt-6 inline-flex items-center gap-1.5 text-[length:var(--text-sm)] font-medium text-[var(--color-accent)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent-hover)]"
        >
          View source on GitHub
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="min-w-0 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-rule-2)] bg-[var(--color-graphite)]">
        <div className="flex items-center justify-between border-b border-[var(--color-graphite-rule)] px-4 py-2.5">
          <span className="font-mono-label text-[var(--color-graphite-ink-muted)]">
            {project.method} {project.endpoint}
          </span>
          <span className="status--ok rounded-[var(--radius-xs)] border border-[var(--color-accent)] px-1.5 py-0.5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.06em] text-[var(--color-accent)]">
            {project.status}
          </span>
        </div>
        <div className="p-4">
          <pre className="whitespace-pre-wrap break-words font-[var(--font-mono)] text-[12.5px] leading-relaxed text-[var(--color-graphite-ink-muted)]">
            {'{\n  '}
            <span className="text-[var(--color-accent)]">"service"</span>
            {': '}
            <span className="text-[var(--color-graphite-ink)]">
              "{project.title.split(' ').slice(0, 2).join('_').toLowerCase()}"
            </span>
            {',\n  '}
            <span className="text-[var(--color-accent)]">"deployed"</span>
            {': '}
            <span className="text-[var(--color-graphite-ink)]">true</span>
            {',\n  '}
            <span className="text-[var(--color-accent)]">"infra"</span>
            {': '}
            <span className="text-[var(--color-graphite-ink)]">"docker + nginx + ubuntu"</span>
            {'\n}'}
          </pre>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headingRef = useReveal();
  return (
    <section id="projects" className="scroll-mt-24 py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div ref={headingRef} className="reveal mb-14">
          <SectionHeading
            eyebrow="Featured projects"
            title="Systems shipped to production, not left as prototypes."
          />
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
