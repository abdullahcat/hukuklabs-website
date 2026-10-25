import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const steps = [
  {
    number: "01",
    title: "Bilgilerini gir",
    description: "Şirket adı, iletişim bilgileri ve veri işleme amaçlarınızı basit bir form ile belirtin.",
  },
  {
    number: "02",
    title: "Politika oluşturulsun",
    description: "Yapay zeka destekli sistemimiz, hukuka uygun ve güncel mevzuata göre politikanızı oluşturur.",
  },
  {
    number: "03",
    title: "Web sitene göm",
    description: "Tek satırlık kod ile politikanızı web sitenize entegre edin. Her zaman güncel kalır.",
  },
]

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 border-t border-border">
      <div className={containerClass}>
        {/* Section header */}
        <FadeIn className="text-center mb-16">
          <p className="font-mono text-xs tracking-wide text-muted-foreground/60 uppercase mb-4">
            Nasıl Çalışır
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Üç adımda uyumluluk
          </h2>
        </FadeIn>

        {/* Steps grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative p-6 border border-border rounded-lg bg-card hover:border-muted-foreground/30 transition-colors">
                {/* Step number background badge */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center">
                  <span className="font-mono text-sm font-medium text-muted-foreground/60">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="pt-4">
                  <h3 className="font-sans text-lg font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-border via-border to-transparent rounded-b-lg" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
