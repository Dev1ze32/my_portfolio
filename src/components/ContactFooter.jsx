import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function ContactFooter() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Automation project inquiry from ${form.name || 'your site'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-[var(--color-rule)] pt-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div ref={ref} className="reveal grid grid-cols-1 gap-14 pb-[var(--space-2xl)] lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono-label mb-4 text-[var(--color-accent)]">Get in touch</p>
            <p className="foot-stmt__line max-w-[20ch] text-[length:clamp(1.75rem,1.1rem+2.6vw,3.25rem)] text-[var(--color-ink)]">
              Still running your business out of a spreadsheet?
            </p>
            <p className="mt-5 max-w-[42ch] text-[length:var(--text-base)] text-[var(--color-ink-muted)]">
              Tell me what it's tracking and where it breaks. I'll tell you
              honestly whether a custom system is worth building.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="footer-link flex items-center gap-2 text-[length:var(--text-sm)] text-[var(--color-ink-2)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-[length:var(--text-sm)] text-[var(--color-ink-2)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-[length:var(--text-sm)] text-[var(--color-ink-2)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[var(--radius-md)] border border-[var(--color-rule)] p-6 sm:p-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono-label mb-1.5 block text-[var(--color-ink-faint)]">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2.5 text-[length:var(--text-sm)] text-[var(--color-ink)] outline-none transition-colors duration-[var(--dur-fast)] focus:border-[var(--color-accent)]"
                  placeholder="Jordan Cruz"
                />
              </label>
              <label className="block">
                <span className="font-mono-label mb-1.5 block text-[var(--color-ink-faint)]">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2.5 text-[length:var(--text-sm)] text-[var(--color-ink)] outline-none transition-colors duration-[var(--dur-fast)] focus:border-[var(--color-accent)]"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="font-mono-label mb-1.5 block text-[var(--color-ink-faint)]">What's the workflow?</span>
              <textarea
                required
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full resize-none rounded-[var(--radius-sm)] border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2.5 text-[length:var(--text-sm)] text-[var(--color-ink)] outline-none transition-colors duration-[var(--dur-fast)] focus:border-[var(--color-accent)]"
                placeholder="We track vendor approvals in a shared spreadsheet and it's fallen apart…"
              />
            </label>
            <button
              type="submit"
              className="btn mt-5 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-2.5 text-[length:var(--text-sm)] font-medium text-[var(--color-accent-ink)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-accent-hover)]"
            >
              <Send size={15} />
              Send inquiry
            </button>
            <p className="mt-3 text-[length:var(--text-xs)] text-[var(--color-ink-faint)]">
              Opens your email client with this pre-filled — nothing is sent from this page.
            </p>
          </form>
        </div>

        <div className="foot-stmt__meta flex flex-col items-start gap-3 border-t border-[var(--color-rule)] py-6 text-[length:var(--text-sm)] text-[var(--color-ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono-label text-[var(--color-ink)]">{profile.name}</span>
          <span>© {new Date().getFullYear()} · {profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
