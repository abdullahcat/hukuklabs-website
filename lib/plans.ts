import plansConfig from "@/config/plans.json"
import { EXTERNAL_LINKS } from "@/lib/site-links"

export type BillingInterval = "monthly" | "annual"

export type PlanSlug = "ucretsiz" | "solo" | "pro" | "max" | "enterprise"

export type PlanKind = "free" | "paid" | "enterprise"

export type PlanFeatureMatrix = {
  studioAccess: "none" | "full" | "full_custom_model"
  lensSync: "none" | "standard" | "priority"
  lensPdf: "none" | "unlimited"
  exportFormats: Array<"pdf" | "docx" | "udf" | "custom">
  templateLibrary:
    | "none"
    | "basic"
    | "advanced"
    | "advanced_custom"
    | "custom_team"
  supportChannel:
    | "help_center"
    | "email"
    | "email_chat"
    | "email_chat_phone"
    | "dedicated"
  supportResponseHours: number | null
  extraCredits: "none" | true | "custom"
  invoicing: "none" | "auto" | "auto_accounting"
}

export type Plan = {
  slug: PlanSlug
  name: string
  kind: PlanKind
  monthlyPrice: number | null
  yearlyPrice: number | null
  monthlyEquivalent: number | null
  annualSavings?: number
  monthlyCredits: number | null
  dailyCap: number | null
  capacityMultiplier?: number | null
  tagline?: string
  includesEverythingIn?: PlanSlug | null
  tierExtras?: string[]
  exampleScenario?: {
    documentsMonthly: number
    searchesMonthly: number
  }
  badges: string[]
  popular: boolean
  pricingModel?: "volume_based"
  shortDescription?: string
  features: PlanFeatureMatrix
  cta?: string
  ctaHref?: string
  showOn: ("studio" | "lens")[]
}

export type PlansConfig = {
  yearlyDiscountPercent: number
  currency: string
  footnote: string
  faq: { question: string; answer: string }[]
  baseFeatures: string[]
  plans: Plan[]
}

export type ComparisonCell = {
  value: string
  emphasize?: boolean
}

export type ComparisonRow = {
  feature: string
  cells: ComparisonCell[]
}

export type PlanCardContent = {
  heading?: string
  items: string[]
}

export const plansData = plansConfig as PlansConfig

export function formatTRY(amount: number): string {
  return `₺${amount.toLocaleString("tr-TR")}`
}

export function formatCredits(n: number): string {
  return n.toLocaleString("tr-TR")
}

export function formatMultiplier(n: number): string {
  return n.toLocaleString("tr-TR", {
    maximumFractionDigits: 1,
    minimumFractionDigits: Number.isInteger(n) ? 0 : 1,
  })
}

export function plansForVariant(variant: "studio" | "lens"): Plan[] {
  return plansData.plans.filter((plan) => plan.showOn.includes(variant))
}

export function studioPaidPlans(): Plan[] {
  return plansForVariant("studio").filter((p) => p.kind === "paid")
}

export function getPlanBySlug(slug: PlanSlug): Plan | undefined {
  return plansData.plans.find((p) => p.slug === slug)
}

/** Dynamic capacity line from capacityMultiplier — no hardcoded Nx text. */
export function capacityFeatureLine(plan: Plan): string {
  const multiplier = plan.capacityMultiplier
  if (multiplier == null || multiplier <= 1) {
    return "Standart kullanım kapasitesi"
  }

  return `Solo'nun ${formatMultiplier(multiplier)} katı kullanım kapasitesi`
}

/** Claude-style tiered feature list for a plan card. */
export function planCardContent(plan: Plan): PlanCardContent {
  const everythingHeading = (parentName: string) => {
    const suffix = /[aeıioöuü]$/i.test(parentName) ? "'da" : "'ta"
    return `${parentName}${suffix} olan her şey, ayrıca:`
  }

  if (plan.kind === "enterprise") {
    const parent = plan.includesEverythingIn
      ? getPlanBySlug(plan.includesEverythingIn)
      : undefined
    return {
      heading: parent ? everythingHeading(parent.name) : undefined,
      items: plan.tierExtras ?? [],
    }
  }

  if (plan.slug === "solo" || !plan.includesEverythingIn) {
    return {
      items: [...plansData.baseFeatures, capacityFeatureLine(plan)],
    }
  }

  const parent = getPlanBySlug(plan.includesEverythingIn)
  return {
    heading: parent ? everythingHeading(parent.name) : undefined,
    items: [capacityFeatureLine(plan)],
  }
}

export function capacityTableLabel(plan: Plan): string {
  const m = plan.capacityMultiplier
  if (plan.kind === "enterprise" || m == null) {
    const max = getPlanBySlug("max")
    const maxM = max?.capacityMultiplier ?? 5
    return `Özel (${formatMultiplier(maxM)}x üzeri)`
  }
  if (m <= 1) return "Standart (1x)"
  if (m <= 2) return "Geniş (2x)"
  return "En Yüksek (5x)"
}

export function subscribeUrl(
  slug: Extract<PlanSlug, "solo" | "pro" | "max">,
  billing: BillingInterval,
  options?: { trial?: boolean }
): string {
  const params = new URLSearchParams({
    plan: slug,
    billing,
  })
  if (options?.trial) params.set("trial", "true")
  return `${EXTERNAL_LINKS.app}/subscribe?${params.toString()}`
}

/** Comparison table: Solo / Pro / Max only — no Enterprise. */
export function comparisonTablePlans(): Plan[] {
  return plansForVariant("studio").filter((plan) => plan.kind !== "enterprise")
}

const COMPARISON_INCLUDED_FEATURES = [
  "Dilekçe Oluşturma",
  "Sözleşme Oluşturma",
  "Dilekçe İnceleme",
  "Sözleşme İnceleme",
  "Dava Analizi",
  "İçtihat Arama",
  "Mevzuat Arama",
  "Sohbet",
  "Belge Tarama",
  "Lens — UYAP Aktarımı + Hatırlatıcı",
  "Lens — Sınırsız PDF İndirme",
] as const

export function comparisonTableRows(): ComparisonRow[] {
  const plans = comparisonTablePlans()
  const included = (value = "✓"): ComparisonCell[] =>
    plans.map(() => ({ value }))

  return [
    {
      feature: "Kapasite",
      cells: plans.map((plan) => ({
        value: capacityTableLabel(plan),
        emphasize: plan.slug !== "solo",
      })),
    },
    ...COMPARISON_INCLUDED_FEATURES.map((feature) => ({
      feature,
      cells: included(),
    })),
  ]
}
