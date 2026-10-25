import Image from "next/image"
import Link from "next/link"
import { EXTERNAL_LINKS } from "@/lib/site-links"

import { FadeIn } from "@/components/motion"
import { containerClass } from "@/components/page-container"

const features = [
  {
    eyebrow: "Studio",
    title: "Taslak, dayanağıyla birlikte gelir",
    description:
      "Dilekçe ve sözleşme taslakları Türk mevzuatına ve yargı kararlarına dayanarak hazırlanır; her önerinin hangi maddeden, hangi karardan geldiğini görürsünüz. Kontrol eden, düzelten ve imzalayan yine sizsiniz.",
    href: EXTERNAL_LINKS.studio,
    cta: "Studio'yu keşfet",
    image: "/images/showcase-studio.svg",
    imageAlt: "HukukLabs Studio — hukuki belge editörü arayüzü",
  },
  {
    eyebrow: "LawAPI",
    title: "Kaynağı belli hukuki veri",
    description:
      "Mevzuat ve içtihada programatik erişim. Kendi ürününüze eklediğiniz her cevap, doğrulanabilir bir kaynağa bağlı gelir; modelin tahmini değil, hukukun kendisi.",
    href: "/lawapi",
    cta: "API dokümantasyonu",
    image: "/images/showcase-lawapi.svg",
    imageAlt: "LawAPI — mevzuat ve içtihat arama API yanıtı",
    reverse: true,
  },
  {
    eyebrow: "Lens",
    title: "Model gerekmeyen yerde model yok",
    description:
      "UYAP takibi bir tahmin problemi değil. Lens dosya ve duruşmaları senkronize eder, hatırlatıcı kurar, ücretsiz planda PDF indirir. Belge içeriğini okumaz; işi neyse onu yapar.",
    href: "/lens",
    cta: "Chrome'a ekle",
    image: "/images/showcase-lens.svg",
    imageAlt: "Lens — UYAP senkronizasyon Chrome uzantısı",
  },
  {
    eyebrow: "Comply",
    title: "Kalıp metin değil, size ait uyumluluk",
    description:
      "KVKK ve GDPR metinleri, internetten kopyalanmış şablonlardan değil kuruluşunuzun gerçek veri işleme faaliyetlerinden üretilir. Comply geliştiriliyor; bekleme listesine katılabilirsiniz.",
    href: "/comply#bekleme-listesi",
    cta: "Bekleme listesi",
    image: "/images/showcase-comply.svg",
    imageAlt: "Comply — KVKK ve GDPR uyumlu politika üretimi",
    reverse: true,
  },
]

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlatformShowcase() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className={`${containerClass} py-24`}>
        <FadeIn className="max-w-2xl mb-20">
          <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-6">
            Platform
          </p>
          <h2 className="font-serif text-foreground text-4xl leading-tight mb-6">
            Her iş için doğru araç
          </h2>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Taslak yazmak, karar aramak, dosya takip etmek ve uyumluluk metni hazırlamak
            aynı problem değil. Tek bir modeli hepsine koşmak yerine her birine ayrı bir
            araç kurduk ve yapay zekâyı yalnızca gerçekten değer kattığı yerde kullandık.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-24">
          {features.map((feature, index) => (
            <FadeIn key={feature.eyebrow} delay={index * 0.05}>
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  feature.reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-card">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <p className="font-mono text-muted-foreground text-xs tracking-widest uppercase mb-4">
                    {feature.eyebrow}
                  </p>
                  <h3 className="font-serif text-foreground text-3xl leading-tight mb-5">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    {...(/^https?:\/\//.test(feature.href)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background text-sm font-sans font-medium rounded-sm hover:bg-foreground/90 transition-colors duration-200"
                  >
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
