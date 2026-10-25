import { ProductCta } from "@/components/product-cta"

export function ComplyCta() {
  return (
    <ProductCta
      id="olustur"
      eyebrow="Erken Erişim"
      title="Comply lansmanında ilk siz olun."
      description="KVKK ve GDPR uyumlu metin oluşturma aracımız geliştiriliyor. Bekleme listesine katılın, açıldığında haberdar olun."
      action={
        <a
          href="#bekleme-listesi"
          className="inline-flex items-center px-8 py-3 bg-foreground text-primary-foreground font-mono text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
        >
          Bekleme Listesine Katıl
        </a>
      }
      footnote="Comply henüz aktif değil · Fiyatlandırma lansmanda açıklanacak"
    />
  )
}
