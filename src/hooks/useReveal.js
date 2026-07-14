import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref and adds
 * `.is-in` once the element enters the viewport. One-shot; unobserves
 * after firing. Respects prefers-reduced-motion by letting CSS handle
 * the reduced-motion fallback (see index.css `.reveal`).
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is above the viewport, it should be fully revealed
          const isAbove = entry.boundingClientRect.y < 0;
          const rawRatio = entry.intersectionRatio;
          
          // Multiply ratio so it hits 1.0 quicker (e.g. at 40% visibility instead of 100%)
          const ratio = isAbove ? 1 : Math.min(1, rawRatio * 2.5);
          
          entry.target.style.setProperty('--reveal-ratio', ratio);
          
          if (ratio === 1) {
            entry.target.classList.add('is-in');
            // We can optionally unobserve here, but leaving it observed allows scroll-scrubbing both ways!
            // However, to keep it performant and match standard reveal behavior, we lock it in once fully revealed:
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20), rootMargin: '0px 0px -10% 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
