import Link from "next/link";

import { site } from "@/config/site";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Reconditioning", href: "/services/reconditioning" },
      { label: "Testing", href: "/services/testing" },
      { label: "Installation & Delivery", href: "/services/installation-delivery" },
      { label: "Trade-In", href: "/services/trade-in" },
    ],
  },
  {
    heading: "Buyers",
    links: [
      { label: "Fitment", href: "/buyers/fitment" },
      { label: "Condition Grades", href: "/buyers/condition-grades" },
      { label: "Warranty", href: "/buyers/warranty" },
      { label: "Shipping", href: "/buyers/shipping" },
      { label: "Financing", href: "/buyers/financing" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/80 py-12 backdrop-blur">
      <div className="container px-4">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Battery Fleet Solutions</h2>
            <p className="text-sm text-slate-600">
              Load-tested, warrantied forklift batteries with delivery up to 200 miles of Kansas City.
              Request a spec check, freight quote, or onsite installation today.
            </p>
            <div className="space-y-1 text-sm text-slate-600">
              <p>
                <strong className="font-semibold text-slate-900">Address:</strong> {site.address.street}, {site.address.city},
                {" "}
                {site.address.region} {site.address.postalCode}
              </p>
              <p>
                <strong className="font-semibold text-slate-900">Hours:</strong> {site.hours}
              </p>
              <p>
                <strong className="font-semibold text-slate-900">Call/Text:</strong>{" "}
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="underline-offset-4 hover:underline">
                  {site.phone}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-brand-700">
              <a href={site.social.facebookMarketplace || "#"} className="underline-offset-4 hover:underline">
                Facebook Marketplace
              </a>
              <a href={site.social.ebay || "#"} className="underline-offset-4 hover:underline">
                eBay Store
              </a>
            </div>
          </div>
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{group.heading}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-brand-700">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Battery Fleet Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy (place info here)</Link>
            <Link href="/terms">Terms (place info here)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
