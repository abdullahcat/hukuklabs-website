import type { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/blog"

export const dynamic = "force-static"

const BASE_URL = "https://hukuklabs.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllSlugs()

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/lawapi", priority: 0.9 },
    { path: "/lens", priority: 0.9 },
    { path: "/comply", priority: 0.9 },
    { path: "/enterprise", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/help", priority: 0.6 },
    { path: "/security", priority: 0.6 },
    { path: "/hakkimizda", priority: 0.5 },
    { path: "/yasal", priority: 0.4 },
    { path: "/gizlilik-politikasi", priority: 0.3 },
    { path: "/cerez-politikasi", priority: 0.3 },
    { path: "/kullanim-kosullari", priority: 0.3 },
    { path: "/mesafeli-satis-sozlesmesi", priority: 0.3 },
    { path: "/on-bilgilendirme-formu", priority: 0.3 },
    { path: "/teslimat-ve-iade", priority: 0.3 },
    { path: "/ziyaretci-aydinlatma-metni", priority: 0.3 },
    { path: "/demo-aydinlatma-metni", priority: 0.3 },
    { path: "/uye-aydinlatma-metni", priority: 0.3 },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.priority >= 0.8 ? "weekly" : "monthly",
    priority: page.priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
