import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Star, Tag } from "lucide-react";
import { areas, business, getServiceBySlug, secondaryAreas, services } from "@/lib/business";
import { getPostsForService } from "@/lib/blog";
import { getGoogleReviews } from "@/lib/google-reviews";
import { beforeAfterVideos } from "@/lib/videos";
import CTABanner from "@/components/CTABanner";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ, { type FAQItem } from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { pageMetadata } from "@/lib/seo";
import RelatedGuides from "@/components/RelatedGuides";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

// Only the service slugs above exist. Anything else at the root (bot probes
// like /wp-login.php) gets the static 404 instead of a server render.
export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/[service]">
): Promise<Metadata> {
  const { service: slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/${service.slug}`,
  });
}

const serviceFaqs: Record<string, FAQItem[]> = {
  "window-cleaning": [
    {
      question: "Do you use ladders?",
      answer:
        "No. We use a pure water fed pole system that safely reaches upper floors from the ground, so there's no ladder against your walls or windows.",
    },
    {
      question: "How often will my windows need cleaning?",
      answer:
        "Most customers on our regular rounds go for 4 or 8-weekly visits. Properties closer to the seafront tend to need more frequent cleaning because of salt spray.",
    },
    {
      question: "Do you clean frames and sills as well as glass?",
      answer:
        "Yes, frames, sills and doors are cleaned as standard on every visit, not just the glass.",
    },
    {
      question: "How much does window cleaning cost in Lowestoft?",
      answer:
        "We don't work from a fixed price list — every quote is based on your actual property: size, number of storeys, access, and how often you'd like us to visit. That way you get a fair price for your home rather than a generic rate that doesn't fit. Regular rounds typically work out better value than one-off cleans. Get in touch for a free, no-obligation quote and we'll give you an honest figure before any work starts.",
    },
    {
      question: "Are you insured?",
      answer: "Yes, we're fully insured for all the exterior cleaning we do.",
    },
  ],
  "gutter-cleaning": [
    {
      question: "How much does gutter cleaning cost in Lowestoft?",
      answer:
        "Gutter cleaning starts from £60. The final price depends on the size of the property and how easy the gutters are to reach, and we'll confirm a fixed price before any work starts.",
    },
    {
      question: "How do I know if my gutters need cleaning?",
      answer:
        "Overflowing water during rain, plants growing out of the gutter, or damp patches on walls below the roofline are the main signs. We're happy to take a look and give you honest advice either way.",
    },
    {
      question: "Do you clear the downpipes too?",
      answer:
        "Yes, we check and clear downpipes as part of every gutter clean to make sure water can actually get away once it leaves the gutter.",
    },
    {
      question: "Will I get proof the work was done?",
      answer:
        "We send before-and-after photos so you can see exactly what came out of your gutters.",
    },
    {
      question: "Is this the same as soffit and fascia cleaning?",
      answer:
        "No. Gutter cleaning clears blockages from inside the gutter so water flows properly. Soffit and fascia cleaning washes the outside of the roofline to remove staining - a cosmetic job. Plenty of customers book both together.",
    },
  ],
  "soffit-fascia-cleaning": [
    {
      question: "Is this the same as gutter cleaning?",
      answer:
        "No. Gutter cleaning removes blockages from inside the gutter so water flows properly. This is an exterior wash of the soffits, fascias and the outside of the gutters to remove staining and grime. Plenty of customers book both together.",
    },
    {
      question: "What causes the black staining on my gutters and fascias?",
      answer:
        "It's usually a mix of weather, road grime and general atmospheric pollution settling on the uPVC over time, sometimes called 'tiger-striping'. It builds up gradually, so it's easy not to notice until it's quite pronounced.",
    },
    {
      question: "Will cleaning damage my uPVC?",
      answer:
        "No, we use a soft-wash approach that lifts the dirt without harsh pressure washing or abrasive chemicals that could damage the plastic.",
    },
  ],
  "driveway-patio-cleaning": [
    {
      question: "Will pressure washing damage my block paving?",
      answer:
        "No, when done correctly with the right pressure setting for the surface. We adjust our approach for block paving, concrete, tarmac and natural stone.",
    },
    {
      question: "Can you remove weeds from between the paving joints?",
      answer:
        "Yes, weed and moss removal from the joints is part of the service, not just a surface clean.",
    },
    {
      question: "Do you offer sanding after cleaning?",
      answer:
        "Yes, we can add sand into the joints after cleaning to help slow down moss and weed regrowth. We don't offer sealing.",
    },
    {
      question: "Is pressure washing the same as jet washing?",
      answer:
        "Yes - they're two names for the same job. We use commercial-grade pressure washing kit set to suit each surface.",
    },
  ],
};

export default async function ServicePage(props: PageProps<"/[service]">) {
  const { service: slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const reviews = await getGoogleReviews();
  const otherServices = services.filter((item) => item.slug !== service.slug);
  const otherAreas = areas.filter((area) => area.slug !== "lowestoft");
  const faqs = serviceFaqs[service.slug] ?? [];
  const videos = service.videoIds
    .map((id) => beforeAfterVideos.find((video) => video.youtubeId === id))
    .filter((video): video is NonNullable<typeof video> => Boolean(video));
  const guides = getPostsForService(service.slug);
  const pageUrl = `${business.siteUrl}/${service.slug}`;
  const minPrice = service.priceFrom ? Number(service.priceFrom.replace(/[^0-9.]/g, "")) : undefined;

  // One Service entity per page, tied to the business by @id, so each page
  // tells search engines exactly which service it's about.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in Lowestoft`,
    serviceType: service.name,
    description: service.description,
    url: pageUrl,
    provider: { "@id": `${business.siteUrl}/#business` },
    areaServed: [...areas.map((area) => area.name), ...secondaryAreas].map((name) => ({
      "@type": "Place",
      name,
    })),
    ...(minPrice
      ? {
          offers: {
            "@type": "Offer",
            url: pageUrl,
            priceCurrency: "GBP",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice,
              priceCurrency: "GBP",
            },
          },
        }
      : {}),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/${service.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="bg-gradient-to-b from-sand-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">{service.h1}</h1>
          {service.h1Subtitle && (
            <p className="mt-3 text-xl font-semibold text-teal-600">{service.h1Subtitle}</p>
          )}
          <p className="mt-4 text-lg text-navy-800/80">{service.heroSummary}</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-navy-800">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-teal-600" aria-hidden />
              Fully insured
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-current text-amber-500" aria-hidden />
              {reviews.rating.toFixed(1)} from {reviews.userRatingCount} Google reviews
            </li>
            {service.priceFrom && (
              <li className="flex items-center gap-2">
                <Tag className="h-5 w-5 text-teal-600" aria-hidden />
                From {service.priceFrom}
              </li>
            )}
          </ul>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
            >
              Call {business.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-sand-100"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">What&apos;s Included</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {service.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden />
              <span className="text-navy-800">{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">{service.howItWorks.heading}</h2>
          {service.howItWorks.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-relaxed text-navy-800/90">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {videos.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">Before &amp; After</h2>
          <p className="mt-2 text-navy-800/80">
            Real jobs, filmed as they happened - no staging.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {videos.map((video) => (
              <div key={video.youtubeId}>
                <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
                <p className="mt-3 text-sm font-medium text-navy-800">{video.caption}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">What Local Customers Say</h2>
        <div className="mt-8">
          <GoogleReviews limit={3} />
        </div>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Based in Lowestoft, Covering the Coast
          </h2>
          <p className="mt-4 text-navy-800/80">
            Lowestoft is our home patch, and {service.name.toLowerCase()} is on
            our regular rounds through{" "}
            <Link href="/areas-we-serve/lowestoft" className="font-semibold text-teal-600 hover:underline">
              the town, from the seafront to the A12
            </Link>
            . We also cover nearby villages on the same rounds, so booking
            there rarely means a special trip, plus {secondaryAreas.join(", ")} on request.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-we-serve/${area.slug}`}
                className="rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-center font-medium text-navy-900 transition-colors hover:border-teal-500"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides posts={guides} />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-bold text-navy-900">Other Services</h2>
          <Link href="/services" className="text-sm font-semibold text-teal-600 hover:underline">
            All exterior cleaning services
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {otherServices.map((other) => (
            <Link
              key={other.slug}
              href={`/${other.slug}`}
              className="rounded-xl border border-navy-900/10 bg-white p-5 transition-colors hover:border-teal-500"
            >
              <p className="font-semibold text-navy-900">{other.name}</p>
              <p className="mt-1 text-sm text-navy-800/70">{other.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />

      {faqs.length > 0 && <FAQ items={faqs} />}

      <section id="quote" className="mx-auto max-w-xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">
          Get a Free {service.name} Quote
        </h2>
        <div className="mt-6">
          <EnquiryForm context={`${service.name} page`} />
        </div>
      </section>
    </>
  );
}
