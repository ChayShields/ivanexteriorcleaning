import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Tips & Advice",
  description:
    "Practical exterior cleaning advice for homeowners in Lowestoft, Kessingland, Pakefield and Carlton Colville — gutters, driveways, patios and windows.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-navy-900">Tips &amp; Advice</h1>
      <p className="mt-4 max-w-2xl text-navy-800/80">
        Practical, local advice on keeping your windows, gutters, driveway and
        patio in good shape year-round.
      </p>
      <div className="mt-10 flex flex-col gap-6">
        {blogPosts
          .slice()
          .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
          .map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-navy-900">{post.title}</h2>
              <p className="mt-2 text-navy-800/80">{post.excerpt}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
