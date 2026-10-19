# Lucas Matos | Data Engineering

Personal portfolio built with Docusaurus 3. It highlights data engineering experience, core technologies and selected project work.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run start
```

The development server opens the portfolio at `http://localhost:3000`.

## Build

```bash
npm run build
npm run serve
```

The production site is generated in `build/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml` and publishes the Docusaurus build to GitHub Pages. In the repository settings, set Pages deployment source to **GitHub Actions**.

## Content

- Homepage: `src/pages/index.js`
- Homepage styles: `src/pages/index.module.css`
- Project case study: `docs/portfolio.md`
- Site configuration: `docusaurus.config.js`