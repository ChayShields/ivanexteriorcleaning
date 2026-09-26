import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { areas, business, secondaryAreas, services } from "@/lib/business";
import AreaCard from "@/components/AreaCard";
import CTABanner from "@/components/CTABanner";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = pageMetadata({
  title: "Areas We Serve Around Lowestoft",
  description:
    "Exterior cleaning based in Lowestoft, covering Kessingland, Pakefield and Carlton Colville on regular rounds, plus Oulton Broad, Beccles and Great Yarmouth.",
  path: "/areas-we-serve",
});

export default function AreasWeServePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">
          Areas We Serve Around Lowestoft
        </h1>
        <p className="mt-4 text-lg text-navy-800/80">
          Based in Lowestoft, covering Kessingland, Pakefield and Carlton
          Colville on regular rounds, plus {secondaryAreas.join(", ")} on
          request.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">How Our Rounds Work</h2>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            We&apos;re a local, mobile business - we come to you, on regular
            rounds between Lowestoft and Kessingland. Because Pakefield and
            Carlton Colville sit on the same rounds,
            fitting in a one-off job nearby rarely means a special trip, and
            there&apos;s no call-out premium for any of the four.
          </p>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            Where you live does change what your property needs. Homes near the
            seafront in Lowestoft, Kessingland and Pakefield pick up salt spray
            off the North Sea, so windows and gutters tend to need attention
            more often. Carlton Colville sits back from the coast, where road
            film from the A146 and leaves from the fields are the bigger issue.
            Each area page covers what that means for your home.
          </p>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            Every service is available in every area:{" "}
            {services.map((service, index) => (
              <span key={service.slug}>
                <Link href={`/${service.slug}`} className="font-semibold text-teal-600 hover:underline">
                  {service.name.toLowerCase()}
                </Link>
                {index < services.length - 2 ? ", " : index === services.length - 2 ? " and " : ""}
              </span>
            ))}
            . Outside these areas? Call {business.phone} to check coverage for
            your address.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
