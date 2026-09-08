import { Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/google-reviews";

export default async function GoogleReviews({ limit = 3 }: { limit?: number }) {
  const data = await getGoogleReviews();

  if (data.reviews.length === 0) return null;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="flex text-amber-500" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < Math.round(data.rating) ? "fill-current" : ""}`}
            />
          ))}
        </div>
        <p className="font-semibold text-navy-900">
          {data.rating.toFixed(1)} out of 5
        </p>
        <a
          href={data.googleMapsUri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-navy-800/70 underline hover:text-teal-600"
        >
          {data.userRatingCount} reviews on Google
        </a>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {data.reviews.slice(0, limit).map((review, index) => (
          <figure
            key={index}
            className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm"
          >
            <div className="flex gap-1 text-amber-500" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? "fill-current" : ""}`}
                />
              ))}
            </div>
            <blockquote className="mt-3 text-navy-800">&ldquo;{review.text}&rdquo;</blockquote>
            <figcaption className="mt-4 flex items-center gap-2">
              {review.authorPhotoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={review.authorPhotoUrl}
                  alt=""
                  width={28}
                  height={28}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                />
              )}
              <span className="text-sm font-semibold text-navy-900/70">
                {review.authorName}
                {review.relativeTime ? ` · ${review.relativeTime}` : ""}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-navy-800/70">
        Reviews via Google
      </p>
    </div>
  );
}
