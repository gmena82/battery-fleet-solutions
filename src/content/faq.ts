import type { FAQItem } from "@/components/seo/FaqPageJsonLd";
import { site } from "@/config/site";

export const DEFAULT_FAQ: FAQItem[] = [
  {
    q: "How do I know the right battery for my forklift?",
    a: "Share your forklift’s model/serial and we’ll confirm the correct voltage, amp-hour, and tray size before you buy.",
  },
  {
    q: "What’s included with a reconditioned battery?",
    a: "A load-test report, cleaning and paint touch-up, terminals, and a condition grade (A/B/C) with warranty terms explained upfront.",
  },
  {
    q: "Do you deliver?",
    a: "Yes — delivery is available up to 200 miles of Kansas City. We can also prep and ship via LTL freight beyond that.",
  },
  {
    q: "What payment options do you accept?",
    a: "Card, ACH, wire. Purchase orders and net terms are available for approved accounts.",
  },
  {
    q: "What if you don’t have my battery in stock today?",
    a: `Stock changes daily — contact us and we’ll source it quickly through our network. Call/Text ${site.phone}.`,
  },
];
