import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Warranty Details | Battery Fleet Solutions",
  description: "Explore warranty terms, coverage, and what’s required for reconditioned forklift batteries.",
};

const WARRANTY_FAQ = [
  {
    q: "How do I submit a warranty claim?",
    a: "Text or email your serial, runtime notes, and charger logs. We’ll respond with next steps within one business day.",
  },
  {
    q: "What maintenance is required?",
    a: "Keep water levels correct, follow equalize schedules, and log opportunity charging. (place info here)",
  },
];

export default function WarrantyPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyers"
        title="Warranty Overview"
        subtitle="Transparent coverage so you know exactly what’s included with each condition grade." />

      <section className="container px-4 py-16 space-y-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { title: "Grade A", term: "(place info here)", details: "Highest runtime guarantee." },
            { title: "Grade B", term: "(place info here)", details: "Balanced value and coverage." },
            { title: "Grade C", term: "(place info here)", details: "Starter warranty for backup units." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-lg font-semibold text-brand-700">{item.term}</p>
              <p className="mt-2 text-sm text-slate-600">{item.details}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">Coverage highlights</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>• Capacity minimums measured on calibrated load test</li>
            <li>• Pro-rated credit or repair depending on grade</li>
            <li>• Exclusions: abuse, improper watering, charger mismatch (place info here)</li>
          </ul>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...WARRANTY_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
