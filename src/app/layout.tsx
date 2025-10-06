import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const baseUrl = site.url.startsWith("http") ? site.url : `https://${site.url}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${site.name} | Reconditioned Forklift Batteries KC`,
    template: `%s | ${site.name}`,
  },
  description: `Load-tested, warrantied forklift batteries. Fast delivery up to 200 miles of Kansas City. Call/Text ${site.phone}`,
  openGraph: {
    type: "website",
    url: baseUrl,
    title: `${site.name} | Reconditioned Forklift Batteries`,
    description:
      "Load-tested, warrantied, and ready to ship. Delivery up to 200 miles of Kansas City.",
    images: [{ url: site.images.og }],
  },
  twitter: {
    card: "summary_large_image",
    images: [site.images.og],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <div className="bg-gray-900 py-2 text-sm text-white">
          <div className="container mx-auto flex justify-center gap-6 px-4 md:justify-end">
            <a
              href={`tel:${site.phone}`}
              className="transition-colors hover:text-primary-foreground/80"
            >
              Call/Text: {site.phone}
            </a>
            <span>Hours: {site.hours}</span>
          </div>
        </div>

        <header className="sticky top-0 z-10 border-b bg-background p-4 shadow-sm">
          <div className="container mx-auto flex items-center justify-between px-4">
            <Link href="/" className="text-xl font-bold">
              {site.name}
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/inventory"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Inventory
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/marketplace"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Marketplace
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="mt-12 border-t bg-muted/50 py-10">
          <div className="container mx-auto space-y-4 px-4 text-center text-sm text-muted-foreground">
            <p className="font-semibold">{site.name}</p>
            <p>
              {site.address.street}, {site.address.city}, {site.address.region} {" "}
              {site.address.postalCode}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/marketplace" className="hover:underline">
                eBay &amp; FB Marketplace Links
              </Link>
            </div>
          </div>
        </footer>

        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
