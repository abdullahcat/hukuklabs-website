import Link from "next/link"
import Image from "next/image"
import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"
import { FooterLink } from "@/components/footer-link"
import { Hero05 } from "@/components/ui/hero-05"
import { COMPANY } from "@/lib/company"
import {
  CONTACT_EMAIL,
  EXTERNAL_LINKS,
  footerLegalLinks,
  footerProductLinks,
  footerResourceLinks,
} from "@/lib/site-links"

type FooterProps = {
  tagline?: string
}

export function Footer({ tagline }: FooterProps = {}) {
  const year = new Date().getFullYear()
  const defaultTagline =
    "Türk hukuku için eğitilmiş, doğru yere konmuş, kaynağını gösteren yapay zekâ."

  return (
    <>
      <footer className="bg-[#0a0a0a] text-white">
        <div className={`${containerClass} pt-16 pb-10`}>
          <Stagger className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <StaggerItem className="col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="HukukLabs ana sayfaya git"
              >
                <span className="font-serif text-2xl text-white">HukukLabs</span>
              </Link>
              <p className="font-sans text-sm text-white/50 leading-relaxed mt-4 max-w-xs">
                {tagline ?? defaultTagline}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block font-sans text-sm text-white/60 hover:text-white transition-colors mt-6"
              >
                {CONTACT_EMAIL}
              </a>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-sans text-xs font-medium text-white/40 uppercase tracking-widest mb-5">
                Ürünler
              </h3>
              <nav className="flex flex-col gap-3" aria-label="Ürün linkleri">
                {footerProductLinks.map((link) => (
                  <FooterLink key={link.label} link={link} />
                ))}
              </nav>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-sans text-xs font-medium text-white/40 uppercase tracking-widest mb-5">
                Kaynaklar
              </h3>
              <nav className="flex flex-col gap-3" aria-label="Kaynak linkleri">
                {footerResourceLinks.map((link) => (
                  <FooterLink key={link.label} link={link} />
                ))}
              </nav>
            </StaggerItem>

            <StaggerItem>
              <h3 className="font-sans text-xs font-medium text-white/40 uppercase tracking-widest mb-5">
                Yasal
              </h3>
              <nav className="flex flex-col gap-3" aria-label="Yasal linkler">
                {footerLegalLinks.map((link) => (
                  <FooterLink key={link.label} link={link} />
                ))}
              </nav>
            </StaggerItem>
          </Stagger>

          <FadeIn className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/35">
              &copy; {year} {COMPANY.brand}. Tüm hakları saklıdır.
            </p>
            <a
              href={EXTERNAL_LINKS.status}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/50 hover:text-white transition-colors shrink-0"
            >
              Durum
            </a>
          </FadeIn>

          {/* iyzico — slider (Hero05) hemen üstünde */}
          <FadeIn className="mt-10 pt-8 border-t border-white/10 flex justify-start sm:justify-end">
            <a
              href="https://www.iyzico.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex opacity-80 hover:opacity-100 transition-opacity"
              aria-label="iyzico ile öde"
            >
              <Image
                src="/iyzico-ile-ode-white.svg"
                alt="iyzico ile öde"
                width={228}
                height={16}
                className="h-4 w-auto"
                unoptimized
              />
            </a>
          </FadeIn>
        </div>
      </footer>
      <Hero05
        tagline=""
        title=""
        description=""
        landscapeImage="/hero-05-landscape.png"
        landscapeAlt="HukukLabs için tasarlanmış minimal çalışma alanı görseli"
        animation="subtle"
        variant="compact"
      />
    </>
  )
}
