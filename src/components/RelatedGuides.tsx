import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

// A block of links to blog posts. Used on service pages, area pages and at
// the foot of every post, so each new post is linked from the older pages
// it relates to the moment it's published - not only from the blog index.
export default function RelatedGuides({
  posts,
  heading = "Guides & Advice",
}: {
  posts: BlogPost[];
  heading?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <h2 className="text-2xl font-bold text-navy-900">{heading}</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-semibold text-navy-900">{post.title}</span>
              <span className="mt-2 flex-1 text-sm text-navy-800/80">{post.excerpt}</span>
              <span className="mt-3 flex items-center gap-1 text-sm font-semibold text-teal-600">
                Read the guide
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
