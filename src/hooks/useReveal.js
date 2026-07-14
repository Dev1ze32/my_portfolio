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
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
