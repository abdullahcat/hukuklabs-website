import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { COMPANY, LEGAL_UPDATED } from "@/lib/company"
import { CONTACT_EMAIL } from "@/lib/site-links"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Yasal",
  description:
    "HukukLabs kullanım koşulları, gizlilik ve KVKK aydınlatma metinleri, çerez politikası ve satış sözleşmeleri tek sayfada.",
  path: "/yasal",
})

const groups = [
  {
    title: "Kullanım",
    items: [
      {
        label: "Kullanım Koşulları",
        href: "/kullanim-kosullari",
        desc: "Platformu kullanırken geçerli olan kurallar, sorumluluklar ve yapay zekâ çıktılarının niteliği.",
      },
    ],
  },
  {
    title: "Gizlilik ve KVKK",
    items: [
      {
        label: "Gizlilik Politikası",
        href: "/gizlilik-politikasi",
        desc: "Hangi verileri, hangi amaçla ve hangi hukuki sebeple işlediğimiz.",
      },
      {
        label: "Çerez Politikası",
        href: "/cerez-politikasi",
        desc: "Sitede kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz.",
      },
      {
        label: "Ziyaretçi Aydınlatma Metni",
        href: "/ziyaretci-aydinlatma-metni",
        desc: "Web sitesi ziyaretçilerinin kişisel verilerine ilişkin KVKK aydınlatması.",
      },
      {
        label: "Üye Aydınlatma Metni",
        href: "/uye-aydinlatma-metni",
        desc: "Hesap açan kullanıcıların kişisel verilerine ilişkin KVKK aydınlatması.",
      },
      {
        label: "İletişim ve Demo Aydınlatma Metni",
        href: "/demo-aydinlatma-metni",
        desc: "Bize yazdığınızda veya demo talep ettiğinizde paylaştığınız verilere ilişkin aydınlatma.",
      },
    ],
  },
  {
    title: "Satış ve ödeme",
    items: [
      {
        label: "Mesafeli Satış Sözleşmesi",
        href: "/mesafeli-satis-sozlesmesi",
        desc: "Abonelik satın alımlarında taraflar arasındaki sözleşme.",
      },
      {
        label: "Ön Bilgilendirme Formu",
        href: "/on-bilgilendirme-formu",
        desc: "Satın alma öncesinde sunulması zorunlu bilgiler.",
      },
      {
        label: "Teslimat ve İade",
        href: "/teslimat-ve-iade",
        desc: "Dijital hizmetin teslimi, iptal ve iade koşulları.",
      },
    ],
  },
]

export default function YasalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-16`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-10">
                Yasal
              </p>
            </HeroItem>
            <HeroItem>
              <h1
                className="font-serif text-foreground leading-[1.05] tracking-tight text-balance mb-8 max-w-3xl"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Yasal metinler
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                HukukLabs&apos;ı kullanırken geçerli olan koşullar, kişisel verilerinizi nasıl
                işlediğimiz ve satın alma süreçleri. Hepsi tek yerde, açık ve güncel.
              </p>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-sm text-muted-foreground mt-6">
                Son güncelleme: {LEGAL_UPDATED}
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-12 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-24 flex flex-col gap-16`}>
          {groups.map((group) => (
            <FadeIn key={group.title}>
              <h2 className="font-serif text-foreground text-3xl leading-tight mb-8">
                {group.title}
              </h2>
              <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
                {group.items.map((item) => (
                  <StaggerItem key={item.href} className="bg-card">
                    <Link
                      href={item.href}
                      className="group flex h-full flex-col p-6 sm:p-8 hover:bg-surface-hover transition-colors"
                    >
                      <h3 className="font-sans text-base font-medium text-foreground mb-2">
                        {item.label}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                        {item.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 font-sans text-sm text-foreground mt-5">
                        Metni oku
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </Stagger>
            </FadeIn>
          ))}
        </section>

        <section className={`${containerClass} pb-32`}>
          <div className="max-w-3xl border border-border rounded-lg p-6 sm:p-8 bg-card">
            <h2 className="font-serif text-2xl text-foreground mb-4">Veri sorumlusu</h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {COMPANY.legalName}
              <br />
              {COMPANY.addressFull}
              <br />
              VKN: {COMPANY.taxId} · {COMPANY.taxOffice}
            </p>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4">
              Yasal metinlerle ilgili talepleriniz ve KVKK başvurularınız için:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline underline-offset-2 hover:opacity-80"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
