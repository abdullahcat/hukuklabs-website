import type { Metadata } from "next"
import { ComplyHeader } from "./components/comply-header"
import { ComplyHero } from "./components/comply-hero"
import { TrustSignals } from "./components/trust-signals"
import { HowItWorks } from "./components/how-it-works"
import { PolicyPreview } from "./components/policy-preview"
import { ComplyFeaturesDetail } from "./components/comply-features-detail"
import { ComplyWaitlist } from "./components/comply-waitlist"
import { ComplyFaq } from "./components/comply-faq"
import { ComplyCta } from "./components/comply-cta"
import { ComplyFooter } from "./components/comply-footer"

import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Comply — KVKK & GDPR Uyumluluk",
  description:
    "KVKK ve GDPR uyumlu gizlilik politikası, çerez bildirimi ve kullanıcı sözleşmelerini dakikalar içinde oluşturun ve yayınlayın.",
  path: "/comply",
  keywords: [
    "KVKK aydınlatma metni",
    "GDPR gizlilik politikası",
    "çerez politikası oluşturucu",
    "HukukLabs Comply",
  ],
})

export default function ComplyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ComplyHeader />
      <main>
        <ComplyHero />
        <TrustSignals />
        <HowItWorks />
        <PolicyPreview />
        <ComplyFeaturesDetail />
        <ComplyWaitlist />
        <ComplyFaq />
        <ComplyCta />
      </main>
      <ComplyFooter />
    </div>
  )
}
