import actionCostsConfig from "@/config/action_costs.json"
import { getPlanBySlug, type PlanSlug } from "@/lib/plans"

export type UsageMode =
  | "dilekce"
  | "sozlesme"
  | "ictihat"
  | "mevzuat"
  | "danisma"
  | "deep_research"
  | "ocr_page"

type ActionCostsConfig = {
  source: string
  modes: Record<UsageMode, number>
}

export const ACTION_COSTS = actionCostsConfig as ActionCostsConfig

export type CalculatorPlanSlug = Extract<PlanSlug, "solo" | "pro" | "max">

export type CalculatorPlanResult = {
  slug: CalculatorPlanSlug
  name: string
  monthlyPrice: number
  usagePercent: number
}

export type UsageScenario = Record<UsageMode, number>

const PLAN_ORDER: CalculatorPlanSlug[] = ["solo", "pro", "max"]

export function computeTotalNeed(input: UsageScenario): number {
  const { modes } = ACTION_COSTS
  let total = 0
  for (const key of Object.keys(modes) as UsageMode[]) {
    total += (input[key] ?? 0) * modes[key]
  }
  return total
}

export function usagePercentForCredits(
  totalNeed: number,
  credits: number,
): number {
  if (credits <= 0) return 100
  return Math.min(100, Math.round((totalNeed / credits) * 1000) / 10)
}

/** Approx. how many of one action fit in a monthly credit balance. */
export function approxCountForCredits(
  credits: number,
  costPerAction: number,
): number {
  if (costPerAction <= 0 || credits <= 0) return 0
  return Math.floor(credits / costPerAction)
}

export function planEquivalents(credits: number) {
  const { modes } = ACTION_COSTS
  return {
    dilekce: approxCountForCredits(credits, modes.dilekce),
    sozlesme: approxCountForCredits(credits, modes.sozlesme),
    ictihat: approxCountForCredits(credits, modes.ictihat),
    mevzuat: approxCountForCredits(credits, modes.mevzuat),
    danisma: approxCountForCredits(credits, modes.danisma),
    deep_research: approxCountForCredits(credits, modes.deep_research),
    ocr_page: approxCountForCredits(credits, modes.ocr_page),
  }
}

/** Cheapest plan (Solo → Pro → Max) with usage strictly under 85%. */
export function recommendPlan(
  results: CalculatorPlanResult[],
): CalculatorPlanSlug | null {
  for (const slug of PLAN_ORDER) {
    const row = results.find((r) => r.slug === slug)
    if (row && row.usagePercent < 85) return slug
  }
  return null
}

export function calculatorPlanResults(
  totalNeed: number,
): CalculatorPlanResult[] {
  return PLAN_ORDER.map((slug) => {
    const plan = getPlanBySlug(slug)
    const credits = plan?.monthlyCredits ?? 0
    const monthlyPrice = plan?.monthlyPrice ?? 0
    return {
      slug,
      name: plan?.name ?? slug,
      monthlyPrice,
      usagePercent: usagePercentForCredits(totalNeed, credits),
    }
  })
}
