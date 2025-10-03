/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://batteryfleetsolutions.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};

module.exports = config;
