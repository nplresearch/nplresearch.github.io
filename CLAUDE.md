# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Research lab website for NPL (Network Science Institute Research Lab). A Svelte 3 single-page application using Vite, deployed to GitHub Pages at `https://nplresearch.github.io`.

## Commands

```bash
npm run dev       # Start local dev server with hot reload
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build locally
npm run deploy    # Deploy dist/ to GitHub Pages via gh-pages package
./deploy.sh       # Full deploy: build + gh-pages + force push to nplresearch.github.io
```

No test framework or linter is configured.

## Architecture

**Routing:** `svelte-spa-router` with hash-based client-side routing, defined in `src/App.svelte`:
- `/` → Home, `/publications` → Publications, `/publications/:tag` → Publication
- `/people` → People, `/people/:tag` → Person, `/alumni/:tag` → Alumni
- `/projects` → Projects, `/projects/:tag` → Project

**Data layer:** All content lives in TOML files under `public/static/`:
- `activity.toml` — news/activity entries (`[[articles]]`)
- `publications/publications.toml` — papers (`[[papers]]`) and featured papers (`[[featured]]`)
- `people/people.toml` — researchers (`[[researchers]]`) and alumni (`[[alumni]]`)
- `projects/projects.toml` — research projects (`[[projects]]`)

`src/lib/scripts/store.js` fetches these TOML files at app startup, parses them, sorts by date/year, and exports Svelte `readable` stores. All components subscribe to these stores.

**Date format:** Activity dates use `DD-MM-YYYY` format. Paper dates use either `DD-MM-YYYY` or `YYYY`. Parsing is done via `moment.js`.

**Code organization:**
- `src/lib/routes/` — page-level components (one per route)
- `src/lib/comp/` — reusable components (Paper, Papers, Timeline, Article, etc.)
- `src/lib/scripts/` — data stores
- `src/app.css` — global styles and CSS custom properties (design tokens)

**Linking between data:** Papers reference people via `people` array (using `tag` values like `"giovanni_petri"`) and projects via `projects` array. Detail pages filter papers by these tags.

## Content Editing

TOML files are the source of truth. New entries go at the top of each file. All fields in a TOML entry are mandatory (some can be empty strings). People images go in `public/static/people/`.

## Deployment

The site deploys to GitHub Pages. The `gh-pages` branch serves the built site. The `master` branch contains source code.
