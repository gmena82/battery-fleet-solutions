import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

import "./globals.css";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { site } from "@/config/site";

const openGraphImages = site.images.og
  ? [{ url: site.images.og, width: 1200, height: 630, alt: "Battery Fleet Solutions warehouse" }]
  : undefined;

const twitterImages = site.images.og ? [site.images.og] : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Reconditioned Forklift Batteries`,
  description:
    "Load-tested, warrantied forklift batteries. Fast delivery up to 200 miles of Kansas City. Call/Text " + site.phone,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | Reconditioned Forklift Batteries`,
    description:
      "Load-tested, warrantied, and ready to ship. Delivery up to 200 miles of Kansas City.",
    images: openGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Reconditioned Forklift Batteries`,
    description: "Reconditioned forklift batteries with warranty. Call/Text " + site.phone,
    images: twitterImages,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <SiteHeader />
        <LocalBusinessJsonLd />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
