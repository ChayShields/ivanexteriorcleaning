import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { areas, business, secondaryAreas, services } from "@/lib/business";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnquiryForm from "@/components/EnquiryForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Free Quotes in Lowestoft",
  description:
    "Free, no-obligation quotes from Ivan's Exterior Cleaning Services in Lowestoft. Call or text 07465 966405, Monday to Saturday 8am-6pm. Fully insured.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <h1 className="text-4xl font-bold text-navy-900">Contact &amp; Free Quotes</h1>
      <p className="mt-4 max-w-2xl text-navy-800/80">
        Give us a call, drop us an email, or fill in the form below and
        we&apos;ll get back to you the same day with a free, no-obligation
        quote.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="flex flex-col gap-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4 transition-colors hover:border-teal-500"
            >
              <Phone className="h-5 w-5 text-teal-600" aria-hidden />
              <div>
                <p className="text-sm text-navy-800/70">Call or text</p>
                <p className="font-semibold text-navy-900">{business.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4 transition-colors hover:border-teal-500"
            >
              <Mail className="h-5 w-5 text-teal-600" aria-hidden />
              <div>
                <p className="text-sm text-navy-800/70">Email</p>
                <p className="font-semibold text-navy-900">{business.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4">
              <MapPin className="h-5 w-5 text-teal-600" aria-hidden />
              <div>
                <p className="text-sm text-navy-800/70">Based in</p>
                <p className="font-semibold text-navy-900">
                  {business.addressLocality}, {business.addressRegion}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4">
              <Clock className="h-5 w-5 text-teal-600" aria-hidden />
              <div>
                <p className="text-sm text-navy-800/70">Working hours</p>
                <p className="font-semibold text-navy-900">Monday to Saturday, 8am - 6pm</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white p-4">
              <ShieldCheck className="h-5 w-5 text-teal-600" aria-hidden />
              <div>
                <p className="text-sm text-navy-800/70">Peace of mind</p>
                <p className="font-semibold text-navy-900">Fully insured</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <GoogleMapEmbed
              query={`${business.addressLocality}, ${business.addressRegion}, UK`}
              label={business.addressLocality}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
          <EnquiryForm context="Contact page" />
        </div>
      </div>

      <section className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy-900">What Happens Next</h2>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            We aim to reply the same day. Tell us what you&apos;d like cleaned
            and roughly where you are - a couple of photos help, but for most
            jobs a quick call is enough to give you an accurate price, without
            a site visit. Gutter cleaning starts from £60; other jobs are
            quoted for your property, and the price is agreed before any work
            starts.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy-900">Where We Work</h2>
          <p className="mt-4 leading-relaxed text-navy-800/90">
            {business.name} is based in Lowestoft and covers{" "}
            {areas.map((area, index) => (
              <span key={area.slug}>
                <Link href={`/areas-we-serve/${area.slug}`} className="font-semibold text-teal-600 hover:underline">
                  {area.name}
                </Link>
                {index < areas.length - 2 ? ", " : index === areas.length - 2 ? " and " : ""}
              </span>
            ))}{" "}
            on regular rounds, plus {secondaryAreas.join(", ")} on request.
            Services:{" "}
            {services.map((service, index) => (
              <span key={service.slug}>
                <Link href={`/${service.slug}`} className="font-semibold text-teal-600 hover:underline">
                  {service.name.toLowerCase()}
                </Link>
                {index < services.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
