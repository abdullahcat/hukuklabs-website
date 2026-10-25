import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { EXTERNAL_LINKS } from "@/lib/site-links"

export const metadata: Metadata = {
  title: "Mobil",
  robots: { index: false, follow: true },
}

export default function DownloadMobileRedirectPage() {
  return <ClientRedirect href={EXTERNAL_LINKS.studio} />
}
