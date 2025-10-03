import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Shipping & Freight Guide | Battery Fleet Solutions",
  description: "Learn how forklift batteries ship, what equipment you need at delivery, and how we prep freight.",
};

const SHIPPING_FAQ = [
  {
    q: "Can you arrange liftgate service?",
    a: "Yes — let us know at booking so we can schedule the right carrier and equipment.",
  },
  {
    q: "How do you secure the load?",
    a: "Batteries ship on steel pallets with banding and shrink. Hazmat docs provided when required.",
  },
];

export default function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyers"
        title="Shipping & Freight"
        subtitle="From local delivery to LTL freight, here’s how to prep your dock and keep everything moving smoothly." />

      <section className="container px-4 py-16 space-y-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Freight prep checklist</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• Confirm dock height or need for liftgate</li>
              <li>• Provide onsite contact with phone/email</li>
              <li>• Verify power disconnect and rigging plan</li>
              <li>• Arrange disposal area for crating materials</li>
            </ul>
            <p className="text-sm text-slate-500">Downloadable checklist coming soon. (place info here)</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Freight photo — Image goes here
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Transit timelines</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• Kansas City metro: 1–2 business days</li>
              <li>• Regional (within 200 miles): 2–4 business days</li>
              <li>• National LTL: 4–7 business days (place info here)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...SHIPPING_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
