import { useEffect, useRef, useState } from 'react';

const COMMAND = 'curl -X POST /api/routing/entries \\\n  -d \'{ "product_id": "PRD-1042", "stage": "approval" }\'';

const RESPONSE_LINES = [
  { k: '"status"', v: '"pending_approval"' },
  { k: '"routing_id"', v: '"RT-88214"' },
  { k: '"revision"', v: '3' },
  { k: '"assigned_to"', v: '"ops_team"' },
];

export default function CodeDemo() {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  const cardRef = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTyped(COMMAND);
      setDone(true);
      return;
    }

    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            let i = 0;
            const interval = setInterval(() => {
              i += 1;
              setTyped(COMMAND.slice(0, i));
              if (i >= COMMAND.length) {
                clearInterval(interval);
                setTimeout(() => setDone(true), 260);
              }
            }, 14);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="code-card w-full max-w-[480px] xl:max-w-[540px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-rule-2)] bg-[var(--color-graphite)] shadow-[0_1px_2px_oklch(24%_0.02_258/0.05)]"
    >
      <div className="flex items-center gap-2 border-b border-[var(--color-graphite-rule)] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite-rule)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite-rule)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-graphite-rule)]" />
        </span>
        <span className="font-mono-label ml-1 text-[var(--color-graphite-ink-muted)]">
          routing_api.request
        </span>
      </div>

      <div className="px-4 py-4 font-[var(--font-mono)] text-[13px] leading-relaxed">
        <pre className="whitespace-pre-wrap break-words text-[var(--color-graphite-ink)]">
          <span className="text-[var(--color-accent)]">$ </span>
          {typed}
          {!done && <span className="animate-pulse text-[var(--color-accent)]">▮</span>}
        </pre>

        {done && (
          <div className="mt-4 border-t border-[var(--color-graphite-rule)] pt-3 reveal is-in">
            <div className="mb-2 flex items-center gap-2">
              <span className="status--ok inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] border border-[var(--color-accent)] px-1.5 py-0.5 font-[var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--color-accent)]">
                200 OK
              </span>
              <span className="text-[11px] text-[var(--color-graphite-ink-muted)]">142ms</span>
            </div>
            <pre className="whitespace-pre-wrap break-words text-[var(--color-graphite-ink-muted)]">
              {'{\n'}
              {RESPONSE_LINES.map((line, i) => (
                <span key={line.k}>
                  {'  '}
                  <span className="text-[var(--color-accent)]">{line.k}</span>
                  {': '}
                  <span className="text-[var(--color-graphite-ink)]">{line.v}</span>
                  {i < RESPONSE_LINES.length - 1 ? ',' : ''}
                  {'\n'}
                </span>
              ))}
              {'}'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
