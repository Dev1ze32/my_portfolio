import { useEffect, useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { nav } from '../data/content';
import CommandPalette from './CommandPalette';

export default function Nav() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <header className="absolute inset-x-0 top-0 z-40 bg-black/30 backdrop-blur-sm">
        {/* Bottom separator */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <nav
          className="mx-auto flex max-w-[var(--content-max)] items-center justify-between px-[var(--page-gutter)] py-4"
          aria-label="Primary"
        >
          {/* Logo */}
          <a
            href="#top"
            className="font-mono-label flex items-center gap-2.5 text-white transition-colors duration-200 hover:text-[var(--color-accent)]"
          >
            <span
              className="inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
              aria-hidden="true"
            />
            wendell.dev
          </a>

          {/* Center nav links */}
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link rounded-md px-3.5 py-1.5 text-[var(--text-sm)] text-white/80 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="hidden items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-2.5 py-1.5 text-white/70 transition-all duration-200 hover:border-white/25 hover:text-white sm:flex"
              aria-label="Open command palette"
            >
              <Search size={13} />
              <span className="text-[var(--text-sm)]">Search</span>
              <kbd className="font-mono-label rounded border border-white/10 px-1 py-0.5 text-[10px] text-white/50">
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              className="btn hidden rounded-md bg-[var(--color-accent)] px-4 py-1.5 text-[var(--text-sm)] font-medium text-[var(--color-accent-ink)] transition-all duration-200 hover:bg-[var(--color-accent-hover)] sm:inline-block"
            >
              Let&rsquo;s talk
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-8 w-8 items-center justify-center rounded-md text-white/90 transition-colors hover:text-white md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 bg-black/40 px-[var(--page-gutter)] py-3 backdrop-blur-md md:hidden">
            <ul className="flex flex-col gap-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-[var(--text-base)] text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setPaletteOpen(true);
                  }}
                  className="flex w-full items-center gap-2 rounded-md border border-white/15 px-3 py-2.5 text-[var(--text-sm)] text-white/70"
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
