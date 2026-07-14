import { useReveal } from '../hooks/useReveal';
import { approachSteps } from '../data/content';
import SectionHeading from './SectionHeading';

function Step({ step }) {
  const ref = useReveal();
  return (
    <li
      ref={ref}
      className="reveal border-t border-[var(--color-graphite-rule)] py-7 first:border-t-0 sm:grid sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-8"
    >
      <span className="font-mono-label mb-2 block text-[var(--color-accent)] sm:mb-0">
        {step.n}
      </span>
      <div>
        <h3 className="text-[length:var(--text-lg)] text-[var(--color-graphite-ink)]">
          {step.title}
        </h3>
        <p className="mt-2 max-w-[52ch] text-[length:var(--text-sm)] text-[var(--color-graphite-ink-muted)]">
          {step.body}
        </p>
      </div>
    </li>
  );
}

export default function Approach() {
  const headingRef = useReveal();
  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-[var(--color-graphite)] py-[var(--space-3xl)]"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div ref={headingRef} className="reveal mb-12">
          <SectionHeading
            eyebrow="How an engagement runs"
            title="Four steps. No black box in the middle."
            light
          />
        </div>
        <ol className="max-w-[56rem]">
          {approachSteps.map((step) => (
            <Step key={step.n} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
