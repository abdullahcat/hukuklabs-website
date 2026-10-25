"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { MotionHeader, MotionDropdown } from "@/components/motion"
import { containerClass, navbarHeightClass } from "@/components/page-container"
import { WordmarkLogo } from "@/components/wordmark-logo"
import { MobileFullMenu, MobileMenuToggle } from "@/components/mobile-full-menu"
import {
  EXTERNAL_LINKS,
  mainNavLinks,
  productLinks,
  resourceLinks,
  type NavLinkItem,
} from "@/lib/site-links"

type OpenMenu = "products" | "resources" | null

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
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

function NavDropdownLink({
  item,
  onNavigate,
}: {
  item: NavLinkItem
  onNavigate: () => void
}) {
  const className =
    "flex items-start justify-between px-2 py-2 rounded-lg hover:bg-accent transition-colors duration-150 group"

  const content = (
    <>
      <div>
        <span className="block text-sm font-sans font-medium text-foreground">{item.label}</span>
        {item.desc && (
          <span className="block text-xs font-sans text-muted-foreground mt-0.5">{item.desc}</span>
        )}
      </div>
      <svg
        className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-muted-foreground mt-0.5 shrink-0 transition-colors"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 11L11 3M11 3H6M11 3v5" />
      </svg>
    </>
  )

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={className}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={item.href} onClick={onNavigate} className={className}>
      {content}
    </Link>
  )
}

function DropdownPanel({
  label,
  items,
  open,
  onClose,
}: {
  label: string
  items: NavLinkItem[]
  open: boolean
  onClose: () => void
}) {
  return (
    <MotionDropdown open={open}>
      <div className="absolute top-full left-0 mt-2 w-64 bg-popover border border-border rounded-xl shadow-lg overflow-hidden z-50">
        <div className="p-3">
          <p className="font-sans text-muted-foreground text-[10px] tracking-widest uppercase px-2 mb-2">
            {label}
          </p>
          <div className="flex flex-col gap-0.5">
            {items.map((item) => (
              <NavDropdownLink key={item.label} item={item} onNavigate={onClose} />
            ))}
          </div>
        </div>
      </div>
    </MotionDropdown>
  )
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node
      if (productsRef.current?.contains(target) || resourcesRef.current?.contains(target)) return
      setOpenMenu(null)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
  }

  return (
    <>
    <MotionHeader className="fixed top-[var(--announcement-h,0px)] left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className={`${containerClass} ${navbarHeightClass} flex items-center justify-between`}>
        <Link
          href="/"
          className="hover:opacity-75 transition-opacity shrink-0"
          aria-label="HukukLabs ana sayfaya git"
        >
          <WordmarkLogo height={32} priority />
        </Link>

        <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-1" aria-label="Ana navigasyon">
          <div className="relative" ref={productsRef}>
            <button
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
              aria-expanded={openMenu === "products"}
              aria-haspopup="true"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
            >
              Ürünler
              <ChevronDown
                className={`transition-transform duration-200 ${openMenu === "products" ? "rotate-180" : ""}`}
              />
            </button>
            <DropdownPanel
              label="Ürünler"
              items={productLinks}
              open={openMenu === "products"}
              onClose={() => setOpenMenu(null)}
            />
          </div>

          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setOpenMenu(openMenu === "resources" ? null : "resources")}
              aria-expanded={openMenu === "resources"}
              aria-haspopup="true"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
            >
              Kaynaklar
              <ChevronDown
                className={`transition-transform duration-200 ${openMenu === "resources" ? "rotate-180" : ""}`}
              />
            </button>
            <DropdownPanel
              label="Kaynaklar"
              items={resourceLinks}
              open={openMenu === "resources"}
              onClose={() => setOpenMenu(null)}
            />
          </div>

          {mainNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3.5 py-2 rounded-md text-sm font-sans text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={EXTERNAL_LINKS.studio}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-1.5 bg-foreground text-background text-sm font-sans font-medium rounded-sm hover:bg-foreground/85 transition-colors duration-150"
          >
            Studio&apos;yu Dene
          </a>

          <MobileMenuToggle open={mobileOpen} onClick={() => setMobileOpen(true)} />
        </div>
        </div>
      </div>
    </MotionHeader>
      <MobileFullMenu
        open={mobileOpen}
        onClose={closeMobile}
        label="Ana menü"
        brand={
          <Link href="/" aria-label="HukukLabs ana sayfaya git">
            <WordmarkLogo height={32} />
          </Link>
        }
        links={[
          ...productLinks.map((item) => ({
            label: item.label,
            href: item.href,
            external: item.external,
            group: "Ürünler",
          })),
          ...resourceLinks.map((item) => ({
            label: item.label,
            href: item.href,
            external: item.external,
            group: "Kaynaklar",
          })),
          ...mainNavLinks.map((item) => ({
            label: item.label,
            href: item.href,
          })),
        ]}
        footer={
          <a
            href={EXTERNAL_LINKS.studio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 bg-foreground text-background text-sm font-medium rounded-sm"
            onClick={closeMobile}
          >
            Studio&apos;yu Dene
          </a>
        }
      />
    </>
  )
}
