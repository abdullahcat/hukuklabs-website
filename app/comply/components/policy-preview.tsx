import { containerClass } from "@/components/page-container"
import { FadeIn } from "@/components/motion"

const sampleSections = [
  { title: "1. Veri Sorumlusu", line: "Şirketiniz Teknoloji A.Ş. olarak, 6698 sayılı KVKK kapsamında…" },
  { title: "2. İşlenen Veriler", line: "Ad-soyad, e-posta adresi, IP adresi, çerez bilgileri…" },
  { title: "3. İşleme Amaçları", line: "Hizmet sunumu, güvenlik, yasal yükümlülükler…" },
  { title: "4. Verilerin Aktarımı", line: "Altyapı sağlayıcıları ve yasal merciler ile sınırlı…" },
  { title: "5. Haklarınız", line: "Erişim, düzeltme, silme, itiraz hakları…" },
]

export function PolicyPreview() {
  return (
    <section className="py-20">
      <div className={containerClass}>
        <FadeIn className="text-center mb-10">
          <p className="font-sans text-xs tracking-wide text-muted-foreground/60 uppercase mb-3">
            Örnek Çıktı
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground">
            Oluşturulan politika önizlemesi
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="relative w-full max-w-3xl mx-auto rounded-lg border border-border overflow-hidden bg-card">
            <div className="px-6 py-4 border-b border-border bg-surface flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <span className="font-mono text-xs text-muted-foreground/50 ml-3">
                gizlilik-politikasi.html
              </span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-serif text-xl text-foreground mb-1">Gizlilik Politikası</h3>
              <p className="font-sans text-xs text-muted-foreground/50 mb-6">Son güncelleme: 14 Haziran 2026</p>
              <div className="flex flex-col gap-4">
                {sampleSections.map((s) => (
                  <div key={s.title}>
                    <p className="font-sans text-sm font-medium text-foreground mb-0.5">{s.title}</p>
                    <p className="font-sans text-sm text-muted-foreground">{s.line}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">
                  Comply tarafından otomatik oluşturuldu
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-sans text-xs text-muted-foreground/40">
            Comply — kuruluş profilinize göre oluşturulan gizlilik politikası
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
