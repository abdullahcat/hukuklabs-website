import { IconScale, IconDatabase, IconBrain } from "@tabler/icons-react"
import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const valueProps = [
  {
    icon: IconScale,
    title: "Türk Hukukuna Özgü",
    description: "Türk mevzuatı, yönetmelikleri ve içtihatları üzerine özel olarak ince ayar yapılmış (fine-tuning) model.",
  },
  {
    icon: IconDatabase,
    title: "Yargıtay & Mevzuat Entegrasyonu",
    description: "Güncel Yargıtay kararları ve tüm yürürlükteki mevzuata doğrudan erişim.",
  },
  {
    icon: IconBrain,
    title: "Claude Destekli Yanıtlar",
    description: "Anthropic Claude ile entegre, kaynak gösterilen ve güvenilir hukuki yanıtlar.",
  },
]

export function ValueProps() {
  return (
    <section className="py-24 border-t border-border">
      <div className={containerClass}>
        {/* Section header */}
        <FadeIn className="mb-12">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide uppercase">
            Neden LawAPI?
          </p>
        </FadeIn>

        {/* Three columns */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {valueProps.map((prop) => (
            <StaggerItem key={prop.title}>
              <div className="flex flex-col gap-4">
                <prop.icon
                  size={24}
                  stroke={1.5}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
                <h3 className="font-sans text-lg font-medium text-foreground">
                  {prop.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
