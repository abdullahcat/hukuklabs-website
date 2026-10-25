"use client"

import {
  IconArrowRight,
  IconFileText,
  IconFileDescription,
  IconSearch,
  IconMessageCircle,
  IconStack2,
  IconScan,
} from "@tabler/icons-react"
import { FadeIn } from "@/components/motion"

const FLOW_ITEMS = [
  { label: "Dilekçe", Icon: IconFileText },
  { label: "Sözleşme", Icon: IconFileDescription },
  { label: "Arama", Icon: IconSearch },
  { label: "Soru", Icon: IconMessageCircle },
  { label: "Tarama", Icon: IconScan },
] as const

const EXPLANATIONS = [
  {
    index: "01",
    title: "Nasıl çalışır?",
    body: "Her plan aylık bir kredi bakiyesi verir. Dilekçe, sözleşme, arama, danışma — hepsi aynı havuzdan, gerçek kullandığınız kadar düşer. Kullanmadığınız kredi başka bir işe kayar; belirli bir özelliğe kilitli değil.",
  },
  {
    index: "02",
    title: "Neden farklı işlemler farklı kredi yer?",
    body: "Uzun bir dilekçe taslağı, kısa bir soru-cevaptan doğal olarak daha fazla işlem gücü gerektirir — kredi tüketimi buna göre orantılı, keyfi değil.",
  },
] as const

export function CreditSystemExplainer() {
  return (
    <FadeIn className="mt-16 scroll-mt-24" id="kredi-sistemi">
      <div className="rounded-lg bg-[#0a0a0a] text-white px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 lg:gap-14 xl:gap-16 items-stretch">
          {/* Left — copy */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 mb-4">
                Kredi sistemi
              </p>
              <h3
                className="font-serif text-white text-balance leading-[1.1] tracking-tight mb-4"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.35rem)" }}
              >
                Paylaşımlı kredi havuzu
              </h3>
              <p className="font-sans text-sm sm:text-[0.95rem] text-white/55 leading-relaxed max-w-md">
                Özellik başına sabit kota yok. Tüm işlemler aynı bakiyeden, gerçek
                maliyete göre düşer — kullandığınız kadar; fazla yazıp arkadan
                kısmıyoruz.
              </p>
            </div>

            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {EXPLANATIONS.map((item) => (
                <div
                  key={item.index}
                  className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5 py-5 sm:py-6"
                >
                  <span className="font-mono text-[11px] text-white/30 pt-0.5 tabular-nums">
                    {item.index}
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-medium text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-sm text-white/55 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div
            className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.04] min-h-[320px] sm:min-h-[380px] flex flex-col justify-between p-6 sm:p-8"
            aria-label="İşlemler tek kredi havuzuna akar"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage: `
                  radial-gradient(ellipse 70% 55% at 70% 20%, rgba(255,255,255,0.06), transparent 60%),
                  radial-gradient(ellipse 50% 40% at 20% 90%, rgba(255,255,255,0.03), transparent 55%)
                `,
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />

            <div className="relative z-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 mb-6">
                Tek havuz
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {FLOW_ITEMS.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 rounded-sm border border-white/10 bg-white/[0.04] px-2 py-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center text-white">
                      <Icon size={18} stroke={1.5} aria-hidden />
                    </span>
                    <span className="font-sans text-[11px] text-white/50 text-center leading-none">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3 my-5 sm:my-6">
              <div className="flex items-center gap-2 text-white/25">
                <span className="h-px w-8 sm:w-12 bg-white/15" aria-hidden />
                <IconArrowRight
                  size={18}
                  stroke={1.5}
                  className="rotate-90"
                  aria-hidden
                />
                <span className="h-px w-8 sm:w-12 bg-white/15" aria-hidden />
              </div>
              <p className="font-sans text-[11px] text-white/40 tracking-wide">
                gerçek maliyet kadar düşer
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-4 rounded-sm bg-white text-black px-5 py-4 sm:px-6 sm:py-5">
              <span className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm bg-black/5">
                <IconStack2 size={22} stroke={1.5} aria-hidden />
              </span>
              <div>
                <p className="font-serif text-lg sm:text-xl leading-tight tracking-tight">
                  Kredi havuzu
                </p>
                <p className="font-sans text-xs text-black/50 mt-1 leading-snug">
                  Aylık bakiye · özelliklere kilitli değil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
