import {
  IconFileTypePdf,
  IconRefresh,
  IconBell,
  IconShieldLock,
} from "@tabler/icons-react"
import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const features = [
  {
    icon: IconFileTypePdf,
    badge: "Ücretsiz",
    title: "PDF'e dönüştür ve indir",
    description:
      "UYAP'taki dosyaları PDF formatına dönüştürüp bilgisayarınıza indirin. Ücretsiz kullanımda da geçerlidir.",
  },
  {
    icon: IconRefresh,
    badge: "Abonelik",
    title: "Dosya senkronizasyonu",
    description:
      "Dava dosyalarınızı hesabınızla senkronize edin; UYAP'taki güncel dosya listesine tarayıcıdan erişin.",
  },
  {
    icon: IconBell,
    badge: "Abonelik",
    title: "Duruşma senkronizasyonu ve hatırlatıcılar",
    description:
      "Duruşmaları senkronize edin ve yaklaşan duruşmalar için hatırlatıcı kurun — kaçırmayın.",
  },
  {
    icon: IconShieldLock,
    badge: "Önemli",
    title: "Belge içeriği okunmaz",
    description:
      "Lens dilekçe, evrak veya PDF içeriğini okumaz ve derlemez. Odak noktası dosya/duruşma senkronu, hatırlatıcı ve PDF indirmedir.",
  },
]

export function LensFeatures() {
  return (
    <section id="ozellikler" className={`${containerClass} py-24`}>
      <FadeIn className="mb-14">
        <p className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase mb-4">
          Özellikler
        </p>
        <h2 className="font-serif text-foreground text-3xl md:text-4xl text-balance leading-snug max-w-xl">
          Senkronize edin, hatırlatın, PDF indirin.
        </h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        {features.map(({ icon: Icon, badge, title, description }) => (
          <StaggerItem key={title}>
            <article className="bg-background p-6 sm:p-8 flex flex-col gap-5 group hover:bg-surface transition-colors h-full">
              <div className="flex items-center justify-between gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-surface group-hover:bg-accent/60 transition-colors">
                  <Icon size={18} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                  {badge}
                </span>
              </div>
              <div>
                <h3 className="font-sans text-foreground font-medium text-base mb-2">{title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
