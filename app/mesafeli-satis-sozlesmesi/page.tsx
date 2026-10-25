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
  title: "Mesafeli Satış Sözleşmesi",
  description:
    "HukukLabs Studio ve Lens abonelik hizmetlerine ilişkin mesafeli satış sözleşmesi.",
  path: "/mesafeli-satis-sozlesmesi",
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

export default function MesafeliSatisSozlesmesiPage() {
  return (
    <LegalPageShell
      title="Mesafeli Satış Sözleşmesi"
      updatedAt={UPDATED}
      version="1.0"
    >
      <LegalSection title="1. Taraflar">
        <p>
          İşbu Mesafeli Satış Sözleşmesi (&quot;Sözleşme&quot;), 6502 sayılı Tüketicinin
          Korunması Hakkında Kanun (&quot;TKHK&quot;) ve Mesafeli Sözleşmeler Yönetmeliği
          kapsamında, aşağıda bilgileri yer alan satıcı ile alıcı arasında, elektronik
          ortamda akdedilmiştir.
        </p>
        <p className="text-foreground font-medium">1.1. Satıcı</p>
        <LegalList
          items={[
            <>Unvan: {COMPANY.legalName}</>,
            <>Marka: {COMPANY.brand} ({COMPANY.shortName} bünyesinde işletilen marka)</>,
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
        <p className="text-foreground font-medium">1.2. Alıcı</p>
        <p>
          Alıcı; {COMPANY.appHost} üzerindeki abonelik/ödeme formunda beyan ettiği ad-soyad
          veya unvan, T.C. kimlik numarası veya vergi kimlik numarası, fatura adresi ve
          kayıtlı e-posta adresi ile tanımlanan, HukukLabs Studio ve/veya Lens abonelik
          hizmetini satın alan gerçek veya tüzel kişidir. Alıcı&apos;nın kimlik ve iletişim
          bilgileri, sipariş anında sistemde kayıt altına alınır.
        </p>
      </LegalSection>

      <LegalSection title="2. Sözleşmenin Konusu">
        <p>
          İşbu Sözleşme&apos;nin konusu, Satıcı&apos;nın HukukLabs markası altında sunduğu
          dijital abonelik hizmetlerinin, Alıcı&apos;ya mesafeli sözleşmeler yoluyla satışı,
          ifası, bedeli, ödeme şekli, cayma hakkı ve uyuşmazlık çözümüne ilişkin hak ve
          yükümlülüklerin belirlenmesidir.
        </p>
        <p>
          Bu Sözleşme yalnızca satışa açık aşağıdaki hizmetleri kapsar. LawAPI, Comply ve
          Kurumsal plan (özel fiyatlandırma) bu Sözleşme kapsamında satışa sunulmaz; bu
          ürünler ayrı sözleşme veya sipariş ile temin edilebilir.
        </p>
        <LegalList
          items={[
            "HukukLabs Studio: hukuki belge üretimi, araştırma, analiz ve ilgili yazılım özelliklerine çevrimiçi ve masaüstü erişim sağlayan abonelik hizmeti.",
            "HukukLabs Lens: UYAP tarayıcı uzantısı üzerinden duruşma/dosya senkronizasyonu, hatırlatıcılar ve aboneliğe bağlı diğer ücretli özellikler.",
          ]}
        />
        <p>
          Satın alınan ücretli plan (Solo, Pro veya Max), aynı abonelik döneminde hem
          Studio hem Lens ücretli özelliklerini kapsar. Hizmet fiziksel mal teslimi
          içermez; ifa tamamen elektronik ortamda gerçekleşir.
        </p>
      </LegalSection>

      <LegalSection title="3. Hizmetin Temel Nitelikleri, Süresi, Ücreti ve Ödeme">
        <p className="text-foreground font-medium">3.1. Temel nitelikler</p>
        <p>
          Hizmet, seçilen plana bağlı olarak kredi kotası, günlük kullanım tavanı ve
          ilgili yazılım özelliklerini içeren, süreli bir dijital aboneliktir. Çıktılar
          yapay zekâ destekli taslak ve referans niteliğindedir; hukuki danışmanlık veya
          avukatlık hizmeti değildir. Özellikler ve fiyatlar{" "}
          <LegalLink href="https://studio.hukuklabs.com">studio.hukuklabs.com</LegalLink>{" "}
          adresinde güncel olarak yayımlanır.
        </p>
        <p className="text-foreground font-medium">3.2. Satışa açık planlar ve ücretler</p>
        <p>
          Aşağıdaki tutarlar sipariş anında Alıcı&apos;ya gösterilen güncel fiyatlardır ve
          KDV dahildir. Güncel fiyat her zaman ödeme ekranı ve fiyatlandırma sayfasındaki
          tutardır.
        </p>
        <LegalTable
          headers={["Plan", "Aylık", "Yıllık (peşin)", "Aylık kredi"]}
          rows={planPriceRows()}
        />
        <p className="text-foreground font-medium">3.3. Süre ve yenileme</p>
        <LegalList
          items={[
            "Aylık abonelik: fatura dönemi 1 aydır. Dönem sonunda, Alıcı iptal etmedikçe abonelik aynı plan ve güncel ücret üzerinden otomatik olarak yenilenir; kayıtlı ödeme aracından tahsilat yapılır.",
            "Yıllık abonelik: 12 aylık bedel peşin tahsil edilir. Süre sonunda otomatik yenileme yapılmaz. Süre dolmadan önce hatırlatma gönderilir; Alıcı yeniden ödeme yaparak aboneliği uzatabilir.",
            "3 günlük ücretsiz deneme (yalnızca aylık planlarda, kart kaydı ile): deneme süresince plan ücreti tahsil edilmez. Deneme bitmeden iptal edilmezse, deneme sonunda seçilen aylık plan ücreti otomatik tahsil edilir ve aylık abonelik başlar.",
          ]}
        />
        <p className="text-foreground font-medium">3.4. Ödeme şekli</p>
        <p>
          Ödeme, iyzico ödeme altyapısı üzerinden kredi/banka kartı ile yapılır. Kart
          bilgileri Satıcı sunucularında saklanmaz. Faturalandırma, Alıcı&apos;nın ödeme
          formunda seçtiği bireysel veya kurumsal bilgilere göre elektronik ortamda
          gerçekleştirilir.
        </p>
        <p className="text-foreground font-medium">3.5. İfa (teslimat)</p>
        <p>
          Ödemenin başarılı tamamlanmasını (veya denemede kart doğrulamasını) takiben
          hesap aktive edilir; Hizmet&apos;e erişim elektronik ortamda derhal sağlanır.
          Fiziksel kargo yapılmaz. Teslimat ve iadeye ilişkin ek esaslar{" "}
          <LegalLink href="/teslimat-ve-iade">Teslimat ve İade Şartları</LegalLink>
          &apos;nda yer alır.
        </p>
        <p className="text-foreground font-medium">3.6. İptal</p>
        <p>
          Alıcı aboneliğini hesap ayarlarından veya{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.email}
          </a>{" "}
          üzerinden iptal edebilir. İptal, yürürlükteki dönemin sonundan itibaren geçerli
          olur; aksi kararlaştırılmadıkça peşin ödenen dönem bedeli iade edilmez.
        </p>
      </LegalSection>

      <LegalSection title="4. Cayma Hakkı ve İstisnaları">
        <p>
          TKHK m.48 ve Mesafeli Sözleşmeler Yönetmeliği uyarınca tüketici, mesafeli
          sözleşmelerde 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart
          ödemeksizin sözleşmeden cayma hakkına sahiptir. Cayma süresinin belirlenmesinde
          Hizmet&apos;in ifasına başlandığı tarih esas alınır.
        </p>
        <p>
          <strong className="text-foreground">Dijital hizmet istisnası (TKHK m.15/1-ğ).</strong>{" "}
          İşbu Sözleşme konusu Hizmet, elektronik ortamda ifa edilen dijital içerik /
          dijital hizmet niteliğindedir. TKHK&apos;nın 15. maddesinin birinci fıkrasının (ğ)
          bendi uyarınca; Alıcı, ödeme/abonelik adımında Hizmet&apos;in ifasına derhal
          başlanması yönünde onay verdiği ve Hizmet&apos;i kullanmaya başladığı (hesabın
          aktive edilmesi, yazılıma veya dijital içeriğe erişim sağlanması) takdirde cayma
          hakkını kullanamaz. Bu onay, ödeme formundaki ilgili onay kutusu ile alınır.
        </p>
        <p>
          Alıcı, onay kutusunu işaretlemekle: (i) Hizmet&apos;in ifasına derhal
          başlanmasını istediğini, (ii) ifanın başlamasıyla TKHK m.15/1-ğ kapsamında cayma
          hakkının sona ereceğini bildiğini ve kabul ettiğini beyan eder.
        </p>
        <p>
          Cayma hakkının kullanılabildiği istisnai hâllerde (ifaya başlanmamış olması veya
          kanunun öngördüğü diğer durumlar) talep, {COMPANY.email} adresine; sipariş /
          abonelik bilgisi ve gerekçe ile iletilir. Satıcı kaynaklı ifa engelinde,
          kullanılmayan dönem için orantılı ücret iadesi talep edilebilir. Ayrıntılar{" "}
          <LegalLink href="/teslimat-ve-iade">Teslimat ve İade Şartları</LegalLink>
          &apos;ndadır.
        </p>
        <p>
          Tüzel kişi Alıcılar ve ticari/mesleki amaçla hareket edenler bakımından TKHK
          hükümleri uygulanmayabilir; bu durumda 6098 sayılı Türk Borçlar Kanunu ve ilgili
          mevzuat geçerlidir. Şüphe hâlinde ödeme anındaki sıfat esas alınır.
        </p>
      </LegalSection>

      <LegalSection title="5. Ön Bilgilendirme ve Sözleşmenin Kurulması">
        <p>
          Alıcı, ödeme adımına geçmeden önce{" "}
          <LegalLink href="/on-bilgilendirme-formu">Ön Bilgilendirme Formu</LegalLink>
          &apos;nu ve işbu Sözleşme&apos;yi inceleme imkânına sahiptir. Sözleşme; Alıcı&apos;nın
          ilgili onay kutularını işaretlemesi ve ödemenin (veya denemede kart
          doğrulamasının) tamamlanması ile kurulmuş sayılır. Satıcı, sipariş sonrası
          Sözleşme ve ön bilgilendirme metnine erişimi hesap veya e-posta yoluyla
          sürdürülebilir kılar.
        </p>
      </LegalSection>

      <LegalSection title="6. Uyuşmazlık Çözümü">
        <p>
          İşbu Sözleşme Türkiye Cumhuriyeti hukukuna tabidir. Tüketici sıfatını haiz
          Alıcı, uyuşmazlıklarda:
        </p>
        <LegalList
          items={[
            "Tüketici Hakem Heyetlerine (Alıcı'nın yerleşim yeri veya Satıcı'nın yerleşim yeri il/ilçe tüketici hakem heyeti; her yıl Ticaret Bakanlığı'nca yayımlanan parasal sınırlar dâhilinde) başvurabilir.",
            "Parasal sınırın üzerindeki uyuşmazlıklarda Tüketici Mahkemelerine başvurabilir.",
          ]}
        />
        <p>
          Tüketici sıfatı bulunmayan Alıcılar bakımından Antalya Mahkemeleri ve İcra
          Daireleri yetkilidir. Başvuru ve şikâyetler ayrıca {COMPANY.email} adresine
          iletilebilir.
        </p>
      </LegalSection>

      <LegalSection title="7. Diğer Hükümler">
        <LegalList
          items={[
            <>
              Kişisel veriler{" "}
              <LegalLink href="/gizlilik-politikasi">Gizlilik Politikası</LegalLink> ve{" "}
              <LegalLink href="/uye-aydinlatma-metni">Üye Aydınlatma Metni</LegalLink>{" "}
              çerçevesinde işlenir.
            </>,
            <>
              Platform kullanımı{" "}
              <LegalLink href="/kullanim-kosullari">Kullanım Koşulları</LegalLink> ile
              birlikte uygulanır. Teslimat ve iadeye özgü hususlarda{" "}
              <LegalLink href="/teslimat-ve-iade">Teslimat ve İade Şartları</LegalLink>{" "}
              esas alınır.
            </>,
            "Satıcı, plan içeriklerini ve fiyatları mevzuata uygun şekilde güncelleyebilir. Esaslı değişiklikler uygun kanallarla bildirilir; yürürlükteki dönem, satın alma anındaki koşullara tabidir.",
          ]}
        />
      </LegalSection>
    </LegalPageShell>
  )
}
