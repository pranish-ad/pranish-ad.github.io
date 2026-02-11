# Portfolio

React + Vite + Tailwind CSS portfolio with dark/light theme, smooth scroll, and Framer Motion animations.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/` (static assets).

## Deploy

**Vercel:** Connect the repo; build and output are read from `vercel.json`.

**Netlify:** Connect the repo; build command and publish dir are in `netlify.toml`. For the contact form, use Netlify Forms (form is in the built HTML with `data-netlify="true"`) or set the form `action` to Formspree.

Both use the same SPA redirect so all routes serve `index.html`.
