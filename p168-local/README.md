# p168 (React + GitHub Pages)

This is a small multi-page React app built with **Vite**, **React Router**, and **React-Bootstrap**, deployed to **GitHub Pages**.

## What changed (documentation)

Compared to the original “single page text” starter, this project now includes:

- **React Router navigation** via `HashRouter` + `Routes`
- **Primary navigation bar** (React-Bootstrap `Navbar`) with links to multiple pages
- **Multiple pages**: Home, Projects, About, and a NotFound page
- **Reusable components** used across pages:
  - `SiteNav`
  - `AppFooter`
  - `PageHeader`
  - `FeatureCard`
  - `AppLayout`
- **GitHub Pages-friendly routing**: `HashRouter` avoids refresh/deep-link 404 issues on GitHub Pages

## Routes

- `#/` Home
- `#/projects` Projects
- `#/about` About

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

This repo uses `gh-pages` to publish the `dist/` folder.

```bash
npm run deploy
```

Notes:

- `vite.config.js` sets `base: '/p168/'` so assets resolve correctly on GitHub Pages.
- The site is deployed under the GitHub Pages path from `homepage` in `package.json`.
