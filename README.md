# Portfolio of Gele Jovanoski

Personal portfolio of **Gele Jovanoski**, Senior Full Stack Developer (PHP · Symfony · Laravel · WordPress · React).

🔗 **Live:** https://gelejovanoski.dev

<!-- TODO: add a screenshot: ![Screenshot](public/screenshot.png) -->

## Tech stack

- **Next.js** (App Router) with **static export**, so the whole site is plain HTML/CSS/JS
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4**, with design tokens defined in `app/globals.css`
- **Fonts:** Inter, Space Grotesk and JetBrains Mono via `next/font` (self-hosted, no layout shift)
- **Hosting:** Cloudflare Pages, deployed automatically on every push to `main`

## Features

- Responsive layout from 320 px phones up to wide desktops, with an accessible mobile menu
- Skill bars that animate when scrolled into view (`IntersectionObserver` hook, respects `prefers-reduced-motion`)
- SEO: metadata, Open Graph, canonical URL, `sitemap.xml`, `robots.txt` and JSON-LD `Person` schema
- Accessibility: semantic landmarks, skip link, visible focus, labelled controls and sufficient colour contrast
- All content lives in a single typed file, `data/content.ts`

## Project structure

```
app/            layout (metadata, fonts), page, sitemap, robots, global styles
components/     Nav, Hero, Stats, Projects, Experience, Skills, Contact, Footer
data/           content.ts: projects, experience, skills (typed)
public/         profile photo, project screenshots (public/projects)
```

## Running locally

Requires **Node.js 20.9 or newer** (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in /out
npm run typecheck
```

## Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Framework preset **Next.js (Static HTML Export)**, build command `npm run build`, output directory `out`.
4. Add the custom domain under **Custom domains**.

## Contact

[gelejovanosky@gmail.com](mailto:gelejovanosky@gmail.com) · [LinkedIn](https://www.linkedin.com/in/gelejovanoski)
