import { business } from "@/lib/business";
import { realReviews } from "@/lib/reviews";

export interface GoogleReview {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleReviewsData {
  rating: number;
  userRatingCount: number;
  googleMapsUri: string;
  reviews: GoogleReview[];
}

interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    authorAttribution?: { displayName?: string; photoUri?: string };
    rating?: number;
    text?: { text?: string };
    relativePublishTimeDescription?: string;
  }>;
}

// Ivan's Google Business Profile isn't yet indexed by the Places API's
// text/nearby search (confirmed during setup — direct Place Details lookups
// also 404 on the place ID we have), so live fetches are expected to fail
// for now. Falls back to realReviews (genuine reviews, manually copied from
// the live listing) whenever the API has nothing usable, rather than
// showing nothing or fabricated content.
export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return realReviews;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${business.googlePlaceId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        next: { revalidate: 60 * 60 * 24 },
      }
    );

    if (!response.ok) {
      console.warn("Live Google reviews fetch failed, using stored reviews:", await response.text());
      return realReviews;
    }

    const data = (await response.json()) as PlacesApiResponse;
    const reviews = (data.reviews ?? [])
      .filter((review) => review.text?.text)
      .map((review) => ({
        authorName: review.authorAttribution?.displayName ?? "Google user",
        authorPhotoUrl: review.authorAttribution?.photoUri,
        rating: review.rating ?? 0,
        text: review.text!.text!,
        relativeTime: review.relativePublishTimeDescription ?? "",
      }));

    if (reviews.length === 0) return realReviews;

    return {
      rating: data.rating ?? realReviews.rating,
      userRatingCount: data.userRatingCount ?? realReviews.userRatingCount,
      googleMapsUri: data.googleMapsUri ?? realReviews.googleMapsUri,
      reviews,
    };
  } catch (error) {
    console.warn("Live Google reviews fetch errored, using stored reviews:", error);
    return realReviews;
  }
}
