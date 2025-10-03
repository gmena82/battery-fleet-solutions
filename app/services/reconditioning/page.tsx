import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Battery Reconditioning Service | Battery Fleet Solutions",
  description:
    "See how Battery Fleet Solutions reconditions industrial batteries with load-testing, new components, and cosmetic restoration.",
};

const RECON_FAQ = [
  {
    q: "What does your reconditioning package include?",
    a: "Full wash, neutralize, cable and terminal replacement as needed, equalize charge, and load test with documentation.",
  },
  {
    q: "Can you refresh batteries we already own?",
    a: "Yes — schedule a pickup or drop-off. We’ll inspect, quote, and return with a runtime guarantee.",
  },
];

export default function ReconditioningPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Industrial Battery Reconditioning"
        subtitle="Extend the life of your fleet with a reconditioning process built for high-utilization operations."
      >
        <p className="text-sm text-slate-500">(place info here about certifications, technicians, or facility size)</p>
      </PageHero>

      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Step-by-step process</h2>
            <ol className="space-y-4 text-slate-600">
              <li>1. Receive and inspect incoming battery, documenting serials and customer concerns.</li>
              <li>2. Neutralize, wash, and dry trays; replace corroded hardware (place info here).</li>
              <li>3. Perform equalize charge and gravity checks; top off electrolyte as needed.</li>
              <li>4. Run a full load test and log results against OEM benchmarks.</li>
              <li>5. Cosmetic restore with paint touch-up and labeling before delivery.</li>
            </ol>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Before/after gallery — Image goes here
            </div>
            <p className="text-sm text-slate-500">
              Add your own before/after photos or videos here. (place info here about camera-ready examples)
            </p>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Runtime improvement snapshot</h3>
              <p className="mt-2 text-sm text-slate-600">
                Before: (place info here) minutes @ 80% depth. After reconditioning: (place info here) minutes with warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...RECON_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
