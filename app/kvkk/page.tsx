import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "HukukLabs KVKK aydınlatma metni — yönlendirme.",
  robots: { index: false, follow: true },
}

export default function KvkkRedirectPage() {
  return <ClientRedirect href="/ziyaretci-aydinlatma-metni" />
}
