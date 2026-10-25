import Link from "next/link"
import { ProductCta } from "@/components/product-cta"
import { EXTERNAL_LINKS } from "@/lib/site-links"

export function LawApiCta() {
  return (
    <ProductCta
      id="api-key"
      eyebrow="Geliştiriciler için"
      title="LawAPI ile entegrasyona başlayın."
      description="Satış ekibimizle iletişime geçin, dokümantasyonu inceleyin ve Türk mevzuatı ile içtihatlara programatik erişim sağlayın."
      action={
        <>
          <Link
            href="/help#iletisim"
            className="inline-flex items-center px-8 py-3 bg-foreground text-primary-foreground font-mono text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            İletişime Geç
          </Link>
          <a
            href={EXTERNAL_LINKS.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-sm font-mono font-medium text-foreground border border-border rounded-sm hover:bg-accent transition-colors"
          >
            Dokümantasyona Git
          </a>
        </>
      }
      footnote="Token bazlı · Aylık taahhüt yok · KVKK uyumlu"
    />
  )
}
