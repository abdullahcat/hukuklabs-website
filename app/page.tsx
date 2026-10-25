import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { PlatformShowcase } from "@/components/platform-showcase"
import { ArticlesSlider } from "@/components/articles-slider"
import { Footer } from "@/components/footer"
import { getAllPosts, formatDate } from "@/lib/blog"
import {
  createMetadata,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  organizationJsonLd,
  softwareApplicationJsonLd,
  websiteJsonLd,
} from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
  keywords: DEFAULT_KEYWORDS,
})

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd(),
    websiteJsonLd(),
    softwareApplicationJsonLd(),
  ],
}

export default function Page() {
  const posts = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: formatDate(p.date),
  }))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <PlatformShowcase />
        <ArticlesSlider posts={posts} />
      </main>
      <Footer />
    </div>
  )
}
