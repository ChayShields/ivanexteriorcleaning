import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { areas, business, secondaryAreas, services } from "@/lib/business";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.14C16.24 4.1 15.36 4 14.33 4c-2.15 0-3.62 1.31-3.62 3.72V10.5H8.2v3h2.51V21h2.79Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-sand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{business.name}</p>
          <p className="mt-3 text-sm text-sand-100/70">
            Window cleaning, gutter clearing and driveway &amp; patio pressure
            washing across Lowestoft, Kessingland and Pakefield.
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href={business.phoneHref} className="flex items-center gap-2 hover:text-amber-400">
              <Phone className="h-4 w-4" aria-hidden />
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="flex items-center gap-2 hover:text-amber-400"
            >
              <Mail className="h-4 w-4" aria-hidden />
              {business.email}
            </a>
            <span className="flex items-center gap-2 text-sand-100/70">
              <MapPin className="h-4 w-4" aria-hidden />
              {business.addressLocality}, {business.addressRegion}
            </span>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-amber-400"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>

        <div>
          <Link
            href="/services"
            className="text-sm font-semibold uppercase tracking-wide text-sand-100/60 hover:text-amber-400"
          >
            Services
          </Link>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="hover:text-amber-400">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link
            href="/areas-we-serve"
            className="text-sm font-semibold uppercase tracking-wide text-sand-100/60 hover:text-amber-400"
          >
            Areas We Serve
          </Link>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/areas-we-serve/${area.slug}`} className="hover:text-amber-400">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-sand-100/50">
            Also covering {secondaryAreas.join(", ")}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-sand-100/60">
            Company
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <Link href="/blog" className="hover:text-amber-400">
                Tips &amp; Advice
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400">
                Contact &amp; Free Quote
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-amber-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-amber-400">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-sand-100/50 sm:px-6">
        © {new Date().getFullYear()} {business.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
