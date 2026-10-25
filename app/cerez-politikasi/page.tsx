import type { Metadata } from "next"
import { createMetadata } from "@/lib/seo"
import {
  LegalLink,
  LegalList,
  LegalPageShell,
  LegalSection,
  LegalTable,
} from "@/components/legal-page-shell"
import { COMPANY, LEGAL_UPDATED } from "@/lib/company"
import { COOKIE_CONSENT_KEY } from "@/lib/cookie-consent"

export const metadata: Metadata = createMetadata({
  title: "Çerez Politikası",
  description:
    "HukukLabs çerez politikası: sitemizde kullanılan çerez türleri, amaçları ve tercih yönetimi.",
  path: "/cerez-politikasi",
})

export default function CerezPolitikasiPage() {
  return (
    <LegalPageShell title="HukukLabs Çerez Politikası" updatedAt={LEGAL_UPDATED}>
      <LegalSection title="Giriş">
        <p>
          Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun (&quot;KVKK&quot;) 10.
          maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve
          Esaslar Hakkında Tebliğ kapsamında veri sorumlusu sıfatıyla {COMPANY.legalName}{" "}
          (&quot;Şirket&quot;) tarafından, HukukLabs markası kapsamında hazırlanmıştır.
          HukukLabs, {COMPANY.shortName} bünyesinde işletilen markalardan biridir. Bu Çerez
          Politikası&apos;nın amacı, internet sitemizde kullanılan çerezlerin cihazınıza
          yerleştirilmesi aracılığıyla otomatik yolla elde edilen kişisel verilerin
          işlenmesine ilişkin olarak, hangi amaçlarla hangi tür çerezleri kullandığımız,
          hukuki sebebi ve haklarınız hakkında sizlere bilgi vermektir.
        </p>
      </LegalSection>

      <LegalSection title="Çerez (“Cookie”) Nedir?">
        <p>
          Çerezler, ziyaret ettiğiniz internet siteleri/uygulamalar tarafından tarayıcılar
          aracılığıyla bilgisayarınıza (ya da akıllı telefon veya tablet gibi diğer
          cihazlarınıza) kaydedilen ve genelde harf ve rakamlardan oluşan çok küçük metin
          dosyalarıdır. Çerezler, ziyaretçilere ilişkin isim, cinsiyet veya adres gibi
          kişisel verileri içermezler.
        </p>
      </LegalSection>

      <LegalSection title="Veri Sorumlusu Çerezleri Nasıl Kullanmaktadır?">
        <p>Veri Sorumlusu çerezleri;</p>
        <LegalList
          items={[
            "İnternet sitesinin çalışması için gerekli temel fonksiyonları gerçekleştirmek",
            "İnternet sitesini analiz etmek ve performansını artırmak (örneğin ziyaretçi sayısının tespit edilmesi)",
            "İnternet sitesinin işlevselliğini arttırmak ve kullanım kolaylığı sağlamak (örneğin tercihlerin hatırlanması)",
            "Onayınız hâlinde kişiselleştirme, hedefleme ve reklamcılık faaliyeti gerçekleştirmek",
          ]}
        />
        <p>amaçlarıyla belirtilen hukuki sebeplerin varlığı halinde işlemektedir.</p>
      </LegalSection>

      <LegalSection title="Çerez Yönetimi">
        <p>
          Site altındaki çerez bildirim paneli üzerinden analitik çerezleri kabul veya
          reddedebilirsiniz. Ayrıca internet tarayıcınızın ayarlarından çerezleri
          yönetebilirsiniz:
        </p>
        <LegalList
          items={[
            "Google Chrome: Adres çubuğundaki kilit/ayarlar üzerinden Çerez ayarları",
            "Microsoft Edge: Ayarlar → Gizlilik, arama ve hizmetler",
            "Mozilla Firefox: Menü → Ayarlar → Gizlilik ve Güvenlik",
            "Safari: Ayarlar → Safari → Gizlilik ve Güvenlik",
          ]}
        />
        <p>
          Tüm çerezler hakkında bilgi sahibi olmak için{" "}
          <a
            href="https://www.allaboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2"
          >
            allaboutcookies.org
          </a>{" "}
          veya{" "}
          <a
            href="https://www.youronlinechoices.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2"
          >
            youronlinechoices.eu
          </a>{" "}
          adreslerini ziyaret edebilirsiniz. Zorunlu çerezleri reddederseniz siteyi
          kullanmaya devam edebilirsiniz fakat tüm işlevlere hatasız erişemeyebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="Çerez Çeşitleri">
        <p>
          <strong className="text-foreground">Oturum çerezleri:</strong> Tarayıcınızı
          kapattığınızda sona erer.
        </p>
        <p>
          <strong className="text-foreground">Zorunlu çerezler:</strong> İnternet
          sitesinin çalışması için gerekli olan çerezlerdir (oturum, güvenlik, çerez tercih
          kaydı vb.).
        </p>
        <p>
          <strong className="text-foreground">Fonksiyonel çerezler:</strong>{" "}
          Kişiselleştirme ve tercihlerin hatırlanması amaçlarıyla kullanılır.
        </p>
        <p>
          <strong className="text-foreground">Performans-Analitik çerezler:</strong>{" "}
          Kullanıcı davranışlarını istatistiksel olarak ölçmek ve siteyi iyileştirmek için
          kullanılır; yalnızca onayınızla etkinleşir.
        </p>
      </LegalSection>

      <LegalSection title="Sitemizde Kullanılan Çerezler">
        <LegalTable
          headers={[
            "Çerez Hizmet Sağlayıcı",
            "Çerez İsmi",
            "Kullanım Amacı",
            "Tip",
            "Süre",
          ]}
          rows={[
            [
              "HukukLabs",
              COOKIE_CONSENT_KEY,
              "Çerez onay tercihini (zorunlu veya analitik) saklar",
              "Zorunlu · Birinci taraf",
              "Kalıcı (localStorage)",
            ],
            [
              "HukukLabs",
              "Oturum ve güvenlik çerezleri",
              "Site güvenliği ve temel işlevlerin sunulması",
              "Zorunlu · Birinci taraf",
              "Oturum veya gerekli süre",
            ],
            [
              "Google Analytics (onay ile)",
              "_ga, _ga_*, _gid",
              "Ziyaretçi ayrımı ve istatistiksel raporlama",
              "Analitik · Üçüncü taraf",
              "24 saat – 2 yıl",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="İlgili Kişi Hakları">
        <p>
          KVKK&apos;nın 11. maddesi kapsamındaki taleplerinizi Veri Sorumlusuna Başvuru Usul
          ve Esasları Hakkında Tebliğ&apos;e göre aşağıdaki kanallardan iletebilirsiniz:
        </p>
        <LegalList
          items={[
            <>Adres: {COMPANY.addressFull}</>,
            <>
              E-posta:{" "}
              <a
                href={`mailto:${COMPANY.privacyEmail}`}
                className="text-foreground underline underline-offset-2"
              >
                {COMPANY.privacyEmail}
              </a>
            </>,
          ]}
        />
        <p>
          Genel çerçeve için{" "}
          <LegalLink href="/gizlilik-politikasi">Gizlilik Politikası</LegalLink>&apos;na
          bakınız.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
