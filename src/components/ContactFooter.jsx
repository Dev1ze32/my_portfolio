import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function ContactFooter() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  }

  return (
    <footer id="contact" className="scroll-mt-24 bg-[var(--color-graphite)] pt-[var(--space-3xl)]">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--page-gutter)]">
        <div ref={ref} className="reveal grid grid-cols-1 gap-14 pb-[var(--space-2xl)] lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono-label mb-4 text-[var(--color-accent)]">Get in touch</p>
            <p className="foot-stmt__line max-w-[20ch] text-[length:clamp(1.75rem,1.1rem+2.6vw,3.25rem)] text-[var(--color-graphite-ink)]">
              Still running your business out of a spreadsheet?
            </p>
            <p className="mt-5 max-w-[42ch] text-[length:var(--text-base)] text-[var(--color-graphite-ink-muted)]">
              Tell me what it's tracking and where it breaks. I'll tell you
              honestly whether a custom system is worth building.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="footer-link flex items-center gap-2 text-[length:var(--text-sm)] text-[var(--color-graphite-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-[length:var(--text-sm)] text-[var(--color-graphite-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2 text-[length:var(--text-sm)] text-[var(--color-graphite-ink-muted)] transition-colors duration-[var(--dur-fast)] hover:text-[var(--color-accent)]"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[var(--radius-md)] border border-[var(--color-graphite-rule)] p-6 sm:p-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="font-mono-label mb-1.5 block text-[var(--color-graphite-ink-muted)]">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-graphite-rule)] bg-[var(--color-graphite-2)] px-3 py-2.5 text-[length:var(--text-sm)] text-[var(--color-graphite-ink)] outline-none transition-colors duration-[var(--dur-fast)] focus:border-[var(--color-accent)] disabled:opacity-50 placeholder:text-[var(--color-graphite-ink-muted)]/50"
                  placeholder="Jordan Cruz"
                />
              </label>
              <label className="block">
                <span className="font-mono-label mb-1.5 block text-[var(--color-graphite-ink-muted)]">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full rounded-[var(--radius-sm)] border border-[var(--color-graphite-rule)] bg-[var(--color-graphite-2)] px-3 py-2.5 text-[length:var(--text-sm)] text-[var(--color-graphite-ink)] outline-none transition-colors duration-[var(--dur-fast)] focus:border-[var(--color-accent)] disabled:opacity-50 placeholder:text-[var(--color-graphite-ink-muted)]/50"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            
            {status === 'success' ? (
              <div className="mt-4 rounded-[var(--radius-sm)] border border-[var(--color-graphite-rule)] bg-[var(--color-graphite-2)] p-5 text-center">
                <p className="text-[length:var(--text-base)] text-[var(--color-graphite-ink)]">
                  Message sent successfully.
                </p>
                <p className="mt-1 text-[length:var(--text-sm)] text-[var(--color-graphite-ink-muted)]">
                  I'll be in touch soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-[length:var(--text-sm)] text-[var(--color-accent)] hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <label className="mt-4 block">
                  <span className="font-mono-label mb-1.5 block text-[var(--color-graphite-ink-muted)]">What's the workflow?</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    className="w-full resize-none rounded-[var(--radius-sm)] border border-[var(--color-graphite-rule)] bg-[var(--color-graphite-2)] px-3 py-2.5 text-[length:var(--text-sm)] text-[var(--color-graphite-ink)] outline-none transition-colors duration-[var(--dur-fast)] focus:border-[var(--color-accent)] disabled:opacity-50 placeholder:text-[var(--color-graphite-ink-muted)]/50"
                    placeholder="We track vendor approvals in a shared spreadsheet and it's fallen apart…"
                  />
                </label>
                
                {status === 'error' && (
                  <p className="mt-3 text-[length:var(--text-sm)] text-red-500">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn mt-5 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-5 py-2.5 text-[length:var(--text-sm)] font-medium text-[var(--color-accent-ink)] transition-colors duration-[var(--dur-fast)] hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={15} />
                  {status === 'loading' ? 'Sending...' : 'Send inquiry'}
                </button>
              </>
            )}
          </form>
        </div>

        <div className="foot-stmt__meta flex flex-col items-start gap-3 border-t border-[var(--color-graphite-rule)] py-6 text-[length:var(--text-sm)] text-[var(--color-graphite-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono-label text-[var(--color-graphite-ink)]">{profile.name}</span>
          <span>© {new Date().getFullYear()} · {profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
