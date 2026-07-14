import { useReveal } from '../hooks/useReveal';
import { experience, education } from '../data/content';

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="scroll-mt-24 py-[var(--space-2xl)]">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div
          ref={ref}
          className="reveal grid grid-cols-1 gap-8 rounded-[var(--radius-md)] border border-[var(--color-rule)] p-6 sm:p-8 lg:grid-cols-2 lg:gap-14"
        >
          {experience.map((job) => (
            <div key={job.role}>
              <p className="font-mono-label mb-2 text-[var(--color-accent)]">Experience</p>
              <h3 className="text-[length:var(--text-lg)] text-[var(--color-ink)]">
                {job.role} — {job.org}
              </h3>
              <p className="mt-1 text-[length:var(--text-sm)] text-[var(--color-ink-faint)]">
                {job.time}
              </p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="text-[length:var(--text-sm)] text-[var(--color-ink-2)] before:mr-2 before:content-['—']"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono-label mb-2 text-[var(--color-accent)]">Education</p>
            <h3 className="text-[length:var(--text-lg)] text-[var(--color-ink)]">
              {education.degree}
            </h3>
            <p className="mt-1 text-[length:var(--text-sm)] text-[var(--color-ink-muted)]">
              {education.school}
            </p>
            <p className="mt-1 text-[length:var(--text-sm)] text-[var(--color-ink-faint)]">
              {education.detail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
