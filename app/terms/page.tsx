import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Terms & Conditions | Battery Fleet Solutions",
  description: "Review purchasing, warranty, and site usage terms for Battery Fleet Solutions.",
};

const TERMS_FAQ = [
  {
    q: "Do you charge restocking fees?",
    a: "(place info here about return policy)",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="The quick summary of purchasing, warranty, and site usage policies."
      />

      <section className="container px-4 py-16 space-y-6 text-sm text-slate-600">
        <p>(place info here about payment terms and late fees.)</p>
        <p>(place info here about liability, delivery acceptance, and freight claims.)</p>
        <p>(place info here about governing law and contact info.)</p>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...TERMS_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
