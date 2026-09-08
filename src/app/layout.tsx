import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { business } from "@/lib/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Window, Gutter & Driveway Cleaning in Lowestoft`,
    template: `%s | ${business.name}`,
  },
  description:
    "Local window cleaning, gutter clearing and driveway & patio pressure washing across Lowestoft, Kessingland and Pakefield. Free, no-obligation quotes.",
  keywords: [
    "window cleaning Lowestoft",
    "gutter cleaning Lowestoft",
    "driveway cleaning Lowestoft",
    "exterior cleaning Kessingland",
    "exterior cleaning Pakefield",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    title: `${business.name} | Window, Gutter & Driveway Cleaning in Lowestoft`,
    description:
      "Local window cleaning, gutter clearing and driveway & patio pressure washing across Lowestoft, Kessingland and Pakefield.",
    url: business.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Window, Gutter & Driveway Cleaning in Lowestoft`,
    description:
      "Local window cleaning, gutter clearing and driveway & patio pressure washing across Lowestoft, Kessingland and Pakefield.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-navy-900">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
