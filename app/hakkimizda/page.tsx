import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { BRAND_DISCLAIMER, COMPANY } from "@/lib/company"
import { productLinks, CONTACT_EMAIL } from "@/lib/site-links"

export const metadata: Metadata = createMetadata({
  title: "Hakkımızda",
  description:
    "HukukLabs, yapay zekâ modellerini Türk hukukuna göre eğiten ve her işe doğru aracı konumlayan bir hukuk teknolojisi markasıdır. Amacımız hızlı değil, doğru sonuç.",
  path: "/hakkimizda",
})

const approach = [
  {
    title: "Modeli hukuka göre eğitmek",
    body: "Genel amaçlı bir modeli hukuk kılığına sokmuyoruz. Modelleri Türk mevzuatı, yargı kararları ve gerçek hukuki iş akışları üzerinde ayarlıyor, hangi soruda nerede yanıldıklarını ölçerek iyileştiriyoruz.",
  },
  {
    title: "Aracı doğru konumlamak",
    body: "Her işe yapay zekâ gerekmez. Karar aramaya arama motoru, dosya takibine otomasyon, taslağa dil modeli koyuyoruz. Modelin tahmin etmesi gerekmeyen yerde tahmin ettirmiyoruz.",
  },
  {
    title: "Sonucu kaynağına bağlamak",
    body: "Ürettiğimiz her sonuç dayandığı maddeyi ve kararı gösterir. Avukat bir cevaba güvenmeden önce onu kontrol edebilmelidir; kontrol edilemeyen cevap bizim için cevap değildir.",
  },
]

const values = [
  {
    title: "Doğruluk hızdan önce gelir",
    body: "Yanlış bir cevabı hızlı vermek, hiç vermemekten daha pahalıdır. Bir özelliği doğru çalıştıramıyorsak yayınlamayız.",
  },
  {
    title: "Son söz avukatındır",
    body: "Yapay zekâ çıktıları taslaktır. Nihai muhakeme ve sorumluluk hukuk profesyonelinde kalır; araçlarımız bu gerçeği gizlemez.",
  },
  {
    title: "Müvekkil verisi kutsaldır",
    body: "Veriler şifrelenir, erişim sınırlanır ve belgeler model eğitiminde kullanılmaz. Güvenlik sonradan eklenen bir katman değil, tasarımın kendisidir.",
  },
]

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-16`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-8">
                Şirket
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="font-serif text-foreground leading-tight tracking-tight text-balance mb-6 text-4xl sm:text-5xl max-w-3xl">
                Hukukta yapay zekânın ölçüsü doğruluktur.
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                HukukLabs, avukatlar ve hukuk ekipleri için doğru sonuç veren yapay zekâ
                araçları geliştirir. Modelleri Türk hukukuna göre eğitir, her işe doğru aracı
                konumlar ve her sonucu kaynağına bağlarız. {COMPANY.brand},{" "}
                {COMPANY.shortName} bünyesinde işletilen markalardan biridir.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-12 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-20`}>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl">
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">Neden varız?</h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Hukuk teknolojisi pazarı hız yarışına girdi. Genel amaçlı modeller birkaç
                komutla &ldquo;hukuk asistanı&rdquo; diye paketleniyor; olmayan kararlar,
                yürürlükten kalkmış maddeler ve kaynağı belirsiz cevaplar kendinden emin
                bir dille avukatın önüne konuyor.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Bu bataklıkta kalmak istemedik. Hukukta yanlış bir cevabın bedeli bir dava,
                bir süre ya da bir müvekkildir. Bu yüzden işe hızdan değil doğruluktan başladık.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-4">Vizyonumuz</h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Türkiye&apos;de avukatın bir yapay zekâ cevabını, bir meslektaşının
                hazırladığı notu kontrol eder gibi kontrol edip güvenle kullanabildiği bir
                gelecek. Oraya daha büyük modelle değil, doğru eğitilmiş modelle ve doğru
                yere konmuş araçlarla varılacağına inanıyoruz.
              </p>
              <ul className="space-y-2">
                {productLinks.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="font-sans text-sm text-foreground underline underline-offset-2 hover:opacity-80"
                    >
                      {p.label}
                      {p.desc ? ` — ${p.desc}` : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={`${containerClass} pb-20`}>
          <h2 className="font-serif text-2xl text-foreground mb-10">Nasıl çalışıyoruz?</h2>
          <Stagger className="grid sm:grid-cols-3 gap-8 max-w-5xl">
            {approach.map((item, i) => (
              <StaggerItem key={item.title}>
                <p className="font-mono text-xs text-muted-foreground/60 mb-3">0{i + 1}</p>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-20`}>
          <h2 className="font-serif text-2xl text-foreground mb-10">İlkelerimiz</h2>
          <Stagger className="grid sm:grid-cols-3 gap-8 max-w-5xl">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <h3 className="font-serif text-lg text-foreground mb-2">{v.title}</h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          <h2 className="font-serif text-2xl text-foreground mb-4 mt-16">Marka ve şirket</h2>
          <p className="font-sans text-muted-foreground leading-relaxed max-w-3xl">
            {BRAND_DISCLAIMER} Bu sayfa yalnızca HukukLabs markasına aittir; Standy&apos;nin
            diğer markaları kendi kanalları üzerinden sunulur.
          </p>
        </section>

        <section className={`${containerClass} pb-32`}>
          <div className="max-w-3xl border border-border rounded-lg p-6 sm:p-8 bg-card">
            <h2 className="font-serif text-2xl text-foreground mb-6">Şirket bilgileri</h2>
            <dl className="grid gap-4 font-sans text-sm">
              {[
                ["Ticaret unvanı", COMPANY.legalName],
                ["Marka (bu site)", COMPANY.brand],
                ["Vergi dairesi", COMPANY.taxOffice],
                ["Vergi kimlik no", COMPANY.taxId],
                ["Adres", COMPANY.addressFull],
                ["İşe başlama", COMPANY.founded],
                ["E-posta", CONTACT_EMAIL],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="text-foreground">
                    {label === "E-posta" ? (
                      <a
                        href={`mailto:${value}`}
                        className="underline underline-offset-2 hover:opacity-80"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 font-sans text-sm text-muted-foreground">
              Sorularınız için{" "}
              <Link
                href="/help#iletisim"
                className="text-foreground underline underline-offset-2 hover:opacity-80"
              >
                yardım
              </Link>{" "}
              sayfamızı, yasal metinler için{" "}
              <Link
                href="/yasal"
                className="text-foreground underline underline-offset-2 hover:opacity-80"
              >
                Yasal
              </Link>{" "}
              sayfasını kullanabilirsiniz.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
