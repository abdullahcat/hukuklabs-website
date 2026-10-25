"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { IconCheck } from "@tabler/icons-react"
import { motion, useReducedMotion } from "framer-motion"
import { containerClass } from "@/components/page-container"
import { FadeIn, motionEase } from "@/components/motion"
import { Slider } from "@/components/ui/slider"

// Blended cost of Claude Sonnet 5 ($3/1M input + $15/1M output, averaged) + 20% margin
const PRICE_PER_1K = 0.0108

const TOKEN_STEPS = [
  10_000,
  50_000,
  100_000,
  250_000,
  500_000,
  1_000_000,
  2_000_000,
  5_000_000,
] as const

function formatTokens(tokens: number) {
  if (tokens >= 1_000_000) {
    const m = tokens / 1_000_000
    return m % 1 === 0 ? `${m}M` : `${m.toFixed(1)}M`
  }
  if (tokens >= 1_000) return `${tokens / 1_000}K`
  return tokens.toString()
}

function formatUnitPrice(amount: number) {
  return `$${amount.toFixed(4)}`
}

function formatCost(amount: number) {
  return `$${amount.toFixed(2)}`
}

export function LawApiPricing() {
  const [stepIndex, setStepIndex] = useState(3)
  const reduceMotion = useReducedMotion()
  const tokens = TOKEN_STEPS[stepIndex]
  const estimatedCost = useMemo(
    () => (tokens / 1000) * PRICE_PER_1K,
    [tokens]
  )

  return (
    <section id="fiyatlandirma" className="py-24 border-t border-border">
      <div className={containerClass}>
        <FadeIn className="mb-12">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide uppercase mb-4">
            Fiyatlandırma
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight">
            Kullandığın kadar öde.
          </h2>
          <p className="font-sans text-muted-foreground mt-4 max-w-lg">
            Aylık plan yok. Yalnızca tükettiğiniz token kadar faturalandırılır.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="w-full border border-border rounded-lg bg-card p-5 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-4 mb-8">
              <div>
                <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest mb-2">
                  Token başına
                </p>
                <p className="font-serif text-3xl text-foreground">
                  {formatUnitPrice(PRICE_PER_1K)}
                  <span className="font-sans text-sm text-muted-foreground ml-1">/ 1K token</span>
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest mb-2">
                  Tahmini aylık
                </p>
                <motion.p
                  key={estimatedCost}
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: motionEase }}
                  className="font-serif text-3xl text-foreground"
                >
                  {formatCost(estimatedCost)}
                </motion.p>
              </div>
            </div>

            <div className="mb-3 flex items-center justify-between">
              <label htmlFor="token-slider" className="font-sans text-sm text-foreground">
                Aylık token kullanımı
              </label>
              <span className="font-mono text-sm text-muted-foreground">
                ~{formatTokens(tokens)} token
              </span>
            </div>

            <Slider
              id="token-slider"
              min={0}
              max={TOKEN_STEPS.length - 1}
              step={1}
              value={[stepIndex]}
              onValueChange={([value]) => setStepIndex(value)}
              className="mb-8"
              aria-label="Aylık token kullanımı"
            />

            <ul className="flex flex-col gap-2 mb-8">
              {[
                "Giriş ve çıkış tokenları birlikte sayılır",
                "Aylık taahhüt yok, istediğiniz zaman durdurun",
                "İstek limiti hesabınıza göre otomatik ayarlanır",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-sans text-sm text-muted-foreground">
                  <IconCheck size={16} stroke={1.5} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/help#iletisim"
              className="block w-full text-center px-4 py-2.5 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              İletişime Geç
            </Link>
          </div>

          <p className="font-sans text-xs text-muted-foreground/50 mt-6">
            Tahmini maliyet örnek kullanım senaryosudur. Tüm fiyatlar KDV hariçtir.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
