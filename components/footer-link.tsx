import Link from "next/link"
import type { NavLinkItem } from "@/lib/site-links"

export function FooterLink({ link }: { link: NavLinkItem }) {
  const className = "font-sans text-sm text-white/70 hover:text-white transition-colors"

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    )
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  )
}
