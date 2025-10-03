import React from "react";

import { cn } from "@/lib/utils";

import { FaqPageJsonLd, type FAQItem } from "./seo/FaqPageJsonLd";

type FAQProps = {
  title?: string;
  items: FAQItem[];
  includeJsonLd?: boolean;
  className?: string;
};

export function FAQ({
  title = "Frequently Asked Questions",
  items,
  includeJsonLd = true,
  className,
}: FAQProps) {
  return (
    <section className={cn("mx-auto w-full max-w-3xl space-y-6", className)}>
      {includeJsonLd ? <FaqPageJsonLd items={items} /> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
        {items.map((item, index) => (
          <details key={index} className="group p-6 transition-colors open:bg-white">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
              <span className="text-base font-medium text-slate-900">{item.q}</span>
              <span className="shrink-0 text-xl text-slate-400 transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
