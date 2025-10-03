import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/config/site";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Marketplace Listings | Battery Fleet Solutions",
  description: "Shop our verified eBay and Facebook Marketplace listings and learn how to confirm you’re dealing with our team.",
};

const MARKETPLACE_FAQ = [
  {
    q: "How do I verify I’m messaging the real Battery Fleet Solutions?",
    a: "Match the phone number, review our official links below, and ask for a quick video walk-through.",
  },
  {
    q: "Can you hold a battery without payment?",
    a: "We sell first-come, first-served. Deposits secure inventory. (place info here)",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title="Official Listings"
        subtitle="Use these links to confirm pricing, photos, and reviews before you buy."
      />

      <section className="container px-4 py-16 space-y-12">
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href={site.social.facebookMarketplace || "#"}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-brand-600 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">Facebook Marketplace</h2>
            <p className="mt-2 text-sm text-slate-600">Browse current listings, message us directly, and review buyer feedback.</p>
          </a>
          <a
            href={site.social.ebay || "#"}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-brand-600 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900">eBay Storefront</h2>
            <p className="mt-2 text-sm text-slate-600">Checkout with credit card or financing and track shipments.</p>
          </a>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">How to verify it’s us</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
            <li>Confirm the phone number matches {site.phone}.</li>
            <li>Check for our logo/branding in profile images. (place info here)</li>
            <li>Ask for a current photo or video with today’s date.</li>
            <li>Reference past orders or load-test reports we’ve shared.</li>
          </ol>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...MARKETPLACE_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
