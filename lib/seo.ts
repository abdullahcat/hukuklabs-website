import type { Metadata } from "next"
import { COMPANY } from "@/lib/company"

export const SITE_URL = "https://hukuklabs.com"

export const SITE_NAME = "HukukLabs"

export const DEFAULT_TITLE =
  "HukukLabs | Türk Hukuku İçin Doğru Sonuç Veren Yapay Zekâ"

export const DEFAULT_DESCRIPTION =
  "HukukLabs, yapay zekâ modellerini Türk hukukuna göre eğitir ve her işe doğru aracı konumlar. Dilekçe, sözleşme, içtihat araştırması ve UYAP takibi için kaynağına bağlı, doğrulanabilir sonuçlar."

export const DEFAULT_KEYWORDS = [
  "hukuki yapay zeka",
  "yapay zekâ avukat",
  "legal AI Türkiye",
  "avukat yazılımı",
  "hukuk bürosu yazılımı",
  "hukuk teknolojisi",
  "belge üretimi avukat",
  "mevzuat araştırması",
  "içtihat arama",
  "UYAP entegrasyonu",
  "KVKK uyumluluk",
  "legal tech Türkiye",
  "HukukLabs",
  "hukuk otomasyonu",
]

export const OG_IMAGE = {
  url: "/images/og-cover.png",
  width: 1200,
  height: 630,
  alt: "HukukLabs — Türk hukukuna göre eğitilmiş yapay zekâ",
}

/** Square brand mark for Google Knowledge Panel / Organization schema (not the wordmark). */
export const ORG_LOGO = {
  url: "/hukuklabs.png",
  width: 2000,
  height: 2000,
}

export function pageUrl(path: string = "/"): string {
  if (!path || path === "/") return SITE_URL
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

type CreateMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  /** Bypass "%s | HukukLabs" template (homepage) */
  absoluteTitle?: boolean
  ogTitle?: string
  ogDescription?: string
  type?: "website" | "article"
  noIndex?: boolean
  publishedTime?: string
  authors?: string[]
}

/** Sayfa başına canonical + Open Graph + Twitter (layout'taki homepage canonical hatasını önler). */
export function createMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
  ogTitle,
  ogDescription,
  type = "website",
  noIndex = false,
  publishedTime,
  authors,
}: CreateMetadataOptions): Metadata {
  const url = pageUrl(path)
  const socialTitle = ogTitle ?? (absoluteTitle ? title : `${title} | ${SITE_NAME}`)
  const socialDescription = ogDescription ?? description

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type,
      images: [OG_IMAGE],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [OG_IMAGE.url],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: { index: false, follow: true },
          },
        }
      : {}),
  }
}

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${ORG_LOGO.url}`,
      width: ORG_LOGO.width,
      height: ORG_LOGO.height,
    },
    image: `${SITE_URL}${OG_IMAGE.url}`,
    description: DEFAULT_DESCRIPTION,
    email: COMPANY.email,
    taxID: COMPANY.taxId,
    foundingDate: "2025-06-12",
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kültür Mah. 3837 Sk. Abdi Çavuş B Blok No: 3 İç Kapı No: 6",
      addressLocality: "Kepez",
      addressRegion: "Antalya",
      addressCountry: "TR",
    },
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    parentOrganization: {
      "@type": "Organization",
      name: COMPANY.shortName,
      legalName: COMPANY.legalName,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: COMPANY.email,
      availableLanguage: ["Turkish"],
    },
    knowsAbout: [
      "Hukuk teknolojisi",
      "Yapay zekâ",
      "Türk mevzuatı",
      "KVKK uyumluluğu",
      "UYAP",
    ],
  }
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "tr-TR",
  }
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication",
    name: "HukukLabs Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    provider: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "tr-TR",
  }
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  author,
}: {
  title: string
  description: string
  path: string
  datePublished: string
  author: string
}) {
  const url = pageUrl(path)
  return {
    "@type": "Article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${ORG_LOGO.url}`,
        width: ORG_LOGO.width,
        height: ORG_LOGO.height,
      },
    },
    image: `${SITE_URL}${OG_IMAGE.url}`,
    inLanguage: "tr-TR",
  }
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
