import Image from "next/image"
import { cn } from "@/lib/utils"

const WORDMARKS = {
  dark: "/hukuklabs-wordmark-dark.svg",
  white: "/hukuklabs-wordmark-white.svg",
} as const

const ASPECT_RATIO = 1500 / 463.5

type WordmarkLogoProps = {
  variant?: keyof typeof WORDMARKS
  height?: number
  className?: string
  priority?: boolean
}

export function WordmarkLogo({
  variant = "dark",
  height = 32,
  className,
  priority,
}: WordmarkLogoProps) {
  const width = Math.round(height * ASPECT_RATIO)

  return (
    <Image
      src={WORDMARKS[variant]}
      alt="HukukLabs"
      width={width}
      height={height}
      priority={priority}
      className={cn("w-auto shrink-0", className)}
      style={{ height, width: "auto", maxWidth: width }}
    />
  )
}
