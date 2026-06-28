# Kamaludin Khoir Portfolio

Personal portfolio site for Kamaludin Khoir, built with SvelteKit and exported as a static site for Cloudflare Pages.

## Tech Stack

- SvelteKit
- Vite
- Static adapter (`@sveltejs/adapter-static`)
- Cloudflare Pages / Wrangler
- Plain CSS with componentized Svelte sections

## Project Structure

```text
src/lib/components/portfolio/   Portfolio page sections and UI components
src/lib/data/portfolio.js        Portfolio content, links, projects, skills
src/routes/                     SvelteKit routes
static/portfolio/               Images, icons, and static portfolio assets
```

Static assets are grouped by file type:

```text
static/portfolio/avif/
static/portfolio/ico/
static/portfolio/png/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173/
http://localhost:5173/portfolio/
```

## Scripts

```bash
npm run check    # Svelte diagnostics
npm run lint     # Prettier formatting check
npm run build    # Static production build to build/
npm run preview  # Preview production build locally
npm run deploy   # Deploy build/ to Cloudflare Pages with Wrangler
```

## Deployment

This project is configured for static deployment to Cloudflare Pages.

Recommended Cloudflare Pages Git settings:

```text
Production branch: master
Build command: npm run build
Build output directory: build
```

The static adapter writes prerendered pages and assets to `build/`. The Cloudflare config in `wrangler.jsonc` also points to `build/` for direct Pages deploys.

For direct Wrangler deployment:

```bash
npm run build
npm run deploy
```

## Updating Content

Most portfolio content is defined in:

```text
src/lib/data/portfolio.js
```

Update this file for:

- Navigation labels
- Account links
- Professional experience
- Featured projects
- Technical capabilities
- Education and certifications

Update section layout or markup in:

```text
src/lib/components/portfolio/
```

## Validation Before Deploy

Run:

```bash
npm run check
npm run lint
npm run build
```

Confirm the build output contains:

```text
build/index.html
build/portfolio/index.html
build/portfolio/
```
