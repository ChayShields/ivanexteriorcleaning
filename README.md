# Ivan's Exterior Cleaning — Website

Next.js 16 (App Router, TypeScript, Tailwind v4) site for Ivan's Exterior
Cleaning, built for local SEO across Lowestoft, Kessingland and Pakefield.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID. Analytics only loads
  after a visitor accepts the cookie consent banner.
- `BREVO_API_KEY` — required for the contact form (`/api/contact`) to
  actually send emails via Brevo. Without it, enquiries are logged
  server-side but not emailed — the form still returns success so it should
  never be left unset in production. The sending address
  (`enquiries@ivanexteriorcleaning.co.uk`) needs to be a verified sender or
  verified domain in the Brevo account.
- `CONTACT_NOTIFY_EMAIL` — where enquiry emails are sent (defaults to the
  business email in `src/lib/business.ts`).
- `GOOGLE_PLACES_API_KEY` — required for the real Google Reviews widget
  (`src/components/GoogleReviews.tsx`) to show anything. Without it, the
  reviews section on the homepage, service pages and area pages simply
  renders nothing (no error, no fake fallback content).

## Before This Goes Live
- Fabricated testimonial quotes have been removed entirely — the site now
  only shows real reviews pulled live from Google (see above), so there's no
  fake-review risk left to manage.
- **"Are you insured?" FAQ answer** on the homepage asserts Ivan is fully
  insured. Confirm this is actually true before launch, or soften the wording.
- Real photos (before/after shots, team, property photos) still need adding —
  none of the current pages reference placeholder images because none were
  available at build time, but a coastal cleaning business benefits heavily
  from real work photos per the local SEO plan.
- Confirm the NAP details (address locality, geo coordinates, opening hours)
  in `src/lib/business.ts` against Ivan's actual Google Business Profile.

## Content & Structure

- `src/lib/business.ts` — single source of truth for NAP data, the 3 services,
  and the 3 area pages (Lowestoft, Kessingland, Pakefield).
- `src/lib/blog.ts` — blog post content.
- `src/app/[service]/page.tsx` — dynamic route for the 3 service pages.
- `src/app/areas-we-serve/[area]/page.tsx` — dynamic route for the 3 local
  area pages, each with unique landmark-anchored content (not swapped town
  names) to avoid Google's doorway-page flag.

## Deploy

Deploy to Vercel as normal (`vercel --prod` or via the Vercel dashboard/Git
integration). Set the environment variables above in the Vercel project
settings before going live.
