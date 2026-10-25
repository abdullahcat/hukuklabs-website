"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { IconCheck, IconChevronDown } from "@tabler/icons-react"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import {
  comparisonTablePlans,
  comparisonTableRows,
  formatTRY,
  plansData,
  planCardContent,
  plansForVariant,
  subscribeUrl,
  type BillingInterval,
  type Plan,
} from "@/lib/plans"
import { UsageCalculator } from "@/components/usage-calculator"
import { CreditSystemExplainer } from "@/components/credit-system-explainer"

const COMPARE_ANCHOR = "karsilastirma-tablosu"

function PlanCard({
  plan,
  billing,
}: {
  plan: Plan
  billing: BillingInterval
}) {
  const isAnnual = billing === "annual"
  const isPaid = plan.kind === "paid"
  const paidSlug = plan.slug as "solo" | "pro" | "max"
  const content = planCardContent(plan)

  const mainPrice =
    isPaid && plan.monthlyPrice != null
      ? isAnnual
        ? plan.monthlyEquivalent!
        : plan.monthlyPrice
      : null

  return (
    <article className="relative flex h-full flex-col rounded-sm border border-border bg-card p-6 sm:p-7">
      <h3 className="font-sans text-foreground text-base font-medium mb-1">
        {plan.name}
      </h3>
      {plan.tagline ? (
        <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-5">
          {plan.tagline}
        </p>
      ) : (
        <div className="mb-5" />
      )}

      {mainPrice != null ? (
        <>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="font-serif text-3xl sm:text-4xl text-foreground leading-none">
              {formatTRY(mainPrice)}
            </span>
            <span className="font-sans text-sm text-muted-foreground">/ay</span>
          </div>
          <p className="font-sans text-xs text-muted-foreground/70 mb-5">
            {isAnnual
              ? `KDV dahil · yıllık ${formatTRY(plan.yearlyPrice!)} peşin`
              : "KDV dahil · dilediğiniz zaman iptal"}
          </p>
        </>
      ) : (
        <div className="mb-5">
          <p className="font-serif text-xl text-foreground leading-snug mb-2">
            Özel fiyatlandırma
          </p>
          <p className="font-sans text-xs text-muted-foreground leading-relaxed">
            Kendi kredi havuzunuz; kullanım hacminize göre özel birim fiyat.
          </p>
        </div>
      )}

      <div className="mb-6">
        {isPaid ? (
          isAnnual ? (
            <>
              <a
                href={subscribeUrl(paidSlug, "annual")}
                className="inline-flex items-center justify-center w-full px-5 py-2 text-sm font-sans font-medium rounded-sm bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                Abone Ol
              </a>
              <p className="mt-2 font-sans text-[11px] text-muted-foreground/60 leading-relaxed text-center">
                12 ay peşin ödenir; süre sonunda otomatik yenilenmez.
              </p>
            </>
          ) : (
            <>
              <a
                href={subscribeUrl(paidSlug, "monthly", { trial: true })}
                className="inline-flex items-center justify-center w-full px-5 py-2 text-sm font-sans font-medium rounded-sm bg-foreground text-background hover:bg-foreground/85 transition-colors"
              >
                3 Gün Ücretsiz Dene
              </a>
              <p className="mt-2 font-sans text-[11px] text-muted-foreground/60 leading-relaxed text-center">
                Deneme boyunca ücret alınmaz; süre sonunda iptal etmezseniz plan
                ücreti tahsil edilir.
              </p>
            </>
          )
        ) : (
          <Link
            href={plan.ctaHref || "/enterprise"}
            className="inline-flex items-center justify-center w-full px-5 py-2 text-sm font-sans font-medium rounded-sm border border-border text-foreground hover:bg-accent transition-colors"
          >
            {plan.cta || "İletişime Geçin"}
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {content.heading ? (
          <p className="font-sans text-xs font-medium text-foreground mb-1">
            {content.heading}
          </p>
        ) : null}
        <ul className="flex flex-col gap-2" role="list">
          {content.items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <IconCheck
                size={14}
                stroke={2}
                className="text-muted-foreground/50 flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="font-sans text-xs text-muted-foreground leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {(isPaid || plan.kind === "enterprise") && (
        <div className="mt-5 pt-4 border-t border-border/60">
          <p className="font-sans text-[11px] text-muted-foreground leading-relaxed">
            Kredi bakiyeniz biterse, mevcut planınıza ek kredi paketi satın
            alabilirsiniz — plan yükseltmek zorunda değilsiniz.
          </p>
        </div>
      )}

      <a
        href="#hangi-plan"
        className="mt-5 font-sans text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
      >
        Hangi plan size uyar? ↓
      </a>
    </article>
  )
}

function ComparisonTable() {
  const [open, setOpen] = useState(false)
  const plans = comparisonTablePlans()
  const rows = comparisonTableRows()

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === `#${COMPARE_ANCHOR}`) {
        setOpen(true)
      }
    }
    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  return (
    <section
      id={COMPARE_ANCHOR}
      className="mt-16 scroll-mt-24"
      aria-labelledby="comparison-heading"
    >
      <FadeIn>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 py-4 border-y border-border text-left hover:bg-accent/30 transition-colors px-1"
          aria-expanded={open}
          aria-controls="comparison-table-panel"
        >
          <h3
            id="comparison-heading"
            className="font-serif text-foreground text-xl sm:text-2xl leading-tight"
          >
            Hızlı karşılaştırma
          </h3>
          <IconChevronDown
            size={20}
            stroke={1.5}
            className={`text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        {open ? (
          <div
            id="comparison-table-panel"
            className="pt-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-sans text-xs font-medium text-muted-foreground w-[28%]">
                    &nbsp;
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.slug}
                      className="py-3 px-2 font-sans text-xs font-medium text-center text-muted-foreground"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-b border-border/60">
                    <th
                      scope="row"
                      className="py-3 pr-4 font-sans text-xs font-normal text-muted-foreground text-left align-top"
                    >
                      {row.feature}
                    </th>
                    {row.cells.map((cell, i) => (
                      <td
                        key={`${row.feature}-${plans[i].slug}`}
                        className={`py-3 px-2 font-sans text-xs text-center align-top ${
                          cell.emphasize
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {cell.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </FadeIn>
    </section>
  )
}

export function SubscriptionPricing() {
  const [billing, setBilling] = useState<BillingInterval>("monthly")
  const plans = plansForVariant("studio")
  const discount = plansData.yearlyDiscountPercent

  return (
    <section
      id="fiyatlandirma"
      className={`${containerClass} pb-24`}
      aria-labelledby="subscription-pricing-heading"
    >
      <FadeIn className="pt-16 mb-10 max-w-xl mx-auto text-center">
        <h2
          id="subscription-pricing-heading"
          className="font-serif text-foreground text-balance leading-tight mb-3"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          Planlar
        </h2>
        <p className="font-sans text-muted-foreground text-sm leading-relaxed">
          Aynı abonelik Studio ve Lens ücretli özelliklerini kapsar.
        </p>
      </FadeIn>

      <FadeIn className="mb-10 flex justify-center">
        <div
          className="inline-flex items-center rounded-full border border-border bg-muted/40 p-1"
          role="group"
          aria-label="Faturalandırma dönemi"
        >
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1.5 text-xs font-sans rounded-full transition-colors ${
              billing === "monthly"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={billing === "monthly"}
          >
            Aylık
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            className={`px-4 py-1.5 text-xs font-sans rounded-full transition-colors ${
              billing === "annual"
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={billing === "annual"}
          >
            Yıllık · %{discount} tasarruf
          </button>
        </div>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <StaggerItem key={plan.slug}>
            <PlanCard plan={plan} billing={billing} />
          </StaggerItem>
        ))}
      </Stagger>

      <CreditSystemExplainer />

      <ComparisonTable />

      <UsageCalculator />
    </section>
  )
}
