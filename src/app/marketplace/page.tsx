import Link from "next/link";
import { site } from "@/config/site";

export default function MarketplacePage() {
  const facebookUrl = site.social.facebookMarketplace.includes("place info here")
    ? "#"
    : site.social.facebookMarketplace;
  const ebayUrl = site.social.ebay.includes("place info here") ? "#" : site.social.ebay;

  return (
    <div className="container mx-auto space-y-8 px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Marketplace Listings</h1>
      <p className="text-muted-foreground">
        We maintain an active presence on eBay and Facebook Marketplace so you can verify our reviews and browse current battery listings.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Facebook Marketplace</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            View local listings, arrange pickup or delivery, and chat with us directly via Messenger.
          </p>
          <Link
            href={facebookUrl}
            className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Visit Facebook Marketplace →
          </Link>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">eBay Store</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Nationwide shipping with freight coordination available. Check ratings, sold history, and warranty details.
          </p>
          <Link
            href={ebayUrl}
            className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Visit our eBay store →
          </Link>
        </div>
      </div>
    </div>
  );
}
