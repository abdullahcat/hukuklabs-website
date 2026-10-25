import { containerClass } from "@/components/page-container"
import { FadeIn } from "@/components/motion"
import { cn } from "@/lib/utils"

type ProductCtaProps = {
  id?: string
  eyebrow: string
  title: string
  description: string
  action: React.ReactNode
  footnote?: string
  className?: string
}

export function ProductCta({
  id,
  eyebrow,
  title,
  description,
  action,
  footnote,
  className,
}: ProductCtaProps) {
  return (
    <section id={id} className={cn(`${containerClass} py-24 md:py-32 border-t border-border`, className)}>
      <FadeIn>
        <div className="border border-border rounded-sm p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col items-center text-center gap-6 md:gap-8 bg-surface">
          <p className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">
            {eyebrow}
          </p>
          <h2
            className="font-serif text-foreground text-balance leading-tight max-w-2xl"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {title}
          </h2>
          <p className="font-sans text-muted-foreground text-base leading-relaxed max-w-md">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">{action}</div>
          {footnote && (
            <p className="font-mono text-[11px] text-muted-foreground/40">{footnote}</p>
          )}
        </div>
      </FadeIn>
    </section>
  )
}
