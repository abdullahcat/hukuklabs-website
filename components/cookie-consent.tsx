"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { motionEase } from "@/components/motion"
import { readConsent, saveConsent } from "@/lib/cookie-consent"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!readConsent()) {
      setVisible(true)
    }
  }, [])

  function accept(analytics: boolean) {
    saveConsent(analytics)
    setVisible(false)
    setShowPreferences(false)
  }

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          aria-live="polite"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45, ease: motionEase }}
          className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
        >
          <div className="mx-auto max-w-3xl pointer-events-auto rounded-lg border border-border bg-card shadow-lg shadow-foreground/5">
            <div className="p-5 sm:p-6">
              <p
                id="cookie-consent-title"
                className="font-sans text-sm font-medium text-foreground mb-2"
              >
                Çerez tercihleri
              </p>
              <p
                id="cookie-consent-desc"
                className="font-sans text-sm text-muted-foreground leading-relaxed"
              >
                Web sitemizde deneyiminizi iyileştirmek ve trafiği analiz etmek için çerezler
                kullanıyoruz. Zorunlu çerezler siteyi çalıştırmak için gereklidir. Analitik
                çerezleri kabul etmek isteğe bağlıdır. Detaylar için{" "}
                <Link
                  href="/cerez-politikasi"
                  className="text-foreground underline underline-offset-2 hover:opacity-80"
                >
                  çerez politikamıza
                </Link>{" "}
                bakabilirsiniz.
              </p>

              <AnimatePresence initial={false}>
                {showPreferences && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: motionEase }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-border space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-sans text-sm font-medium text-foreground">
                            Zorunlu çerezler
                          </p>
                          <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">
                            Oturum, güvenlik ve temel site işlevleri için gereklidir. Kapatılamaz.
                          </p>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60 pt-0.5">
                          Her zaman açık
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-sans text-sm font-medium text-foreground">
                            Analitik çerezler
                          </p>
                          <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">
                            Ziyaret istatistiklerini anonim olarak toplar; siteyi geliştirmemize
                            yardımcı olur.
                          </p>
                        </div>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={analyticsEnabled}
                          aria-label="Analitik çerezleri aç veya kapat"
                          onClick={() => setAnalyticsEnabled((v) => !v)}
                          className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
                            analyticsEnabled ? "bg-foreground" : "bg-border"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-background transition-transform ${
                              analyticsEnabled ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 flex flex-col-reverse sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowPreferences((v) => !v)}
                  className="px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-foreground transition-colors text-center sm:text-left"
                >
                  {showPreferences ? "Tercihleri gizle" : "Tercihleri özelleştir"}
                </button>
                <div className="flex flex-col sm:flex-row gap-2 sm:ml-auto sm:flex-1 sm:justify-end">
                  <button
                    type="button"
                    onClick={() => accept(false)}
                    className="px-4 py-2 text-sm font-sans font-medium text-foreground border border-border rounded-sm hover:bg-accent transition-colors"
                  >
                    Sadece gerekli
                  </button>
                  <button
                    type="button"
                    onClick={() => accept(showPreferences ? analyticsEnabled : true)}
                    className="px-4 py-2 text-sm font-sans font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {showPreferences ? "Seçimleri kaydet" : "Tümünü kabul et"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
