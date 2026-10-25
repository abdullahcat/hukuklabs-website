import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "HukukLabs gizlilik politikası — yönlendirme.",
  robots: { index: false, follow: true },
}

export default function GizlilikRedirectPage() {
  return <ClientRedirect href="/gizlilik-politikasi" />
}
