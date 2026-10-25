import { HeroTypewriter } from "@/components/hero-typewriter"
import { HeroStagger, HeroItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"

export function Hero() {
  return (
    <section>
      <div className={`${containerClass} pt-40 pb-32`}>
        <HeroStagger>
            <HeroItem>
              <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-6 xl:gap-16 items-center">
                <HeroTypewriter
                  className="font-serif text-foreground leading-[1.05] tracking-tight max-w-3xl"
                  style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}
                />

                <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-[85%] sm:max-w-lg font-light xl:ml-auto">
                   Dilekçeden içtihat araştırmasına, UYAP takibinden KVKK uyumuna kadar
                   her iş için ayrı bir araç kurduk. Her taslak ve her cevap, dayandığı
                   madde ve kararla birlikte gelir; son söz her zaman avukatındır.
                </p>
              </div>
            </HeroItem>
        </HeroStagger>
      </div>
    </section>
  )
}
