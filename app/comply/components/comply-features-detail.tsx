import {
  IconFileDescription,
  IconCookie,
  IconShieldCheck,
  IconRefresh,
} from "@tabler/icons-react"
import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const features = [
  {
    icon: IconFileDescription,
    title: "Gizlilik Politikası",
    description:
      "KVKK ve GDPR uyumlu, sektörünüze özel gizlilik politikası taslağı. Veri kategorileri, işleme amaçları ve haklar bölümleri otomatik doldurulur.",
  },
  {
    icon: IconShieldCheck,
    title: "KVKK Aydınlatma Metni",
    description:
      "6698 sayılı Kanun'un 10. maddesine uygun aydınlatma metni. Web sitesi, mobil uygulama ve fiziksel ortam için ayrı şablonlar.",
  },
  {
    icon: IconCookie,
    title: "Çerez Bildirimi",
    description:
      "Kullandığınız analitik ve pazarlama araçlarına göre özelleştirilmiş çerez politikası ve bildirim metni.",
  },
  {
    icon: IconRefresh,
    title: "Otomatik Güncelleme",
    description:
      "Mevzuat değişikliklerinde metinleriniz otomatik güncellenir. Değişiklik geçmişi ve versiyon karşılaştırması dahil.",
  },
]

export function ComplyFeaturesDetail() {
  return (
    <section className={`${containerClass} pb-24 border-t border-border`}>
      <FadeIn className="pt-16 mb-14">
        <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-4">
          Metin Türleri
        </p>
        <h2
          className="font-serif text-foreground text-balance leading-tight max-w-xl"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          Tek panelden tüm uyumluluk metinleri.
        </h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        {features.map(({ icon: Icon, title, description }) => (
          <StaggerItem key={title}>
            <article className="bg-background p-6 sm:p-8 flex flex-col gap-4 group">
              <div className="w-9 h-9 flex items-center justify-center border border-border rounded-sm text-muted-foreground group-hover:text-foreground group-hover:border-foreground/30 transition-colors">
                <Icon size={18} stroke={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-sans text-base font-medium text-foreground">{title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
