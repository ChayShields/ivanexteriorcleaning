export const business = {
  name: "Ivan's Exterior Cleaning",
  legalName: "Ivan's Exterior Cleaning Services",
  phone: "07465 966405",
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
  googlePlaceId: "ChIJlocYYRLwd0cRlofYYSXwd4E",
} as const;

export type ServiceSlug =
  | "window-cleaning"
  | "gutter-clearing"
  | "gutter-cleaning"
  | "driveway-patio-cleaning";

export interface ServiceDefinition {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroSummary: string;
  bullets: string[];
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
      "pure water window cleaning Suffolk",
      "commercial window cleaning Lowestoft",
      "conservatory roof cleaning Lowestoft",
    ],
    heroSummary:
      "Streak-free window cleaning across Lowestoft, Kessingland and Pakefield, using a pure water fed pole system that's safe, ladder-free and leaves glass spot-free for longer.",
    bullets: [
      "Pure water fed pole system reaches upper floors safely without ladders",
      "Frames, sills and doors cleaned as standard, not just the glass",
      "One-off cleans or regular rounds (4, 8 or 12-weekly)",
      "Domestic and commercial properties, including shopfronts",
    ],
  },
  {
    slug: "gutter-clearing",
    name: "Gutter Clearing",
    shortName: "Gutter Clearing",
    description:
      "Removing leaves, moss and debris from inside your gutters and downpipes so water flows away properly, before a blockage causes overflow, damp or roof damage.",
    primaryKeyword: "gutter clearing Lowestoft",
    secondaryKeywords: [
      "gutter clearance Lowestoft",
      "blocked gutters Lowestoft",
      "downpipe clearing Suffolk",
      "gutter clearing Kessingland",
    ],
    heroSummary:
      "Gutter clearing across Lowestoft, Kessingland and Pakefield — leaves, moss and debris removed from inside the gutter and downpipes so water actually flows away, before a blockage causes overflow or damp.",
    bullets: [
      "High-reach vacuum system clears gutters without ladders against the wall",
      "Before-and-after photos sent so you can see exactly what came out",
      "Downpipes checked and cleared, not just the gutter run itself",
      "One-off clear or a regular schedule if you're near overhanging trees",
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    description:
      "Exterior wash of your gutters, soffits and fascias to remove the black 'tiger-stripe' staining and road grime that build up over time, for a genuine cosmetic lift.",
    primaryKeyword: "gutter cleaning Lowestoft",
    secondaryKeywords: [
      "soffit and fascia cleaning Suffolk",
      "upvc cleaning Lowestoft",
      "gutter exterior cleaning Suffolk",
      "gutter cleaning Kessingland",
    ],
    heroSummary:
      "Exterior gutter, soffit and fascia cleaning across Lowestoft, Kessingland and Pakefield — lifting the black staining and grime that build up on uPVC over time, for one of the biggest cosmetic upgrades a tired front elevation can get.",
    bullets: [
      "Removes black 'tiger-stripe' staining caused by weather and road grime",
      "Covers gutters, soffits and fascias, not just the visible gutter face",
      "Soft-wash method that lifts dirt without damaging the uPVC",
      "Often booked alongside a gutter clear for a complete refresh",
    ],
  },
  {
    slug: "driveway-patio-cleaning",
    name: "Driveway & Patio Cleaning",
    shortName: "Driveways & Patios",
    description:
      "Pressure washing for driveways, patios and paths that lifts ground-in dirt, moss and algae and restores the original colour of block paving, concrete and stone.",
    primaryKeyword: "driveway cleaning Lowestoft",
    secondaryKeywords: [
      "patio cleaning Lowestoft",
      "pressure washing Lowestoft",
      "driveway cleaning Pakefield",
      "block paving cleaning Suffolk",
    ],
    heroSummary:
      "Driveway and patio pressure washing across Lowestoft, Kessingland and Pakefield, lifting moss, algae and ground-in dirt from block paving, concrete and natural stone.",
    bullets: [
      "Commercial-grade pressure washing for block paving, concrete, tarmac and stone",
      "Weed and moss removal from joints, not just the surface",
      "Optional sanding of the joints to help slow down regrowth",
      "Free, no-obligation quote before any work starts",
    ],
  },
];

export type AreaSlug = "lowestoft" | "kessingland" | "pakefield" | "carlton-colville";

export interface AreaDefinition {
  slug: AreaSlug;
  name: string;
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
      "As the UK's most easterly town, Lowestoft gets the full force of coastal weather off the North Sea. Salt spray off Ness Point and the seafront settles fast on glass and render, and driveways near the harbour pick up grime quicker than properties further inland. That's why we run regular window cleaning rounds through the town centre and the residential streets around the South Pier, and why our gutter clearing jobs near the seafront tend to come with more built-up debris than a typical inland property. We also look after a number of businesses and retail units along the A12 corridor, keeping shopfronts and forecourts presentable for passing trade.",
    neighbourSentence:
      "Based just south or west of town? We also cover Kessingland, Pakefield and Carlton Colville on the same regular rounds.",
    mapQuery: "Lowestoft, Suffolk, UK",
  },
  {
    slug: "kessingland",
    name: "Kessingland",
    role: "Village coverage",
    primaryKeyword: "window cleaning Kessingland",
    secondaryKeywords: [
      "gutter cleaning Kessingland",
      "exterior cleaning Kessingland",
      "driveway cleaning Kessingland",
    ],
    intro:
      "Kessingland is one of our regular rounds, just south of Lowestoft. From the homes near Africa Alive to the streets running down to Kessingland Beach, we're on hand for window cleaning, gutter clearing and driveway washing on the same schedule as the rest of the coast.",
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
