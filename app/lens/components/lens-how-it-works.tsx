import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const steps = [
  {
    step: "1",
    title: "Chrome'a ekleyin",
    description: "Lens uzantısını Chrome Web Store'dan indirin. Kurulum 30 saniye sürer.",
  },
  {
    step: "2",
    title: "UYAP'a giriş yapın",
    description: "Normal şekilde UYAP oturumunuzu açın. Lens otomatik olarak devreye girer.",
  },
  {
    step: "3",
    title: "PDF indirin veya senkronize edin",
    description:
      "Ücretsiz: dosyaları PDF'e dönüştürüp indirin. Abonelikte: duruşma ve dosyaları senkronize edin, hatırlatıcı kurun.",
  },
  {
    step: "4",
    title: "Takibinizi sürdürün",
    description:
      "Hatırlatıcılarınız ve senkronize listeniz güncel kalsın. Lens belge içeriğini okumaz.",
  },
]

export function LensHowItWorks() {
  return (
    <section id="nasil-calisir" className={`${containerClass} py-24 border-t border-border`}>
      <FadeIn className="mb-14">
        <p className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase mb-4">
          Nasıl Çalışır
        </p>
        <h2
          className="font-serif text-foreground text-balance leading-tight max-w-lg"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          UYAP&apos;ın içinde, dört adımda.
        </h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item) => (
          <StaggerItem key={item.step}>
            <div className="relative flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center font-mono text-sm text-muted-foreground">
                {item.step}
              </div>
              <h3 className="font-sans text-base font-medium text-foreground">{item.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
