import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const scrollableHeight = documentHeight - windowHeight;
      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }
      
      const scrolled = scrollTop / scrollableHeight;
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 w-full origin-left bg-[var(--color-accent)]"
      style={{
        transform: `scaleX(${progress})`,
        transition: 'transform 0.1s ease-out',
      }}
      aria-hidden="true"
    />
  );
}
