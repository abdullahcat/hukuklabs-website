import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroStagger, HeroItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"

const parties = [
  { role: "Davacı", value: "Siz (tarayıcınız vasıtasıyla)" },
  { role: "Davalı", value: "Aradığınız sayfa" },
  { role: "Dava", value: "Sayfanın varlığının tespiti" },
]

const verdict = [
  "Davanın konusuz kalması nedeniyle esas hakkında karar verilmesine yer olmadığına,",
  "Kullanıcının derhal ana sayfaya iadesine,",
  "Yargılama giderinin (bir tık) davalı sayfa üzerinde bırakılmasına,",
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center">
        <section className={`${containerClass} pt-40 pb-32 w-full`}>
          <HeroStagger>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,34rem)] gap-14 lg:gap-20 items-center">
              <div>
                <HeroItem>
                  <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-6">
                    Hata 404
                  </p>
                </HeroItem>
                <HeroItem>
                  <h1
                    className="font-serif text-foreground leading-[1.05] tracking-tight mb-6"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                  >
                    Sayfa adreste
                    <br />
                    bulunamadı.
                  </h1>
                </HeroItem>
                <HeroItem>
                  <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
                    Tebligat üç kez denendi, kapı çalındı, komşulara soruldu. Aradığınız
                    sayfa taşınmış, kaldırılmış ya da hiç var olmamış olabilir. Mahkeme
                    kararını verdi; itiraz yolu açık.
                  </p>
                </HeroItem>
                <HeroItem>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/"
                      className="inline-flex items-center bg-foreground text-background font-sans font-medium rounded-sm hover:bg-foreground/90 transition-colors"
                    >
                      Kararı uygula, ana sayfaya dön
                    </Link>
                    <Link
                      href="/help#iletisim"
                      className="inline-flex items-center font-sans font-medium text-foreground border border-border rounded-sm hover:bg-accent transition-colors"
                    >
                      Karara itiraz et
                    </Link>
                  </div>
                </HeroItem>
              </div>

              <HeroItem>
                <article
                  aria-label="Temsili mahkeme kararı"
                  className="relative bg-card border border-border rounded-lg p-7 sm:p-9 font-mono text-[0.8125rem] leading-relaxed text-foreground shadow-[0_1px_0_rgba(0,0,0,0.04),0_20px_40px_-24px_rgba(0,0,0,0.18)] rotate-0 lg:rotate-[1.25deg]"
                >
                  <div className="text-center mb-6">
                    <p className="tracking-[0.3em]">T.C.</p>
                    <p className="tracking-[0.2em] font-semibold">HUKUKLABS</p>
                    <p className="tracking-[0.15em]">404. SAYFA BULMA DAİRESİ</p>
                  </div>

                  <div className="flex justify-between border-y border-dashed border-border py-2 mb-5">
                    <span>ESAS NO: 2026/404</span>
                    <span>KARAR NO: 2026/404</span>
                  </div>

                  <dl className="grid grid-cols-[5.5rem_1fr] gap-y-1.5 mb-5">
                    {parties.map((p) => (
                      <div key={p.role} className="contents">
                        <dt className="font-semibold uppercase">{p.role}</dt>
                        <dd>: {p.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="font-semibold mb-1.5">GEREĞİ DÜŞÜNÜLDÜ:</p>
                  <p className="mb-5">
                    Davalı sayfanın usulüne uygun tebligata rağmen bildirilen adreste
                    bulunamadığı, sunucu kayıtlarında da izine rastlanmadığı anlaşılmıştır.
                    Bağlantının hatalı yazılmış olması kuvvetle muhtemeldir.
                  </p>

                  <p className="font-semibold mb-1.5">HÜKÜM:</p>
                  <ol className="list-decimal pl-5 space-y-1 mb-5">
                    {verdict.map((v) => (
                      <li key={v}>{v}</li>
                    ))}
                  </ol>
                  <p className="mb-7">kesin olmak üzere oy birliğiyle karar verildi.</p>

                  <div className="flex items-end justify-between gap-4">
                    <p className="text-[0.6875rem] leading-snug max-w-[15rem]">
                      Dayanak: Tarayıcı adres çubuğu, m. 404. Bu karar yapay zekâ tarafından
                      değil, sunucu tarafından verilmiştir.
                    </p>
                    <div
                      aria-hidden="true"
                      className="shrink-0 w-20 h-20 rounded-full border-2 border-foreground/70 flex items-center justify-center -rotate-12"
                    >
                      <div className="w-[4.1rem] h-[4.1rem] rounded-full border border-foreground/70 flex flex-col items-center justify-center leading-none">
                        <span className="text-[0.55rem] tracking-widest">MÜHÜR</span>
                        <span className="font-semibold text-base my-0.5">404</span>
                        <span className="text-[0.55rem] tracking-widest">HUKUKLABS</span>
                      </div>
                    </div>
                  </div>
                </article>
              </HeroItem>
            </div>
          </HeroStagger>
        </section>
      </main>
      <Footer />
    </div>
  )
}
