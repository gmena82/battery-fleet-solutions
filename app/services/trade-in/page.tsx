import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Trade-In & Core Buyback | Battery Fleet Solutions",
  description: "Turn aging forklift batteries into credit toward reconditioned replacements.",
};

const TRADE_FAQ = [
  {
    q: "How is trade-in value calculated?",
    a: "We consider age, plate condition, and current runtime. Send photos or let us inspect onsite for an exact number.",
  },
  {
    q: "Can you pick up scrap cores?",
    a: "Yes — we offer recycling pickup with manifests for your records.",
  },
];

export default function TradeInPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Trade-In & Core Buybacks"
        subtitle="Offset your upgrade by trading in tired batteries. We’ll evaluate, credit, and haul away in one visit."
      >
        <p className="text-sm text-slate-500">(place info here about current market value or recycling partners)</p>
      </PageHero>

      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">How it works</h2>
            <ol className="space-y-3 text-slate-600">
              <li>1. Send model, serial, and condition photos.</li>
              <li>2. We provide a trade estimate and logistics plan.</li>
              <li>3. During delivery we remove the old unit and apply credit instantly.</li>
            </ol>
            <p className="text-sm text-slate-500">Need a standalone buyback? (place info here)</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Trade-in documentation — Image goes here
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">What we need from you</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Photos of each side and data plate</li>
                <li>• Recent runtime feedback from operators</li>
                <li>• Pickup location and dock details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...TRADE_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
