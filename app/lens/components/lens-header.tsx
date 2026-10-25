"use client"

import { useState } from "react"
import Link from "next/link"
import { Michroma } from "next/font/google"
import { containerClass, navbarHeightClass } from "@/components/page-container"
import { MotionHeader } from "@/components/motion"
import { MobileFullMenu, MobileMenuToggle } from "@/components/mobile-full-menu"

const michroma = Michroma({ subsets: ["latin"], weight: "400" })

const navLinks = [
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Fiyatlandırma", href: "#fiyatlandirma" },
  { label: "Nasıl Çalışır?", href: "#nasil-calisir" },
]

export function LensHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <MotionHeader className="fixed top-[var(--announcement-h,0px)] left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className={`${containerClass} ${navbarHeightClass} flex items-center justify-between gap-4`}>
        <Link
          href="/lens"
          className="flex items-center gap-3 group"
          aria-label="Lens ana sayfaya git"
        >
          <span className={`${michroma.className} text-lg text-foreground group-hover:opacity-80 transition-opacity`}>
            lens
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Lens navigasyon"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground text-sm font-sans hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#install"
              className="hidden md:inline-flex items-center px-5 py-1.5 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Chrome&apos;a Ekle
            </Link>

            <MobileMenuToggle open={menuOpen} onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </div>
    </MotionHeader>
      <MobileFullMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        label="Lens menü"
        brand={
          <Link href="/lens" aria-label="Lens ana sayfaya git">
            <span className={`${michroma.className} text-lg text-foreground`}>lens</span>
          </Link>
        }
        links={navLinks}
        footer={
          <Link
            href="#install"
            className="text-center px-4 py-3 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Chrome&apos;a Ekle
          </Link>
        }
      />
    </>
  )
}
