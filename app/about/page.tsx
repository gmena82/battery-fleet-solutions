import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/config/site";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "About Battery Fleet Solutions",
  description: "Meet the team keeping Kansas City fleets powered with reconditioned batteries and fast support.",
};

const ABOUT_FAQ = [
  {
    q: "Can we tour your facility?",
    a: "Absolutely — schedule a visit to see testing in action. (place info here)",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Battery Fleet Solutions"
        subtitle="We’re a Kansas City-based team focused on keeping material handling fleets powered without guesswork."
      />

      <section className="container px-4 py-16 space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Our story</h2>
            <p className="text-slate-600">
              (place info here about founding, years in business, and experience). We saw fleets struggling with battery
              downtime and created a program that combines rigorous testing, transparent grading, and fast service.
            </p>
            <p className="text-slate-600">
              Today we serve warehouses, manufacturers, and rental houses across the Midwest with onsite installs, freight
              shipments, and lifetime support.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Team photo — Image goes here
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Facility</h3>
              <p className="mt-2 text-sm text-slate-600">
                {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p className="mt-2 text-sm text-slate-600">Square footage: (place info here)</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Values</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>• Transparency with runtime data</li>
            <li>• Responsiveness via text, phone, and email</li>
            <li>• Safety-first processes in the shop and onsite</li>
            <li>• Sustainability through reuse and recycling</li>
          </ul>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...ABOUT_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
