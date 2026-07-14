import { useEffect, useMemo, useRef, useState } from 'react';
import { Search, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { nav, profile } from '../data/content';

const externalCommands = [
  { label: 'Open GitHub', href: profile.github, icon: Github },
  { label: 'Open LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: `Email ${profile.email}`, href: `mailto:${profile.email}`, icon: Mail },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);

  const commands = useMemo(() => {
    const sectionCommands = nav.map((n) => ({
      label: `Go to ${n.label}`,
      href: n.href,
      icon: ArrowRight,
    }));
    const all = [...sectionCommands, ...externalCommands];
    if (!query.trim()) return all;
    const q = query.toLowerCase();
    return all.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement;
      setQuery('');
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (triggerRef.current instanceof HTMLElement) {
        triggerRef.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  function runCommand(cmd) {
    if (!cmd) return;
    const isExternal = cmd.href.startsWith('http') || cmd.href.startsWith('mailto');
    if (isExternal) {
      window.open(cmd.href, cmd.href.startsWith('mailto') ? '_self' : '_blank', 'noopener');
    } else {
      document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onClose();
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, commands.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(commands[activeIndex]);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[14vh]"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-[oklch(23%_0.02_258_/_0.45)] backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-[520px] rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-paper)] shadow-[0_20px_60px_-20px_oklch(23%_0.02_258/0.35)] overflow-hidden"
      >
        <div className="flex items-center gap-3 border-b border-[var(--color-rule)] px-4 py-3">
          <Search size={16} className="text-[var(--color-ink-faint)] shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a section, or open a link…"
            className="w-full bg-transparent text-[var(--text-sm)] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none"
          />
          <kbd className="font-mono-label shrink-0 rounded-[var(--radius-xs)] border border-[var(--color-rule)] px-1.5 py-0.5 text-[var(--color-ink-faint)]">
            esc
          </kbd>
        </div>
        <ul className="max-h-[45vh] overflow-y-auto py-1.5" role="listbox">
          {commands.length === 0 && (
            <li className="px-4 py-6 text-center text-[var(--text-sm)] text-[var(--color-ink-faint)]">
              No matches for &ldquo;{query}&rdquo;
            </li>
          )}
          {commands.map((cmd, i) => {
            const Icon = cmd.icon;
            return (
              <li key={cmd.label} role="option" aria-selected={i === activeIndex}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => runCommand(cmd)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-[var(--text-sm)] transition-colors duration-[var(--dur-fast)] ${
                    i === activeIndex
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)]'
                      : 'text-[var(--color-ink-2)]'
                  }`}
                >
                  <Icon size={15} className="shrink-0" />
                  <span className="truncate">{cmd.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
