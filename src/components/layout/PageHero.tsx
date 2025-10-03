import React from "react";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({ title, subtitle, eyebrow, children, className }: PageHeroProps) {
  return (
    <section className={cn("bg-white", className)}>
      <div className="container px-4 py-16">
        <div className="max-w-3xl space-y-6">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase text-brand-700">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">{title}</h1>
          {subtitle ? <p className="text-lg text-slate-600">{subtitle}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
