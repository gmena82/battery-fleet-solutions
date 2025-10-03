import type { Metadata } from "next";
import React from "react";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/layout/PageHero";
import { DEFAULT_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: "Battery Condition Grades | Battery Fleet Solutions",
  description: "Understand our A/B/C grading system and what runtime to expect from each option.",
};

const GRADES_FAQ = [
  {
    q: "Do grades affect warranty length?",
    a: "Yes — Grade A carries the longest coverage, with Grade B and C scaled accordingly. (place info here)",
  },
];

export default function ConditionGradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Buyers"
        title="Condition Grades"
        subtitle="We keep grading transparent so you can plan runtime, warranty, and budget with confidence." />

      <section className="container px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {[
            { grade: "Grade A", description: "Low hours, high runtime, cosmetic refresh." },
            { grade: "Grade B", description: "Strong runtime with moderate cosmetic wear." },
            { grade: "Grade C", description: "Budget option for light or backup use." },
          ].map((item) => (
            <div key={item.grade} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{item.grade}</h2>
              <p className="mt-2 text-slate-600">{item.description} (place info here about discharge data)</p>
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 p-8 text-center text-slate-500">
                Photo placeholder — Image goes here
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container px-4 pb-20">
        <FAQ items={[...GRADES_FAQ, ...DEFAULT_FAQ]} />
      </section>
    </>
  );
}
