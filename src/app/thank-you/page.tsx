import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for your enquiry — we'll be in touch shortly.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <CheckCircle2 className="h-14 w-14 text-teal-600" aria-hidden />
      <h1 className="mt-6 text-3xl font-bold text-navy-900">
        Thanks — your enquiry is in.
      </h1>
      <p className="mt-4 text-navy-800/80">
        We&apos;ll be in touch shortly with your free quote. If it&apos;s
        urgent, give us a call on{" "}
        <a href={business.phoneHref} className="font-semibold text-teal-600">
          {business.phone}
        </a>
        .
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-sand-100"
      >
        Back to Home
      </Link>
    </div>
  );
}
