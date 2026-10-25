import Link from "next/link"
import { containerClass } from "@/components/page-container"
import { HeroItem, HeroStagger } from "@/components/motion"

export function ComplyHero() {
  return (
    <section className={`${containerClass} pt-40 pb-20 text-center`}>
      <HeroStagger>
        <HeroItem>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] tracking-tight text-balance mb-6">
            Kalıp metin değil, size ait uyumluluk.
          </h1>
        </HeroItem>

        <HeroItem>
          <p className="font-sans text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            KVKK ve GDPR uyumlu gizlilik politikası, çerez bildirimi ve kullanıcı sözleşmeleri —
            Comply geliştiriliyor. Bekleme listesine katılın.
          </p>
        </HeroItem>

        <HeroItem>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#bekleme-listesi"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Bekleme Listesine Katıl
            </Link>
            <Link
              href="#nasil-calisir"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-mono font-medium text-muted-foreground border border-border rounded-sm hover:text-foreground hover:border-muted-foreground transition-colors"
            >
              Nasıl Çalışır?
            </Link>
          </div>
        </HeroItem>
      </HeroStagger>
    </section>
  )
}
