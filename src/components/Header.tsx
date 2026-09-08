"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { areas, business, services } from "@/lib/business";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <span className="text-lg font-bold tracking-tight text-navy-900 sm:text-xl">
            Ivan&apos;s Exterior Cleaning
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-navy-800">
            <li className="group relative">
              <Link
                href="/services"
                className="flex items-center gap-1 transition-colors hover:text-teal-600"
              >
                Services
                <ChevronDown className="h-4 w-4" aria-hidden />
              </Link>
              <div className="invisible absolute left-0 top-full w-56 rounded-lg border border-navy-900/10 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-4 py-2 text-sm text-navy-800 hover:bg-sand-50 hover:text-teal-600"
                  >
                    {service.shortName}
                  </Link>
                ))}
              </div>
            </li>
            <li className="group relative">
              <Link
                href="/areas-we-serve"
                className="flex items-center gap-1 transition-colors hover:text-teal-600"
              >
                Areas We Serve
                <ChevronDown className="h-4 w-4" aria-hidden />
              </Link>
              <div className="invisible absolute left-0 top-full w-56 rounded-lg border border-navy-900/10 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-we-serve/${area.slug}`}
                    className="block px-4 py-2 text-sm text-navy-800 hover:bg-sand-50 hover:text-teal-600"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-teal-600">
                Tips &amp; Advice
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-teal-600">
                Contact
              </Link>
            </li>
          </ul>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-amber-400"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {business.phone}
          </a>
        </nav>

        <button
          className="flex items-center justify-center rounded-md p-2 text-navy-900 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-navy-900/10 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1 text-base font-medium text-navy-800">
            <li>
              <button
                className="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-sand-50"
                onClick={() => setMobileServicesOpen((open) => !open)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {mobileServicesOpen && (
                <ul className="ml-4 flex flex-col gap-1 border-l border-navy-900/10 pl-3">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/${service.slug}`}
                        className="block rounded-md px-2 py-2 text-sm hover:bg-sand-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                className="flex w-full items-center justify-between rounded-md px-2 py-2 hover:bg-sand-50"
                onClick={() => setMobileAreasOpen((open) => !open)}
                aria-expanded={mobileAreasOpen}
              >
                Areas We Serve
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {mobileAreasOpen && (
                <ul className="ml-4 flex flex-col gap-1 border-l border-navy-900/10 pl-3">
                  {areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/areas-we-serve/${area.slug}`}
                        className="block rounded-md px-2 py-2 text-sm hover:bg-sand-50"
                        onClick={() => setMobileOpen(false)}
                      >
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/blog"
                className="block rounded-md px-2 py-2 hover:bg-sand-50"
                onClick={() => setMobileOpen(false)}
              >
                Tips &amp; Advice
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block rounded-md px-2 py-2 hover:bg-sand-50"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            href={business.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-navy-950"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
