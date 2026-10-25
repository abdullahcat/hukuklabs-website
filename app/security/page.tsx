import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { CONTACT_EMAIL } from "@/lib/site-links"
import {
  IconShieldCheck,
  IconLock,
  IconServer,
  IconKey,
  IconEye,
  IconCertificate,
} from "@tabler/icons-react"

export const metadata: Metadata = createMetadata({
  title: "Güvenlik",
  description:
    "HukukLabs güvenlik altyapısı, şifreleme standartları, erişim kontrolü ve uyumluluk hakkında bilgi.",
  path: "/security",
})

const pillars = [
  {
    icon: IconLock,
    title: "Uçtan uca şifreleme",
    details: [
      "TLS 1.3 ile aktarım halindeki tüm veriler şifrelenir",
      "AES-256-GCM ile saklanan belgeler ve veritabanı alanları korunur",
      "API anahtarları ve tokenlar bcrypt + HMAC ile özetlenerek (hash) saklanır",
      "Müvekkil belgeleri müşteriye özel anahtarlarla, her müşteri için ayrı olarak şifrelenir",
    ],
  },
  {
    icon: IconKey,
    title: "Kimlik doğrulama ve erişim",
    details: [
      "Çok faktörlü kimlik doğrulama (MFA) tüm hesaplarda desteklenir",
      "Kurumsal planlarda SAML 2.0 ve OIDC SSO entegrasyonu",
      "Rol tabanlı erişim kontrolü (RBAC): yönetici, avukat, stajyer rolleri",
      "Oturum yönetimi: otomatik timeout, cihaz izleme ve uzak sonlandırma",
    ],
  },
  {
    icon: IconServer,
    title: "Altyapı güvenliği",
    details: [
      "ISO 27001 sertifikalı veri merkezlerinde barındırma",
      "Kubernetes üzerinde konteyner izolasyonu ve otomatik ölçekleme",
      "Web uygulama güvenlik duvarı (WAF) ve DDoS koruması",
      "Günlük otomatik yedekleme, coğrafi yedekli depolama",
      "Ağ segmentasyonu ve özel sanal ağ (VPC) ile izole ortamlar",
    ],
  },
  {
    icon: IconEye,
    title: "İzleme ve müdahale",
    details: [
      "7/24 gerçek zamanlı güvenlik izleme ve anomali tespiti",
      "Yapılandırılmış denetim kayıtları 12 ay saklanır",
      "Olay müdahale planı: tespit, sınıflandırma, bildirim, düzeltme",
      "KVKK kapsamında 72 saat içinde veri ihlali bildirimi",
    ],
  },
  {
    icon: IconCertificate,
    title: "Uyumluluk ve sertifikalar",
    details: [
      "6698 sayılı KVKK'ya tam uyumluluk",
      "GDPR kapsamında AB veri koruma gerekliliklerine uygunluk",
      "VERBİS kayıtlı veri sorumlusu",
      "SOC 2 Type II denetimi sürecinde (tahmini tamamlanma: 2026 Q4)",
      "Yıllık bağımsız penetrasyon testi ve güvenlik denetimi",
    ],
  },
  {
    icon: IconShieldCheck,
    title: "Veri gizliliği",
    details: [
      "Müvekkil verileri yapay zeka modeli eğitiminde kullanılmaz",
      "Hesap silme talebi üzerine 30 gün içinde kalıcı imha",
      "Veri İşleme Sözleşmesi (DPA) kurumsal müşteriler için sağlanır",
      "Veri minimizasyonu ilkesi: yalnızca hizmet için gerekli veriler işlenir",
    ],
  },
]

