"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item>,
) {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...rest}
    />
  );
}

export function AccordionTrigger(
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger>,
) {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
          "[&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...rest}
      >
        {children}
        <svg
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent(
  props: React.ComponentProps<typeof AccordionPrimitive.Content>,
) {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm data-[state=open]:accordion-down data-[state=closed]:accordion-up",
        className,
      )}
      {...rest}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  );
}
