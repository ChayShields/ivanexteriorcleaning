import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${business.name} and its website.`,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-navy-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-navy-800/70">Last updated: 8 September 2026</p>

      <div className="prose prose-navy mt-8 flex flex-col gap-6 text-navy-800">
        <section>
          <h2 className="text-xl font-semibold text-navy-900">1. About These Terms</h2>
          <p className="mt-2">
            These terms apply to your use of this website and to any exterior
            cleaning services booked with {business.legalName}. By using this
            site or booking a job with us, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">2. Quotes &amp; Bookings</h2>
          <p className="mt-2">
            Quotes provided via the website, phone or email are estimates
            based on the information you provide and are not binding until
            confirmed after we&apos;ve assessed the property, either in person
            or from photos you send us. Final pricing may vary if the actual
            scope of work differs from what was described.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">3. Access &amp; Cancellations</h2>
          <p className="mt-2">
            You&apos;re responsible for making sure we can safely access the
            areas to be cleaned on the agreed date. If you need to cancel or
            reschedule, please give us as much notice as possible so we can
            offer the slot to another customer.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">4. Liability</h2>
          <p className="mt-2">
            We carry insurance for the services we provide. We take reasonable
            care to avoid damage to your property, but we are not liable for
            pre-existing damage, wear, or defects (such as already-cracked
            paving or deteriorated sealant) that becomes more visible once a
            surface is cleaned.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">5. Payment</h2>
          <p className="mt-2">
            Payment terms will be agreed with you before work begins. We
            accept the payment methods discussed at the time of booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">6. Website Use</h2>
          <p className="mt-2">
            Content on this website is provided for general information about
            our services and is kept up to date as far as reasonably
            possible, but we don&apos;t guarantee it is error-free at all
            times. You may not copy or reuse content from this site for
            commercial purposes without our permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">7. Governing Law</h2>
          <p className="mt-2">
            These terms are governed by the laws of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">8. Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${business.email}`} className="text-teal-600 underline">
              {business.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
