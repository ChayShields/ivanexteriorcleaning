import { NextRequest } from "next/server";

const GA_ID_PATTERN = /^G-[A-Z0-9]{6,12}$/;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const isValid = typeof id === "string" && GA_ID_PATTERN.test(id);

  const body = isValid
    ? `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{anonymize_ip:true});`
    : "";

  return new Response(body, {
    status: isValid ? 200 : 400,
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
