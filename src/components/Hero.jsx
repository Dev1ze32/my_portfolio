import { ArrowRight, MessageSquare } from 'lucide-react';
import CodeDemo from './CodeDemo';
import { useReveal } from '../hooks/useReveal';
import Hero3D from './Hero3D';

export default function Hero() {
  const contentRef = useReveal();
  const demoRef = useReveal();
  
  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center overflow-hidden pb-32 pt-24 sm:pt-28"
    >
      <Hero3D />

      <div className="relative z-10 mx-auto grid w-full max-w-[var(--content-max)] grid-cols-1 items-center gap-14 px-[var(--page-gutter)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 2xl:gap-20">
        <div ref={contentRef} className="reveal max-w-[42ch]">
          <p className="load-in font-mono-label mb-5 flex items-center gap-2 text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
            Backend Developer
          </p>

          <h1 className="load-in load-in-1 text-[length:var(--text-display-s)] font-bold text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Custom internal tools for businesses outgrowing spreadsheets.
          </h1>

          <p className="load-in load-in-2 mt-6 max-w-[46ch] text-[length:var(--text-lg)] text-white/75 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
            I build custom internal systems that replace manual spreadsheet
            tracking with a single source of truth, built around how your
            business actually operates.
          </p>

          <div className="load-in load-in-3 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-3 text-[length:var(--text-sm)] font-medium text-[var(--color-accent-ink)] shadow-lg shadow-[var(--color-accent)]/20 transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-accent-hover)]"
            >
              <MessageSquare size={16} />
              Let&rsquo;s talk automation
            </a>
            <a
              href="#projects"
              className="btn inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-white/25 bg-white/5 px-5 py-3 text-[length:var(--text-sm)] font-medium text-white/90 backdrop-blur-sm transition-all duration-[var(--dur-fast)] hover:border-[var(--color-accent)] hover:bg-white/10 hover:text-white"
            >
              View projects
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="load-in load-in-4 font-mono-label mt-10 text-white/40">
            Currently building for manufacturing &amp; academic operations teams
          </p>
        </div>

        <div ref={demoRef} className="reveal reveal-delay-2 flex justify-center lg:justify-end">
          <CodeDemo />
        </div>
      </div>

      {/* Gradient fade BELOW content, with enough space so it never touches text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-paper)]" />
    </section>
  );
}
