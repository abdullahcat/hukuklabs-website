"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { IconArrowRight } from "@tabler/icons-react"
import { FadeIn } from "@/components/motion"
import { formatTRY, subscribeUrl } from "@/lib/plans"
import {
  calculatorPlanResults,
  recommendPlan,
  computeTotalNeed,
  type CalculatorPlanResult,
  type CalculatorPlanSlug,
  type UsageMode,
  type UsageScenario,
} from "@/lib/usage-calculator"
import { cn } from "@/lib/utils"

type SliderConfig = {
  id: UsageMode
  label: string
  min: number
  max: number
  step: number
}

const SLIDERS: SliderConfig[] = [
  {
    id: "dilekce",
    label: "Ayda kaç dilekçe?",
    min: 0,
    max: 200,
    step: 1,
  },
  {
    id: "sozlesme",
    label: "Ayda kaç sözleşme?",
    min: 0,
    max: 200,
    step: 1,
  },
  {
    id: "danisma",
    label: "Ayda kaç soru (danışma)?",
    min: 0,
    max: 400,
    step: 1,
  },
  {
    id: "ictihat",
    label: "Ayda kaç karar araması?",
    min: 0,
    max: 200,
    step: 1,
  },
  {
    id: "mevzuat",
    label: "Ayda kaç mevzuat araması?",
    min: 0,
    max: 300,
    step: 1,
  },
  {
    id: "ocr_page",
    label: "Ayda kaç sayfa belge tarama?",
    min: 0,
    max: 5000,
    step: 10,
  },
]

const DEFAULT_SCENARIO: UsageScenario = {
  dilekce: 40,
  sozlesme: 30,
  danisma: 100,
  ictihat: 30,
  mevzuat: 30,
  deep_research: 0,
  ocr_page: 300,
}

function formatCount(n: number): string {
  return n.toLocaleString("tr-TR")
}

function barColor(percent: number): string {
  if (percent >= 100) return "bg-red-500"
  if (percent >= 85) return "bg-amber-400"
  return "bg-white"
}

function UsageSlider({
  config,
  value,
  onChange,
}: {
  config: SliderConfig
  value: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start justify-between gap-4">
        <label
          htmlFor={`usage-${config.id}`}
          className="font-sans text-sm text-foreground leading-snug"
        >
          {config.label}
        </label>
        <span
          className="font-mono text-sm text-foreground tabular-nums shrink-0"
          aria-live="polite"
        >
          {formatCount(value)}
        </span>
      </div>
      <input
        id={`usage-${config.id}`}
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-foreground h-1.5 cursor-pointer"
        aria-valuemin={config.min}
        aria-valuemax={config.max}
        aria-valuenow={value}
        aria-valuetext={`${value}`}
      />
    </div>
  )
}

function RecommendedPlanBody({ row }: { row: CalculatorPlanResult }) {
  return (
    <>
      <p className="font-sans text-sm text-white/45 mb-2">Önerilen plan</p>
      <div className="flex items-end justify-between gap-4 mb-2">
        <p className="font-serif text-4xl sm:text-[2.75rem] text-white leading-none tracking-tight">
          {row.name}
        </p>
        <p className="font-serif text-2xl text-white tabular-nums leading-none shrink-0 pb-1">
          {formatTRY(row.monthlyPrice)}
          <span className="font-sans text-sm text-white/45"> /ay</span>
        </p>
      </div>
      <p className="font-sans text-sm text-white/40 mb-8">Studio — {row.name}</p>

      <div className="mb-3">
        <div
          className="h-2 w-full rounded-full bg-white/15 overflow-hidden"
          role="progressbar"
          aria-valuenow={row.usagePercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Kullanım yüzdesi"
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-200",
              barColor(row.usagePercent),
            )}
            style={{ width: `${Math.min(100, row.usagePercent)}%` }}
          />
        </div>
      </div>
      <p className="font-sans text-sm text-white/55 mb-8">
        Kullanımınız: %
        {row.usagePercent.toLocaleString("tr-TR", {
          maximumFractionDigits: 1,
        })}
      </p>

      <div className="mt-auto rounded-md bg-white/10 px-4 py-4 mb-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/45 mb-1">
          Size Uygun
        </p>
        <p className="font-sans text-sm text-white/80 leading-relaxed">
          Bu senaryoda kapasitenizin güvenli diliminde kalırsınız. Özellik
          başına sabit kota yok — kredi havuzunu dilediğiniz gibi dağıtırsınız.
        </p>
      </div>

      <a
        href={subscribeUrl(row.slug, "monthly")}
        className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-sans font-medium rounded-sm bg-white text-black hover:bg-white/90 transition-colors"
      >
        {row.name} planını seçin
        <IconArrowRight size={16} aria-hidden />
      </a>
    </>
  )
}

