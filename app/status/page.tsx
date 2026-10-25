import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { EXTERNAL_LINKS } from "@/lib/site-links"

export const metadata: Metadata = {
  title: "Durum",
  description: "HukukLabs hizmet durumu — UptimeRobot.",
  robots: { index: false, follow: true },
}

export default function StatusRedirectPage() {
  return <ClientRedirect href={EXTERNAL_LINKS.status} />
}
