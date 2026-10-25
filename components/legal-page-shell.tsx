import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroItem, HeroStagger } from "@/components/motion"
import { containerClass } from "@/components/page-container"

type LegalPageShellProps = {
  eyebrow?: string
  title: string
  updatedAt?: string
  version?: string
  children: React.ReactNode
}

export function LegalPageShell({
  eyebrow = "Yasal",
  title,
  updatedAt,
  version,
  children,
}: LegalPageShellProps) {
  const metaParts = [
    updatedAt ? `Son güncelleme: ${updatedAt}` : null,
    version ? `Versiyon: ${version}` : null,
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-16`}>
          <HeroStagger>
            <HeroItem>
              <Link
                href="/yasal"
                className="inline-block text-muted-foreground font-sans text-xs tracking-widest uppercase mb-8 hover:text-foreground transition-colors"
              >
                ← {eyebrow}
              </Link>
            </HeroItem>
            <HeroItem>
              <h1 className="font-serif text-foreground leading-tight tracking-tight text-balance mb-4 text-4xl sm:text-5xl">
                {title}
              </h1>
            </HeroItem>
            {metaParts.length > 0 && (
              <HeroItem>
                <p className="font-sans text-sm text-muted-foreground">
                  {metaParts.join(" · ")}
                </p>
              </HeroItem>
            )}
            <HeroItem>
              <div className="mt-12 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-32`}>
          <article className="legal-prose max-w-3xl flex flex-col gap-10 font-sans text-muted-foreground leading-relaxed">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export function LegalH2({
  id,
  children,
}: {
  id?: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="font-serif text-xl text-foreground mb-3 scroll-mt-28"
    >
      {children}
    </h2>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <LegalH2 id={id}>{title}</LegalH2>
      <div className="flex flex-col gap-4">{children}</div>
    </section>
  )
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-border bg-muted/40">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-medium text-foreground whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LegalLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      {...(/^https?:\/\//.test(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="text-foreground underline underline-offset-2 hover:opacity-80"
    >
      {children}
    </Link>
  )
}
