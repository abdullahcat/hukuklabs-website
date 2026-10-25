import { ProductCta } from "@/components/product-cta"
import { CHROME_WEB_STORE_URL } from "@/lib/downloads"

export function InstallCta() {
  return (
    <ProductCta
      id="install"
      eyebrow="Hemen Başla"
      title="UYAP takibini tarayıcınızda tutun."
      description="Uzantıyı ekleyin — ücretsiz PDF indirin; abonelikte duruşma ve dosyaları senkronize edip hatırlatıcı kurun."
      action={
        <a
          href={CHROME_WEB_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-foreground text-primary-foreground font-sans text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          Chrome&apos;a Ekle
        </a>
      }
      footnote="Sadece Chrome desteklenmektedir · Manifest V3 uyumlu"
    />
  )
}
