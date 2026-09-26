import { headers } from "next/headers";
import { areas, business, services } from "@/lib/business";
import { getGoogleReviews } from "@/lib/google-reviews";

export default async function LocalBusinessSchema() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;
  const reviewData = await getGoogleReviews();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    // Stable ID so each page's Service schema can point at this business.
    "@id": `${business.siteUrl}/#business`,
    name: business.legalName,
    // /og-image.jpg never existed (404); the logo is a real image until a
    // job photo is added.
    image: `${business.siteUrl}${business.logoPath}`,
    logo: `${business.siteUrl}${business.logoPath}`,
    telephone: business.phoneE164,
    email: business.email,
    url: business.siteUrl,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.addressLocality,
      addressRegion: business.addressRegion,
      postalCode: business.postalCode,
      addressCountry: business.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    openingHoursSpecification: business.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.days,
      opens: hours.opens,
      closes: hours.closes,
    })),
    // The Google Business Profile and Facebook page are the same business.
    sameAs: [business.googleProfileUrl, business.social.facebook],
    hasMap: business.googleProfileUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewData.rating,
      reviewCount: reviewData.userRatingCount,
      bestRating: 5,
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