const practices = [
  {
    title: "Güvenli yazılım geliştirme",
    body: "OWASP Top 10 ve SANS kontrol listelerine uygun geliştirme süreçleri uyguluyoruz. Tüm kod değişiklikleri kod incelemesi, statik analiz (SAST) ve bağımlılık taramasından geçer. Sürekli entegrasyon sürecinde otomatik güvenlik testleri çalışır.",
  },
  {
    title: "Düzenli penetrasyon testi",
    body: "Bağımsız güvenlik firması tarafından yıllık kapsamlı penetrasyon testi yapılır. Tespit edilen bulgular önem derecesine göre sınıflandırılır ve SLA kapsamında giderilir. Kritik bulgular 24 saat içinde, yüksek önem bulgular 7 iş günü içinde çözülür.",
  },
  {
    title: "Bağımlılık yönetimi",
    body: "Üçüncü parti kütüphaneler otomatik güvenlik açığı taramasından geçer. Bilinen güvenlik açıkları olan bağımlılıklar CI sürecinde engellenir. Tedarik zinciri güvenliği için imzalı konteyner imajları kullanılır.",
  },
  {
    title: "Şifreleme anahtarı yönetimi",
    body: "Anahtar yönetimi donanım güvenlik modülü (HSM) destekli anahtar yönetim sistemi (KMS) üzerinden yapılır. Anahtarlar düzenli olarak yenilenir. Ana anahtar ile veri şifreleme anahtarları ayrı katmanlarda yönetilir (zarf şifreleme).",
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-20`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-10">
                Güvenlik
              </p>
            </HeroItem>
            <HeroItem>
              <h1
                className="font-serif text-foreground leading-[1.05] tracking-tight text-balance mb-8 max-w-3xl"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Güvenlik, ürünlerimizin temelidir.
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                Müvekkil verisi kutsaldır. HukukLabs, endüstri standardı güvenlik
                uygulamaları, şifreleme ve uyumluluk sertifikalarıyla avukat-müvekkil
                gizliliğini korur.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-20 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-24`}>
          <FadeIn className="mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
              Güvenlik katmanları
            </p>
            <h2 className="font-serif text-foreground text-3xl leading-tight">
              Altı katmanlı güvenlik mimarisi
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title} className="bg-card p-6 sm:p-8">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-surface mb-5">
                  <pillar.icon size={18} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-base font-medium text-foreground mb-4">
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {pillar.details.map((detail) => (
                    <li
                      key={detail}
                      className="font-sans text-sm text-muted-foreground leading-relaxed pl-3 border-l border-border"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-24 border-t border-border pt-24`}>
          <FadeIn className="mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
              Uygulamalar
            </p>
            <h2 className="font-serif text-foreground text-3xl leading-tight">
              Güvenlik süreçlerimiz
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {practices.map((practice) => (
              <StaggerItem key={practice.title}>
                <h3 className="font-sans text-base font-medium text-foreground mb-2">
                  {practice.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {practice.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-32 border-t border-border pt-16`}>
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="font-serif text-foreground text-2xl mb-6">
                Güvenlik bildirimi
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                Ürünlerimizde bir güvenlik açığı tespit ettiyseniz lütfen{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-foreground hover:opacity-80 transition-opacity"
                >
                  {CONTACT_EMAIL}
                </a>{" "}
                adresine bildirin. Sorumlu açıklama politikamıza uygun tüm
                bildirimleri değerlendirip 48 saat içinde ilk yanıtı veririz.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/gizlilik-politikasi"
                  className="font-sans text-sm text-foreground hover:opacity-80 transition-opacity border-b border-foreground/30"
                >
                  Gizlilik Politikası
                </Link>
                <span className="text-muted-foreground/40">·</span>
                <Link
                  href="/ziyaretci-aydinlatma-metni"
                  className="font-sans text-sm text-foreground hover:opacity-80 transition-opacity border-b border-foreground/30"
                >
                  KVKK Aydınlatma
                </Link>
                <span className="text-muted-foreground/40">·</span>
                <Link
                  href="/kullanim-kosullari"
                  className="font-sans text-sm text-foreground hover:opacity-80 transition-opacity border-b border-foreground/30"
                >
                  Kullanım Koşulları
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  )
}
