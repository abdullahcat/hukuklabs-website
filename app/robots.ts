import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/status", "/gizlilik", "/kvkk", "/kosullar"],
      },
    ],
    sitemap: "https://hukuklabs.com/sitemap.xml",
    host: "https://hukuklabs.com",
  }
}
