import Link from "next/link";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const facebookUrl = site.social.facebookMarketplace.includes("place info here")
    ? "#"
    : site.social.facebookMarketplace;
  const ebayUrl = site.social.ebay.includes("place info here") ? "#" : site.social.ebay;

  return (
    <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-[2fr,1fr]">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground">
          Call, text, or email us for current availability, delivery quotes, or to schedule service. We respond quickly during business hours.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase text-muted-foreground">Phone</p>
            <a className="text-lg" href={`tel:${site.phone}`}>
              {site.phone}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-muted-foreground">Hours</p>
            <p>{site.hours}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-muted-foreground">Address</p>
            <p>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </p>
          </div>
        </div>
        <Button asChild>
          <a href={`sms:${site.phone}`}>Text Us</a>
        </Button>
      </section>

      <aside className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Connect Online</h2>
        <p className="text-sm text-muted-foreground">
          Prefer to chat via marketplace messaging? Use the links below to reach us on the platform you trust.
        </p>
        <div className="flex flex-col gap-3">
          <Button variant="outline" asChild>
            <Link href={facebookUrl}>Facebook Marketplace</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={ebayUrl}>Visit our eBay Store</Link>
          </Button>
        </div>
      </aside>
    </div>
  );
}
