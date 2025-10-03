import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Privacy Policy | Battery Fleet Solutions",
  description: "Understand how Battery Fleet Solutions handles your information and communications.",
};

const PRIVACY_FAQ = [
  {
    q: "Do you sell my data?",
    a: "No. We use contact details only to respond to inquiries and fulfill orders. (place info here)",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="We respect your inbox and protect the information you share with us."
      />

      <section className="container px-4 py-16 space-y-6 text-sm text-slate-600">
        <p>(place info here about data collection, analytics, and communications.)</p>
        <p>(place info here about third-party tools like Resend, Sentry, or analytics.)</p>
        <p>(place info here about opting out and contacting support.)</p>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...PRIVACY_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
