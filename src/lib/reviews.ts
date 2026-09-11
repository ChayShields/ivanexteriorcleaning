import type { GoogleReviewsData } from "@/lib/google-reviews";

// Real reviews from Ivan's Google Business Profile, supplied directly by the
// client (copied from the live listing) rather than fetched via API, because
// the listing isn't yet indexed by the Places API text/nearby search. Update
// this list if the live API integration in google-reviews.ts starts working
// once his profile has more authority/history.
export const realReviews: GoogleReviewsData = {
  rating: 4.9,
  userRatingCount: 30,
  googleMapsUri: "https://maps.app.goo.gl/wwt19DGPPNGQw4kdA",
  reviews: [
    {
      authorName: "Roger Smith",
      rating: 5,
      relativeTime: "",
      text: "Absolutely incredible service! Ivan was very thorough and did a fantastic job at cleaning my grandparents gutters. He turned up at the time agreed, had all the equipment in his van ready for the job, and left no mess whatsoever behind. Worth every penny!",
    },
    {
      authorName: "Diana Coad",
      rating: 5,
      relativeTime: "",
      text: "We have a very large Victorian house with very difficult and high windows and a large orangery covered in years of moss on the roof. Ivan did the most amazing, professional job. The orangery has never looked better. He wasn't very well that day but didn't let us down and worked non-stop until finished. Nice, polite, clean — we would recommend him to anyone.",
    },
    {
      authorName: "Kevin Buttle",
      rating: 5,
      relativeTime: "",
      text: "Ivan provides us with a great window cleaning service, his prices are very reasonable, and he is very reliable. Thanks for cleaning our windows Ivan.",
    },
    {
      authorName: "John Lunniss",
      rating: 5,
      relativeTime: "",
      text: "Ivan is very good at his job and takes pride in looking after his customers. He always gets in touch if for any reason he will not get to you when he says.",
    },
  ],
};
