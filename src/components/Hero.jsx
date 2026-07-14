import { ArrowRight, MessageSquare } from 'lucide-react';
import CodeDemo from './CodeDemo';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const contentRef = useReveal();
  const demoRef = useReveal();
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-[var(--color-rule)] pt-24 pb-16 sm:pt-28"
    >
      <div className="glow-blob absolute right-[5%] top-[10%]" aria-hidden="true" />
      
      {/* NEW — decorative fill, large screens only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden 2xl:block">
        <div className="absolute -right-24 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[var(--color-accent-wash)] blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[var(--content-max)] grid-cols-1 items-center gap-14 px-[var(--page-gutter)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 2xl:gap-20">
        <div ref={contentRef} className="reveal max-w-[42ch]">
          <p className="load-in font-mono-label mb-5 flex items-center gap-2 text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            Backend Developer
          </p>

          <h1 className="load-in load-in-1 text-[length:var(--text-display-s)] text-[var(--color-ink)]">
            Custom internal tools for businesses outgrowing spreadsheets.
          </h1>

          <p className="load-in load-in-2 mt-6 max-w-[46ch] text-[length:var(--text-lg)] text-[var(--color-ink-muted)]">
            I build custom internal systems that replace manual spreadsheet
            tracking with a single source of truth, built around how your
            business actually operates.
          </p>

          <div className="load-in load-in-3 mt-9 flex flex-wrap items-center gap-3">
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

          <p className="load-in load-in-4 font-mono-label mt-10 text-[var(--color-ink-faint)]">
            Currently building for manufacturing &amp; academic operations teams
          </p>
        </div>

        <div ref={demoRef} className="reveal reveal-delay-2 flex justify-center lg:justify-end">
          <CodeDemo />
        </div>
      </div>
    </section>
  );
}
