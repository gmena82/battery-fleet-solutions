import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Installation & Delivery | Battery Fleet Solutions",
  description: "Battery Fleet Solutions delivers and installs forklift batteries up to 200 miles from Kansas City.",
};

const INSTALL_FAQ = [
  {
    q: "How far will you deliver?",
    a: "We handle installs within 200 miles. For longer hauls we coordinate LTL freight and provide prep instructions.",
  },
  {
    q: "Do you remove the old battery?",
    a: "Yes — we can haul away cores for recycling credit or apply trade-in value when applicable.",
  },
];

export default function InstallationDeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Installation & Delivery"
        subtitle="From onsite swaps to long-distance freight, we make sure your new battery is powered up and ready."
      >
        <p className="text-sm text-slate-500">Delivery radius: up to 200 miles from Kansas City (place info here for surcharges)</p>
      </PageHero>

      <section className="container px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Delivery packages</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Local install", detail: "Includes onsite removal, placement, and initial charge." },
                { title: "Regional freight", detail: "Crating, BOL prep, and carrier coordination to your dock." },
                { title: "After-hours support", detail: "(place info here about rush or weekend service)" },
                { title: "Site readiness", detail: "Checklist for rigging, safety, and charger hookups." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Delivery map — Image goes here
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Pricing bands</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• 0–50 miles: (place info here)</li>
              <li>• 51–120 miles: (place info here)</li>
              <li>• 121–200 miles: (place info here)</li>
              <li>• Beyond 200 miles: LTL freight with quote</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...INSTALL_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
