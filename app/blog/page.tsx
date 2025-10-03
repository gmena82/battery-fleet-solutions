import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Battery Insights Blog | Battery Fleet Solutions",
  description: "Guides, maintenance tips, and case studies for forklift battery fleets.",
};

const BLOG_FAQ = [
  {
    q: "Can I request a topic?",
    a: "Yes — send us a note with the challenges you’re facing and we’ll add it to the editorial queue.",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Battery Insights"
        subtitle="Buying guides, maintenance tips, and real-world case studies. New posts coming soon." />

      <section className="container px-4 py-16 space-y-6">
        {[1, 2, 3].map((post) => (
          <article key={post} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase text-brand-600">Coming soon</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">(place info here for future post title)</h2>
            <p className="mt-2 text-slate-600">(place info here for summary)</p>
            <div className="mt-4 h-40 rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 text-center text-slate-500">
              Image goes here
            </div>
          </article>
        ))}
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...BLOG_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
