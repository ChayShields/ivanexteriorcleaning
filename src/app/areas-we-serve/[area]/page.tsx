import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areas, business, getAreaBySlug, services } from "@/lib/business";
import CTABanner from "@/components/CTABanner";
import GoogleReviews from "@/components/GoogleReviews";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import ServiceCard from "@/components/ServiceCard";
import EnquiryForm from "@/components/EnquiryForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas-we-serve/[area]">
): Promise<Metadata> {
  const { area: slug } = await props.params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  const title = `Exterior Cleaning in ${area.name} | Window, Gutter & Driveway Cleaning`;
  const description = `${area.intro} Free, no-obligation quotes. Call ${business.phone}.`;

  return {
    title,
    description,
    alternates: { canonical: `/areas-we-serve/${area.slug}` },
    openGraph: { title, description, url: `/areas-we-serve/${area.slug}` },
  };
}

export default async function AreaPage(props: PageProps<"/areas-we-serve/[area]">) {
  const { area: slug } = await props.params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const otherAreas = areas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve" },
          { name: area.name, path: `/areas-we-serve/${area.slug}` },
        ]}
      />
      <section className="bg-gradient-to-b from-sand-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="inline-flex items-center gap-2 rounded-full bg-teal-600/10 px-3 py-1 text-sm font-semibold text-teal-600">
            {area.role}
          </p>
          <h1 className="mt-4 text-4xl font-bold text-navy-900 sm:text-5xl">
            Exterior Cleaning in {area.name}
          </h1>
          <p className="mt-4 text-lg text-navy-800/80">{area.intro}</p>
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
        <h2 className="text-2xl font-bold text-navy-900">
          Local to {area.name}
        </h2>
        <p className="mt-4 text-navy-800/80">{area.localContent}</p>
        <p className="mt-4 text-sm font-medium text-navy-800/60">
          Landmarks nearby: {area.landmarks.join(", ")}.
        </p>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Services Available in {area.name}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">Find Us Near {area.name}</h2>
        <div className="mt-6">
          <GoogleMapEmbed query={area.mapQuery} label={area.name} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">What Local Customers Say</h2>
        <div className="mt-8">
          <GoogleReviews limit={3} />
        </div>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-navy-800">{area.neighbourSentence}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/areas-we-serve/${other.slug}`}
                className="rounded-full border border-navy-900/20 bg-white px-5 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-teal-500"
              >
                {other.name} cleaning services
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <section id="quote" className="mx-auto max-w-xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">
          Get a Free Quote in {area.name}
        </h2>
        <div className="mt-6">
          <EnquiryForm context={`${area.name} area page`} />
        </div>
      </section>
    </>
  );
}
