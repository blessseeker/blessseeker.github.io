# Kamaludin Khoir Portfolio

Personal portfolio site for Kamaludin Khoir, built with SvelteKit and deployed to Cloudflare Workers.

## Tech Stack

- SvelteKit
- Vite
- Cloudflare adapter (`@sveltejs/adapter-cloudflare`)
- Cloudflare Workers / Wrangler
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
npm run build    # Production build for Cloudflare Workers
npm run preview  # Preview production build locally
npm run deploy   # Build and deploy to Cloudflare Workers
npm run deploy:cloudflare # Deploy existing Worker build output
```

## Deployment

This project is configured for Cloudflare Workers deployment through Wrangler.

Recommended Cloudflare build settings:

```text
Production branch: master
Build command: npm run build
Deploy command: npm run deploy:cloudflare
```

`@sveltejs/adapter-cloudflare` writes Worker output to `.svelte-kit/cloudflare/`. `wrangler deploy` publishes the Worker and its static assets using `wrangler.jsonc`.

For local deployment:

```bash
npm run deploy
```

Wrangler deployment requires `CLOUDFLARE_API_TOKEN` to be set with permission to deploy Cloudflare Workers in the target account.

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
.svelte-kit/cloudflare/_worker.js
.svelte-kit/cloudflare/portfolio/
```
