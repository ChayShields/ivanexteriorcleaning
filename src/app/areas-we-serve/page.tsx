import type { Metadata } from "next";
import { areas, secondaryAreas } from "@/lib/business";
import AreaCard from "@/components/AreaCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Exterior cleaning across Lowestoft, Kessingland, Pakefield and Carlton Colville, plus Oulton Broad, Beccles and Great Yarmouth.",
  alternates: { canonical: "/areas-we-serve" },
};

export default function AreasWeServePage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-4xl font-bold text-navy-900 sm:text-5xl">Areas We Serve</h1>
        <p className="mt-4 text-lg text-navy-800/80">
          Based in Lowestoft, covering Kessingland, Pakefield and Carlton
          Colville on regular rounds, plus Oulton Broad, Beccles and Great
          Yarmouth.
        </p>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <AreaCard key={area.slug} area={area} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-navy-800/60">
          Also covering {secondaryAreas.join(", ")}. Get in touch to check
          coverage for your address.
        </p>
      </section>

      <CTABanner />
    </>
  );
}
