import type { Metadata } from "next"
import { ClientRedirect } from "@/components/client-redirect"
import { CHROME_WEB_STORE_URL } from "@/lib/downloads"

export const metadata: Metadata = {
  title: "Lens",
  robots: { index: false, follow: true },
}

export default function DownloadLensRedirectPage() {
  return <ClientRedirect href={CHROME_WEB_STORE_URL} />
}
