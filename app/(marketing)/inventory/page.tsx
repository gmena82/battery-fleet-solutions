import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/config/site";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Inventory | Battery Fleet Solutions",
  description:
    "Current forklift battery availability changes daily — contact Battery Fleet Solutions to match your truck and arrange delivery.",
};

const INVENTORY_FAQ = [
  {
    q: "Do you have 24V / 36V / 48V / 80V in stock right now?",
    a: "Inventory turns quickly. Send your voltage/Ah and timeline — if it’s not on the floor today, we can acquire it quickly and provide ETAs.",
  },
  {
    q: "Can you bundle a charger?",
    a: "Yes. We keep matched chargers on hand and can source smart/equalize chargers on request.",
  },
];

export default function InventoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Inventory"
        title="Current Inventory Changes Daily"
        subtitle="Tell us your forklift model (or required voltage/Ah), and we’ll match today’s availability. If it’s not ready on the floor, we’ll source it quickly through our supplier network."
      >
        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href={`sms:${site.phone.replace(/[^\d+]/g, "")}`}
            className="rounded-full bg-brand-600 px-5 py-2 text-white shadow-sm transition hover:bg-brand-700"
          >
            Text for current stock
          </a>
          <a
            href={`mailto:(place info here)`}
            className="rounded-full border border-slate-200 px-5 py-2 text-slate-700 transition hover:border-brand-600 hover:text-brand-700"
          >
            Request a spec check
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-slate-200 px-5 py-2 text-slate-700 transition hover:border-brand-600 hover:text-brand-700"
          >
            Get a freight quote
          </Link>
        </div>
      </PageHero>

      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">What we typically carry</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• 24V • 36V • 48V • 80V industrial batteries</li>
              <li>• Opportunity and fast charge compatible options (place info here)</li>
              <li>• Smart, multi-voltage, and equalize chargers</li>
              <li>• Rental and backup packs for peak season (place info here)</li>
            </ul>
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-10 text-center text-slate-500">
              Image goes here
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">How we grade condition</h2>
            <p className="text-slate-600">
              Every battery is cleaned, load-tested, and graded before it leaves the shop. You’ll receive a
              discharge report outlining expected runtime and warranty coverage for the grade chosen.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Grade A", "Grade B", "Grade C"].map((grade) => (
                <div key={grade} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{grade}</h3>
                  <p className="mt-2 text-xs text-slate-600">(place info here about expected runtime)</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-slate-900">How to buy</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• Direct invoice with delivery or pickup</li>
              <li>• eBay for credit card checkout and financing options</li>
              <li>• Facebook Marketplace with verified messaging instructions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...INVENTORY_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
