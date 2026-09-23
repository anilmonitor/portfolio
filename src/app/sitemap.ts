import { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PORTFOLIO_DATA.personal.websiteUrl;
  const currentDate = new Date();

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/socials",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return staticRoutes;
}
