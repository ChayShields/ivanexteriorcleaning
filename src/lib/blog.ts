export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  relatedService?: string;
  body: { heading?: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-clean-your-gutters",
    title: "How Often Should You Clean Your Gutters in Suffolk?",
    excerpt:
      "Coastal weather, overhanging trees and roof pitch all change how often your gutters actually need clearing. Here's how to work out a sensible schedule.",
    publishedAt: "2026-08-18",
    relatedService: "gutter-clearing",
    body: [
      {
        paragraphs: [
          "Most homes in and around Lowestoft, Kessingland and Pakefield get by with a gutter clear twice a year — once in late spring after the trees have finished shedding blossom and pollen, and once in autumn after the leaves come down. But that's a starting point, not a rule, and a few local factors push that number up.",
        ],
      },
      {
        heading: "Coastal exposure",
        paragraphs: [
          "Properties within a few streets of the seafront in Lowestoft, Kessingland or Pakefield deal with more airborne salt and grit than homes further inland. That doesn't clog gutters directly, but it does accelerate wear on brackets and joints, so leaks show up sooner if debris is left to sit.",
        ],
      },
      {
        heading: "Nearby trees",
        paragraphs: [
          "If your property backs onto mature trees or hedgerows, expect to clear gutters at least three times a year. Overhanging branches drop leaves, seeds and moss almost continuously outside of winter, and a gutter that's more than a third full will start to hold water against the fascia even before it overflows.",
        ],
      },
      {
        heading: "Signs you've left it too long",
        paragraphs: [
          "Water spilling over the front of the gutter during rain, plants or moss visibly growing in the guttering, and damp patches appearing on walls below the roofline are the three clearest signs. Any one of these is worth acting on quickly, since a blocked gutter that overflows for a season can start to affect the fascia board and even the wall below it.",
        ],
      },
      {
        heading: "Getting it checked",
        paragraphs: [
          "If you're not sure where your property sits, the simplest option is to have it looked at. We clear gutters across Lowestoft, Kessingland and Pakefield and will always give you an honest read on how often you actually need it, rather than upselling a schedule you don't need. See our gutter cleaning page for what's included, or get in touch for a free quote.",
        ],
      },
    ],
  },
  {
    slug: "signs-your-driveway-needs-a-deep-clean",
    title: "5 Signs Your Driveway or Patio Needs a Deep Clean",
    excerpt:
      "Moss, dark staining and slippery patches aren't just cosmetic. Here's what to look for and why leaving it too long makes the job harder.",
    publishedAt: "2026-08-25",
    relatedService: "driveway-patio-cleaning",
    body: [
      {
        paragraphs: [
          "Block paving, concrete and natural stone all weather differently, but the warning signs that a driveway or patio needs attention are the same across most properties in Lowestoft, Kessingland and Pakefield.",
        ],
      },
      {
        heading: "1. Dark, patchy staining",
        paragraphs: [
          "Black or green staining that doesn't shift with rain is usually algae or lichen taking hold in shaded or damp areas. Left alone it spreads, and on stone or concrete it can etch into the surface over time.",
        ],
      },
      {
        heading: "2. Moss growing between joints",
        paragraphs: [
          "Moss in the joints of block paving holds moisture against the blocks and pushes them apart slightly as it grows, which is how small cracks and uneven paving start.",
        ],
      },
      {
        heading: "3. A slippery surface when wet",
        paragraphs: [
          "This is often the first sign anyone notices, and it's usually algae rather than just water. It's also the one with the most immediate risk, particularly on steps or a sloped driveway.",
        ],
      },
      {
        heading: "4. Colour that's gone flat or grey",
        paragraphs: [
          "Block paving and coloured concrete both fade under a layer of ground-in dirt long before the material itself actually wears out. A pressure wash on its own is often enough to bring the original colour back.",
        ],
      },
      {
        heading: "5. It's been more than two years",
        paragraphs: [
          "Even without obvious staining, most driveways and patios in this area benefit from a clean every one to two years given the coastal damp. The longer it's left, the more the dirt bonds to the surface, which means more time and pressure needed to shift it.",
        ],
      },
      {
        heading: "What we do about it",
        paragraphs: [
          "We pressure wash driveways and patios across Lowestoft, Kessingland and Pakefield, including weed and moss removal from the joints, with optional sanding to help slow down regrowth. Get in touch for a free, no-obligation quote.",
        ],
      },
    ],
  },
  {
    slug: "why-coastal-homes-need-more-frequent-window-cleaning",
    title: "Why Coastal Homes in Lowestoft Need More Frequent Window Cleaning",
    excerpt:
      "Salt spray off the North Sea settles on glass faster than most people expect. Here's why properties near the seafront often need shorter cleaning cycles.",
    publishedAt: "2026-09-01",
    relatedService: "window-cleaning",
    body: [
      {
        paragraphs: [
          "Lowestoft is the UK's most easterly town, which means homes near Ness Point, the South Pier and the wider seafront take the full force of wind and sea spray coming straight off the North Sea. That has a direct, measurable effect on how quickly windows look grimy again after a clean.",
        ],
      },
      {
        heading: "Salt residue dries differently to normal dirt",
        paragraphs: [
          "Ordinary road dust and rain marks wash off fairly evenly. Salt spray dries as a fine, slightly sticky film that attracts more dust and grime to it, so windows near the coast go from clean to hazy noticeably faster than windows a few miles inland in, say, Carlton Colville.",
        ],
      },
      {
        heading: "What this means for your cleaning schedule",
        paragraphs: [
          "If you're within a few streets of the seafront in Lowestoft, Kessingland or Pakefield, a 4-weekly round tends to keep glass looking genuinely clean between visits. Further inland, 8-weekly is usually enough. If you're not sure which category your property falls into, it's worth asking on the first visit rather than guessing.",
        ],
      },
      {
        heading: "Pure water helps, but doesn't remove the need for regular visits",
        paragraphs: [
          "A pure water fed pole system leaves less mineral residue behind than tap water, so glass stays cleaner for longer after each visit. It doesn't stop salt spray landing on the window in the first place, though, which is why the visit frequency still matters more near the coast than the cleaning method itself.",
        ],
      },
      {
        heading: "Book a round",
        paragraphs: [
          "We run regular window cleaning rounds across Lowestoft, Kessingland and Pakefield and can recommend a sensible frequency based on exactly where your property sits. Get in touch for a free quote.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
