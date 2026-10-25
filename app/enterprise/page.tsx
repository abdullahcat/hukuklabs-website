import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { CONTACT_EMAIL } from "@/lib/site-links"
import { createMetadata } from "@/lib/seo"
import {
  IconBuilding,
  IconShieldLock,
  IconUsers,
  IconHeadset,
  IconApi,
  IconSettings,
} from "@tabler/icons-react"

export const metadata: Metadata = createMetadata({
  title: "Kurumsal",
  description:
    "Büyük hukuk büroları ve kurumsal hukuk ekipleri için ölçeklenebilir dağıtım, güvenlik ve özel entegrasyon.",
  path: "/enterprise",
  keywords: ["kurumsal hukuk yazılımı", "hukuk bürosu kurumsal", "SSO hukuk"],
})

const features = [
  {
    icon: IconBuilding,
    title: "Kurumsal dağıtım",
    desc: "Studio, Lens ve LawAPI'yi büyük ekipler için merkezi yönetim panelinden dağıtın. Kullanıcı sayısı sınırı olmadan ölçeklendirin. MSI/PKG yükleyicileriyle IT departmanınızın standart dağıtım sürecine entegre edin.",
  },
  {
    icon: IconShieldLock,
    title: "Güvenlik ve uyumluluk",
    desc: "KVKK ve GDPR uyumlu altyapı, veri yerleşimi seçenekleri (Türkiye veya AB), SLA ile garanti altındaki erişilebilirlik ve SOC 2 Type II denetim raporları. Avukat-müvekkil gizliliği için her müşteriye ayrı, izole şifreleme.",
  },
  {
    icon: IconUsers,
    title: "SSO ve erişim yönetimi",
    desc: "SAML 2.0 ve OIDC ile mevcut kimlik sağlayıcınıza bağlanın. Rol tabanlı erişim kontrolü: yönetici, kıdemli avukat, stajyer gibi özelleştirilmiş roller tanımlayın. Denetim kayıtlarıyla tüm erişim ve işlem geçmişini izleyin.",
  },
  {
    icon: IconApi,
    title: "Özel entegrasyon",
    desc: "DMS (Doküman Yönetim Sistemi), ERP ve iç portallere özel API entegrasyonları. LawAPI ile mevzuat ve içtihat verisini mevcut iş akışlarınıza bağlayın. Webhook ve olay tabanlı entegrasyon desteği.",
  },
  {
    icon: IconSettings,
    title: "Özelleştirme",
    desc: "Beyaz etiket (white-label) seçeneğiyle büronuzun markasını taşıyan arayüz. Özel dilekçe şablonları, iş akışı kuralları ve otomasyon senaryoları. Departman bazlı yapılandırma ve raporlama.",
  },
  {
    icon: IconHeadset,
    title: "Öncelikli destek",
    desc: "Size özel müşteri temsilcisi ve teknik çözüm mimarı. Başlangıç programı: eğitim, veri göçü ve pilot uygulama desteği. 7/24 öncelikli teknik destek ve SLA kapsamında yanıt süre garantisi.",
  },
]

const stats = [
  { value: "%99,9", label: "SLA erişilebilirlik" },
  { value: "<2 saat", label: "Kritik destek yanıtı" },
  { value: "AES-256", label: "Veri şifreleme" },
  { value: "SSO", label: "SAML / OIDC" },
]

const useCases = [
  {
    title: "Büyük hukuk büroları",
    desc: "50+ avukatlı bürolar için merkezi dava yönetimi, ekip içi belge paylaşımı ve performans raporlama. Departman bazlı yapılandırma ile her uzmanlık alanı kendi iş akışını yönetir.",
  },
  {
    title: "Holding hukuk departmanları",
    desc: "Grup şirketlerinin hukuki süreçlerini tek panelden yönetin. Uyumluluk takibi, sözleşme yönetimi ve risk raporlamasını entegre edin.",
  },
  {
    title: "Kamu kurumları",
    desc: "Veri yerleşimi gereksinimleri ve güvenlik standartlarını karşılayan kurum içi (on-premise) veya özel bulut dağıtım seçenekleri. VERBİS ve KVKK uyumlu altyapı.",
  },
]

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-20`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-10">
                Kurumsal
              </p>
            </HeroItem>
            <HeroItem>
              <h1
                className="font-serif text-foreground leading-[1.05] tracking-tight text-balance mb-8 max-w-3xl"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Kurumsal ölçekte doğru sonuç.
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light mb-10">
                50+ kişilik hukuk büroları, holding hukuk departmanları ve kurumsal
                müşteriler için ölçeklenebilir dağıtım, kurumsal düzeyde güvenlik ve özel
                entegrasyon.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/help#iletisim"
                  className="inline-flex items-center px-6 py-2.5 bg-foreground text-background text-sm font-sans font-medium rounded-sm hover:bg-foreground/90 transition-colors"
                >
                  Satış ekibiyle görüşün
                </Link>
                <Link
                  href="/security"
                  className="inline-flex items-center px-6 py-2.5 text-sm font-sans font-medium text-foreground border border-border rounded-sm hover:bg-accent transition-colors"
                >
                  Güvenlik detayları
                </Link>
              </div>
            </HeroItem>
            <HeroItem>
              <div className="mt-20 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-24`}>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-card px-6 py-10 text-center">
                <p className="font-serif text-2xl sm:text-3xl text-foreground mb-2">{s.value}</p>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground/60 uppercase tracking-wider">
                  {s.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-24`}>
          <FadeIn className="mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
              Özellikler
            </p>
            <h2 className="font-serif text-foreground text-3xl leading-tight">
              Kurumsal ekipler için tasarlandı
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            {features.map((feature) => (
              <StaggerItem key={feature.title} className="bg-card p-6 sm:p-8">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm border border-border bg-surface mb-5">
                  <feature.icon size={18} className="text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-base font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-24 border-t border-border pt-24`}>
          <FadeIn className="mb-12">
            <p className="font-sans text-xs tracking-widest uppercase text-muted-foreground/60 mb-4">
              Kullanım senaryoları
            </p>
            <h2 className="font-serif text-foreground text-3xl leading-tight">
              Kimlere uygun?
            </h2>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <StaggerItem key={uc.title}>
                <h3 className="font-sans text-base font-medium text-foreground mb-3">
                  {uc.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {uc.desc}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className={`${containerClass} pb-32 border-t border-border pt-16`}>
          <FadeIn>
              <div className="p-6 sm:p-10 md:p-16 border border-border rounded-lg bg-surface text-center">
              <h2
                className="font-serif text-foreground mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Kurumunuz için özel plan oluşturalım.
              </h2>
              <p className="font-sans text-muted-foreground mb-8 max-w-lg mx-auto">
                Kurumsal planlar büyüklüğünüze ve ihtiyaçlarınıza göre özelleştirilir.
                Satış ekibimiz size özel demo ve fiyatlandırma sunar.
              </p>
              <Link
                href="/help#iletisim"
                className="inline-flex items-center px-8 py-3 bg-foreground text-background text-sm font-sans font-medium rounded-sm hover:bg-foreground/90 transition-colors"
              >
                Demo talep edin
              </Link>
              <p className="font-mono text-[11px] text-muted-foreground/50 mt-4">
                {CONTACT_EMAIL} · Antalya, Türkiye
              </p>
            </div>
          </FadeIn>
        </section>
      </main>
      <Footer />
    </div>
  )
}
