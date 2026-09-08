import type { Metadata } from "next";
import { services } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Window cleaning, gutter clearing, gutter cleaning and driveway & patio pressure washing across Lowestoft, Kessingland, Pakefield and Carlton Colville.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-navy-800/80">
          Dedicated exterior cleaning services, each done properly with the
          right kit for the job.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
