import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${business.name}, explaining how we collect and use your personal data in line with UK GDPR.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-navy-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-navy-800/70">Last updated: 8 September 2026</p>

      <div className="prose prose-navy mt-8 flex flex-col gap-6 text-navy-800">
        <section>
          <h2 className="text-xl font-semibold text-navy-900">1. Who We Are</h2>
          <p className="mt-2">
            {business.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data
            controller for the personal data described in this policy. We are
            based in {business.addressLocality}, {business.addressRegion}. You
            can contact us at{" "}
            <a href={`mailto:${business.email}`} className="text-teal-600 underline">
              {business.email}
            </a>{" "}
            or {business.phone}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">2. What We Collect</h2>
          <p className="mt-2">When you use this website, we may collect:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>
              Contact details you submit through our enquiry form or by email
              (name, phone number, email address, postcode, and the content of
              your message).
            </li>
            <li>
              Anonymised usage data via Google Analytics (pages visited,
              approximate location, device type), but only if you accept
              analytics cookies via the cookie banner.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">3. How We Use It</h2>
          <p className="mt-2">We use your data to:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Respond to your enquiry and provide a quote for our services.</li>
            <li>
              Understand how visitors use this site so we can improve it (only
              where you&apos;ve consented to analytics cookies).
            </li>
          </ul>
          <p className="mt-2">
            We do not sell your personal data or use it for third-party
            advertising.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">4. Legal Basis</h2>
          <p className="mt-2">
            We process enquiry data on the basis of legitimate interest
            (responding to a request you&apos;ve made) and, where a job is
            booked, to take steps towards a contract. Analytics cookies are
            only used with your consent, which you can withdraw at any time by
            clearing your browser&apos;s local storage for this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">5. Third Parties</h2>
          <p className="mt-2">
            We use the following third-party processors, each of which
            processes data under its own privacy policy:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Google Analytics (GA4) — anonymised usage analytics, only with consent.</li>
            <li>Brevo — used to deliver enquiry form emails to us.</li>
            <li>Google Places API — used to display genuine customer reviews.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">6. How Long We Keep It</h2>
          <p className="mt-2">
            We retain enquiry data for as long as reasonably necessary to
            respond to your enquiry and, if you become a customer, for the
            duration of our working relationship plus any period required for
            accounting and legal purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">7. Your Rights</h2>
          <p className="mt-2">
            Under UK GDPR, you have the right to access, correct, or request
            deletion of your personal data, and to object to or restrict how
            we process it. To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${business.email}`} className="text-teal-600 underline">
              {business.email}
            </a>
            . You also have the right to lodge a complaint with the{" "}
            <a
              href="https://ico.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              Information Commissioner&apos;s Office (ICO)
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-navy-900">8. Changes to This Policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );
}
