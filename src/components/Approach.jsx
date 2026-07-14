import { useEffect, useState } from 'react';
import { approachSteps } from '../data/content';
import SectionHeading from './SectionHeading';

function Step({ step, index, isActive }) {
  return (
    <li
      data-index={index}
      className={`approach-step relative py-12 transition-all duration-[800ms] ease-out sm:grid sm:grid-cols-[4rem_1fr] sm:gap-8 lg:py-24 ${
        isActive ? 'opacity-100 translate-x-0 scale-100' : 'scale-[0.98] opacity-20 -translate-x-4'
      }`}
    >
      {/* Number badge */}
      <span
        className={`font-mono-label relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border bg-[var(--color-graphite)] transition-all duration-[800ms] sm:mb-0 ${
          isActive
            ? 'border-[var(--color-accent)] text-[var(--color-accent)] shadow-[0_0_24px_var(--color-accent-wash)]'
            : 'border-[var(--color-graphite-rule)] text-[var(--color-graphite-ink-muted)] shadow-none'
        }`}
      >
        {step.n}
      </span>

      {/* Content */}
      <div className="pt-1.5">
        <h3
          className={`text-[length:var(--text-xl)] transition-colors duration-[800ms] ${
            isActive ? 'text-[var(--color-graphite-ink)]' : 'text-[var(--color-graphite-ink-muted)]'
          }`}
        >
          {step.title}
        </h3>
        <p className="mt-3 max-w-[48ch] leading-relaxed text-[length:var(--text-base)] text-[var(--color-graphite-ink-muted)]">
          {step.body}
        </p>
      </div>
    </li>
  );
}

export default function Approach() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Scroll Spy observer: activates the step when it hits the center 40% of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const elements = document.querySelectorAll('.approach-step');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-[var(--color-graphite)] py-[var(--space-4xl)]"
    >
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)] lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        
        {/* Left Column - Vertically centered in the grid, NOT sticky */}
        <div className="mb-16 flex flex-col justify-center lg:mb-0">
          <div>
            <SectionHeading
              eyebrow="How an engagement runs"
              title="Four steps. No black box in the middle."
              light
            />
            <p className="mt-6 max-w-[36ch] text-[length:var(--text-base)] text-[var(--color-graphite-ink-muted)]">
              I don't just disappear for a month and emerge with code. We build this iteratively, validating the process before committing to the architecture.
            </p>
          </div>
        </div>

        {/* Scrolling Right Column with Cinematic Timeline */}
        <div className="relative">
          {/* The background continuous line connecting the steps */}
          <div className="absolute bottom-0 left-[1.25rem] top-0 hidden w-px bg-[var(--color-graphite-rule)] sm:block" />

          <ol className="relative z-10">
            {approachSteps.map((step, i) => (
              <Step key={step.n} step={step} index={i} isActive={i === activeIndex} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
