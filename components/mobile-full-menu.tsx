"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { containerClass, navbarHeightClass } from "@/components/page-container"

export type MobileMenuLink = {
  label: string
  href: string
  external?: boolean
  group?: string
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      width="18"
      height="18"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" />
    </svg>
  )
}

export function MobileMenuToggle({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
    >
      <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        {open ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2z"
          />
        )}
      </svg>
    </button>
  )
}

function MenuLink({
  link,
  onClose,
  className,
  style,
}: {
  link: MobileMenuLink
  onClose: () => void
  className: string
  style?: React.CSSProperties
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onClick={onClose}
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className} style={style} onClick={onClose}>
      {link.label}
    </Link>
  )
}

export function MobileFullMenu({
  open,
  onClose,
  brand,
  label,
  links,
  footer,
}: {
  open: boolean
  onClose: () => void
  brand: React.ReactNode
  label: string
  links: MobileMenuLink[]
  footer?: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) {
      setOpenGroup(null)
      return
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  if (!mounted) return null

  const groups: { name: string | null; items: MobileMenuLink[] }[] = []
  for (const link of links) {
    const name = link.group ?? null
    const last = groups[groups.length - 1]
    if (!last || last.name !== name) {
      groups.push({ name, items: [link] })
    } else {
      last.items.push(link)
    }
  }

  const titleStyle = { fontSize: "clamp(1.75rem, 7vw, 2.35rem)" }
  const titleClass =
    "flex w-full items-center justify-between py-3 border-b border-border font-serif text-foreground leading-tight text-left"

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-full-menu"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 z-[80] bg-background text-foreground"
        >
          <div className={`${containerClass} ${navbarHeightClass} flex items-center justify-between`}>
            <div onClick={onClose}>{brand}</div>
            <MobileMenuToggle open onClick={onClose} />
          </div>

          <nav
            className={`${containerClass} flex flex-col h-[calc(100dvh-4rem)] pb-8 overflow-y-auto`}
            aria-label={label}
          >
            <div className="flex flex-col pb-6">
              {groups.map((group) => {
                if (!group.name) {
                  return group.items.map((link) => (
                    <MenuLink
                      key={link.href + link.label}
                      link={link}
                      onClose={onClose}
                      className="block py-3 border-b border-border font-serif text-foreground leading-tight"
                      style={titleStyle}
                    />
                  ))
                }

                const expanded = openGroup === group.name
                return (
                  <div key={group.name}>
                    <button
                      type="button"
                      className={titleClass}
                      style={titleStyle}
                      aria-expanded={expanded}
                      onClick={() => setOpenGroup(expanded ? null : group.name)}
                    >
                      {group.name}
                      <Chevron open={expanded} />
                    </button>
                    {expanded ? (
                      <div className="flex flex-col pb-2">
                        {group.items.map((link) => (
                          <MenuLink
                            key={link.href + link.label}
                            link={link}
                            onClose={onClose}
                            className="block py-2.5 pl-1 font-sans text-base text-muted-foreground hover:text-foreground"
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>

            {footer ? <div className="mt-auto flex flex-col gap-3 pt-4">{footer}</div> : null}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
