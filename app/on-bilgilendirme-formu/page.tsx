import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"
import {
  LegalLink,
  LegalList,
  LegalPageShell,
  LegalSection,
  LegalTable,
} from "@/components/legal-page-shell"
import { COMPANY } from "@/lib/company"
import { formatCredits, formatTRY, studioPaidPlans } from "@/lib/plans"

const UPDATED = "25.08.2026"

export const metadata: Metadata = createMetadata({
  title: "Ön Bilgilendirme Formu",
  description:
    "HukukLabs Studio ve Lens abonelikleri için mesafeli sözleşmeler ön bilgilendirme formu.",
  path: "/on-bilgilendirme-formu",
})

function planPriceRows(): string[][] {
  return studioPaidPlans().map((plan) => [
    plan.name,
    plan.monthlyPrice != null ? `${formatTRY(plan.monthlyPrice)} / ay` : "—",
    plan.yearlyPrice != null ? `${formatTRY(plan.yearlyPrice)} / yıl` : "—",
    plan.monthlyCredits != null
      ? `${formatCredits(plan.monthlyCredits)} kredi / ay`
      : "—",
  ])
}

export default function OnBilgilendirmeFormuPage() {
  return (
    <LegalPageShell
      title="Ön Bilgilendirme Formu"
      updatedAt={UPDATED}
      version="1.0"
    >
      <LegalSection title="1. Amaç ve Hukuki Dayanak">
        <p>
          Bu Ön Bilgilendirme Formu, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve
          Mesafeli Sözleşmeler Yönetmeliği uyarınca, mesafeli sözleşmenin kurulmasından
          önce tüketicinin bilgilendirilmesi yükümlülüğü kapsamında hazırlanmıştır.
          Siparişi tamamlamadan önce bu metni ve{" "}
          <LegalLink href="/mesafeli-satis-sozlesmesi">
            Mesafeli Satış Sözleşmesi
          </LegalLink>
          &apos;ni incelemeniz gerekir. Ödeme adımındaki onay kutusu, bu bilgilendirmeyi
          okuduğunuz ve kabul ettiğiniz anlamına gelir.
        </p>
      </LegalSection>

      <LegalSection title="2. Satıcı Bilgileri">
        <LegalList
          items={[
            <>Unvan: {COMPANY.legalName}</>,
            <>Marka: {COMPANY.brand}</>,
            <>Adres: {COMPANY.addressFull}</>,
            <>Vergi Dairesi: {COMPANY.taxOffice}</>,
            <>Vergi Kimlik No: {COMPANY.taxId}</>,
            <>
              E-posta:{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-foreground underline underline-offset-2"
              >
                {COMPANY.email}
              </a>
            </>,
            <>İnternet sitesi: {COMPANY.website}</>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Hizmetin Temel Nitelikleri">
        <p>
          Satışa açık hizmet, HukukLabs Studio ve Lens ücretli özelliklerini kapsayan
          dijital aboneliktir (Solo, Pro veya Max planları). Tek abonelik her iki ürünün
          ücretli özelliklerini aktive eder. Hizmet fiziksel ürün teslimi içermez;
          ifa elektronik ortamda, ödeme veya kart doğrulamasının ardından hesap
          aktivasyonu ile gerçekleşir.
        </p>
        <LegalList
          items={[
            "Studio: belge üretimi, hukuki araştırma ve analiz araçlarına erişim.",
            "Lens: UYAP tarayıcı uzantısında senkronizasyon, hatırlatıcı ve aboneliğe bağlı özellikler.",
            "Plan bazlı aylık kredi kotası ve günlük kullanım tavanı uygulanır.",
            "Yapay zekâ çıktıları taslak/referanstır; hukuki danışmanlık değildir.",
          ]}
        />
        <p>
          LawAPI, Comply ve Kurumsal plan bu formun kapsamındaki satışa açık ürünler
          değildir.
        </p>
      </LegalSection>

      <LegalSection title="4. Fiyat, Ödeme, Süre ve İfa">
        <p>Güncel plan ücretleri (KDV dahil):</p>
        <LegalTable
          headers={["Plan", "Aylık", "Yıllık (peşin)", "Aylık kredi"]}
          rows={planPriceRows()}
        />
        <LegalList
          items={[
            "Ödeme yöntemi: iyzico üzerinden kredi/banka kartı. Kart verileri Satıcı sunucularında tutulmaz.",
            "Aylık plan: her ay otomatik yenilenir; iptale kadar kayıtlı karttan tahsilat yapılır.",
            "Yıllık plan: 12 ay peşin; süre sonunda otomatik yenilenmez.",
            "3 günlük ücretsiz deneme (aylık plan, kart kaydı ile): deneme bitmeden iptal edilmezse seçilen aylık ücret otomatik tahsil edilir.",
            "İfa: ödemenin (veya denemede kart doğrulamasının) ardından erişim derhal açılır. Kargo yoktur.",
            "Fatura elektronik ortamda düzenlenir.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Cayma Hakkı">
        <p>
          Tüketici, kural olarak 14 gün içinde cayma hakkına sahiptir. Ancak Hizmet
          dijital içerik/dijital hizmet olduğundan, TKHK m.15/1-ğ uyarınca; ödeme
          adımında ifaya derhal başlanması için onay verip Hizmet&apos;i kullanmaya
          başlarsanız (hesap aktivasyonu ve erişim) cayma hakkınız sona erer. Bu husus
          ödeme formunda ayrı bir onay kutusu ile teyit edilir.
        </p>
        <p>
          Teslimat, iade ve abonelik iptaline ilişkin ayrıntılar{" "}
          <LegalLink href="/teslimat-ve-iade">Teslimat ve İade Şartları</LegalLink> ve{" "}
          <LegalLink href="/mesafeli-satis-sozlesmesi">
            Mesafeli Satış Sözleşmesi
          </LegalLink>{" "}
          maddelerinde yer alır.
        </p>
      </LegalSection>

      <LegalSection title="6. Şikâyet ve Uyuşmazlık">
        <p>
          Şikâyet ve talepler {COMPANY.email} adresine iletilebilir. Tüketici sıfatındaki
          alıcılar, Ticaret Bakanlığı&apos;nca her yıl belirlenen parasal sınırlar
          dâhilinde Tüketici Hakem Heyetlerine; bu sınırın üzerinde Tüketici
          Mahkemelerine başvurabilir. Yetkili heyet, tüketicinin veya satıcının yerleşim
          yerindeki il/ilçe tüketici hakem heyetidir.
        </p>
      </LegalSection>

      <LegalSection title="7. Diğer">
        <p>
          Kişisel veriler{" "}
          <LegalLink href="/gizlilik-politikasi">Gizlilik Politikası</LegalLink> ve{" "}
          <LegalLink href="/uye-aydinlatma-metni">Üye Aydınlatma Metni</LegalLink>{" "}
          uyarınca işlenir. Platform kullanımı{" "}
          <LegalLink href="/kullanim-kosullari">Kullanım Koşulları</LegalLink>&apos;na
          tabidir.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
