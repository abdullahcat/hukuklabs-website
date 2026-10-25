"use client"

import { useState } from "react"
import Link from "next/link"
import { Google_Sans_Flex } from "next/font/google"
import { containerClass, navbarHeightClass } from "@/components/page-container"
import { MotionHeader } from "@/components/motion"
import { MobileFullMenu, MobileMenuToggle } from "@/components/mobile-full-menu"

const googleSansFlex = Google_Sans_Flex({ subsets: ["latin"], weight: "400" })

const navLinks = [
  { label: "Nasıl Çalışır", href: "#nasil-calisir" },
  { label: "Bekleme Listesi", href: "#bekleme-listesi" },
  { label: "SSS", href: "#sss" },
]

export function ComplyHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <MotionHeader className="fixed top-[var(--announcement-h,0px)] left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className={`${containerClass} ${navbarHeightClass} flex items-center justify-between gap-4`}>
        <Link
          href="/comply"
          className="flex items-center gap-3 group"
          aria-label="Comply ana sayfaya git"
        >
          <span
            className={`${googleSansFlex.className} text-foreground group-hover:opacity-80 transition-opacity`}
            style={{
              fontSize: "22px",
              fontWeight: 400,
              fontOpticalSizing: "auto",
              fontVariationSettings: "'wdth' 100, 'slnt' 0",
            }}
          >
            comply
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Comply navigasyon"
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
              href="#bekleme-listesi"
              className="hidden md:inline-flex items-center px-5 py-1.5 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:opacity-90 transition-opacity"
            >
              Bekleme Listesi
            </Link>

            <MobileMenuToggle open={menuOpen} onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </div>
    </MotionHeader>
      <MobileFullMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        label="Comply menü"
        brand={
          <Link href="/comply" aria-label="Comply ana sayfaya git">
            <span
              className={`${googleSansFlex.className} text-foreground`}
              style={{
                fontSize: "22px",
                fontWeight: 400,
                fontOpticalSizing: "auto",
                fontVariationSettings: "'wdth' 100, 'slnt' 0",
              }}
            >
              comply
            </span>
          </Link>
        }
        links={navLinks}
        footer={
          <Link
            href="#bekleme-listesi"
            className="text-center px-4 py-3 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Bekleme Listesine Katıl
          </Link>
        }
      />
    </>
  )
}
