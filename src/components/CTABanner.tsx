import Link from "next/link";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export default function CTABanner() {
  return (
    <section className="bg-navy-900 py-14 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Ready for a free, no-obligation quote?
        </h2>
        <p className="max-w-xl text-navy-100/80">
          Tell us what needs cleaning and we&apos;ll get back to you the same
          day, or call now and speak to us directly.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {business.phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
