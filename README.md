# GritFit Donegal — Brochure Site

Single-page brochure site for GritFit fitness classes, built with
[Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

## Project structure

```text
/
├── public/
│   ├── favicon-32.png        # generated from the logo
│   ├── favicon-512.png       # og:image / larger favicon
│   └── apple-touch-icon.png
├── src/
│   ├── assets/
│   │   └── logo.jpg          # the GritFit logo, optimized by Astro's <Image />
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Classes.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro      # shared CTA button (primary/secondary/ghost)
│   │   └── SocialIcons.astro
│   ├── data/
│   │   ├── site.ts           # contact info, Wunderbook + social links — EDIT HERE
│   │   └── images.ts         # placeholder stock photo URLs — EDIT HERE
│   ├── layouts/
│   │   └── Layout.astro      # <head>, fonts, meta/OG tags
│   ├── pages/
│   │   └── index.astro       # assembles the single page from the components above
│   └── styles/
│       └── global.css        # Tailwind import + brand color theme (`primary-*`)
└── package.json
```

## Things to update before/soon after launch

Everything below lives in **`src/data/site.ts`** unless noted:

- [ ] `email` / `phone` — currently placeholders (`hello@gritfitdonegal.ie`, `+353 XX XXX XXXX`)
- [ ] `instagramUrl` — confirm the exact Instagram URL/handle
- [ ] Stock photos in **`src/data/images.ts`** — every image is a placeholder from
      Unsplash, swapped in for real GritFit photos as soon as you have them. Each
      entry has an `alt` description so it's obvious what to replace it with.

The Facebook and Wunderbook links are already the real ones you provided.

## Commands

| Command           | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`        | Start local dev server at `localhost:4321`   |
| `npm run build`      | Build the static site to `./dist/`           |
| `npm run preview`    | Preview the production build locally         |

## Deploying to Cloudflare Pages (free plan)

1. Push this repo to GitHub (or GitLab).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**,
   pick this repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare will give you a `*.pages.dev` URL immediately; add a custom
   domain later from the same project settings if you want one.

No adapter/SSR config is needed — this site builds to fully static HTML.
