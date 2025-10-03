import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Battery Load Testing | Battery Fleet Solutions",
  description: "Understand our load-testing standards and see sample reporting for industrial batteries.",
};

const TESTING_FAQ = [
  {
    q: "Can you provide test data for my compliance records?",
    a: "Yes. Every load test includes a PDF report with voltage curves, AH output, and notes for your files.",
  },
  {
    q: "Do you test chargers too?",
    a: "We can bench test chargers and provide basic diagnostics. (place info here about capabilities)",
  },
];

export default function TestingPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Load Testing & Reporting"
        subtitle="We document real-world performance before any battery ships, so you know the runtime you’re purchasing."
      >
        <a
          href="(place info here for sample report URL)"
          className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-600 hover:text-brand-700"
        >
          Download sample report
        </a>
      </PageHero>

      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Testing standards</h2>
            <p className="text-slate-600">
              Batteries are tested on calibrated discharge equipment following the manufacturer’s C6/C8 ratings.
              We record ambient temperature, gravity readings, and runtime to 80% depth of discharge.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Equipment calibrated quarterly (place info here)</li>
              <li>• Technician signatures on each report</li>
              <li>• Photos of data plate and test setup included</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Load-test graph — Image goes here
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">What’s in the PDF?</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Voltage vs. time graph with cutoff threshold</li>
                <li>• Amp-hour delivered vs. rated capacity</li>
                <li>• Technician notes and warranty grade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...TESTING_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
