import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { areas, business, getAreaBySlug, services } from "@/lib/business";
import CTABanner from "@/components/CTABanner";
import GoogleReviews from "@/components/GoogleReviews";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import RelatedGuides from "@/components/RelatedGuides";
import { getPostsForArea } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceCard from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return areas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata(
  props: PageProps<"/areas-we-serve/[area]">
): Promise<Metadata> {
  const { area: slug } = await props.params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return pageMetadata({
    title: area.seoTitle,
    description: area.metaDescription,
    path: `/areas-we-serve/${area.slug}`,
  });
}

export default async function AreaPage(props: PageProps<"/areas-we-serve/[area]">) {
  const { area: slug } = await props.params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const otherAreas = areas.filter((item) => item.slug !== area.slug);
  const guides = getPostsForArea(area.slug);

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
            {area.h1}
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
        <p className="mt-4 text-sm font-medium text-navy-800/70">
          Landmarks nearby: {area.landmarks.join(", ")}.
        </p>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Services in {area.name}
          </h2>
          <p className="mt-2 text-navy-800/80">
            Everything we offer is available in {area.name}. Each service page
            explains exactly what&apos;s included.
          </p>
          {area.slug === "lowestoft" ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          ) : (
          /* Short links, not full service descriptions: the service pages
             own each service, and this page stays about the town. */
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-navy-900/10 bg-white px-4 py-3 font-medium text-navy-900 transition-colors hover:border-teal-500"
                >
                  <span>
                    {service.name}
                    {service.priceFrom ? ` - from ${service.priceFrom}` : ""}
                  </span>
                  <ArrowRight className="h-4 w-4 text-teal-600 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900">Find Us Near {area.name}</h2>
        <div className="mt-6">
          <GoogleMapEmbed query={area.mapQuery} label={area.name} />
        </div>
      </section>

      <RelatedGuides posts={guides} heading={`Advice for ${area.name} Homes`} />

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
          <Link href="/areas-we-serve" className="mt-6 inline-block text-sm font-semibold text-teal-600 hover:underline">
            See all the areas we serve
          </Link>
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
