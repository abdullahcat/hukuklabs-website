"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { useReducedMotion } from "framer-motion"

const LINE_1 = "Türk hukukuna göre"
const LINE_2 = "eğitilmiş yapay zekâ."
const FULL = `${LINE_1}\n${LINE_2}`

export function HeroTypewriter({ className, style }: { className?: string; style?: CSSProperties }) {
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(0)
  const done = reduceMotion || count >= FULL.length
  const shown = done ? FULL : FULL.slice(0, count)
  const [line1, line2 = ""] = shown.split("\n")
  const onSecondLine = shown.includes("\n")

  useEffect(() => {
    if (reduceMotion || count >= FULL.length) return
    const delay = FULL[count] === "\n" ? 280 : 52
    const timer = window.setTimeout(() => setCount((value) => value + 1), delay)
    return () => window.clearTimeout(timer)
  }, [count, reduceMotion])

  return (
    <h1 aria-label={`${LINE_1} ${LINE_2}`} className={`relative ${className ?? ""}`} style={style}>
      <span className="invisible block" aria-hidden="true">
        {LINE_1}
        <br />
        {LINE_2}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {line1}
        {onSecondLine && (
          <>
            <br />
            {line2}
          </>
        )}
        {!done && (
          <span className="ml-[0.06em] inline-block h-[0.72em] w-[0.045em] translate-y-[0.06em] bg-foreground align-baseline animate-[caret-blink_1s_steps(1)_infinite]" />
        )}
      </span>
    </h1>
  )
}
