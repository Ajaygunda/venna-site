# Venna — Heritage Bangalore Dosa Cafe (website)

A Next.js + Tailwind marketing site for Venna, generated for venna.in.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000

## Add your photos

This project references six photos that were not included in this script (image
files can't be generated as code). Save them into `public/images/` using these
exact filenames — they map to the photos you shared:

| Filename | Photo |
|---|---|
| dosa-hero.webp | the plated dosa with garlic, on the wood table |
| idli-plate.webp | idli plate with the glass water bottle |
| interior.webp | the café interior with pendant lights |
| idli-closeup.webp | the close-up tilted idli plate shot |
| filter-coffee.webp | the filter coffee in the steel davara-tumbler |

The site will work without them (the layout just shows broken image icons in
those spots) — add them whenever you're ready.

## Deploy

Easiest path: push this folder to a GitHub repo and import it into Vercel
(vercel.com/new). Point your venna.in domain at the Vercel project once deployed.

## Editing content

- Menu, prices, hours, address, phone: all in `app/page.tsx`
- Colors: `tailwind.config.ts` (venna.brown, venna.cream, etc.)
- Site title/meta description: `app/layout.tsx`
