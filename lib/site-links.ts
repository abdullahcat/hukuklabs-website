export const CONTACT_EMAIL = "info@hukuklabs.com"

export const EXTERNAL_LINKS = {
  docs: "https://docs.hukuklabs.com",
  app: "https://account.hukuklabs.com",
  studio: "https://studio.hukuklabs.com",
  status: "https://stats.uptimerobot.com/P4Vwsc3kEA",
} as const

export type NavLinkItem = {
  label: string
  href: string
  desc?: string
  external?: boolean
}

export const productLinks: NavLinkItem[] = [
  { label: "Studio", href: EXTERNAL_LINKS.studio, desc: "Hukuki çalışma alanı", external: true },
  { label: "LawAPI", href: "/lawapi", desc: "Mevzuat & içtihat API" },
  { label: "Comply", href: "/comply", desc: "KVKK & GDPR uyumluluk" },
  { label: "Lens", href: "/lens", desc: "UYAP Chrome uzantısı" },
]

export const resourceLinks: NavLinkItem[] = [
  { label: "Hakkımızda", href: "/hakkimizda", desc: "Şirket ve marka" },
  { label: "Yardım", href: "/help", desc: "Destek ve SSS" },
  { label: "Dokümanlar", href: EXTERNAL_LINKS.docs, desc: "Tüm ürünler için kılavuzlar", external: true },
  { label: "Blog", href: "/blog", desc: "Yazılar ve rehberler" },
]

export const mainNavLinks: NavLinkItem[] = [
  { label: "Kurumsal", href: "/enterprise" },
  { label: "Güvenlik", href: "/security" },
]

export const footerProductLinks: NavLinkItem[] = [
  { label: "Studio", href: EXTERNAL_LINKS.studio, external: true },
  { label: "LawAPI", href: "/lawapi" },
  { label: "Comply", href: "/comply" },
  { label: "Lens", href: "/lens" },
]

export const footerResourceLinks: NavLinkItem[] = resourceLinks

export const footerLegalLinks: NavLinkItem[] = [
  { label: "Tüm yasal metinler", href: "/yasal" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
]
