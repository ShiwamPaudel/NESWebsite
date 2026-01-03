# New Shiwani Enterprises - Next.js Frontend

This is a Next.js + TypeScript + Tailwind prototype scaffold for the New Shiwani Enterprises site.

Quick start

1. Copy the images from the legacy `assets/images` folder into `web/public/images`.
2. cd into `web` and run `npm install`.
3. Run `npm run dev` to start the dev server.

Features

- App router with pages: Home, Products, Product Detail, About, Contact
- Seeded product data at `data/products.json` for quick MVP
- Tailwind CSS with a small theme that maps the existing styles
- Responsive header, footer, product cards

Deployment

- Push this repo to GitHub and deploy the `web` folder with Vercel (import repository, set build command `npm run build`, output: `.next`).

Next steps

- Copy real product images and product copy
- Add CMS (Sanity / Strapi / Shopify) or API for dynamic product data
- Add cart and Stripe or Snipcart integration if you want payments
- Add tests, CI and linting rules
