import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Financing & Payment Options | Battery Fleet Solutions",
  description: "Review payment methods, purchase orders, and financing options for forklift batteries.",
};

const FINANCING_FAQ = [
  {
    q: "Do you accept purchase orders?",
    a: "Yes — approved accounts can run net terms. (place info here about application)",
  },
  {
    q: "Is financing available for small fleets?",
    a: "We partner with third-party lenders and offer eBay credit options. (place info here)",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyers"
        title="Financing & Payments"
        subtitle="Choose the payment path that fits your purchasing process." />

      <section className="container px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Accepted methods</h2>
            <ul className="space-y-2 text-slate-600">
              <li>• ACH / wire</li>
              <li>• Credit card (place info here for surcharge policy)</li>
              <li>• Financing via eBay checkout</li>
              <li>• Third-party lease-to-own partners (place info here)</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Net terms</h3>
              <p className="mt-2 text-sm text-slate-600">
                Submit trade references and we’ll review within 1–2 business days. (place info here about limits)
              </p>
            </div>
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-10 text-center text-slate-500">
              Financing brochure — Image goes here
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...FINANCING_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
