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

export const metadata: Metadata = createMetadata({
  title: "Ziyaretçi Aydınlatma Metni",
  description:
    "HukukLabs internet sitesi ziyaretçilerine yönelik KVKK aydınlatma metni.",
  path: "/ziyaretci-aydinlatma-metni",
})

export default function ZiyaretciAydinlatmaPage() {
  return (
    <LegalPageShell
      title="İnternet Sitesi Ziyaretçilerine Yönelik Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni"
      updatedAt={LEGAL_UPDATED}
    >
      <LegalSection title="1. Veri Sorumlusunun Kimliği">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca,{" "}
          {COMPANY.websiteHost} internet sitesini (&quot;İnternet Sitesi&quot;) ziyaret etmeniz
          sırasında elde edilen kişisel verileriniz bakımından veri sorumlusu, merkezi{" "}
          {COMPANY.address} adresinde bulunan, vergi numarası {COMPANY.taxId} olan{" "}
          {COMPANY.legalName} (&quot;Şirket&quot;) olup, HukukLabs markası altında yürütülen
          faaliyetler bakımından işbu Aydınlatma Metni KVKK&apos;nın 10. maddesi ile
          Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında
          Tebliğ kapsamında hazırlanmıştır. HukukLabs, {COMPANY.shortName} bünyesinde
          işletilen markalardan biridir.
        </p>
        <p>
          Veri koruma ve gizlilik konularındaki talepleriniz için{" "}
          <a
            href={`mailto:${COMPANY.privacyEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.privacyEmail}
          </a>{" "}
          adresinden bizimle iletişime geçebilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="2. Aydınlatma Metninin Kapsamı">
        <p>
          İşbu Aydınlatma Metni, yalnızca İnternet Sitesi&apos;ni ziyaret etmeniz sırasında;
          IP adresi, çerezler ve benzeri teknolojiler ile tarayıcı/cihaz bilgileri gibi
          otomatik yollarla elde edilen kişisel verilerin işlenmesini kapsar.
        </p>
        <p>
          İletişim formu ve demo talebi üzerinden paylaştığınız kişisel veriler işbu
          metnin kapsamı dışında olup{" "}
          <LegalLink href="/demo-aydinlatma-metni">
            İletişim Formu ve Demo Talebi Aydınlatma Metni
          </LegalLink>{" "}
          kapsamında değerlendirilir. Platform üyelerine ilişkin işlemler{" "}
          <LegalLink href="/uye-aydinlatma-metni">Üye Aydınlatma Metni</LegalLink> ile
          düzenlenir.
        </p>
      </LegalSection>

      <LegalSection title="3. İşlenen Kişisel Veri Kategorileri">
        <LegalTable
          headers={["Veri Kategorisi", "Açıklama / Örnekler"]}
          rows={[
            [
              "Kullanım ve Teknik Veri",
              "Cihaz tanımlayıcı, IP adresi, tarayıcı ve işletim sistemi bilgisi, gezinme geçmişi, yaklaşık konum bilgisi",
            ],
            [
              "Bilgi Güvenliği Log Kayıtları",
              "Oturum kayıtları, erişim ve işlem logları",
            ],
            [
              "Pazarlama Bilgileri",
              "Çerez kayıtları ve çerezler aracılığıyla elde edilen gezinme/etkileşim verileri (yalnızca onayınız hâlinde)",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Kişisel Verilerin İşlenme Amaçları">
        <LegalList
          items={[
            "İletişim faaliyetlerinin yürütülmesi (İnternet Sitesi'nin güvenli ve işlevsel şekilde çalışmasının sağlanması)",
            "Onay vermeniz hâlinde pazarlama analiz çalışmaları ile reklam / kampanya süreçlerinin yürütülmesi",
            "Bilgi güvenliği süreçlerinin yürütülmesi (kötüye kullanımın ve siber güvenlik risklerinin önlenmesi)",
            "Faaliyetlerin mevzuata uygun yürütülmesi ile yetkili kişi, kurum ve kuruluşlara bilgi verilmesi",
            "Hukuk işlerinin takibi ve yürütülmesi",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi">
        <p>
          Kişisel verileriniz; İnternet Sitesi&apos;ne erişiminiz sırasında çerezler ve
          benzeri teknolojiler aracılığıyla otomatik yollarla toplanmaktadır. Bu veriler
          KVKK&apos;nın 5. maddesinde yer alan; açık rızanızın bulunması (özellikle pazarlama
          amaçlı çerezler bakımından), hukuki yükümlülüğün yerine getirilmesi ve
          Şirket&apos;in meşru menfaati (İnternet Sitesi güvenliğinin ve işlerliğinin
          sağlanması) hukuki sebeplerine dayanılarak işlenmektedir.
        </p>
      </LegalSection>

      <LegalSection title="6. Kişisel Verilerin Aktarılması">
        <p>
          Kişisel verileriniz; İnternet Sitesi&apos;nin barındırılması, güvenliğinin
          sağlanması, analiz ve pazarlama araçlarının işletilmesi amacıyla hizmet alınan
          tedarikçi ve iş ortaklarına, gerekli görülmesi hâlinde danışmanlarımıza ve
          yetkili kamu kurum ve kuruluşlarına, KVKK&apos;nın 8. ve 9. maddelerinde öngörülen
          şartlar ve amaçla sınırlı olmak kaydıyla aktarılabilir. Yurt dışına aktarım
          hâlinde KVKK m.9 kapsamındaki uygun güvenceler sağlanır.
        </p>
      </LegalSection>

      <LegalSection title="7. Kişisel Verilerin Saklama Süresi">
        <LegalTable
          headers={["Veri Kategorisi", "Saklama Süresi"]}
          rows={[
            ["Kullanım ve Teknik Veri", "1 yıl"],
            ["Bilgi Güvenliği Log Kayıtları", "5 yıl"],
            ["Pazarlama Bilgileri", "5 yıl"],
          ]}
        />
      </LegalSection>

      <LegalSection title="8. Veri Güvenliğine İlişkin Alınan Tedbirler">
        <p>
          Şirket, kişisel verilerinizin hukuka aykırı olarak işlenmesini ve bunlara
          erişilmesini önlemek amacıyla KVKK&apos;nın 12. maddesi uyarınca şifreleme,
          güvenlik duvarları, erişim yetki matrisi, erişim logları, yedekleme, çalışan
          gizlilik taahhütnameleri ve farkındalık eğitimleri dahil olmak üzere uygun teknik
          ve idari tedbirleri almaktadır.
        </p>
      </LegalSection>

      <LegalSection title="9. Çerezler">
        <p>
          Çerez türleri, kullanım amaçları ve tercihlerinizi yönetme yöntemlerine ilişkin
          ayrıntılı bilgiye{" "}
          <LegalLink href="/cerez-politikasi">Çerez Politikası</LegalLink>&apos;ndan
          ulaşabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="10. İlgili Kişi Olarak Haklarınız">
        <p>
          KVKK&apos;nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme,
          bilgi talep etme, düzeltilmesini veya silinmesini isteme, aktarıldığı üçüncü
          kişileri bilme ve kanuna aykırı işleme sebebiyle zararın giderilmesini talep etme
          haklarına sahipsiniz.
        </p>
      </LegalSection>

      <LegalSection title="11. Başvuru Yöntemi ve İletişim">
        <p>
          Taleplerinizi kimliğinizi tevsik edici belgelerle birlikte{" "}
          <a
            href={`mailto:${COMPANY.privacyEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.privacyEmail}
          </a>{" "}
          adresine e-posta yoluyla veya {COMPANY.addressFull} adresine yazılı olarak
          iletebilirsiniz. Başvurunuz en geç 30 gün içinde ücretsiz olarak
          sonuçlandırılacaktır.
        </p>
      </LegalSection>

      <LegalSection title="12. Değişiklik ve Güncellemeler">
        <p>
          Şirket, işbu Aydınlatma Metni&apos;nde değişiklik yapma hakkını saklı tutar.
          Güncel metin İnternet Sitesi üzerinden yayımlanır ve yayımlandığı tarih itibarıyla
          yürürlüğe girer.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
