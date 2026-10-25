"use client"

import { useState } from "react"
import { IconCheck, IconCopy } from "@tabler/icons-react"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 font-sans font-medium text-white border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
      aria-live="polite"
    >
      {copied ? <IconCheck size={16} aria-hidden="true" /> : <IconCopy size={16} aria-hidden="true" />}
      {copied ? "Kopyalandı" : "Adresi kopyala"}
    </button>
  )
}
