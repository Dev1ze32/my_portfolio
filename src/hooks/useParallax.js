import { useEffect, useRef } from 'react';

/**
 * Updates a CSS variable on the ref element based on scroll position.
 * This allows pure CSS parallax without re-rendering the React component.
 */
export function useParallax(variableName = '--scroll-y', factor = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    const handleScroll = () => {
      // Use requestAnimationFrame to sync with browser painting
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        // Calculate how far the element is from the center of the viewport
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        
        // Distance from center (negative means element is above center, positive means below)
        const distanceFromCenter = elementCenter - viewportCenter;
        
        // Apply the factor and set as a CSS variable
        el.style.setProperty(variableName, `${distanceFromCenter * factor}px`);
        
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [factor, variableName]);

  return ref;
}
