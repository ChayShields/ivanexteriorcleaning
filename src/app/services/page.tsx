import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { business, services } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = pageMetadata({
  title: "Exterior Cleaning Services in Lowestoft",
  description:
    "Window cleaning, gutter cleaning from £60, soffit and fascia cleaning, and driveway pressure washing in Lowestoft and nearby villages. Fully insured.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">
          Exterior Cleaning Services in Lowestoft
        </h1>
        <p className="mt-4 text-lg text-navy-800/80">
          Four dedicated services, each done properly with the right kit for
          the job. Fully insured, based in Lowestoft, and covering
          Kessingland, Pakefield and Carlton Colville on the same rounds.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900">Which Service Do You Need?</h2>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            If rainwater is spilling over your gutters, plants are growing out
            of them or there are damp patches on the wall below, you need{" "}
            <Link href="/gutter-cleaning" className="font-semibold text-teal-600 hover:underline">
              gutter cleaning
            </Link>{" "}
            - blocked gutters and downpipes cleared, from £60. If the gutters
            run fine but the white uPVC has gone grey with black streaks, that&apos;s{" "}
            <Link href="/soffit-fascia-cleaning" className="font-semibold text-teal-600 hover:underline">
              soffit and fascia cleaning
            </Link>
            , a cosmetic wash of the outside of the roofline.
          </p>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            <Link href="/window-cleaning" className="font-semibold text-teal-600 hover:underline">
              Window cleaning
            </Link>{" "}
            is done from the ground with a pure water fed pole, on a regular
            round or as a one-off.{" "}
            <Link href="/driveway-patio-cleaning" className="font-semibold text-teal-600 hover:underline">
              Driveway and patio cleaning
            </Link>{" "}
            is pressure washing for block paving, concrete and stone, with
            weeds and moss cleared from the joints.
          </p>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            Not sure? Call {business.phone} or send a couple of photos and
            we&apos;ll tell you honestly what the job needs - and give you a
            free quote before any work starts.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
