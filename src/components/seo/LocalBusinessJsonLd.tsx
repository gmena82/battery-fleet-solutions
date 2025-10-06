import React from "react";
import { JsonLd } from "./JsonLd";
import { site } from "@/config/site";

export function LocalBusinessJsonLd() {
  const openingHours = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ];

  const baseUrl = site.url.startsWith("http") ? site.url : `https://${site.url}`;

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    image: baseUrl + site.images.og,
    url: baseUrl,
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
    sameAs: [
      site.social.facebookMarketplace.includes("place info here")
        ? null
        : site.social.facebookMarketplace,
      site.social.ebay.includes("place info here") ? null : site.social.ebay,
    ].filter(Boolean),
  };

  if (site.coordinates.lat && site.coordinates.lng) {
    base.areaServed = {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.coordinates.lat,
        longitude: site.coordinates.lng,
      },
      geoRadius: 321_868,
    };
  }

  return <JsonLd data={base} />;
}