function EnterpriseBody() {
  return (
    <>
      <p className="font-sans text-sm text-white/45 mb-2">Önerilen plan</p>
      <p className="font-serif text-4xl sm:text-[2.75rem] text-white leading-none tracking-tight mb-8">
        Kurumsal
      </p>
      <p className="font-sans text-sm text-white/55 leading-relaxed mb-8">
        Bu kullanım Max planının da kapasitesini aşıyor. Size özel bir teklif için
        bizimle iletişime geçin.
      </p>
      <div className="mt-auto">
        <Link
          href="/enterprise"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 text-sm font-sans font-medium rounded-sm bg-white text-black hover:bg-white/90 transition-colors"
        >
          İletişime geçin
          <IconArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </>
  )
}

export function UsageCalculator() {
  const [scenario, setScenario] = useState<UsageScenario>(DEFAULT_SCENARIO)

  const setValue = (id: UsageMode, n: number) => {
    setScenario((prev) => ({ ...prev, [id]: n }))
  }

  const { recommendedRow, activeSlug } = useMemo(() => {
    const totalNeed = computeTotalNeed(scenario)
    const results = calculatorPlanResults(totalNeed)
    const recommended = recommendPlan(results)
    const recommendedRow = recommended
      ? (results.find((r) => r.slug === recommended) ?? null)
      : null
    const activeSlug: CalculatorPlanSlug | "enterprise" =
      recommendedRow?.slug ?? "enterprise"
    return { recommendedRow, activeSlug }
  }, [scenario])

  return (
    <FadeIn id="hangi-plan" className="mt-16 mb-4 scroll-mt-24">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <h3
          className="font-serif text-foreground text-balance leading-tight mb-3"
          style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}
        >
          Kaç kullanır, hangi plan size uyar?
        </h3>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          Aşağıdaki kaydırıcıları aylık kullanımınıza göre ayarlayın, size uygun
          planı otomatik gösterelim. Özellik başına sabit kota yok — aynı
          havuzdan alternatif kullanım.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 items-start">
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8 flex flex-col gap-5 h-full">
          <h4 className="font-sans text-base font-medium text-foreground">
            Senaryonuzu oluşturun
          </h4>
          {SLIDERS.map((config) => (
            <UsageSlider
              key={config.id}
              config={config}
              value={scenario[config.id]}
              onChange={(n) => setValue(config.id, n)}
            />
          ))}

          <p className="mt-auto font-sans text-xs text-muted-foreground/70 leading-relaxed">
            Bu değerler tahmindir; uzun soru ve belgelerde gerçek kullanım daha
            yüksek olabilir. Krediler işlemler arasında serbestçe kullanılır, ay
            sonunda devretmez.
          </p>
        </div>

        <div className="rounded-lg bg-[#0a0a0a] text-white p-6 sm:p-8 flex flex-col min-h-[480px] lg:sticky lg:top-24 h-full">
          <h4 className="font-sans text-base font-medium text-white/90 mb-8 shrink-0">
            Size uygun plan
          </h4>

          <div className="relative flex-1 min-h-[300px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col"
                aria-live="polite"
              >
                {recommendedRow ? (
                  <RecommendedPlanBody row={recommendedRow} />
                ) : (
                  <EnterpriseBody />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
