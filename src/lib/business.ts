export const business = {
  // One name everywhere - exactly as it appears on the Google Business
  // Profile. Local rankings depend on the name/phone/town matching across
  // the site, the profile and every directory listing.
  name: "Ivan's Exterior Cleaning Services",
  legalName: "Ivan's Exterior Cleaning Services",
  phone: "07465 966405",
  phoneE164: "+447465966405",
  phoneHref: "tel:+447465966405",
  email: "Ivans_cleaning@yahoo.com",
  siteUrl: "https://www.ivanexteriorcleaning.co.uk",
  addressLocality: "Lowestoft",
  addressRegion: "Suffolk",
  postalCode: "NR33",
  addressCountry: "GB",
  geo: {
    latitude: 52.4736,
    longitude: 1.7502,
  },
  priceRange: "££",
  insured: true,
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/Ivans.exterior.cleaning/",
  },
  // Public Google Maps listing (Google Business Profile), by its CID.
  googleProfileUrl: "https://www.google.com/maps?cid=9329189114860832662",
  // Current Place ID (2026-09-26). The previous one stopped resolving on
  // 2026-09-18. Found with Places API (New) searchText plus
  // "includePureServiceAreaBusinesses": true - the listing hides its
  // address, so name/phone searches without that flag return nothing.
  googlePlaceId: "ChIJG_rX5uNu2IYRloe4YRLwd4E",
  logoPath: "/logo.jpg",
} as const;

export type ServiceSlug =
  | "window-cleaning"
  | "gutter-cleaning"
  | "soffit-fascia-cleaning"
  | "driveway-patio-cleaning";

export interface ServiceDefinition {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  description: string;
  // One page per search intent, Lowestoft first. The other towns are
  // covered on the page but not in the title/H1, so this page stops
  // competing with the area pages and the homepage for the same phrase.
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  h1: string;
  h1Subtitle?: string;
  metaDescription: string;
  heroSummary: string;
  bullets: string[];
  howItWorks: { heading: string; paragraphs: string[] };
  priceFrom?: string;
  videoIds: string[];
}

