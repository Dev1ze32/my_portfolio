import { Clock, ShieldCheck, Database, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { businessValue } from '../data/content';
import SectionHeading from './SectionHeading';

const ICONS = { Clock, ShieldCheck, Database, TrendingUp };

function Point({ point, index }) {
  const ref = useReveal();
  const Icon = ICONS[point.icon];
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index} flex gap-4 border-t border-[var(--color-rule)] py-6 first:border-t-0 sm:gap-5`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-rule)] text-[var(--color-accent)]">
        <Icon size={18} strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <h3 className="text-[length:var(--text-lg)] text-[var(--color-ink)]">{point.title}</h3>
        <p className="mt-1.5 max-w-[54ch] text-[length:var(--text-sm)] text-[var(--color-ink-muted)]">
          {point.body}
        </p>
      </div>
    </div>
  );
}

export default function BusinessValue() {
  const headingRef = useReveal();
  return (
    <section id="why-it-matters" className="scroll-mt-24 py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div ref={headingRef} className="reveal">
            <SectionHeading
              eyebrow={businessValue.eyebrow}
              title={businessValue.title}
              body={businessValue.body}
            />
          </div>
          <div>
            {businessValue.points.map((point, i) => (
              <Point key={point.title} point={point} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
