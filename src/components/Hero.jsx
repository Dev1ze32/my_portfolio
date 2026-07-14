import { useEffect, useState } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import CodeDemo from './CodeDemo';
import { useReveal } from '../hooks/useReveal';
import Hero3D from './Hero3D';

export default function Hero() {
  const contentRef = useReveal();
  const demoRef = useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't fade until the user has scrolled almost an entire screen down
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const fadeStart = windowHeight * 0.8;
  const fadeDistance = 400;
  const opacity = scrollY < fadeStart 
    ? 1 
    : Math.max(0, 1 - (scrollY - fadeStart) / fadeDistance);
    
  const translateY = scrollY * 0.3; // slightly softer parallax
  
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[var(--color-graphite)] pb-24 pt-16 lg:min-h-[calc(100vh+4rem)] lg:pb-28 lg:pt-20"
    >
      <div 
        className="absolute inset-0 z-0 h-full w-full"
        style={{ 
          opacity, 
          transform: `translate3d(0, ${translateY}px, 0)` 
        }}
      >
        <Hero3D />
      </div>

      <div 
        className="relative z-10 mx-auto grid w-full max-w-[var(--content-max)] grid-cols-1 items-center gap-14 px-[var(--page-gutter)] md:grid-cols-[1.05fr_1fr] md:gap-8 2xl:gap-20"
        style={{ 
          opacity, 
          transform: `translate3d(0, ${translateY}px, 0)` 
        }}
      >
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

    </section>
  );
}
