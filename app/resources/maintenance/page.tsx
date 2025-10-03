import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Battery Maintenance Guide | Battery Fleet Solutions",
  description: "Keep your reconditioned batteries running strong with watering, equalize, and charging best practices.",
};

const MAINTENANCE_FAQ = [
  {
    q: "How often should I equalize charge?",
    a: "Most fleets run weekly equalize cycles. We’ll advise based on your usage. (place info here)",
  },
];

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Maintenance Checklist"
        subtitle="Downloadable routines to keep batteries hydrated, balanced, and compliant." />

      <section className="container px-4 py-16 space-y-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Weekly tasks</h2>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>• Visual inspection for corrosion or cable issues</li>
              <li>• Watering schedule — add only after charge completes</li>
              <li>• Equalize charge (place info here)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Monthly tasks</h2>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>• Gravity checks and log sheet updates</li>
              <li>• Cable torque checks</li>
              <li>• Charger diagnostic review</li>
            </ul>
          </div>
        </div>
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
          Maintenance PDF download — Image goes here
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...MAINTENANCE_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
