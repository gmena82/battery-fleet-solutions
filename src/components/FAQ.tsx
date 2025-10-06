import React from "react";
import { FaqPageJsonLd, type FAQItem } from "@/components/seo/FaqPageJsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
  className = "",
}: FAQProps) {
  return (
    <section className={cn("mx-auto w-full max-w-3xl", className)}>
      {includeJsonLd ? <FaqPageJsonLd items={items} /> : null}
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">{title}</h2>
      <Accordion type="single" collapsible className="w-full space-y-3">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-lg border bg-card shadow-sm"
          >
            <AccordionTrigger className="p-4 text-left text-base font-medium hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-0 text-sm leading-6 text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
