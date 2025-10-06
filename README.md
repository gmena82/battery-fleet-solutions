# Battery Fleet Solutions

Tailwind CSS v4 ready Next.js App Router scaffold for Battery Fleet Solutions. This project ships with TypeScript, shadcn/ui components, Drizzle ORM tooling, Vitest, Playwright, ESLint 9, Prettier (with Tailwind plugin), Husky, and next-sitemap.

## Getting Started

Install dependencies and copy the environment file:

```bash
pnpm install
cp .env.example .env.local
```

Initialize Husky hooks and start the development server:

```bash
pnpm prepare
pnpm dev
```

## Available Scripts

The following commands are available via `pnpm`:

- `pnpm dev` – run the Next.js development server on port 3000
- `pnpm build` – create a production build
- `pnpm start` – run the production server
- `pnpm lint` – lint with ESLint 9
- `pnpm typecheck` – run TypeScript in noEmit mode
- `pnpm format` / `pnpm format:write` – check or fix formatting with Prettier
- `pnpm test` / `pnpm test:watch` – execute Vitest suites (jsdom environment)
- `pnpm e2e` – execute Playwright tests
- `pnpm sitemap` – generate the sitemap with `next-sitemap`
- `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:studio` – Drizzle ORM tooling
- `pnpm check` – run lint, typecheck, unit tests, and build sequentially

## Tailwind CSS v4 Setup

Tailwind v4 is loaded purely through CSS via `src/app/globals.css` using `@import "tailwindcss";`. Design tokens are defined as CSS variables and exposed to utility classes with the `@theme inline` block. Animations used by shadcn/ui components come from the `tw-animate-css` package, imported directly in CSS.

## Project Structure

```
src/
  app/                # Next.js App Router routes
  components/         # UI and SEO components
  config/             # Site-wide configuration
  content/            # Structured content (FAQs, etc.)
  db/                 # Database schema (Drizzle)
  lib/                # Utility helpers
```

The scaffold includes placeholder sections for marketplace links, testimonials, and inventory cards that can be wired up to live data sources later.
