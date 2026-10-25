import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"

export const metadata: Metadata = {
  title: "Yardım",
  robots: { index: false, follow: true },
}

export default function IletisimRedirectPage() {
  return <ClientRedirect href="/help#iletisim" />
}
