import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const useCases = [
  {
    title: "Hukuk chatbot'u",
    description:
      "Müşteri destek botunuzu LawAPI ile besleyin; kullanıcılar mevzuat ve içtihat sorularına anında yanıt alsın.",
  },
  {
    title: "Sözleşme analiz aracı",
    description:
      "/v1/analyze uç noktası ile yüklenen sözleşmelerde risk maddelerini otomatik tespit edin.",
  },
  {
    title: "Hukuk araştırma platformu",
    description:
      "Semantik arama ile Yargıtay kararlarında benzer olayları bulun; geleneksel anahtar kelime aramasının ötesine geçin.",
  },
  {
    title: "Mevzuat takip sistemi",
    description:
      "Resmi Gazete entegrasyonu ile sektörünüze özel yeni düzenlemeleri otomatik bildirin.",
  },
]

export function LawApiUseCases() {
  return (
    <section className="py-24 border-t border-border bg-surface/50">
      <div className={containerClass}>
        <FadeIn className="mb-12">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide uppercase mb-4">
            Kullanım Örnekleri
          </p>
          <h2
            className="font-serif text-foreground leading-tight max-w-xl"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            LawAPI ile neler yapabilirsiniz?
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {useCases.map((item) => (
            <StaggerItem key={item.title}>
              <article className="bg-background p-6 sm:p-8">
                <h3 className="font-sans text-lg font-medium text-foreground mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
