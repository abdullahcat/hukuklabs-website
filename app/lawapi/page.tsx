import { Metadata } from "next"
import { LawApiHeader } from "./components/lawapi-header"
import { LawApiHero } from "./components/lawapi-hero"
import { CodeSnippet } from "./components/code-snippet"
import { ValueProps } from "./components/value-props"
import { LawApiEndpoints } from "./components/lawapi-endpoints"
import { LawApiUseCases } from "./components/lawapi-use-cases"
import { LawApiPricing } from "./components/lawapi-pricing"
import { LawApiFaq } from "./components/lawapi-faq"
import { LawApiCta } from "./components/lawapi-cta"
import { LawApiFooter } from "./components/lawapi-footer"
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo"

const title = "LawAPI — Türk Hukuku için REST API"
const description =
  "Türk mevzuatı ve Yargıtay içtihatlarına programatik erişim sağlayan REST API. Mevzuat arama, içtihat sorgulama ve hukuki analiz."

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/lawapi",
  keywords: [
    "hukuk API",
    "mevzuat API",
    "içtihat API",
    "Yargıtay API",
    "LawAPI",
    "legal API Türkiye",
  ],
})

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd([
      { name: "Ana Sayfa", path: "/" },
      { name: "LawAPI", path: "/lawapi" },
    ]),
    {
      "@type": "SoftwareApplication",
      name: "HukukLabs LawAPI",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description,
      url: "https://hukuklabs.com/lawapi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    },
  ],
}

export default function LawApiPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LawApiHeader />
      <main>
        <LawApiHero />
        <CodeSnippet />
        <ValueProps />
        <LawApiEndpoints />
        <LawApiUseCases />
        <LawApiPricing />
        <LawApiFaq />
        <LawApiCta />
      </main>
      <LawApiFooter />
    </div>
  )
}
