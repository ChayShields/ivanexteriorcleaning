import { areas, business, services } from "@/lib/business";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.legalName,
    image: `${business.siteUrl}/og-image.jpg`,
    telephone: business.phone,
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
    sameAs: [business.social.facebook],
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
