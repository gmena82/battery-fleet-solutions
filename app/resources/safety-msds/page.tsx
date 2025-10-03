import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Safety & SDS Library | Battery Fleet Solutions",
  description: "Download safety data sheets and review handling guidelines for lead-acid forklift batteries.",
};

const SAFETY_FAQ = [
  {
    q: "Do you provide onsite safety training?",
    a: "Yes — schedule a toolbox talk covering PPE, watering, and emergency response. (place info here)",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Safety & SDS"
        subtitle="Ensure your team is covered with proper PPE, spill response, and documentation." />

      <section className="container px-4 py-16 space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Download SDS</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><a href="(place info here)" className="text-brand-700 hover:underline">Flooded lead-acid SDS</a></li>
            <li><a href="(place info here)" className="text-brand-700 hover:underline">Electrolyte neutralizer SDS</a></li>
            <li><a href="(place info here)" className="text-brand-700 hover:underline">Spill kit contents</a></li>
          </ul>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Handling basics</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>• Wear face shield, gloves, apron</li>
              <li>• Use non-sparking tools</li>
              <li>• Neutralize spills with baking soda (place info here)</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-10 text-center text-slate-500">
            Safety training photo — Image goes here
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...SAFETY_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
