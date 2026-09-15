import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { areas, business, getServiceBySlug, services } from "@/lib/business";
import CTABanner from "@/components/CTABanner";
import GoogleReviews from "@/components/GoogleReviews";
import FAQ, { type FAQItem } from "@/components/FAQ";
import EnquiryForm from "@/components/EnquiryForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/[service]">
): Promise<Metadata> {
  const { service: slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.name} in Lowestoft, Kessingland, Pakefield & Carlton Colville`;
  const description = `${service.heroSummary} Free, no-obligation quotes. Call ${business.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/${service.slug}` },
    openGraph: { title, description, url: `/${service.slug}` },
  };
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
  ],
  "gutter-clearing": [
    {
      question: "How do I know if my gutters need clearing?",
      answer:
        "Overflowing water during rain, plants growing out of the gutter, or damp patches on walls below the roofline are the main signs. We're happy to take a look and give you honest advice either way.",
    },
    {
      question: "Do you clear the downpipes too?",
      answer:
        "Yes, we check and clear downpipes as part of every gutter clearing job to make sure water can actually get away once it leaves the gutter.",
    },
    {
      question: "Will I get proof the work was done?",
      answer:
        "We send before-and-after photos so you can see exactly what came out of your gutters.",
    },
  ],
  "gutter-cleaning": [
    {
      question: "Is this the same as gutter clearing?",
      answer:
        "No. Gutter clearing removes blockages from inside the gutter so water flows properly. This is an exterior wash of the gutters, soffits and fascias to remove staining and grime — a cosmetic job. Plenty of customers book both together.",
    },
    {
      question: "What causes the black staining on my gutters?",
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
  ],
};

export default async function ServicePage(props: PageProps<"/[service]">) {
  const { service: slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);
  const faqs = serviceFaqs[service.slug] ?? [];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/${service.slug}` },
        ]}
      />
      <section className="bg-gradient-to-b from-sand-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">
            {service.name} in Lowestoft, Kessingland, Pakefield &amp; Carlton Colville
          </h1>
          <p className="mt-4 text-lg text-navy-800/80">{service.heroSummary}</p>
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
          <h2 className="text-2xl font-bold text-navy-900">
            {service.name} Across Lowestoft, Kessingland, Pakefield &amp; Carlton Colville
          </h2>
          <p className="mt-4 text-navy-800/80">
            We run regular {service.shortName.toLowerCase()} rounds across all
            four areas, so booking in a one-off clean or a recurring visit
            rarely means a special trip out for us.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-we-serve/${area.slug}`}
                className="rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-center font-medium text-navy-900 transition-colors hover:border-teal-500 hover:bg-white"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">Other Services</h2>
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

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <GoogleReviews limit={3} />
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
