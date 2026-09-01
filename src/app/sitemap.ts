import type { MetadataRoute } from "next";
import { site } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/ecommerce-development",
    "/services/mobile-app-development",
    "/services/ui-ux-design",
    "/services/digital-marketing",
    "/work",
    "/careers",
    "/contact",
    "/request-quote",
  ];
  return paths.map((p) => ({
    url: `${site.url}${p || "/"}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
