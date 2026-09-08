interface GoogleMapEmbedProps {
  query: string;
  label: string;
}

export default function GoogleMapEmbed({ query, label }: GoogleMapEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-sm">
      <iframe
        title={`Map of service area: ${label}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
