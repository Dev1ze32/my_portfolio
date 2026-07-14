import { useReveal } from '../hooks/useReveal';
import { useParallax } from '../hooks/useParallax';
import { skillGroups } from '../data/content';
import SectionHeading from './SectionHeading';
import { Terminal, Box, GitBranch, Cpu } from 'lucide-react';

const floatingIcons = [
  { Icon: Terminal, label: 'Python', top: '15%', left: '8%', rotate: '-6deg', delay: '0s' },
  { Icon: Box, label: 'Docker', top: '65%', left: '5%', rotate: '5deg', delay: '1.8s' },
  { Icon: GitBranch, label: 'Git', top: '20%', right: '5%', rotate: '7deg', delay: '0.9s' },
  { Icon: Cpu, label: 'IoT', top: '72%', right: '8%', rotate: '-5deg', delay: '2.5s' },
];

function Group({ group }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal border-t border-[var(--color-rule)] py-6 first:border-t-0">
      <h3 className="font-mono-label mb-3 text-[var(--color-ink)]">{group.label}</h3>
      <ul className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-[var(--radius-xs)] border border-[var(--color-rule)] px-2.5 py-1 text-[length:var(--text-sm)] text-[var(--color-ink-2)] transition-[transform,color,border-color] duration-[var(--dur-fast)] hover:scale-[1.04] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const headingRef = useReveal();
  const parallaxRef = useParallax('--scroll-y', -0.15); // Negative factor so they move slower than the page (parallax effect)
  
  return (
    <section ref={parallaxRef} id="skills" className="scroll-mt-24 relative overflow-hidden py-[var(--space-3xl)]">
      {floatingIcons.map(({ Icon, label, top, left, right, rotate, delay }) => (
        <div
          key={label}
          className="skill-float-card"
          style={{
            top,
            ...(left ? { left } : { right }),
            '--float-rotate': rotate,
            animationDelay: delay,
          }}
          aria-hidden="true"
        >
          <Icon size={24} strokeWidth={1.5} />
        </div>
      ))}

      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div ref={headingRef} className="reveal">
            <SectionHeading
              eyebrow="Toolset"
              title="What's actually under the hood."
              body="No progress bars pretending to measure competence — just the stack I build with, grouped by what it's for."
            />

            <div className="mt-8 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-rule-2)] bg-[var(--color-graphite)]">
              <div className="flex items-center gap-2 border-b border-[var(--color-graphite-rule)] px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite-rule)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite-rule)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite-rule)]" />
                </span>
                <span className="font-mono-label ml-1 text-[var(--color-graphite-ink-muted)]">
                  docker_compose
                </span>
              </div>
              <div className="px-4 py-4 font-[var(--font-mono)] text-[12.5px] leading-relaxed">
                <pre className="whitespace-pre-wrap break-words text-[var(--color-graphite-ink-muted)]">
                  <span className="text-[var(--color-accent)]">$ </span>
                  <span className="text-[var(--color-graphite-ink)]">docker compose up -d</span>
                  {'\n\n'}
                  <span className="text-[var(--color-accent)]">✔ </span>
                  <span className="text-[var(--color-graphite-ink)]">nginx-proxy</span>
                  {'     Running\n'}
                  <span className="text-[var(--color-accent)]">✔ </span>
                  <span className="text-[var(--color-graphite-ink)]">routing-api</span>
                  {'     Started\n'}
                  <span className="text-[var(--color-accent)]">✔ </span>
                  <span className="text-[var(--color-graphite-ink)]">postgres-db</span>
                  {'     Running\n\n'}
                  <span className="text-[var(--color-graphite-ink-muted)]">All services healthy.</span>
                </pre>
              </div>
            </div>
          </div>
          <div>
            {skillGroups.map((group) => (
              <Group key={group.label} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


