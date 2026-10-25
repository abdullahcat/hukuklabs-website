import { IconCheck, IconMinus } from "@tabler/icons-react"
import { FadeIn } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { plansData } from "@/lib/plans"
import { EXTERNAL_LINKS } from "@/lib/site-links"

const freePlan = plansData.plans.find((plan) => plan.slug === "ucretsiz")!

const included = ["Lens — sınırsız PDF indirme"] as const
const excluded = ["UYAP dosya/duruşma senkronu", "Hatırlatıcılar"] as const

export function LensPricing() {
  return (
    <section
      id="fiyatlandirma"
      className={`${containerClass} pb-24 border-t border-border`}
      aria-labelledby="lens-pricing-heading"
    >
      <FadeIn className="pt-16 mb-10 max-w-2xl mx-auto text-center">
        <h2
          id="lens-pricing-heading"
          className="font-serif text-foreground text-3xl sm:text-4xl leading-tight"
        >
          Lens&apos;i kullanmaya başlayın
        </h2>
      </FadeIn>

      <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto items-stretch">
        <article className="flex h-full flex-col rounded-sm border border-border bg-card p-6 sm:p-7">
          <h3 className="font-sans text-foreground text-base font-medium mb-4">
            {freePlan.name}
          </h3>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-serif text-4xl text-foreground leading-none">₺0</span>
            <span className="font-sans text-sm text-muted-foreground">/ her zaman</span>
          </div>

          <ul className="flex flex-col gap-2.5 mb-8 flex-1" role="list">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <IconCheck
                  size={14}
                  stroke={2}
                  className="text-muted-foreground/50 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
            {excluded.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <IconMinus
                  size={14}
                  stroke={2}
                  className="text-muted-foreground/30 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-sans text-xs text-muted-foreground/45 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href={`${EXTERNAL_LINKS.app}/register`}
            className="inline-flex items-center justify-center w-full px-5 py-2 text-sm font-sans font-medium rounded-sm bg-foreground text-background hover:bg-foreground/85 transition-colors duration-150"
          >
            Ücretsiz Başla
          </a>
        </article>

        <aside className="flex h-full flex-col rounded-sm border border-border bg-card p-6 sm:p-7">
          <h3 className="font-sans text-foreground text-base font-medium mb-4">
            Daha fazlası için
          </h3>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
            UYAP senkronizasyonu, hatırlatıcılar ve Studio&apos;nun tüm özellikleri,
            Studio aboneliğinizle birlikte otomatik olarak açılır. Aktif bir Studio
            planınız varsa Lens&apos;teki bu özellikler otomatik olarak aktif olur —
            ayrıca bir işlem yapmanıza gerek yoktur.
          </p>
          <a
            href={EXTERNAL_LINKS.studio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-5 py-2 text-sm font-sans font-medium rounded-sm border border-border text-foreground hover:bg-accent transition-colors duration-150"
          >
            Studio&apos;ya Git
          </a>
        </aside>
      </FadeIn>
    </section>
  )
}
