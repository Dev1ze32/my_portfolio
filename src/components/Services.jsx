import { useReveal } from '../hooks/useReveal';
import { services } from '../data/content';
import SectionHeading from './SectionHeading';
import ServiceVisual from './Servicevisual';

function FeaturedTile({ tile }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="reveal rounded-[var(--radius-md)] border border-[var(--color-graphite-rule)] bg-[var(--color-graphite)] p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <p className="font-mono-label mb-4 text-[var(--color-accent)]">{tile.tag}</p>
          <h3 className="max-w-[32ch] text-[length:var(--text-2xl)] text-[var(--color-graphite-ink)]">
            {tile.title}
          </h3>
          <p className="mt-4 max-w-[58ch] text-[length:var(--text-base)] leading-relaxed text-[var(--color-graphite-ink-muted)]">
            {tile.body}
          </p>
        </div>
        <ServiceVisual tag={tile.tag} onDark />
      </div>
    </article>
  );
}

function Tile({ tile, index }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className={`reveal card-lift reveal-delay-${index} flex flex-col justify-between rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-paper)] p-6 transition-colors duration-[var(--dur-base)] hover:border-[var(--color-accent)] sm:p-7`}
    >
      <div>
        <p className="font-mono-label mb-3 text-[var(--color-ink-faint)]">{tile.tag}</p>
        <h3 className="text-[length:var(--text-xl)] text-[var(--color-ink)]">{tile.title}</h3>
        <p className="mt-3 text-[length:var(--text-sm)] text-[var(--color-ink-muted)]">
          {tile.body}
        </p>
      </div>
      <ServiceVisual tag={tile.tag} className="mt-6" />
    </article>
  );
}

export default function Services() {
  const headingRef = useReveal();
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section id="services" className="scroll-mt-24 py-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div ref={headingRef} className="reveal mb-14">
          <SectionHeading
            eyebrow="What I build"
            title="Web Interface built around your workflow, not the other way around."
            body="Off-the-shelf SaaS asks your business to adapt. A custom internal system adapts to you."
          />
        </div>

        <div className="flex flex-col gap-4">
          <FeaturedTile tile={featured} />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(0, 3).map((tile, i) => (
              <Tile key={tile.title} tile={tile} index={i + 1} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rest.slice(3).map((tile, i) => (
              <Tile key={tile.title} tile={tile} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}