export const services: ServiceDefinition[] = [
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Windows",
    description:
      "Pure water fed pole window cleaning for homes and businesses, leaving glass, frames and sills streak-free without ladders on your property.",
    primaryKeyword: "window cleaning Lowestoft",
    secondaryKeywords: [
      "window cleaner Lowestoft",
      "window cleaners Lowestoft",
      "commercial window cleaning Lowestoft",
      "conservatory roof cleaning Lowestoft",
    ],
    seoTitle: "Window Cleaning in Lowestoft",
    h1: "Window Cleaning in Lowestoft",
    metaDescription:
      "Streak-free window cleaning in Lowestoft with a pure water fed pole - no ladders, frames and sills included. Fully insured. Free quotes on 07465 966405.",
    heroSummary:
      "Streak-free window cleaning for homes and businesses in Lowestoft, using a pure water fed pole system that's safe, ladder-free and leaves glass spot-free for longer. Fully insured, with regular rounds or one-off cleans.",
    bullets: [
      "Pure water fed pole system reaches upper floors safely without ladders",
      "Frames, sills and doors cleaned as standard, not just the glass",
      "One-off cleans or regular rounds (4, 8 or 12-weekly)",
      "Domestic and commercial properties, including shopfronts",
    ],
    howItWorks: {
      heading: "How a Window Clean Works",
      paragraphs: [
        "We clean from the ground with a pure water fed pole. The water is filtered so it holds no minerals, which means it dries clear instead of leaving the spots and streaks you get from tap water. There's no ladder against your walls or windows, and upstairs windows are reached the same way as downstairs ones.",
        "The brush works over the glass, frames and sills, then everything is rinsed with pure water and left to dry naturally. Doors and frames are part of every visit, not an extra, so the whole window looks clean rather than just the glass.",
        "Lowestoft is the UK's most easterly town, and salt spray off the North Sea settles on glass faster than most people expect. Homes near the seafront, Ness Point and the South Pier usually suit a 4-weekly round; further inland, 8-weekly is normally enough. We'll tell you honestly which fits your property.",
      ],
    },
    videoIds: ["VzvcbPiYva8", "4YEGR2oKS4g", "qyS_n6HUgtw"],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    description:
      "Blocked gutters cleared: leaves, moss and debris removed from inside your gutters and downpipes so water flows away properly, before an overflow causes damp or roof damage.",
    primaryKeyword: "gutter cleaning Lowestoft",
    secondaryKeywords: [
      "gutter clearing Lowestoft",
      "gutter clearance Lowestoft",
      "blocked gutters Lowestoft",
      "downpipe clearing Lowestoft",
    ],
    seoTitle: "Gutter Cleaning in Lowestoft from £60",
    h1: "Gutter Cleaning in Lowestoft",
    h1Subtitle: "Blocked gutters and downpipes cleared, from £60",
    metaDescription:
      "Gutter cleaning in Lowestoft from £60: blocked gutters and downpipes cleared with a high-reach vacuum, photos sent. Fully insured. Call 07465 966405.",
    heroSummary:
      "Gutter cleaning and clearing in Lowestoft from £60. Leaves, moss and debris are vacuumed out of your gutters and downpipes so rainwater actually flows away, before a blockage causes overflow, damp patches or roofline damage. Fully insured, with before-and-after photos of every job.",
    bullets: [
      "High-reach vacuum system clears gutters without ladders against the wall",
      "Before-and-after photos sent so you can see exactly what came out",
      "Downpipes checked and cleared, not just the gutter run itself",
      "One-off clear or a regular schedule if you're near overhanging trees",
    ],
    howItWorks: {
      heading: "How Gutter Cleaning Works",
      paragraphs: [
        "Gutter cleaning is about what's inside the gutter: the leaves, moss, seeds and silt that build up until rainwater can't get away. We use a high-reach vacuum system from the ground to clear the whole gutter run, then check the downpipes so water can drain once it leaves the gutter.",
        "You get before-and-after photos, so you can see exactly what came out even though you can't see into your own gutters from the ground. Prices start from £60, and we'll confirm a fixed price for your property before any work starts.",
        "Around Lowestoft, homes backing onto trees or open fields fill up fastest, and a gutter that's a third full will already hold water against the fascia. Most properties are fine with a clear once or twice a year; if yours overflows every autumn, we'll suggest a sensible schedule rather than selling you one you don't need.",
      ],
    },
    priceFrom: "£60",
    videoIds: ["cEq6GXH_5R4"],
  },
  {
    slug: "soffit-fascia-cleaning",
    name: "Soffit & Fascia Cleaning",
    shortName: "Soffits & Fascias",
    description:
      "An exterior wash of your soffits, fascias and the outside of your gutters, lifting the black 'tiger-stripe' staining and road grime that build up on uPVC over time.",
    primaryKeyword: "soffit and fascia cleaning Lowestoft",
    secondaryKeywords: [
      "fascia cleaning Lowestoft",
      "upvc cleaning Lowestoft",
      "gutter exterior cleaning Lowestoft",
      "tiger stripe gutter cleaning",
    ],
    seoTitle: "Soffit & Fascia Cleaning in Lowestoft",
    h1: "Soffit & Fascia Cleaning in Lowestoft",
    h1Subtitle: "Including the outside of your gutters",
    metaDescription:
      "Soffit, fascia and gutter exterior cleaning in Lowestoft. Black tiger-stripe staining lifted from uPVC with a soft wash. Fully insured. Call 07465 966405.",
    heroSummary:
      "Soffit, fascia and gutter exterior cleaning in Lowestoft. A soft wash lifts the black staining and grime that build up on white uPVC over time - one of the biggest visible upgrades a tired front elevation can get. Fully insured.",
    bullets: [
      "Removes black 'tiger-stripe' staining caused by weather and road grime",
      "Covers soffits, fascias and the outside face of the gutters",
      "Soft-wash method that lifts dirt without damaging the uPVC",
      "Often booked alongside a gutter clean for a complete refresh",
    ],
    howItWorks: {
      heading: "How Soffit & Fascia Cleaning Works",
      paragraphs: [
        "This is the cosmetic job: cleaning the outside of your roofline, not what's inside the gutter. Soffits, fascias and the gutter faces are washed with a soft-wash approach that lifts staining without harsh pressure or abrasive chemicals that could damage the plastic.",
        "The black streaks - often called 'tiger-striping' - are weather, road grime and pollution settling on the uPVC. They build up so gradually that most people only notice how grey their roofline had become once it's been cleaned.",
        "If your gutters are also blocked, we clear them first with a gutter clean and then wash the outside, so the finish lasts. Plenty of customers in Lowestoft book both on the same visit.",
      ],
    },
    videoIds: ["Sbm3Q72HXFQ", "qyS_n6HUgtw"],
  },
  {
    slug: "driveway-patio-cleaning",
    name: "Driveway & Patio Cleaning",
    shortName: "Driveways & Patios",
    description:
      "Pressure washing for driveways, patios and paths that lifts ground-in dirt, moss and algae and restores the original colour of block paving, concrete and stone.",
    primaryKeyword: "driveway cleaning Lowestoft",
    secondaryKeywords: [
      "pressure washing Lowestoft",
      "jet washing Lowestoft",
      "patio cleaning Lowestoft",
      "block paving cleaning Lowestoft",
    ],
    seoTitle: "Driveway & Patio Pressure Washing in Lowestoft",
    h1: "Driveway & Patio Cleaning in Lowestoft",
    h1Subtitle: "Pressure washing for block paving, concrete and stone",
    metaDescription:
      "Driveway and patio pressure washing in Lowestoft. Moss, algae and weeds lifted from block paving, concrete and stone. Fully insured. Call 07465 966405.",
    heroSummary:
      "Driveway and patio pressure washing (jet washing) in Lowestoft. Moss, algae and ground-in dirt lifted from block paving, concrete, tarmac and natural stone, with weeds cleared from the joints. Fully insured.",
    bullets: [
      "Commercial-grade pressure washing for block paving, concrete, tarmac and stone",
      "Weed and moss removal from joints, not just the surface",
      "Optional sanding of the joints to help slow down regrowth",
      "Free, no-obligation quote before any work starts",
    ],
    howItWorks: {
      heading: "How Driveway Pressure Washing Works",
      paragraphs: [
        "We start by clearing weeds and moss from the joints, then pressure wash the whole surface with the pressure set for the material - block paving, concrete, tarmac and natural stone all need a different approach, and getting that right is what stops damage to the surface.",
        "Once it's clean you'll see the original colour come back; flat grey paving is usually dirt, not wear. Re-sanding the joints afterwards is optional and helps slow down regrowth. We don't offer sealing.",
        "Lowestoft's coastal damp means driveways and patios here pick up algae and moss faster than inland, especially in shaded corners and on north-facing patios. Most properties benefit from a clean every one to two years.",
      ],
    },
    videoIds: ["Ri86tKh5RMo"],
  },
];

