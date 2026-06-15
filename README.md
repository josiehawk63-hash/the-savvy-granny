# The Savvy Granny 🧺

Budget-friendly recipe site with affiliate product recommendations, built with [Astro](https://astro.build).

## Running locally

```bash
npm run dev      # start a local preview at http://localhost:4321
npm run build    # build the production site into dist/
npm run preview  # preview the production build
```

> Node is installed at `~/.local/node`. If `npm` isn't found, run:
> `export PATH="$HOME/.local/node/bin:$PATH"`

## How it's organized

- `src/content/recipes/` — one Markdown file per recipe (the content).
- `src/pages/` — the site's pages (home, recipes, about, contact, disclosure).
- `src/components/` — reusable pieces (recipe cards, share buttons, affiliate product, SEO schema).
- `src/layouts/BaseLayout.astro` — shared page shell with SEO meta tags.
- `public/admin/` — the visual recipe editor (Decap CMS), reachable at `/admin`.
- `public/images/recipes/` — recipe photos.

## Adding a recipe

Two ways:
1. **Visual editor** — go to `/admin` (after deployment is wired up) and fill in the form.
2. **By file** — copy an existing file in `src/content/recipes/` and edit it.

## Affiliate links

Replace `YOUR_AFFILIATE_ID` in the sample recipes with your real Amazon Associates tag
(or other affiliate links). The required FTC disclosure lives at `/disclosure`.

## SEO built in

- Recipe structured data (JSON-LD) for Google rich results
- Auto sitemap (`/sitemap-index.xml`) + `robots.txt`
- Meta description, canonical URLs, Open Graph + Twitter cards
