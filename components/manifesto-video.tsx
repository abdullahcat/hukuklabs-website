"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
const CONTAINER_MAX_WIDTH = 1320
const CONTAINER_INSET = 24
const GROW_DISTANCE = 500

type ManifestoVideoProps = {
  title: string
  excerpt: string
  href: string
}

export function ManifestoVideo({ title, excerpt, href }: ManifestoVideoProps) {
  const [viewportWidth, setViewportWidth] = useState(1280)

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const { scrollY } = useScroll()

  const containerWidth = Math.min(viewportWidth, CONTAINER_MAX_WIDTH)
  const startPadding = (viewportWidth - containerWidth) / 2 + CONTAINER_INSET

  const paddingX = useTransform(scrollY, [0, GROW_DISTANCE], [startPadding, 0])
  const radius = useTransform(scrollY, [0, GROW_DISTANCE], [24, 0])

  return (
    <div className="w-full">
      <motion.div style={{ paddingLeft: paddingX, paddingRight: paddingX }}>
        <motion.div
          style={{ borderRadius: radius }}
          className="relative min-h-[32rem] sm:min-h-[36rem] overflow-hidden"
        >
          <img
            src="/images/hero-visual.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-black/40"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full min-h-[32rem] sm:min-h-[36rem] flex-col items-center justify-center text-center px-8 sm:px-12">
            <h2
              className="font-serif text-white leading-[1.05] tracking-tight text-balance max-w-3xl"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
            >
              {title}
            </h2>
            <p className="font-sans text-white/85 text-base sm:text-lg leading-relaxed mt-4 max-w-lg">
              {excerpt}
            </p>
            <a
              href={href}
              className="mt-8 inline-flex w-fit items-center rounded-sm bg-white text-black font-sans font-medium hover:bg-white/90 transition-colors"
            >
              Devamını oku
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
