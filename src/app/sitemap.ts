import { MetadataRoute } from "next";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PORTFOLIO_DATA.personal.websiteUrl;
  const currentDate = new Date();

  // Static core routes
  const staticRoutes = [
    "",
    "/channels",
    "/about",
    "/projects",
    "/socials",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog post routes
  const blogRoutes = PORTFOLIO_DATA.blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
