import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "HukukLabs kullanım koşulları — yönlendirme.",
  robots: { index: false, follow: true },
}

export default function KosullarRedirectPage() {
  return <ClientRedirect href="/kullanim-kosullari" />
}
