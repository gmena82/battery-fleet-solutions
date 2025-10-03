export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Battery Fleet Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://batteryfleetsolutions.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "+1-816-608-7222",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "Mon–Fri 9–5",
  address: {
    street: "1744 Iron St",
    city: "North Kansas City",
    region: "MO",
    postalCode: "64116",
    country: "US",
  },
  social: {
    facebookMarketplace: process.env.NEXT_PUBLIC_FACEBOOK_MARKETPLACE_URL ?? "",
    ebay: process.env.NEXT_PUBLIC_EBAY_URL ?? "",
  },
  coordinates: {
    lat: process.env.NEXT_PUBLIC_LAT ? Number(process.env.NEXT_PUBLIC_LAT) : undefined,
    lng: process.env.NEXT_PUBLIC_LNG ? Number(process.env.NEXT_PUBLIC_LNG) : undefined,
  },
  images: {
    og: "/og-default.svg",
  },
};
