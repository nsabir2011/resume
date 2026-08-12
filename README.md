# Nazmus Sakib Abir — Portfolio Site

Production implementation of the accepted profile-led portfolio baseline in [`mockups/profile-led`](mockups/profile-led/).

## Stack

- **Astro:** static-first component framework for content-heavy pages.
- **TypeScript:** strict types for portfolio data and component props.
- **Plain CSS:** keeps the design system transparent and avoids a runtime or utility-framework dependency.
- **pnpm:** deterministic installs through the committed lockfile.
- **GitHub Pages:** static deployment through Astro's official GitHub Action.

The production site intentionally has no React runtime, CSS framework, component library, CMS, server adapter, or animation dependency. Astro renders the components to static HTML and sends no client JavaScript unless a later feature explicitly needs it.

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm format
```

The production build is written to `dist/`.

## Project structure

```text
src/
  components/   Reusable portfolio sections
  data/         Reviewed public-facing content
  layouts/      Shared document layout and metadata
  pages/        File-based routes
  styles/       Global design system
public/         Files copied directly to the final build
mockups/        Static design history; not part of the production build
data/           Confidential working references; not imported by the site
```

## GitHub Pages

`astro.config.mjs` derives the GitHub username and repository subpath from the standard GitHub Actions environment. This allows both of these deployment forms without hard-coding a repository name:

- `https://username.github.io/repository/`
- `https://username.github.io/` for a repository named `username.github.io`

The workflow at `.github/workflows/deploy.yml` uses Astro's official Pages action. After the repository is pushed to GitHub, select **GitHub Actions** as the Pages source in the repository settings.

For a custom domain later, set `SITE_URL` to the full domain, set `BASE_PATH=/`, and add the domain to `public/CNAME`.

## Publication safety

Only reviewed and anonymized material belongs in `src/data/`. The production application must never import directly from the confidential `data/` directory. Follow [`data/career-reference/sources-and-publication.md`](data/career-reference/sources-and-publication.md) before expanding project copy.
