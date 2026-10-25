import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"
import {
  LegalLink,
  LegalList,
  LegalPageShell,
  LegalSection,
} from "@/components/legal-page-shell"
import { COMPANY, LEGAL_UPDATED } from "@/lib/company"

export const metadata: Metadata = createMetadata({
  title: "Teslimat ve İade Şartları",
  description:
    "HukukLabs dijital ürün ve abonelik hizmetlerine ilişkin teslimat, cayma ve iade şartları.",
  path: "/teslimat-ve-iade",
})

export default function TeslimatVeIadePage() {
  return (
    <LegalPageShell title="Teslimat ve İade Şartları" updatedAt={LEGAL_UPDATED}>
      <LegalSection title="1. Taraflar ve Kapsam">
        <p>
          İşbu Teslimat ve İade Şartları, {COMPANY.legalName} (&quot;Şirket&quot;) tarafından
          HukukLabs markası altında {COMPANY.websiteHost} ve bağlantılı kanallar üzerinden
          sunulan dijital yazılım ürünleri, abonelik paketleri ve ilgili hizmetlerin
          (Studio, LawAPI, Comply, Lens vb.) teslimatı, kullanımı ve iadesine ilişkin usul
          ve esasları düzenler. HukukLabs, {COMPANY.shortName} bünyesinde işletilen
          markalardan biridir.
        </p>
        <p>
          Şirket bilgileri: Vergi Dairesi {COMPANY.taxOffice}, VKN {COMPANY.taxId}, Adres:{" "}
          {COMPANY.addressFull}.
        </p>
      </LegalSection>

      <LegalSection title="2. Hizmetin Niteliği">
        <p>
          HukukLabs ürünleri fiziksel mal teslimatı içermeyen, elektronik ortamda sunulan
          dijital içerik ve yazılım hizmetleridir. Hizmetler, kural olarak hukuk
          profesyonelleri ve tüzel kişiler tarafından mesleki veya ticari amaçla kullanılır;
          bu çerçevede taraflar arasındaki ilişki 6502 sayılı Tüketicinin Korunması Hakkında
          Kanun kapsamındaki mesafeli satış ilişkisi olarak değerlendirilmeyebilir. Buna
          rağmen şeffaflık amacıyla aşağıdaki teslimat ve iade esasları uygulanır.
        </p>
      </LegalSection>

      <LegalSection title="3. Teslimat">
        <LegalList
          items={[
            "Dijital hizmetlerin teslimatı, ödemenin başarılı şekilde tamamlanmasını takiben elektronik ortamda gerçekleştirilir.",
            "Teslimat; hesap aktivasyonu, lisans anahtarı/erişim bilgisi gönderimi, indirme bağlantısı sağlanması veya API anahtarı tanımlanması şeklinde yapılır.",
            "Erişim bilgileri, kayıt sırasında beyan ettiğiniz e-posta adresine ve/veya Platform hesabınıza iletilir.",
            "Teknik bir aksaklık nedeniyle erişimin sağlanamaması hâlinde, bildiriminizi takiben en kısa sürede erişim yeniden sağlanır veya alternatif çözüm sunulur.",
            "Fiziksel kargo veya matbu ürün teslimatı yapılmaz.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Faturalandırma">
        <p>
          Abonelik ve tek seferlik lisans bedelleri, ilgili plan sayfasında veya sipariş
          formunda belirtilen tutarlar üzerinden tahsil edilir. Aksi belirtilmedikçe
          ücretler KDV hariçtir. Fatura, elektronik ortamda düzenlenerek kayıtlı e-posta
          adresinize iletilir veya hesabınızdan erişilebilir hâle getirilir.
        </p>
      </LegalSection>

      <LegalSection title="5. Cayma ve İade">
        <p>
          <strong className="text-foreground">5.1. Dijital içeriğin ifası.</strong>{" "}
          Ödemenizin ardından hesabınız aktive edilerek dijital içeriğe veya yazılıma erişim
          sağlandığında, hizmet ifasına başlanmış sayılır. Ödeme adımında ifaya derhal
          başlanması yönünde onay vermeniz ve Hizmet&apos;i kullanmaya başlamanız hâlinde,
          TKHK m.15/1-ğ uyarınca cayma hakkı kullanılamaz. Ayrıntılar{" "}
          <LegalLink href="/mesafeli-satis-sozlesmesi">
            Mesafeli Satış Sözleşmesi
          </LegalLink>
          &apos;ndedir.
        </p>
        <p>
          <strong className="text-foreground">5.2. Abonelikler.</strong> Aylık veya yıllık
          aboneliklerde, dönem içinde kullanılan hizmet bedeli iade edilmez. Yenileme
          döneminde aboneliğinizi iptal etmeniz hâlinde, mevcut dönem sonuna kadar erişiminiz
          devam eder; bir sonraki dönem için ücret tahsil edilmez.
        </p>
        <p>
          <strong className="text-foreground">5.3. Şirket kaynaklı ifa engeli.</strong>{" "}
          Hizmetin, Şirket&apos;in kusurundan kaynaklanan nedenlerle makul süre içinde
          sunulamaması veya esaslı şekilde ifa edilememesi hâlinde, kullanılmayan dönem için
          orantılı ücret iadesi talep edebilirsiniz.
        </p>
        <p>
          <strong className="text-foreground">5.4. Kullanıcı kaynaklı durumlar.</strong>{" "}
          Yanlış paket seçimi, hesap paylaşımı yasağı ihlali, kullanım koşullarına aykırılık
          veya kendi cihaz ya da yazılım sorunlarınız nedeniyle Hizmet&apos;ten
          yararlanamamanız iade hakkı doğurmaz.
        </p>
        <p>
          <strong className="text-foreground">5.5. İade talebi.</strong> İade taleplerinizi{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.email}
          </a>{" "}
          adresine; sipariş/abonelik bilgileriniz, fatura numaranız ve talebinizin gerekçesi
          ile iletebilirsiniz. Uygun görülen iadeler, ödeme yönteminize bağlı olarak makul
          süre içinde aynı kanaldan veya banka hesabınıza yapılır.
        </p>
      </LegalSection>

      <LegalSection title="6. Abonelik İptali">
        <p>
          Aboneliğinizi Platform hesap ayarlarından veya{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.email}
          </a>{" "}
          üzerinden iptal talebi ile sonlandırabilirsiniz. İptal, yürürlükteki dönemin
          sonundan itibaren geçerli olur; aksi açıkça kararlaştırılmadıkça peşin ödenen
          dönem bedeli iade edilmez.
        </p>
      </LegalSection>

      <LegalSection title="7. Kullanım Koşulları ile İlişki">
        <p>
          İşbu şartlar,{" "}
          <LegalLink href="/kullanim-kosullari">Kullanım Koşulları</LegalLink>,{" "}
          <LegalLink href="/mesafeli-satis-sozlesmesi">
            Mesafeli Satış Sözleşmesi
          </LegalLink>
          ,{" "}
          <LegalLink href="/on-bilgilendirme-formu">Ön Bilgilendirme Formu</LegalLink> ve{" "}
          <LegalLink href="/gizlilik-politikasi">Gizlilik Politikası</LegalLink> ile birlikte
          uygulanır. Çelişki hâlinde, teslimat ve iadeye özgü hükümler bu metinde; cayma
          ve mesafeli satışa özgü hükümler Mesafeli Satış Sözleşmesi&apos;nde; diğer hususlar
          Kullanım Koşulları&apos;nda esas alınır.
        </p>
      </LegalSection>

      <LegalSection title="8. Uygulanacak Hukuk">
        <p>
          Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Antalya
          Mahkemeleri ve İcra Daireleri yetkilidir.
        </p>
      </LegalSection>

      <LegalSection title="9. İletişim">
        <LegalList
          items={[
            <>Unvan: {COMPANY.legalName}</>,
            <>Adres: {COMPANY.addressFull}</>,
            <>
              E-posta:{" "}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-foreground underline underline-offset-2"
              >
                {COMPANY.email}
              </a>
            </>,
          ]}
        />
      </LegalSection>
    </LegalPageShell>
  )
}
