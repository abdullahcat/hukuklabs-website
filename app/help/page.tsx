import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { COMPANY } from "@/lib/company"
import { CONTACT_EMAIL, EXTERNAL_LINKS } from "@/lib/site-links"
import { CHROME_WEB_STORE_URL } from "@/lib/downloads"
import { CopyEmailButton } from "@/components/copy-email-button"
import {
  IconApi,
  IconArrowRight,
  IconBook,
  IconBrandChrome,
  IconBuildingSkyscraper,
  IconFileText,
  IconMail,
  IconMessageCircle,
  IconReceipt,
  IconShieldCheck,
  IconShieldLock,
  IconSpeakerphone,
  IconTool,
  IconUserShield,
} from "@tabler/icons-react"

export const metadata: Metadata = createMetadata({
  title: "Yardım",
  description:
    "HukukLabs ürünleri için başlangıç rehberleri, SSS, destek kanalları ve teknik dokümantasyon.",
  path: "/help",
})

const quickLinks = [
  {
    icon: IconFileText,
    title: "Studio başlangıç",
    desc: "studio.hukuklabs.com'da hesabınızla giriş yapın ve ilk belgenizi oluşturun.",
    href: EXTERNAL_LINKS.studio,
    external: true,
  },
  {
    icon: IconBrandChrome,
    title: "Lens kurulumu",
    desc: "Chrome Web Store'dan Lens'i ekleyin, UYAP'a giriş yapın — otomatik devreye girer.",
    href: CHROME_WEB_STORE_URL,
    external: true,
  },
  {
    icon: IconApi,
    title: "LawAPI entegrasyonu",
    desc: "API anahtarınızı alın ve birkaç satır kodla mevzuat verisine erişmeye başlayın.",
    href: EXTERNAL_LINKS.docs,
    external: true,
  },
  {
    icon: IconShieldCheck,
    title: "Comply bekleme listesi",
    desc: "KVKK ve GDPR uyumluluk aracımız geliştiriliyor. Lansmanda haberdar olun.",
    href: "/comply#bekleme-listesi",
  },
  {
    icon: IconBook,
    title: "Dokümantasyon",
    desc: "API referansı, entegrasyon rehberleri ve SDK belgeleri.",
    href: EXTERNAL_LINKS.docs,
    external: true,
  },
  {
    icon: IconMessageCircle,
    title: "Destek ekibine ulaşın",
    desc: "Teknik sorunlar, hesap ve fatura soruları için destek ekibimize yazın.",
    href: `mailto:${CONTACT_EMAIL}`,
    external: true,
  },
]

const contactTopics = [
  {
    icon: IconTool,
    title: "Teknik destek",
    desc: "Hata, erişim sorunu, UYAP bağlantısı veya beklenmedik bir davranış.",
    subject: "Teknik destek",
  },
  {
    icon: IconReceipt,
    title: "Hesap ve fatura",
    desc: "Plan değişikliği, fatura, iptal ve iade talepleri.",
    subject: "Hesap ve fatura",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Kurumsal ve demo",
    desc: "Ekibiniz için kurulum, özel fiyatlandırma veya canlı demo talebi.",
    subject: "Kurumsal plan ve demo talebi",
  },
  {
    icon: IconUserShield,
    title: "KVKK başvurusu",
    desc: "Kişisel verilerinize ilişkin bilgi, düzeltme veya silme talepleri.",
    subject: "KVKK başvurusu",
  },
  {
    icon: IconShieldLock,
    title: "Güvenlik bildirimi",
    desc: "Bir güvenlik açığı fark ettiyseniz lütfen kamuya açıklamadan önce bize bildirin.",
    subject: "Güvenlik bildirimi",
  },
  {
    icon: IconSpeakerphone,
    title: "Basın ve iş birlikleri",
    desc: "Röportaj, etkinlik, baro ve kurum iş birlikleri.",
    subject: "Basın ve iş birliği",
  },
]

const contactTips = [
  "Hesabınıza kayıtlı e-posta adresinden yazın; hesabınızı bu sayede bulabiliriz.",
  "Hangi ürünü kullandığınızı (Studio, Lens, LawAPI) ve ne yapmaya çalıştığınızı belirtin.",
  "Hata alıyorsanız ekran görüntüsü ve hatanın oluştuğu saati ekleyin.",
]

