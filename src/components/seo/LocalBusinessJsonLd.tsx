"use client";

import React from "react";

import { site } from "@/config/site";

import { JsonLd } from "./JsonLd";

export function LocalBusinessJsonLd() {
  const openingHours = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ];

  const image = site.images.og ? site.url + site.images.og : undefined;

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: openingHours,
    sameAs: [site.social.facebookMarketplace, site.social.ebay].filter(Boolean),
  };

  if (image) {
    base.image = image;
  }

  if (site.coordinates.lat && site.coordinates.lng) {
    base.areaServed = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.coordinates.lat,
        longitude: site.coordinates.lng,
      },
      geoRadius: 321868,
    };
  }

  return <JsonLd data={base} />;
}
