"use client"

import * as React from "react"
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

export interface HowItWorksStep {
  title: string
  description: string
}

export interface HowItWorksProps {
  steps?: HowItWorksStep[]
  eyebrow?: string
  heading?: string
  className?: string
}

const defaultSteps: HowItWorksStep[] = [
  {
    title: "Hesap Oluşturun",
    description: "Dakikalar içinde kaydolun ve e-postanızı doğrulayın.",
  },
  {
    title: "Belgenizi Girin",
    description: "Dava dosyanızı yükleyin ya da hukuki sorunuzu yazın.",
  },
  {
    title: "Analiz Edin",
    description: "Yapay zeka, hukuki dayanağı ve içtihatları sizin için tarar.",
  },
  {
    title: "Sonucu Kullanın",
    description: "Taslağı düzenleyin, onaylayın ve dosyanıza ekleyin.",
  },
]

function StepCard({
  number,
  title,
  description,
  align,
  index,
}: {
  number: string
  title: string
  description: string
  align: "start" | "end"
  index: number
}) {
  const reduceMotion = useReducedMotion()
  const fromX = align === "start" ? -28 : 28

  return (
    <m.div
      className={cn(
        "relative w-full md:w-[48%]",
        align === "end" ? "md:ml-auto" : "md:mr-auto",
      )}
      initial={reduceMotion ? false : { opacity: 0, x: fromX, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <m.div
        className="bg-card border border-border rounded-2xl p-6 sm:p-7 shadow-sm"
        whileHover={reduceMotion ? undefined : { y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-serif text-foreground/70 text-4xl block mb-3">
          {number}
        </span>
        <h3 className="font-serif text-foreground text-xl mb-2">{title}</h3>
        <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-md">
          {description}
        </p>
      </m.div>
    </m.div>
  )
}

export function HowItWorks({
  steps,
  eyebrow = "Nasıl Çalışır",
  heading,
  className,
}: HowItWorksProps) {
  const data = steps && steps.length > 0 ? steps : defaultSteps

  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("relative", className)}>
        {(eyebrow || heading) && (
          <div className="mb-10">
            {eyebrow && (
              <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-4">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                className="font-serif text-foreground text-balance leading-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                {heading}
              </h2>
            )}
          </div>
        )}

        <div className="relative">
          <svg
            className="pointer-events-none absolute inset-y-0 left-1/2 hidden h-full w-px -translate-x-1/2 md:block"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <m.line
              x1="1"
              y1="0"
              x2="1"
              y2="100"
              stroke="currentColor"
              className="text-border"
              strokeWidth="2"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <div className="relative flex flex-col gap-4 md:gap-5">
            {data.map((step, index) => (
              <StepCard
                key={step.title}
                number={`0${index + 1}`}
                title={step.title}
                description={step.description}
                align={index % 2 === 0 ? "start" : "end"}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </LazyMotion>
  )
}

export default HowItWorks
