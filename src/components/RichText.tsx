import Link from "next/link";

// Renders a paragraph of plain text in which internal links are written as
// [anchor text](/path). Only site-relative paths become links; anything
// else is left as plain text, so content can never inject an external URL.
const LINK = /\[([^\]]+)\]\((\/(?![\/\\])[^)\s]*)\)/g;

export default function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    parts.push(
      <Link
        key={`${index}-${match[2]}`}
        href={match[2]}
        className="font-semibold text-teal-600 underline decoration-teal-600/40 underline-offset-2 hover:decoration-teal-600"
      >
        {match[1]}
      </Link>
    );
    last = index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

// The same text with the link markup removed, for schema and meta tags.
export function plainText(text: string) {
  return text.replace(LINK, "$1");
}