export type AreaSlug = "lowestoft" | "kessingland" | "pakefield" | "carlton-colville";

export interface AreaDefinition {
  slug: AreaSlug;
  name: string;
  seoTitle: string;
  h1: string;
  metaDescription: string;
  role: string;
  intro: string;
  landmarks: string[];
  localContent: string;
  neighbourSentence: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  mapQuery: string;
}

export const secondaryAreas = ["Oulton Broad", "Beccles", "Great Yarmouth"];

export const areas: AreaDefinition[] = [
  {
    slug: "lowestoft",
    name: "Lowestoft",
    // Title/heading kept as they were: this page already earns impressions
    // for many "near me" searches (GSC, 2026-09-26) - additive changes only.
    seoTitle: "Exterior Cleaning in Lowestoft | Window, Gutter & Driveway Cleaning",
    h1: "Exterior Cleaning in Lowestoft",
    metaDescription:
      "Lowestoft is our home patch: window, gutter and driveway cleaning every week, from the South Pier seafront to the A12. Fully insured. Call 07465 966405.",
    role: "Main hub",
    primaryKeyword: "exterior cleaning Lowestoft",
    secondaryKeywords: [
      "window cleaner Lowestoft",
      "gutter cleaning Lowestoft",
      "driveway cleaning Lowestoft",
    ],
    intro:
      "Lowestoft is our home patch. We're out cleaning windows, gutters, driveways and patios across the town every week, from the seafront by Lowestoft South Pier out to the businesses lining the A12 corridor.",
    landmarks: ["Lowestoft South Pier", "Ness Point", "the A12 corridor"],
    localContent:
      "As the UK's most easterly town, Lowestoft gets the full force of coastal weather off the North Sea. Salt spray off Ness Point and the seafront settles fast on glass and render, and driveways near the harbour pick up grime quicker than properties further inland. That's why we run regular window cleaning rounds through the town centre and the residential streets around the South Pier, and why our gutter cleaning jobs near the seafront tend to come with more built-up debris than a typical inland property. We also look after a number of businesses and retail units along the A12 corridor, keeping shopfronts and forecourts presentable for passing trade.",
    neighbourSentence:
      "Based just south or west of town? We also cover Kessingland, Pakefield and Carlton Colville on the same regular rounds.",
    mapQuery: "Lowestoft, Suffolk, UK",
  },
  {
    slug: "kessingland",
    name: "Kessingland",
    seoTitle: "Exterior Cleaning in Kessingland",
    h1: "Exterior Cleaning in Kessingland",
    metaDescription:
      "Window cleaning, gutter cleaning and driveway pressure washing in Kessingland, from Africa Alive to the beach. Fully insured. Call 07465 966405.",
    role: "Village coverage",
    primaryKeyword: "window cleaning Kessingland",
    secondaryKeywords: [
      "gutter cleaning Kessingland",
      "exterior cleaning Kessingland",
      "driveway cleaning Kessingland",
    ],
    intro:
      "Kessingland is one of our regular rounds, just south of Lowestoft. From the homes near Africa Alive to the streets running down to Kessingland Beach, we're on hand for window cleaning, gutter cleaning and driveway washing on the same schedule as the rest of the coast.",
    landmarks: ["Africa Alive", "Kessingland Beach", "the A12 bypass"],
    localContent:
      "Kessingland has its own character as a coastal village rather than an extension of Lowestoft, and the properties here need their own approach. Homes closer to Kessingland Beach deal with heavier salt residue on windows and frames, so we tend to recommend a shorter cleaning cycle for anything within a few streets of the seafront. Inland, near Africa Alive and along the A12 bypass, driveways and patios collect more road dirt and organic debris from the surrounding trees and hedgerows, which is where our pressure washing service earns its keep. Kessingland sits on our regular Lowestoft-to-Pakefield round, so slotting in a one-off job here rarely means a special trip.",
    neighbourSentence:
      "We also cover Lowestoft to the north, Pakefield in between, and Carlton Colville a little further inland, so you're never far outside our regular round.",
    mapQuery: "Kessingland, Suffolk, UK",
  },
  {
    slug: "pakefield",
    name: "Pakefield",
    seoTitle: "Exterior Cleaning in Pakefield",
    h1: "Exterior Cleaning in Pakefield",
    metaDescription:
      "Window cleaning, gutter cleaning and driveway pressure washing in Pakefield, from the cliffs to London Road South. Fully insured. Call 07465 966405.",
    role: "Suburb coverage",
    primaryKeyword: "window cleaning Pakefield",
    secondaryKeywords: [
      "driveway cleaning Pakefield",
      "gutter cleaning Pakefield",
      "exterior cleaning Pakefield",
    ],
    intro:
      "Pakefield sits between our Lowestoft and Kessingland rounds, and we cover the whole suburb from the cliffs down to the independent shops and hospitality spots along London Road South.",
    landmarks: ["Pakefield Beach", "Pakefield Cliffs", "London Road South"],
    localContent:
      "Pakefield's mix of clifftop homes, residential streets and the busy independent businesses along London Road South means no two jobs here look the same. Properties up near Pakefield Cliffs and the beach take the worst of the salt-laden wind, so window frames and gutters there tend to need attention more often than homes set back from the coast. Down on London Road South, we work around opening hours for the cafes, takeaways and shops to keep shopfront windows and forecourts clean without getting under customers' feet. It's a suburb we pass through on nearly every round between Lowestoft and Kessingland, so slotting in a Pakefield job rarely means a special trip.",
    neighbourSentence:
      "Based nearby? We also provide full service coverage across Lowestoft, Kessingland and Carlton Colville.",
    mapQuery: "Pakefield, Lowestoft, Suffolk, UK",
  },
  {
    slug: "carlton-colville",
    name: "Carlton Colville",
    seoTitle: "Exterior Cleaning in Carlton Colville",
    h1: "Exterior Cleaning in Carlton Colville",
    metaDescription:
      "Window cleaning, gutter cleaning and driveway pressure washing in Carlton Colville, along the A146 to Bloodmoor Hill. Fully insured. Call 07465 966405.",
    role: "Suburb coverage",
    primaryKeyword: "window cleaning Carlton Colville",
    secondaryKeywords: [
      "gutter cleaning Carlton Colville",
      "driveway cleaning Carlton Colville",
      "exterior cleaning Carlton Colville",
    ],
    intro:
      "Carlton Colville sits along the A146 on the western edge of Lowestoft, and it's a regular stop on our round — from the streets around the East Anglia Transport Museum to the homes near Bloodmoor Hill.",
    landmarks: [
      "the East Anglia Transport Museum",
      "Bloodmoor Hill",
      "the A146",
    ],
    localContent:
      "Carlton Colville sits back from the coast, so it deals with less salt spray than Lowestoft, Kessingland or Pakefield, but that doesn't mean less grime — it just comes from different sources. Homes along the A146 corridor pick up more road film and diesel residue from through-traffic between Lowestoft and Beccles, and properties near Bloodmoor Hill and the surrounding fields collect more windblown leaves, pollen and organic debris in their gutters over autumn than a typical seafront property. We clean windows, gutters and driveways for houses right up to the East Anglia Transport Museum on Chapel Road, and for the newer estates built out towards the western edge of the village.",
    neighbourSentence:
      "Just down the road from Pakefield and on the way into Lowestoft, we cover Carlton Colville on the same round as the rest of the coast.",
    mapQuery: "Carlton Colville, Lowestoft, Suffolk, UK",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getAreaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug);
}
