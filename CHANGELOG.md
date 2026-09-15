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

## Local SEO fixes (2026-09-11)

Follow-up pass after connecting Google Search Console and running a full
local-SEO/GBP audit. See `5bdac15`.

- Homepage H1 changed from generic boilerplate to "Window, Gutter &
  Driveway Cleaning in Lowestoft" - deliberately not an exact duplicate of
  the `/window-cleaning` page's own H1, to avoid the two pages competing
  for the same exact-match phrase.
- Added `AggregateRating` to the homepage `LocalBusinessSchema` JSON-LD,
  sourced live from the same `getGoogleReviews()` call the visible
  reviews widget uses, so schema and on-page display can't drift apart.
- Updated the `realReviews` fallback numbers from the pre-launch
  placeholder (5.0 stars / 4 reviews) to the real current figures
  confirmed against the live Google Business Profile (4.9 stars / 30
  reviews).
- **Confirmed, not just suspected:** the stored Google Place ID 404s with
  "no longer valid," and a live Places API text search for the business
  by name also returns zero results - the review-fetch fallback path is
  active and doing real work right now, not a rare edge case. Revisit
  once the listing has more history/authority with Google.
- Google Business Profile itself: primary category "Window cleaning
  service" was the only category set despite Ivan also doing gutter and
  driveway work - added "Gutter cleaning service" and "Pressure washing
  service" as additional categories directly on the live profile (not a
  code change).

## Indexing audit and sitemap resubmission (2026-09-14)

Pulled live Search Console data (indexing status, search performance,
sitemap health) for the first time via a direct API connection, rather
than manual dashboard checks.

- **Root cause found for why only the homepage was ranking:** Search
  Console's stored copy of the sitemap was last fetched in May 2026 -
  months before this site's rebuild existed - and only knew about 1 URL,
  0 indexed. The live sitemap itself was correct and current (all 4
  service pages, 4 area pages, blog posts, dated 2026-09-11), Google just
  hadn't been told to re-fetch it since the rebuild shipped. Confirmed via
  URL Inspection that `/window-cleaning` was "unknown to Google" as a
  result - not a ranking problem, an indexing problem.
- Chay resubmitted the sitemap in Search Console. Confirmed via the API
  immediately after: submitted count jumped from 1 to 18, last
  fetched/downloaded timestamps updated to today. Indexed count is still
  0 as of resubmission - expected, Google needs to actually crawl each
  page before it counts as indexed, that doesn't happen the same minute.
- Real ranking baseline captured while investigating: homepage passing
  indexing checks with review-snippet rich results live. Best current
  keyword position is "window cleaning lowestoft" at ~8-10 (page 1 miss,
  currently won by the homepage rather than the dedicated
  `/window-cleaning` page, which explains the cannibalization once that
  page is indexed). "gutter cleaning lowestoft" sitting mid-teens.
  "roof cleaning lowestoft" surfaced at position 1 off a single
  impression - Ivan doesn't have a roof cleaning service/page, worth
  deciding whether to chase that with content given Google's already
  associating the site with it.
- Next: blog content and on-page keyword targeting work planned around
  these real query terms, plus requesting manual indexing on the key
  service/area pages to speed past the normal crawl queue.
