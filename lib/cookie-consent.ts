export const COOKIE_CONSENT_KEY = "hukuklabs-cookie-consent"
export const COOKIE_CONSENT_VERSION = "1"

export type CookieConsentValue = {
  version: string
  necessary: true
  analytics: boolean
  updatedAt: string
}

export function parseConsent(raw: string | null): CookieConsentValue | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as CookieConsentValue
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function readConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null
  return parseConsent(localStorage.getItem(COOKIE_CONSENT_KEY))
}

export function saveConsent(analytics: boolean): CookieConsentValue {
  const value: CookieConsentValue = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value))
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }))
  return value
}

export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true
}
