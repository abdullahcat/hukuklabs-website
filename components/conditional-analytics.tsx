"use client"

import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react"
import { hasAnalyticsConsent } from "@/lib/cookie-consent"

export function ConditionalAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(hasAnalyticsConsent())

    function onConsentChange(event: Event) {
      const detail = (event as CustomEvent<{ analytics: boolean }>).detail
      setEnabled(detail.analytics)
    }

    window.addEventListener("cookie-consent-change", onConsentChange)
    return () => window.removeEventListener("cookie-consent-change", onConsentChange)
  }, [])

  if (!enabled) return null
  return <Analytics />
}