const faqs = [
  {
    q: "Hangi tarayıcılar destekleniyor?",
    a: "Lens, Google Chrome ve Chromium tabanlı tarayıcılarda (Edge, Brave) çalışır. Studio web tabanlıdır; kurulum gerektirmez ve güncel tarayıcılarda çalışır.",
  },
  {
    q: "Baro sicil doğrulaması nasıl yapılıyor?",
    a: "Kayıt sırasında baro sicil numaranızı giriyorsunuz. Sistem otomatik doğrulama yapar. Doğrulanmayan hesaplar kısıtlı erişime sahiptir.",
  },
  {
    q: "Verilerim güvende mi?",
    a: "Tüm veriler TLS 1.3 ile iletilir ve AES-256 ile saklanır. Belgeleriniz model eğitiminde kullanılmaz. Ayrıntılar için Güvenlik sayfamıza bakın.",
  },
  {
    q: "Ücretsiz plan var mı?",
    a: "Evet. Studio’nun ücretsiz planı vardır; yapay zekâ özellikleri Pro planında yer alır. Lens'te PDF indirme ücretsizdir; senkronizasyon ve hatırlatıcılar aboneliktedir. LawAPI token bazlı fiyatlandırılır.",
  },
  {
    q: "Kurumsal fiyatlandırma nasıl çalışır?",
    a: "Kurumsal planlar kurumunuzun büyüklüğüne göre özelleştirilir. Satış ekibimizle görüşerek size özel fiyat teklifi alabilirsiniz.",
  },
  {
    q: "Destek yanıt süresi ne kadar?",
    a: "Standart destek: 1 iş günü. Kurumsal müşteriler: kritik konularda 2 saat içinde yanıt ve size özel müşteri temsilcisi.",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-20`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-10">
                Yardım Merkezi
              </p>
            </HeroItem>
            <HeroItem>
              <h1
                className="font-serif text-foreground leading-[1.05] tracking-tight text-balance mb-8 max-w-3xl"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Nasıl yardımcı olabiliriz?
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                Başlangıç rehberleri, sık sorulan sorular ve destek kanalları —
                ihtiyacınız olan her şey burada.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-20 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-24`}>
          <FadeIn className="mb-12">
            <h2 className="font-serif text-foreground text-3xl leading-tight">
              Hızlı başlangıç
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {quickLinks.map((item) => (
              <StaggerItem key={item.title} className="bg-card p-6 sm:p-8 hover:bg-surface-hover transition-colors">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-surface mb-5">
                      <item.icon size={18} className="text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-sans text-base font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </a>
                ) : (
                  <Link href={item.href} className="block">
                    <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-surface mb-5">
                      <item.icon size={18} className="text-muted-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-sans text-base font-medium text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </Link>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-24 border-t border-border pt-24`}>
          <FadeIn className="mb-12">
            <h2 className="font-serif text-foreground text-3xl leading-tight">
              Sık sorulan sorular
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <h3 className="font-sans text-base font-medium text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="iletisim" className={`${containerClass} pb-32 border-t border-border pt-24 scroll-mt-24`}>
          <FadeIn>
            <div className="bg-[#0a0a0a] text-white rounded-lg p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-white/50 mb-6">
                  İletişim
                </p>
                <h2
                  className="font-serif leading-[1.05] tracking-tight mb-6 max-w-2xl"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
                >
                  Mesajınızı bir bot değil, ekibimiz okur.
                </h2>
                <p className="font-sans text-white/70 text-lg leading-relaxed max-w-xl mb-10">
                  Teknik bir sorun, fatura sorusu ya da ekibiniz için bir kurulum talebi;
                  hangisi olursa olsun doğru kişiye ulaştırıyor ve genellikle 1 iş günü
                  içinde yanıt veriyoruz.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 bg-white text-[#0a0a0a] font-sans font-medium rounded-sm hover:bg-white/90 transition-colors"
                  >
                    <IconMail size={16} aria-hidden="true" />
                    E-posta gönder
                  </a>
                  <CopyEmailButton email={CONTACT_EMAIL} />
                </div>
              </div>
              <dl className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:min-w-[14rem] lg:border-l lg:border-white/10 lg:pl-10">
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-white/50 mb-1">
                    E-posta
                  </dt>
                  <dd className="font-sans text-base">{CONTACT_EMAIL}</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-white/50 mb-1">
                    Standart yanıt
                  </dt>
                  <dd className="font-sans text-base">1 iş günü</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-white/50 mb-1">
                    Kurumsal, kritik
                  </dt>
                  <dd className="font-sans text-base">2 saat içinde</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs tracking-widest uppercase text-white/50 mb-1">
                    Sistem durumu
                  </dt>
                  <dd className="font-sans text-base">
                    <a
                      href={EXTERNAL_LINKS.status}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 decoration-white/30 hover:decoration-white"
                    >
                      Canlı izle
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>

          <FadeIn className="mt-20 mb-10">
            <h3 className="font-serif text-foreground text-3xl leading-tight mb-3">
              Konunuzu seçin
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed max-w-xl">
              E-postanız konu başlığı hazır olarak açılır; talebiniz doğru ekibe daha hızlı
              ulaşır.
            </p>
          </FadeIn>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {contactTopics.map((topic) => (
              <StaggerItem key={topic.title} className="bg-card">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(topic.subject)}`}
                  className="group flex h-full flex-col p-6 sm:p-8 hover:bg-surface-hover transition-colors"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-surface mb-5">
                    <topic.icon size={18} className="text-foreground" aria-hidden="true" />
                  </div>
                  <h4 className="font-sans text-base font-medium text-foreground mb-2">
                    {topic.title}
                  </h4>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                    {topic.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-foreground mt-6">
                    Yazın
                    <IconArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <div className="h-full p-6 sm:p-8 border border-border rounded-lg bg-card">
                <h3 className="font-sans text-base font-medium text-foreground mb-5">
                  Daha hızlı yanıt için
                </h3>
                <ul className="flex flex-col gap-4">
                  {contactTips.map((tip, i) => (
                    <li key={tip} className="flex gap-4">
                      <span className="font-mono text-xs text-muted-foreground pt-1 shrink-0">
                        0{i + 1}
                      </span>
                      <span className="font-sans text-sm text-muted-foreground leading-relaxed">
                        {tip}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-border font-sans text-sm text-foreground leading-relaxed">
                  Müvekkil bilgisi veya dava evrakını e-postaya eklemeyin. İncelememiz
                  gerekirse size güvenli bir paylaşım yolu öneririz.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="h-full p-6 sm:p-8 border border-border rounded-lg bg-card">
                <h3 className="font-sans text-base font-medium text-foreground mb-5">
                  Resmi bilgiler
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-3 font-sans text-sm leading-relaxed">
                  <dt className="text-muted-foreground font-medium">Unvan</dt>
                  <dd className="text-foreground">{COMPANY.legalName}</dd>
                  <dt className="text-muted-foreground font-medium">Adres</dt>
                  <dd className="text-foreground">{COMPANY.addressFull}</dd>
                  <dt className="text-muted-foreground font-medium">Vergi dairesi</dt>
                  <dd className="text-foreground">{COMPANY.taxOffice}</dd>
                  <dt className="text-muted-foreground font-medium">VKN</dt>
                  <dd className="text-foreground">{COMPANY.taxId}</dd>
                  <dt className="text-muted-foreground font-medium">KVKK başvuru</dt>
                  <dd className="text-foreground">{COMPANY.privacyEmail}</dd>
                </dl>
                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-x-6 gap-y-2">
                  <Link
                    href="/yasal"
                    className="font-sans text-sm text-foreground underline underline-offset-4 hover:opacity-80"
                  >
                    Yasal metinler
                  </Link>
                  <Link
                    href="/enterprise"
                    className="font-sans text-sm text-foreground underline underline-offset-4 hover:opacity-80"
                  >
                    Kurumsal plan
                  </Link>
                  <Link
                    href="/security"
                    className="font-sans text-sm text-foreground underline underline-offset-4 hover:opacity-80"
                  >
                    Güvenlik
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
