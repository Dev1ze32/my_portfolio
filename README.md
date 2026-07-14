# Wendell Dave Anciso — Portfolio

Vite + React + Tailwind CSS v4. Built with the **Cobalt** design system
(modern-minimal genre, Bento Grid macrostructure) — a light, cool-white
engineered canvas with one electric-cobalt signal accent and one dark
graphite band, styled after the GitBook/Firecrawl/Vercel dev-tool school.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  App.jsx                 assembles the page from section components
  index.css                Tailwind v4 entry + @theme token mapping
  styles/tokens.css         the full design-token system (colors, type, spacing, radii, motion)
  data/content.js           ALL copy lives here — edit this file to update text/links/projects
  hooks/useReveal.js         scroll-reveal IntersectionObserver hook
  components/
    Nav.jsx                  bordered nav + working ⌘K trigger
    CommandPalette.jsx        the ⌘K / Ctrl+K command palette (search, arrow-nav, Enter, Esc)
    Hero.jsx                  headline / subhead / CTAs + live code demo
    CodeDemo.jsx               the type-in API request/response card
    Services.jsx               Bento-grid value proposition tiles
    Approach.jsx                the 4-step process — the page's one dark band
    Projects.jsx                featured project cards (pulls from data/content.js)
    Skills.jsx                  grouped skill chips (no progress bars)
    Experience.jsx              internship + education
    ContactFooter.jsx           statement line + contact form (mailto) + footer meta
```

## Editing content

Everything text-based — name, links, services, skills, project copy — lives
in `src/data/content.js`. You will not need to touch component files to
update copy or add a project.

## Design tokens

`src/styles/tokens.css` is portable: every color, font, spacing, radius, and
easing value used in the build is declared there as a CSS custom property
and consumed by name (never inlined) throughout the components.
