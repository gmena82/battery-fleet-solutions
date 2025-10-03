import Link from "next/link";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { site } from "@/config/site";
import { DEFAULT_FAQ } from "@/content/faq";

const HOME_FAQ = [
  {
    q: "How quickly can you deliver once we confirm specs?",
    a: "Most local installs are scheduled within 1-3 business days. Freight shipments leave within 48 hours once paperwork is wrapped.",
  },
];

const BADGES = [
  {
    title: "Load-Tested",
    description: "Each battery includes a documented discharge test so you know the runtime before it ships.",
  },
  {
    title: "Warranty",
    description: "Coverage tailored to A/B/C grade units so you understand real-world expectations.",
  },
  {
    title: "Fast Delivery",
    description: "In-house truck within 200 miles and freight partnerships nationwide.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="container px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase text-brand-700">
                Reconditioned Forklift Batteries
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Keep your fleet powered with warrantied batteries and honest runtimes.
              </h1>
              <p className="text-lg text-slate-600">
                Battery Fleet Solutions helps warehouses, manufacturers, and rental fleets stay online.
                Share your truck model or voltage/Ah requirements and we will match today’s availability
                or source it fast. Delivery available up to 200 miles of Kansas City.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
                >
                  Request a spec check
                </Link>
                <a
                  href={`sms:${site.phone.replace(/[^\d+]/g, "")}`}
                  className="rounded-full border border-brand-600 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
                >
                  Text {site.phone} for stock
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {BADGES.map((badge) => (
                  <div key={badge.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-slate-900">{badge.title}</h3>
                    <p className="mt-2 text-xs text-slate-600">{badge.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[360px] rounded-3xl bg-gradient-to-br from-brand-200 via-brand-400 to-brand-600 p-8 text-white shadow-xl">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/80">Warehouse ready</p>
                  <h2 className="mt-3 text-2xl font-semibold">Image goes here</h2>
                </div>
                <div className="space-y-3 text-sm text-white/90">
                  <p>(place info here about your flagship offering)</p>
                  <p>(place info here about process or differentiator)</p>
                  <p>(place info here about delivery or turnaround)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/80">
        <div className="container px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Why reconditioned batteries make sense</h2>
              <ul className="space-y-3 text-slate-600">
                <li>• 40–60% savings versus new without sacrificing uptime expectations.</li>
                <li>• Documented load-test reports and grade transparency.</li>
                <li>• Trade-in options for tired cores to reduce your project cost.</li>
                <li>• Chargers and accessories available for a turnkey install.</li>
              </ul>
              <p className="text-sm text-slate-500">
                Need something special like opportunity charging or cold-storage spec? Let us know and we’ll
                source it. (place info here about specialized capabilities)
              </p>
            </div>
            <div className="grid gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">Customer review (place info here)</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    “Image goes here” — (place info here for testimony or metrics). Link to Marketplace for
                    verification.
                  </p>
                  <Link href="/marketplace" className="mt-3 inline-flex text-sm font-semibold text-brand-700 hover:underline">
                    Verify on Marketplace
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Trust and verification</h2>
            <p className="text-slate-600">
              We publish live listings on Facebook Marketplace and eBay so you can confirm pricing, photos,
              and reviews. Use the links below to double-check you are talking with the real Battery Fleet Solutions team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={site.social.facebookMarketplace || "#"}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-600 hover:text-brand-700"
              >
                Facebook Marketplace
              </Link>
              <Link
                href={site.social.ebay || "#"}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-600 hover:text-brand-700"
              >
                eBay Storefront
              </Link>
            </div>
            <p className="text-sm text-slate-500">
              Tip: Ask for a quick video walk-through of the battery you’re considering. We’ll text it same-day.
            </p>
          </div>
          <div className="relative h-[320px] rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 text-slate-500">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
              Image goes here
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Ready for a spec check?</h2>
              <p className="text-slate-300">
                Send your forklift model/serial, required voltage/Ah, or simply text photos of the data plate.
                We’ll confirm fitment, share pricing, and outline delivery or pickup options.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a
                href={`sms:${site.phone.replace(/[^\d+]/g, "")}`}
                className="rounded-full bg-white px-6 py-3 text-center text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Text {site.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/60 px-6 py-3 text-center text-white transition hover:bg-white/10"
              >
                Request a freight quote
              </Link>
              <Link
                href="/marketplace"
                className="rounded-full border border-white/60 px-6 py-3 text-center text-white transition hover:bg-white/10"
              >
                Browse Marketplace listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 py-20">
        <FAQ items={[...HOME_FAQ, ...DEFAULT_FAQ]} />
      </div>
    </>
  );
}
