import Link from "next/link"
import { containerClass } from "@/components/page-container"
import { HeroItem, HeroStagger } from "@/components/motion"

export function LensHero() {
  return (
    <section className={`${containerClass} pt-40 pb-16`}>
      <HeroStagger className="max-w-2xl">
        <HeroItem>
          <p className="font-mono text-xs text-muted-foreground/60 tracking-widest uppercase mb-8">
            Chrome Uzantısı — UYAP
          </p>
        </HeroItem>

        <HeroItem>
          <h1
            className="font-serif text-foreground leading-[1.05] tracking-tight text-balance mb-6"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            UYAP dosyalarını
            <br />
            senkronize edin.
          </h1>
        </HeroItem>

        <HeroItem>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
            Lens, UYAP üzerindeki dosya ve duruşmaları senkronize eder, hatırlatıcı
            kurmanıza yardımcı olur; ücretsiz kullanımda dosyaları PDF&apos;e dönüştürüp
            indirmenizi sağlar. Takip bir tahmin işi değil; bu yüzden Lens belge içeriğini
            okumaz, yalnızca işini yapar.
          </p>
        </HeroItem>

        <HeroItem>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#install"
              className="inline-flex items-center px-5 py-2 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Chrome&apos;a Ekle
            </Link>
            <Link
              href="#ozellikler"
              className="inline-flex items-center px-5 py-2 text-sm font-mono font-medium text-foreground border border-border rounded-sm hover:bg-accent transition-colors"
            >
              Özellikler
            </Link>
          </div>
        </HeroItem>
      </HeroStagger>
    </section>
  )
}
