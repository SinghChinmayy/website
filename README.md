# case-site

A case-study-first personal portfolio built with [Astro](https://astro.build), [Keystatic CMS](https://keystatic.com), and deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Prerequisites

- [Node.js](https://nodejs.org) v18+
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

> **Why?** `npm run dev` runs `astro dev`, which requires the `astro` binary from `node_modules`. If you see `astro: command not found`, this step was missed.

### 2. Start the dev server

```bash
npm run dev
```

The site will be available at **http://localhost:4321**.

The Keystatic CMS admin panel is available at **http://localhost:4321/keystatic**.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
/
├── public/          # Static assets (favicon, fonts, images)
├── src/
│   ├── data/        # Site config (site.json loaded by astro.config.mjs)
│   ├── content/     # Keystatic-managed content (case studies, posts, etc.)
│   ├── layouts/     # Page layouts
│   ├── pages/       # Astro pages & routes
│   └── components/  # Reusable Astro/React components
├── astro.config.mjs # Astro configuration
└── keystatic.config.ts # Keystatic CMS schema
```

## Content Management

Site content is managed through **Keystatic CMS**. During development, open `/keystatic` in the browser to create or edit content. Changes are written directly to the local filesystem.

## Deployment

This site targets **Cloudflare Pages** via the `@astrojs/cloudflare` adapter. Push to your connected branch to trigger a production build.
