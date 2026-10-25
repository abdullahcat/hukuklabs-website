"use client"

import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const layers = [
  { name: "Studio", tag: "IDE", desc: "Belge & editör" },
  { name: "Lens", tag: "Uzantı", desc: "UYAP senkron & PDF" },
  { name: "LawAPI", tag: "API", desc: "Mevzuat & içtihat" },
  { name: "Comply", tag: "Uyumluluk", desc: "KVKK & GDPR" },
]

const cellAlign = [
  "items-start justify-start",
  "items-start justify-end",
  "items-end justify-start",
  "items-end justify-end",
] as const

const rotations = [-1.5, 1.5, -1, 1] as const

export function HeroVisual() {
  return (
    <FadeIn
      delay={0.15}
      className="relative hidden lg:block w-full max-w-md xl:max-w-lg justify-self-end"
      aria-hidden="true"
    >
      <div className="relative aspect-[4/5]">
        <div className="absolute inset-0 rounded-2xl border border-border/70 bg-surface/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />

        <div className="absolute inset-3 rounded-xl border border-border/50 hero-visual-grid overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-transparent to-foreground/[0.03]" />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-border/60 bg-background/80 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-foreground/10 bg-foreground/[0.04]" />
          </div>

          <svg
            className="absolute inset-0 w-full h-full text-border/80"
            viewBox="0 0 400 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <line x1="200" y1="250" x2="100" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="250" x2="300" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="250" x2="100" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="250" x2="300" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          <Stagger className="absolute inset-0 p-6 grid grid-cols-2 grid-rows-2 gap-4">
            {layers.map((layer, i) => (
              <StaggerItem
                key={layer.name}
                className={`flex ${cellAlign[i]}`}
              >
                <div
                  className="hero-visual-card w-[92%] rounded-lg border border-border bg-card/90 backdrop-blur-sm p-4 shadow-sm"
                  style={{
                    transform: `rotate(${rotations[i]}deg)`,
                    animationDelay: `${i * -1.5}s`,
                  }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-2">
                    {layer.tag}
                  </p>
                  <p className="font-sans text-sm font-medium text-foreground mb-1">{layer.name}</p>
                  <p className="font-sans text-xs text-muted-foreground leading-snug">{layer.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="absolute -top-px -right-px w-16 h-16 border-t border-r border-foreground/15 rounded-tr-2xl" />
        <div className="absolute -bottom-px -left-px w-16 h-16 border-b border-l border-foreground/15 rounded-bl-2xl" />
      </div>
    </FadeIn>
  )
}
