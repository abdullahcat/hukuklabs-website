import Link from "next/link"
import { containerClass } from "@/components/page-container"
import { HeroItem, HeroStagger } from "@/components/motion"
import { EXTERNAL_LINKS } from "@/lib/site-links"

export function LawApiHero() {
  return (
    <section className={`${containerClass} pt-40 pb-16`}>
      <HeroStagger>
        <HeroItem>
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide uppercase mb-6">
            REST API
          </p>
        </HeroItem>

        <HeroItem>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.1] tracking-tight max-w-3xl text-balance">
            Kaynağı belli hukuki veri, tek API&apos;de.
          </h1>
        </HeroItem>

        <HeroItem>
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-xl mt-6">
            HukukLabs&apos;ın hukuki bilgi tabanı ile Claude&apos;un dil modelini birleştiren REST API.
            Türk mevzuatı ve Yargıtay içtihatlarına programatik erişim; her cevap dayandığı
            kaynakla birlikte döner.
          </p>
        </HeroItem>

        <HeroItem>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="/help#iletisim"
              className="inline-flex items-center px-6 py-2.5 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              İletişime Geç
            </Link>
            <a
              href={EXTERNAL_LINKS.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 text-sm font-mono font-medium text-muted-foreground border border-border rounded-sm hover:text-foreground hover:border-muted-foreground/50 transition-colors"
            >
              Dokümantasyona Git
            </a>
          </div>
        </HeroItem>
      </HeroStagger>
    </section>
  )
}
