import { useEffect, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { nav } from '../data/content';
import CommandPalette from './CommandPalette';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      const isK = e.key === 'k' || e.key === 'K';
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-[var(--dur-base)] ${
          scrolled
            ? 'border-[var(--color-rule)] bg-[color-mix(in_oklch,var(--color-paper)_85%,transparent)] backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex max-w-[var(--content-max)] items-center justify-between px-[var(--page-gutter)] py-4"
          aria-label="Primary"
        >
          <a
            href="#top"
            className="font-mono-label flex items-center gap-2 text-[var(--color-ink)]"
          >
            <span
              className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
            />
            wendell.dev
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link text-[var(--text-sm)] text-[var(--color-ink-2)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="hidden items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-2.5 py-1.5 text-[var(--color-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:border-[var(--color-accent)] hover:text-[var(--color-ink)] sm:flex"
              aria-label="Open command palette"
            >
              <Search size={14} />
              <span className="text-[var(--text-sm)]">Search</span>
              <kbd className="font-mono-label rounded-[var(--radius-xs)] border border-[var(--color-rule)] px-1 py-0.5">
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              className="btn hidden rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 py-2 text-[var(--text-sm)] font-medium text-[var(--color-accent-ink)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-accent-hover)] sm:inline-block"
            >
              Let&rsquo;s talk
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-rule)] text-[var(--color-ink)] md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-[var(--color-rule)] bg-[var(--color-paper)] px-[var(--page-gutter)] py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-[var(--radius-sm)] px-2 py-2.5 text-[var(--text-base)] text-[var(--color-ink-2)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-rule)] px-3 py-2.5 text-[var(--text-sm)] text-[var(--color-ink-muted)]"
                >
                  <Search size={14} /> Search
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
