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
  title: "İletişim Formu ve Demo Talebi Aydınlatma Metni",
  description:
    "HukukLabs iletişim formu ve demo talebi kanallarına ilişkin KVKK aydınlatma metni.",
  path: "/demo-aydinlatma-metni",
})

export default function DemoAydinlatmaPage() {
  return (
    <LegalPageShell
      title="İletişim Formu ve Demo Talebi Aydınlatma Metni"
      updatedAt={LEGAL_UPDATED}
    >
      <LegalSection title="1. Veri Sorumlusunun Kimliği">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, İletişim
          Formu veya Demo Talebi kanalları üzerinden HukukLabs ile iletişime geçmeniz
          kapsamında elde edilen kişisel verileriniz bakımından veri sorumlusu, merkezi{" "}
          {COMPANY.address} adresinde bulunan, vergi numarası {COMPANY.taxId} olan{" "}
          {COMPANY.legalName} (&quot;Şirket&quot;) olup, HukukLabs markası altında yürütülen
          faaliyetler bakımından işbu Aydınlatma Metni KVKK&apos;nın 10. maddesi ile
          Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında
          Tebliğ kapsamında hazırlanmıştır. HukukLabs, {COMPANY.shortName} bünyesinde
          işletilen markalardan biridir.
        </p>
      </LegalSection>

      <LegalSection title="2. Aydınlatma Metninin Kapsamı">
        <p>
          İşbu Aydınlatma Metni, İnternet Sitesi ({COMPANY.websiteHost}) üzerindeki iletişim
          formu, demo talebi, ön kayıt (bekleme listesi) veya benzeri kanallarla, Platform&apos;a
          üye olup olmadığınıza bakılmaksızın, HukukLabs ile iletişime geçen kişileri
          kapsar.
        </p>
        <p>
          İnternet Sitesi&apos;ni yalnızca ziyaret eden kişilerin verileri{" "}
          <LegalLink href="/ziyaretci-aydinlatma-metni">Ziyaretçi Aydınlatma Metni</LegalLink>
          kapsamında; Platform üyelerinin verileri{" "}
          <LegalLink href="/uye-aydinlatma-metni">Üye Aydınlatma Metni</LegalLink>{" "}
          kapsamında düzenlenir.
        </p>
      </LegalSection>

      <LegalSection title="3. İşlenen Kişisel Veri Kategorileri">
        <LegalTable
          headers={["Veri Kategorisi", "Açıklama / Örnekler"]}
          rows={[
            ["Kimlik Bilgisi", "Ad, soyad"],
            ["İletişim Bilgisi", "E-posta adresi, telefon numarası"],
            [
              "Mesleki Bilgi",
              "Firma/kurum adı; hukuk profesyoneli iseniz baro bilgisi",
            ],
            [
              "Talep/Şikâyet Bilgisi",
              "İletişim formu mesajı veya demo talebi içeriği ile talebin tarih ve saati",
            ],
          ]}
        />
        <p>
          Yukarıdaki veri kategorilerinin tamamı her başvuru için geçerli olmayıp, hangi
          verilerin işleneceği tercih ettiğiniz kanala ve talebinizin niteliğine göre
          değişkenlik gösterir.
        </p>
      </LegalSection>

      <LegalSection title="4. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri">
        <LegalTable
          headers={["Amaç", "Hukuki Sebep"]}
          rows={[
            [
              "Demo talebinizin değerlendirilmesi için sizinle iletişime geçilmesi",
              "Sözleşmenin kurulmasından önce gerekli olan tedbirlerin alınması",
            ],
            [
              "İletişim formu ile ilettiğiniz mesajın değerlendirilmesi ve geri dönüş",
              "Meşru menfaatimiz",
            ],
            [
              "Talep ve şikâyetlerin takibi ile iş süreçlerinin iyileştirilmesi",
              "Meşru menfaatimiz",
            ],
            [
              "Onay vermeniz hâlinde pazarlama ve kampanya süreçleri",
              "Meşru menfaat (ticari ileti için ayrıca açık rıza ve İYS)",
            ],
            [
              "Hukuki yükümlülüklerin yerine getirilmesi",
              "Kanunlarda açıkça öngörülmüş olması",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Kişisel Verilerin Toplanma Yöntemi">
        <p>
          Kişisel verileriniz; İnternet Sitesi üzerindeki iletişim formu veya demo talebi
          formlarının doldurulması yahut e-posta veya telefon yoluyla iletişime geçilmesi
          suretiyle, doğrudan sizin tarafınızdan sağlanarak toplanmaktadır.
        </p>
      </LegalSection>

      <LegalSection title="6. Kişisel Verilerin Aktarılması">
        <p className="text-foreground font-medium">Yurt içinde</p>
        <LegalTable
          headers={["Üçüncü Taraf", "Aktarım Amacı"]}
          rows={[
            [
              "Web analitik ve reklam hizmeti sağlayıcımız",
              "Site kullanımı analizi ve pazarlama faaliyetleri",
            ],
            [
              "Yetkili kamu kurum ve kuruluşları",
              "Hukuki yükümlülüklerin yerine getirilmesi",
            ],
          ]}
        />
        <p className="text-foreground font-medium">Yurt dışında</p>
        <LegalTable
          headers={["Üçüncü Taraf", "Aktarım Amacı"]}
          rows={[
            [
              "Barındırma (hosting) hizmeti sağlayıcımız",
              "Talebe ilişkin verilerin güvenli depolanması",
            ],
            [
              "E-posta ve form iletim hizmet sağlayıcılarımız",
              "İletişim formlarının iletilmesi ve yanıtlanması",
            ],
            [
              "Web analitik hizmeti sağlayıcımız",
              "Site kullanımı analizi (onay hâlinde)",
            ],
          ]}
        />
        <p>
          Yeterlilik kararı bulunmayan ülkelere yapılan aktarımlar, KVKK m.9 kapsamında
          uygun güvencelerle gerçekleştirilir.
        </p>
      </LegalSection>

      <LegalSection title="7. Kişisel Verilerin Saklama Süresi">
        <p>
          İletişim formu ve demo talebi kapsamındaki kişisel verileriniz, talebinizin
          sonuçlandırılmasından itibaren 1 (bir) yıl süreyle saklanır. Süre sonunda veya
          işlenme amacının ortadan kalkması hâlinde verileriniz silinir, yok edilir veya
          anonim hâle getirilir.
        </p>
      </LegalSection>

      <LegalSection title="8. Veri Güvenliğine İlişkin Alınan Tedbirler">
        <LegalList
          items={[
            "Erişim yetki matrisi ve kontrolü, günlük (log) kayıtlarının tutulması",
            "Şifreleme, güvenlik duvarları ve yedekleme",
            "Kişisel veri işleme envanterinin güncel tutulması, çalışan gizlilik taahhütnameleri",
            "Düzenli farkındalık eğitimleri ve tedarikçi/veri işleyen denetimi",
          ]}
        />
      </LegalSection>

      <LegalSection title="9. İlgili Kişi Olarak Haklarınız">
        <p>
          KVKK&apos;nın 11. maddesi uyarınca; işlenip işlenmediğini öğrenme, bilgi talep
          etme, düzeltilmesini veya silinmesini isteme, aktarıldığı üçüncü kişileri bilme,
          otomatik analiz sonucuna itiraz etme ve kanuna aykırı işleme sebebiyle zararın
          giderilmesini talep etme haklarına sahipsiniz.
        </p>
      </LegalSection>

      <LegalSection title="10. Başvuru Yöntemi ve İletişim">
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

      <LegalSection title="11. Değişiklik ve Güncellemeler">
        <p>
          Şirket, işbu Aydınlatma Metni&apos;nde değişiklik yapma hakkını saklı tutar.
          Güncel metin İnternet Sitesi üzerinden yayımlanır ve yayımlandığı tarih itibarıyla
          yürürlüğe girer.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
