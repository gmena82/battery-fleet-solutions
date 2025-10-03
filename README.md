# Battery Fleet Solutions

Next.js (App Router) project scaffolding for the Battery Fleet Solutions marketing site.

## Tech stack

- **Framework:** Next.js 14 (App Router) with TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (alpha), custom theme tokens, utility helpers via `tailwind-merge`
- **UI Libraries:** shadcn/ui (ready to add), Radix primitives, lucide-react icons, Framer Motion for future micro-interactions
- **Forms:** react-hook-form with Zod resolvers (place info here for future integrations)
- **Data:** Drizzle ORM + Postgres (schema placeholder included)
- **Tooling:** ESLint 9, Prettier, Vitest, Playwright, Husky + lint-staged, `pnpm` scripts wired for CI/CD
- **SEO:** Next Metadata API, LocalBusiness JSON-LD, FAQ JSON-LD helper, sitemap script stub

## Getting started

```bash
pnpm install
pnpm dev
```

Update environment variables in `.env.local` based on `.env.example`. Replace marketplace URLs, map coordinates, and any Resend/Sentry credentials when ready.

## Structure overview

```
app/
  layout.tsx            # Global metadata, header/footer, analytics
  page.tsx              # Home
  (marketing)/...       # Inventory landing
  services/             # Service-specific pages (reconditioning, testing, etc.)
  buyers/               # Buyer education (fitment, warranty, shipping, financing)
  marketplace/          # Official listings + trust tips
  resources/            # Guides, safety docs, code decoder
  about/, contact/, blog/, privacy/, terms/
src/
  components/           # UI primitives, FAQ, layout, SEO JSON-LD helpers
  config/site.ts        # Central business/contact config with env overrides
  content/faq.ts        # Shared FAQ pack
  db/schema.ts          # Placeholder for Drizzle schema
  lib/utils.ts          # Tailwind `cn` helper
```

## Next steps

- Wire up actual copy, images, and forms (replace `(place info here)` markers).
- Add shadcn/ui components or custom UI as needed for forms and CTAs.
- Implement contact form with React Hook Form, Zod validation, Resend email notifications, and Cloudflare Turnstile.
- Connect database + Drizzle migrations when inventory or lead tracking is required.
- Configure `next-sitemap` and analytics/monitoring credentials prior to launch.
