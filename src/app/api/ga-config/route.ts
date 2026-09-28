import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// GA's config served as an external script instead of an inline <script>.
// The ID comes from the constant in lib/analytics.ts and nothing from the
// request is ever interpolated into the response, so there is no
// query-string input to inject through.
//
// The response never changes, so it is generated once at build time and
// served from the CDN rather than running a function on every page view.
export const dynamic = "force-static";

const body =
  "window.dataLayer=window.dataLayer||[];" +
  "function gtag(){dataLayer.push(arguments);}" +
  "gtag('js',new Date());" +
  `gtag('config','${GA_MEASUREMENT_ID}');`;

export function GET() {
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
