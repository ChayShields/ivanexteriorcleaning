import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/business";
import EnquiryForm from "@/components/EnquiryForm";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const metadata: Metadata = {
  title: "Contact Us & Free Quotes",
  description:
    "Get in touch with Ivan's Exterior Cleaning for a free, no-obligation quote on window cleaning, gutter clearing or driveway & patio cleaning in Lowestoft, Kessingland and Pakefield.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
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
    </div>
  );
}
