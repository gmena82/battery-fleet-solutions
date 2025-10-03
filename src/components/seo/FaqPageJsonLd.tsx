"use client";

import React from "react";

import { JsonLd } from "./JsonLd";

export type FAQItem = {
  q: string;
  a: string;
};

type FaqPageJsonLdProps = {
  items: FAQItem[];
};

export function FaqPageJsonLd({ items }: FaqPageJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <JsonLd data={data} />;
}
