import { LensHeader } from "./components/lens-header"
import { LensHero } from "./components/lens-hero"
import { BrowserMockup } from "./components/browser-mockup"
import { LensFeatures } from "./components/lens-features"
import { LensHowItWorks } from "./components/lens-how-it-works"
import { LensPricing } from "./components/lens-pricing"
import { SocialProof } from "./components/social-proof"
import { InstallCta } from "./components/install-cta"
import { LensFooter } from "./components/lens-footer"

import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Lens — UYAP için Chrome Uzantısı",
  description:
    "Lens ile UYAP dosya ve duruşmalarını senkronize edin, hatırlatıcı kurun; ücretsiz planda dosyaları PDF'e dönüştürüp indirin. Belge içeriğini okumaz.",
  path: "/lens",
  keywords: [
    "UYAP Chrome uzantısı",
    "UYAP senkronizasyon",
    "UYAP PDF indirme",
    "duruşma hatırlatıcı",
    "HukukLabs Lens",
  ],
})

export default function LensPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LensHeader />
      <main>
        <LensHero />
        <BrowserMockup />
        <SocialProof />
        <LensFeatures />
        <LensHowItWorks />
        <LensPricing />
        <InstallCta />
      </main>
      <LensFooter />
    </div>
  )
}
