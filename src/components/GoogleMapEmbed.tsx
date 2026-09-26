"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

interface GoogleMapEmbedProps {
  query: string;
  label: string;
}

// Click-to-load map. The Google Maps embed pulls in ~470KB of Google's map
// scripts, which on phones held up the whole page (area pages measured a
// 5.9s LCP). Nothing loads from Google until the visitor asks for the map.
export default function GoogleMapEmbed({ query, label }: GoogleMapEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaded) mapRef.current?.focus();
  }, [loaded]);

  if (loaded) {
    return (
      <div
        ref={mapRef}
        tabIndex={-1}
        className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-sm outline-none"
      >
        <iframe
          title={`Map of service area: ${label}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
          width="100%"
          height="320"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="flex h-[320px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-navy-900/10 bg-sand-50 text-navy-900 shadow-sm transition-colors hover:border-teal-500"
    >
      <MapPin className="h-8 w-8 text-teal-600" aria-hidden />
      <span className="font-semibold">Show map of {label}</span>
      <span className="text-sm text-navy-800/70">Loads Google Maps</span>
    </button>
  );
}
