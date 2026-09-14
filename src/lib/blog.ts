import type { AreaSlug, ServiceSlug } from "@/lib/business";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  relatedServices?: ServiceSlug[];
  relatedAreas?: AreaSlug[];
  body: { heading?: string; paragraphs: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-clean-your-gutters",
    title: "How Often Should You Clean Your Gutters in Suffolk?",
    excerpt:
      "Coastal weather, overhanging trees and roof pitch all change how often your gutters actually need clearing. Here's how to work out a sensible schedule.",
    publishedAt: "2026-08-18",
    relatedServices: ["gutter-clearing"],
    relatedAreas: ["lowestoft", "kessingland", "pakefield"],
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
    relatedServices: ["driveway-patio-cleaning"],
    relatedAreas: ["lowestoft", "kessingland", "pakefield"],
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
    relatedServices: ["window-cleaning"],
    relatedAreas: ["lowestoft", "kessingland", "pakefield", "carlton-colville"],
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
  {
    slug: "gutter-clearing-vs-gutter-cleaning-whats-the-difference",
    title: "Gutter Clearing vs Gutter Cleaning: What's the Difference?",
    excerpt:
      "The two names sound interchangeable, but they're different jobs solving different problems. Here's what each one actually covers, and why Lowestoft homes often need both.",
    publishedAt: "2026-09-14",
    relatedServices: ["gutter-clearing", "gutter-cleaning"],
    relatedAreas: ["lowestoft", "kessingland", "pakefield", "carlton-colville"],
    body: [
      {
        paragraphs: [
          "\"Can you clean my gutters?\" is one of the most common enquiries we get from homes across Lowestoft, Kessingland, Pakefield and Carlton Colville, and it's genuinely ambiguous — because gutter clearing and gutter cleaning are two different jobs. Mixing them up usually means booking the wrong one and being disappointed with the result, so it's worth being clear on what each actually does before you call anyone.",
        ],
      },
      {
        heading: "Gutter clearing: the functional job",
        paragraphs: [
          "Gutter clearing is about what's inside the gutter — leaves, moss, moss seed, and general debris that builds up and blocks water from flowing away properly. Left unchecked, a blocked gutter overflows during rain, which can lead to damp patches on walls, rotting fascia boards, and in bad cases, water getting in under the roofline. We use a high-reach vacuum system to clear the gutter run and the downpipes, and send before-and-after photos so you can see exactly what came out.",
        ],
      },
      {
        heading: "Gutter cleaning: the cosmetic wash",
        paragraphs: [
          "Gutter cleaning is about what's on the outside — the black 'tiger-stripe' staining and general road grime that builds up on the uPVC face of the gutter, soffits and fascias over time. It's a soft-wash exterior clean, not a debris removal job, and it doesn't touch what's inside the gutter run at all. It's one of the biggest visible upgrades a tired-looking front elevation can get, often noticeable from the street.",
        ],
      },
      {
        heading: "Do you need one or both?",
        paragraphs: [
          "Plenty of properties only need one or the other. A newer property with well-maintained uPVC but overhanging trees might only need regular clearing. A property with clean-running gutters but years of staining on the fascia might only need the cosmetic wash. But if it's been years since either was done, most homes in Lowestoft, Kessingland, Pakefield and Carlton Colville benefit from both — clear first, then clean, since a clear gutter run makes the exterior wash more effective and the results last longer.",
        ],
      },
      {
        heading: "Get the right one booked",
        paragraphs: [
          "If you're not sure which one your property actually needs, tell us what you're seeing — overflow during rain points to clearing, staining and grime points to cleaning — and we'll recommend the right job rather than upselling one you don't need. See our gutter clearing and gutter cleaning pages for full details, or get in touch for a free quote.",
        ],
      },
    ],
  },
  {
    slug: "exterior-cleaning-in-carlton-colville-what-to-expect",
    title: "Exterior Cleaning in Carlton Colville: What Local Homes Actually Need",
    excerpt:
      "Carlton Colville sits back from the coast, so the grime is different to Lowestoft's seafront — road film and organic debris rather than salt spray. Here's what that means for upkeep.",
    publishedAt: "2026-09-14",
    relatedServices: ["window-cleaning", "gutter-clearing"],
    relatedAreas: ["carlton-colville"],
    body: [
      {
        paragraphs: [
          "Most of our advice for the coast is built around salt spray — but Carlton Colville sits back from the seafront along the A146, and the grime homes there deal with comes from different sources entirely. If you've read our advice for Lowestoft or Pakefield and it hasn't quite matched what you're seeing on your own windows or gutters, this is probably why.",
        ],
      },
      {
        heading: "Road film, not sea spray",
        paragraphs: [
          "Properties along the A146 corridor pick up more road film and diesel residue from through-traffic between Lowestoft and Beccles than anything blown in off the sea. It's a duller, greasier build-up than salt residue, and it tends to show up on windows facing the road well before the rest of the property looks like it needs attention.",
        ],
      },
      {
        heading: "What actually ends up in the gutters",
        paragraphs: [
          "Homes near Bloodmoor Hill and the surrounding fields collect more windblown leaves, pollen and organic debris in their gutters over autumn than a typical seafront property does — it's a different clog, but it blocks a gutter just as effectively as anything picked up on the coast. If your gutters are overflowing and you can't work out why given you're nowhere near the sea, this is usually the answer.",
        ],
      },
      {
        heading: "The newer estates on the western edge",
        paragraphs: [
          "Newer builds towards the western edge of the village aren't exempt just because they're newer — modern render and uPVC still pick up road film, and new driveways still collect moss and algae in damp corners. Being new just means the neglect is less visible for longer, not that it isn't happening.",
        ],
      },
      {
        heading: "Book a round in Carlton Colville",
        paragraphs: [
          "We run regular window cleaning in Carlton Colville and gutter clearing in Carlton Colville for homes right up to the East Anglia Transport Museum on Chapel Road, and for the newer estates further west, on the same round as the rest of the coast. Get in touch for a free quote.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