- Manually requested indexing via URL Inspection on all 4 service pages
  and 3 of the 4 area pages (Carlton Colville pending - hit Search
  Console's daily quota). Confirmed via the API within the hour: all 4
  service pages flipped from unindexed to `PASS` / "Submitted and
  indexed".

## Blog expansion and internal linking pass (2026-09-14)

- **Internal linking gap found and fixed:** all 3 existing blog posts only
  ever linked to one service page each, and never linked to any area
  page - despite repeatedly naming Lowestoft, Kessingland and Pakefield
  in the body text. Carlton Colville had zero blog-driven internal links
  pointing at it at all. `BlogPost.relatedService` (single string) was
  replaced with `relatedServices` and a new `relatedAreas` array field,
  both rendered as real links at the bottom of every post
  (`src/lib/blog.ts`, `src/app/blog/[slug]/page.tsx`). Backfilled onto
  the 3 existing posts based on which areas/services they already
  genuinely reference in the text - no forced or contextually irrelevant
  links added.
- **2 new blog posts added**, targeting real keyword gaps found in the
  Search Console data pulled today:
  - "Gutter Clearing vs Gutter Cleaning: What's the Difference?" -
    reinforces the deliberate two-page service split with actual
    supporting content, something that existed as a site architecture
    decision but had zero content backing it up until now. Links to both
    service pages and all 4 area pages.
  - "Exterior Cleaning in Carlton Colville: What Local Homes Actually
    Need" - Carlton Colville had the weakest content/link presence of
    the 4 areas. Built from the same real local detail already
    researched for the area page (A146 road film, Bloodmoor Hill/field
    debris, the newer western estates) rather than generic swapped-town
    content, consistent with the site's existing anti-doorway-page
    approach. Deliberately does NOT cover roof cleaning despite that
    query surfacing at position 1 in Search Console - Ivan doesn't
    currently list that as a service, worth confirming with him before
    building content around a keyword the site can't actually deliver
    on.
- Verified locally: full production build passes clean, and both new
  posts checked in the dev server to confirm the new internal links
  render correctly before anything gets pushed.

## Service page title/meta fix: missing Carlton Colville (2026-09-14)

- **Found a site-wide, pre-existing gap while reviewing on-page SEO for
  the service pages:** every service page's `<title>`, meta description
  and H1 only ever listed 3 areas ("Lowestoft, Kessingland & Pakefield"),
  completely omitting Carlton Colville, even though it's a full 4th area
  with its own page and its own primary keyword ("window cleaning
  Carlton Colville" etc.). The page body further down already correctly
  said "4 areas" - title, meta and H1 were the only things out of sync.
  Fixed in `src/app/[service]/page.tsx` (title + H1, both hardcoded in
  one place each) and the 4 `heroSummary` strings in `src/lib/business.ts`
  (used in both the meta description and the on-page hero text).
- **Same gap also existed in `Footer.tsx` (every page, site-wide), the
  contact page's meta description, and the blog index page's meta
  description** - all fixed in the same pass once flagged. Older
  individual blog post body text was left alone (already handled/
  reviewed in the internal linking pass above).
- Verified with a full production build and confirmed the live
  `<title>` tag on `/window-cleaning` now reads correctly with all 4
  areas.

## Window cleaning pricing content push (2026-09-15)

Standing goal set with Chay: push "window cleaning lowestoft", "gutter
cleaning lowestoft" and "exterior cleaning lowestoft" toward position
1-3, starting with the closest opportunity first ("window cleaning
lowestoft" was at position 8.3 in the 28-day GSC data pulled today,
highest-impression keyword on the site). Competitor research on
the-window-cleaning-company.co.uk (ranks well, established 2010) found
their whole site is 7 thin pages with no reviews, no area pages and no
blog - their edge is 14 years of domain age/backlinks, not content
depth, so the real long-term lever is citations/authority work, not
just more pages. This session covers the content side of that push.

- **Added a pricing FAQ to the window-cleaning service page**
  (`src/app/[service]/page.tsx`) answering "How much does window
  cleaning cost in Lowestoft?" without quoting any figures - Ivan
  quotes per property, not off a price list, so the answer explains
  what drives a quote (size, storeys, access, one-off vs regular
  round) and pushes to a free quote instead. Picked up automatically
  by the existing FAQPage schema on that page.
- **New blog post: "How Much Does Window Cleaning Cost in
  Lowestoft?"** (`src/lib/blog.ts`) - targets the same real commercial
  search intent at more length: why there's no fixed price list, what
  actually affects a quote, one-off vs regular round pricing, and why
  location changes visit frequency rather than the price itself. No £
  figures anywhere, consistent with Ivan's per-property quoting.
  Links back to the window-cleaning service page and all 4 area
  pages.
- Verified with a full production build (clean) and against the dev
  server: FAQ text and FAQPage schema render correctly on
  `/window-cleaning`, the new post renders all 5 sections with working
  internal links and returns a clean 200, and it's listed on `/blog`.
