import { useEffect, useRef, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import BusinessValue from './components/BusinessValue';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactFooter from './components/ContactFooter';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Measure footer
    const el = footerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) setFooterHeight(entry.contentRect.height);
    });
    ro.observe(el);

    // Measure window
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial measurement

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Only use the fixed reveal effect if the footer is shorter than the screen.
  // Otherwise, the top of the footer gets cut off at the top of the screen!
  const isRevealAllowed = footerHeight > 0 && windowHeight > 0 && footerHeight <= windowHeight;

  return (
    <div className="relative">
      <ScrollProgress />
      {/* everything above the footer sits on top, with a solid bg,
          and reveals the footer at the very end of the scroll if it fits */}
      <div
        className="relative z-10 border-b border-[var(--color-rule)] bg-[var(--color-paper)] shadow-[0_-1px_0_var(--color-rule)]"
        style={{ marginBottom: isRevealAllowed ? footerHeight : 0 }}
      >
        <Nav />
        <main>
          <Hero />
          <Services />
          <BusinessValue />
          <Approach />
          <Projects />
          <Skills />
          <Experience />
        </main>
      </div>

      {/* fixed at the bottom if it fits in viewport, otherwise scrolls naturally */}
      <div 
        ref={footerRef} 
        className={isRevealAllowed ? "fixed bottom-0 left-0 w-full z-0" : "relative z-0 w-full"}
      >
        <ContactFooter />
      </div>

      {/* Invisible anchor at the absolute bottom of the document to make href="#contact" work with the fixed footer */}
      <div id="contact" className="absolute bottom-0 w-full" />
    </div>
  );
}
