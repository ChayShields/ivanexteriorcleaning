import Link from "next/link";
import { CheckCircle2, Phone, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { areas, business, services } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";
import AreaCard from "@/components/AreaCard";
import GoogleReviews from "@/components/GoogleReviews";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-sand-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-600/10 px-3 py-1 text-sm font-semibold text-teal-600">
              Lowestoft &middot; Kessingland &middot; Pakefield &middot; Carlton Colville
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy-900 sm:text-5xl">
              Exterior Cleaning That Keeps Your Property Looking Its Best
            </h1>
            <p className="mt-4 max-w-xl text-lg text-navy-800/80">
              Window cleaning, gutter clearing &amp; cleaning, and driveway
              &amp; patio pressure washing for homes and businesses across
              Lowestoft, Kessingland, Pakefield and Carlton Colville. Fully
              insured, locally based, free quotes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {business.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-sand-100"
              >
                Get a Free Quote
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { icon: ShieldCheck, label: "Fully insured" },
                { icon: Sparkles, label: "Before & after photos" },
                { icon: Timer, label: "Fast response" },
                { icon: CheckCircle2, label: "Free quotes" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <Icon className="h-6 w-6 text-teal-600" aria-hidden />
                  <dt className="text-sm font-medium text-navy-800">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
              Areas We Serve
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-we-serve/${area.slug}`}
                    className="flex items-center justify-between rounded-xl border border-navy-900/10 px-4 py-3 text-navy-900 transition-colors hover:border-teal-500 hover:bg-sand-50"
                  >
                    <span className="font-medium">{area.name}</span>
                    <span className="text-xs text-navy-800/60">{area.role}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Our Services</h2>
        <p className="mt-2 max-w-2xl text-navy-800/80">
          Dedicated exterior cleaning services, each done properly with the
          right kit for the job.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <BeforeAfterGallery />

      <section className="bg-sand-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Local Coverage Across the Coast
          </h2>
          <p className="mt-2 max-w-2xl text-navy-800/80">
            Based in Lowestoft and covering Kessingland, Pakefield and
            Carlton Colville on regular rounds, plus Oulton Broad, Beccles
            and Great Yarmouth.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <AreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
          What Local Customers Say
        </h2>
        <div className="mt-8">
          <GoogleReviews />
        </div>
      </section>

      <CTABanner />

      <FAQ
        items={[
          {
            question: "Which areas do you cover?",
            answer:
              "We're based in Lowestoft and cover Lowestoft, Kessingland, Pakefield and Carlton Colville on regular rounds, plus Oulton Broad, Beccles and Great Yarmouth.",
          },
          {
            question: "How often should I have my windows cleaned?",
            answer:
              "Most customers go for a 4 or 8-weekly round depending on how exposed the property is to coastal salt spray. We can also do one-off cleans.",
          },
          {
            question: "Do I need to be home for gutter clearing or window cleaning?",
            answer:
              "No. As long as we can access the property, we can carry out most work without you needing to be in. We'll send before-and-after photos either way.",
          },
          {
            question: "Are you insured?",
            answer:
              "Yes, we're fully insured for all the exterior cleaning services we offer.",
          },
        ]}
      />
    </>
  );
}
