import { containerClass } from "@/components/page-container"
import { Stagger, StaggerItem } from "@/components/motion"

const badges = [
  {
    label: "KVKK 6698 Uyumlu",
    description: "Türk mevzuatına tam uyum",
  },
  {
    label: "Mevzuata Uygun Şablonlar",
    description: "Hukuki incelemeye hazır taslaklar",
  },
  {
    label: "Her Zaman Güncel",
    description: "Mevzuat değişikliklerinde otomatik güncelleme",
  },
]

export function TrustSignals() {
  return (
    <section className="py-16">
      <div className={containerClass}>
        <Stagger className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {badges.map((badge, index) => (
            <StaggerItem key={badge.label}>
              <div className="flex items-center gap-3">
                {/* Checkmark */}
                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-muted-foreground"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                {/* Text */}
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-foreground">
                    {badge.label}
                  </span>
                  <span className="font-sans text-xs text-muted-foreground/50">
                    {badge.description}
                  </span>
                </div>

                {/* Separator (hidden on mobile, hidden for last item) */}
                {index < badges.length - 1 && (
                  <div className="hidden sm:block w-px h-8 bg-border ml-6" aria-hidden="true" />
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
