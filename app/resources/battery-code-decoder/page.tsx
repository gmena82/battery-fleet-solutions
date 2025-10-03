import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Battery Code Decoder | Battery Fleet Solutions",
  description: "Decode manufacturer battery codes like 18-125-15 and understand voltage, plates, and dimensions.",
};

const DECODER_FAQ = [
  {
    q: "Can you decode other manufacturer formats?",
    a: "Yes — send us the label or photo. We’ll translate it and confirm fitment.",
  },
];

export default function BatteryCodeDecoderPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Battery Code Decoder"
        subtitle="Understand what each number and letter means so you can cross-reference replacements."
      />

      <section className="container px-4 py-16 space-y-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Example: 18-125-15</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>• 18 = 36V (number of cells ÷ 2)</li>
            <li>• 125 = Plate rating (place info here)</li>
            <li>• 15 = Plates per cell (determines amp-hour)</li>
          </ul>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Glossary</h3>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>• AH = Amp-hour capacity</li>
              <li>• Specific gravity = Electrolyte density (place info here)</li>
              <li>• Connector type = SB175, SB350, etc.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-10 text-center text-slate-500">
            Label diagram — Image goes here
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...DECODER_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
