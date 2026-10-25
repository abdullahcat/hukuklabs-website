import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { EXTERNAL_LINKS } from "@/lib/site-links"

export const metadata: Metadata = {
  title: "İndir",
  robots: { index: false, follow: true },
}

export default function DownloadRedirectPage() {
  return <ClientRedirect href={EXTERNAL_LINKS.studio} />
}
