# Fidelis Advocates — React website

The Fidelis Advocates website rebuilt in **React** (Vite + React Router), replacing the
old PHP/Laravel version. Same content and photos as the original site, in the new design.
Fully static — no login, no database, no PHP.

## Pages

- **Home** (`/`) — hero, about the firm, mission, the 20 practice areas, the team, appointment call-to-action, and footer. The About / Team / Contact / Appointment nav links scroll to sections on this page.
- **Our Services** (`/services`) — the 16 detailed practice areas plus the featured Land Law and Mining Law practices.

## Run it locally

You need [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install     # install dependencies (first time only)
npm run dev     # start the dev server, then open the URL it prints
```

## Build for production

```bash
npm run build   # outputs a static site into the dist/ folder
npm run preview # preview that production build locally
```

Upload the contents of `dist/` to any static host.

## Important: single-page-app routing

Because `/services` is a client-side route, a plain static host must send unknown paths
back to `index.html`, otherwise refreshing `/services` returns 404. Helpers are included:

- **Netlify** — `public/_redirects` (already added) handles this automatically.
- **Vercel** — `vercel.json` (already added) handles this automatically.
- **Apache** — add a `.htaccess` that rewrites to `index.html`.
- **Nginx** — use `try_files $uri /index.html;`.

## Where to edit content

All text, services, team bios and contact details live in **`src/data.js`** — edit there
to update the site; you don't need to touch the page components. Images are in
`public/images/`.

## Project structure

```
public/images/        the firm's photos (logo, team portraits, land/mining, etc.)
src/data.js           all site content (services, team, contact info)
src/styles.css        the full design (colors, fonts, layout, responsive rules)
src/components/       TopBar, Nav, Footer, Marquee, ScrollManager
src/pages/Home.jsx    the home page
src/pages/Services.jsx the services page
```
