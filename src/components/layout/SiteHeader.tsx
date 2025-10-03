"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import React from "react";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/services/reconditioning", label: "Services" },
  { href: "/buyers/fitment", label: "Buyers" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="bg-slate-900 text-white text-sm">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-2 px-4">
          <div className="flex items-center gap-2 font-medium">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="underline-offset-4 hover:underline">
              Call/Text {site.phone}
            </a>
          </div>
          <span className="text-white/80">Hours: {site.hours}</span>
        </div>
      </div>
      <div className="container flex items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Battery Fleet Solutions
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 transition-colors",
                pathname === link.href ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`sms:${site.phone.replace(/[^\d+]/g, "")}`}
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 md:inline-flex"
          >
            Text for stock
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-semibold transition-colors",
                  pathname === link.href ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
