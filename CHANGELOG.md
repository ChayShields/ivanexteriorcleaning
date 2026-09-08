# Change Log

## Initial build (September 2026)

Full local-SEO-focused Next.js rebuild of ivanexteriorcleaning.co.uk. See
`README.md` for setup/env vars and open items.

### Pages
- Homepage, 4 service pages (Window Cleaning, Gutter Clearing, Gutter
  Cleaning, Driveway & Patio Cleaning), `/services` hub
- 4 area pages (Lowestoft, Kessingland, Pakefield, Carlton Colville) with
  unique landmark-anchored content, `/areas-we-serve` hub
- Blog (3 seed posts), Contact, Privacy Policy, Terms, Thank You, 404

### Key decisions
- **Gutter Clearing vs Gutter Cleaning split into two pages** after keyword
  research confirmed a real, industry-recognized distinction: clearing is
  functional debris removal, cleaning is the exterior/cosmetic uPVC wash.
  Different primary keywords, no overlap, to avoid cannibalization.
- **Carlton Colville added as a 4th primary area**, but pushed back on and
  rejected splitting it into "New"/"Old Carlton Colville" - no evidence
  those are recognized as separate places with independent search demand,
  and splitting would have risked a doorway-page flag.
- **Business is mobile/service-area based, no fixed premises** - NAP data
  only goes to locality level (Lowestoft), no street address in schema.
- **No fabricated testimonials.** Google Reviews component tries the
  Places API live, falls back to real reviews manually sourced from the
  client's Google Business Profile if the API has nothing (his listing
  isn't well indexed there yet - known limitation, not a bug).
- **Brevo over Resend** for the contact form - Resend's free plan caps at
  3 verified domains, insufficient across the client's multiple sites.

### Integrations
- Brevo (contact form, honeypot spam protection)
- Google Places API (reviews, with real-review fallback)
- GA4 (gated behind GDPR cookie consent)
- YouTube (before/after video gallery, click-to-load facade, 6 real videos)

### Notable bugs caught and fixed
- WCAG contrast failure on 11 elements (calculated the fix mathematically)
- Vercel "No Output Directory named public" deploy failure - fixed via
  `vercel.json` explicit framework declaration
- Stale "Resend" reference left in Privacy Policy after the Brevo switch
- YouTube's temporary placeholder-thumbnail behavior on freshly uploaded
  video (naturalWidth check added, not just an `onerror` handler, since
  YouTube returns a valid tiny placeholder image rather than a real 404)

### Post-review client changes (all applied)
- Hero copy lists all 4 services distinctly
- Removed all "sealing" claims - sanding only, no sealing offered
- Real logo added to header and set as favicon
