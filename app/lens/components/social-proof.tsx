import { containerClass } from "@/components/page-container"
import { Stagger, StaggerItem } from "@/components/motion"

const stats = [
  { value: "2.400+", label: "aktif avukat" },
  { value: "94%", label: "zaman tasarrufu bildiriyor" },
  { value: "180+", label: "baro kaydı temsil ediliyor" },
]

export function SocialProof() {
  return (
    <section className="border-y border-border">
      <div className={`${containerClass} py-16`}>
        <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border sm:bg-transparent sm:divide-x sm:divide-border sm:gap-0">
          {stats.map(({ value, label }) => (
            <StaggerItem key={label}>
              <div className="flex flex-col items-center justify-center gap-2 py-8 sm:py-6 bg-background">
                <span
                  className="font-serif text-foreground"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  aria-label={`${value} ${label}`}
                >
                  {value}
                </span>
                <span className="font-mono text-xs text-muted-foreground/50 tracking-wide uppercase">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
