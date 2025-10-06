import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { DEFAULT_FAQ } from "@/content/faq";
import { site } from "@/config/site";
import { Button } from "@/components/ui/button";
import { BatteryCharging, Truck, Wrench } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="bg-blue-50/50 py-20">
        <div className="container mx-auto flex flex-col items-center gap-10 px-4 md:flex-row">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold tracking-tight">
              Reconditioned Forklift Batteries, Delivered Fast
            </h1>
            <p className="text-xl text-muted-foreground">
              Load-tested, warrantied, and ready to work. Serving the Kansas City area with delivery up to 200 miles.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href={`sms:${site.phone}`}>Text Us for Stock Check</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/inventory">Learn About Inventory</Link>
              </Button>
            </div>
          </div>
          <div className="placeholder-box aspect-video w-full flex-1 text-lg">
            Image goes here (Warehouse/Batteries)
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Why Choose {site.name}?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-card p-6 text-center shadow-sm ring-1 ring-border">
              <Wrench className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Fully Reconditioned</h3>
              <p className="text-muted-foreground">
                Thoroughly inspected, cleaned, and load-tested with a written report provided.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-sm ring-1 ring-border">
              <BatteryCharging className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Warranty Included</h3>
              <p className="text-muted-foreground">
                We stand behind our work. Every battery includes a warranty based on its condition grade.
              </p>
            </div>
            <div className="rounded-xl bg-card p-6 text-center shadow-sm ring-1 ring-border">
              <Truck className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Fast Local Delivery</h3>
              <p className="text-muted-foreground">
                Delivery available within 200 miles of Kansas City, or we can prep for LTL freight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-semibold">Our Reputation</h2>
          <p className="mb-8">
            We value transparency. See our reviews on eBay and Facebook Marketplace.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-card p-6 shadow">
                <p className="italic">"(Place review text here)"</p>
                <p className="mt-4 font-semibold">- Customer Name, Company</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="link" asChild>
              <Link href="/marketplace">Verify us on Marketplace →</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQ items={DEFAULT_FAQ} />
        </div>
      </section>
    </div>
  );
}
