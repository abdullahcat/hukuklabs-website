import Image from "next/image"

import { containerClass } from "@/components/page-container"
import { FadeIn } from "@/components/motion"

export function BrowserMockup() {
  return (
    <section className={`${containerClass} pb-20`}>
      <FadeIn>
        <div className="relative w-full rounded-lg border border-border overflow-hidden aspect-[16/9] bg-card flex items-center justify-center">
          <Image
            src="/images/showcase-lens.svg"
            alt="Lens Chrome uzantısı — UYAP dosya senkronizasyonu ve PDF indirme"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <p className="mt-3 text-center font-sans text-xs text-muted-foreground/40">
          Lens — UYAP senkronizasyon ve PDF indirme
        </p>
      </FadeIn>
    </section>
  )
}
