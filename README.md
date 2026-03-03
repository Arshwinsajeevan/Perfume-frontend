# Maison Nocturne — Luxury Perfume Showcase

Frontend-only luxury product showcase for a fictional niche perfume house, built with React + Vite.

## Tech Stack

- **React 19** + **Vite** — fast dev/build
- **React Router v7** — client-side routing
- **Vanilla CSS** — design tokens via CSS custom properties

## Setup

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`. For production build: `npm run build`.

## Deployment (Vercel)

1. Push your code to a GitHub repository.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel will automatically detect the Vite settings and deploy.
4. Client-side routing is handled by `vercel.json`.

## Pages

| Route | Description |
|---|---|
| `/` | Landing — hero, brand intro, featured products |
| `/collection` | Product grid with category filter & price sort |
| `/collection/:id` | Product detail with fragrance notes & specs |

## Design Decisions

- **Typography**: Cormorant Garamond (headings) + Inter (body) — luxury serif paired with clean sans-serif
- **Colors**: Dark palette (`#0A0A0A` bg, `#C9A96E` gold accent, `#F5F0E8` cream text) — 4 colors max
- **Spacing**: 4px base scale, applied consistently via CSS variables
- **Motion**: 200–400ms ease transitions on hover states only

## Project Structure

```
/src
  /components  — Navbar, Footer, Button, ProductCard, FeaturedCard, NotFound
  /pages       — LandingPage, ProductListingPage, ProductDetailPage
  /data        — products.js (static data + helpers)
  /styles      — tokens.css, global.css
```

## Known Limitations

- No backend/auth/database — all data is static JSON
- 2 of 8 product images use SVG placeholders (replaceable in `public/images/`)
- CSS-only transitions — no animation library
