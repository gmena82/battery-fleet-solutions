import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/config/site";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Contact Battery Fleet Solutions",
  description: "Call, text, or message Battery Fleet Solutions for forklift battery availability and support.",
};

const CONTACT_FAQ = [
  {
    q: "What’s the best way to send specs?",
    a: "Text photos of the data plate or email your forklift model. We’ll confirm fitment fast.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s Power Your Fleet"
        subtitle="Call, text, or message us with your forklift details and timeline. We respond quickly during business hours."
      />

      <section className="container px-4 py-16 space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Reach us</h2>
            <div className="space-y-3 text-slate-600">
              <p>
                <strong className="text-slate-900">Call/Text:</strong>{" "}
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="text-brand-700 hover:underline">
                  {site.phone}
                </a>
              </p>
              <p>
                <strong className="text-slate-900">Email:</strong> <a href="mailto:(place info here)" className="text-brand-700 hover:underline">(place info here)</a>
              </p>
              <p>
                <strong className="text-slate-900">Hours:</strong> {site.hours}
              </p>
              <p>
                <strong className="text-slate-900">Address:</strong> {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Quick form</h2>
            <p className="mt-2 text-sm text-slate-600">Form goes here. Integrate with React Hook Form + Zod when ready.</p>
            <div className="mt-6 h-48 rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 text-center text-slate-500">
              Form placeholder — Image goes here
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">Service radius</h2>
          <p className="mt-2 text-slate-600">Delivery available up to 200 miles. Beyond that we ship via freight. (place info here)</p>
          <div className="mt-6 h-64 rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 text-center text-slate-500">
            Map placeholder — Image goes here
          </div>
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...CONTACT_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
