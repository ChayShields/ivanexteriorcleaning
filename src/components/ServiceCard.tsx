import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceDefinition } from "@/lib/business";

export default function ServiceCard({ service }: { service: ServiceDefinition }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-navy-900">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm text-navy-800/80">{service.description}</p>
      <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-teal-600">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
