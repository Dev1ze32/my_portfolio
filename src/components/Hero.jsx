import { ArrowRight, MessageSquare } from 'lucide-react';
import CodeDemo from './CodeDemo';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center border-b border-[var(--color-rule)] pt-24 pb-16 sm:pt-28"
    >
      <div className="mx-auto grid w-full max-w-[var(--content-max)] grid-cols-1 items-center gap-14 px-[var(--page-gutter)] lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="max-w-[42ch]">
          <p className="font-mono-label mb-5 flex items-center gap-2 text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Backend Developer
          </p>

          <h1 className="text-[length:var(--text-display-s)] text-[var(--color-ink)]">
            Custom internal tools for businesses outgrowing spreadsheets.
          </h1>

          <p className="mt-6 max-w-[46ch] text-[length:var(--text-lg)] text-[var(--color-ink-muted)]">
            I build custom internal systems that replace manual spreadsheet
            tracking with a single source of truth, built around how your
            business actually operates.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-[length:var(--text-sm)] font-medium text-[var(--color-accent-ink)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-accent-hover)]"
            >
              <MessageSquare size={16} />
              Let&rsquo;s talk automation
            </a>
            <a
              href="#projects"
              className="btn inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-rule)] px-5 py-3 text-[length:var(--text-sm)] font-medium text-[var(--color-ink)] transition-colors duration-[var(--dur-fast)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View projects
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="font-mono-label mt-10 text-[var(--color-ink-faint)]">
            Currently building for manufacturing &amp; academic operations teams
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeDemo />
        </div>
      </div>
    </section>
  );
}
