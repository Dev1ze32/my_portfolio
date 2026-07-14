export default function SectionHeading({ eyebrow, title, body, light = false }) {
  return (
    <div className="max-w-[52ch]">
      {eyebrow && (
        <p
          className={`font-mono-label mb-3 ${
            light ? 'text-[var(--color-accent)]' : 'text-[var(--color-accent)]'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-[length:var(--text-3xl)] ${
          light ? 'text-[var(--color-graphite-ink)]' : 'text-[var(--color-ink)]'
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-4 text-[length:var(--text-base)] ${
            light ? 'text-[var(--color-graphite-ink-muted)]' : 'text-[var(--color-ink-muted)]'
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
