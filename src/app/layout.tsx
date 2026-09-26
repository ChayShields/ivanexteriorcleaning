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
    "Window cleaning, gutter cleaning from £60, soffit and fascia cleaning and driveway pressure washing in Lowestoft and nearby villages. Fully insured.",
  keywords: [
    "exterior cleaning Lowestoft",
    "window cleaning Lowestoft",
    "gutter cleaning Lowestoft",
    "soffit and fascia cleaning Lowestoft",
    "pressure washing Lowestoft",
    "driveway cleaning Lowestoft",
    "exterior cleaning Kessingland",
    "exterior cleaning Pakefield",
    "exterior cleaning Carlton Colville",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    title: `${business.name} | Window, Gutter & Driveway Cleaning in Lowestoft`,
    description: "Window cleaning, gutter cleaning from £60, soffit and fascia cleaning and driveway pressure washing in Lowestoft and nearby villages. Fully insured.",
    url: business.siteUrl,
    images: [{ url: business.logoPath, width: 1254, height: 1254, alt: `${business.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: `${business.name} | Window, Gutter & Driveway Cleaning in Lowestoft`,
    description: "Window cleaning, gutter cleaning from £60, soffit and fascia cleaning and driveway pressure washing in Lowestoft and nearby villages. Fully insured.",
    images: [business.logoPath],
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
