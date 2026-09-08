import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { AreaDefinition } from "@/lib/business";

export default function AreaCard({ area }: { area: AreaDefinition }) {
  return (
    <Link
      href={`/areas-we-serve/${area.slug}`}
      className="group flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-2 text-teal-600">
        <MapPin className="h-4 w-4" aria-hidden />
        <span className="text-xs font-semibold uppercase tracking-wide">{area.role}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-navy-900">{area.name}</h3>
      <p className="mt-2 flex-1 text-sm text-navy-800/80">{area.intro}</p>
      <span className="mt-4 flex items-center gap-1 text-sm font-semibold text-teal-600">
        Exterior cleaning in {area.name}
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
