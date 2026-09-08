import Link from "next/link";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-4xl font-bold text-navy-900">Page Not Found</h1>
      <p className="mt-4 text-navy-800/80">
        The page you&apos;re looking for doesn&apos;t exist. Try one of the
        links below, or call us on{" "}
        <a href={business.phoneHref} className="font-semibold text-teal-600">
          {business.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-sand-100"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
