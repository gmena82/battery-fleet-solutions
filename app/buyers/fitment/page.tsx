import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Forklift Battery Fitment Guide | Battery Fleet Solutions",
  description: "Use our sizing checklist to confirm voltage, amp-hour, and tray dimensions for your forklift.",
};

const FITMENT_FAQ = [
  {
    q: "What if I can’t find the data plate?",
    a: "Snap photos of the battery compartment and charger. We can usually identify specs from those details.",
  },
  {
    q: "Do you keep spec sheets on file?",
    a: "Yes — we maintain a database by make/model. (place info here)",
  },
];

export default function FitmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyers"
        title="Fitment & Sizing Checklist"
        subtitle="Confirm the exact battery your forklift needs so we can match availability and warranty." />

      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Sizing wizard</h2>
            <ol className="space-y-3 text-slate-600">
              <li>1. Forklift make/model + serial number</li>
              <li>2. Voltage & amp-hour rating from current battery</li>
              <li>3. Tray dimensions (length × width × height)</li>
              <li>4. Cable position & connector type</li>
              <li>5. Charger specs or desired charge profile</li>
            </ol>
            <p className="text-sm text-slate-500">
              Paste this checklist into your text or email. (place info here about downloadable PDF)
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-12 text-center text-slate-500">
              Interactive wizard placeholder — Image goes here
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Need help measuring?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Schedule a FaceTime/Teams walkthrough and we’ll guide your tech onsite. (place info here)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...FITMENT_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
