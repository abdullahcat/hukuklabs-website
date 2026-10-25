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
  title: "Üye Aydınlatma Metni",
  description:
    "HukukLabs platform üyelerine, kullanıcılarına ve müşterilerine yönelik KVKK aydınlatma metni.",
  path: "/uye-aydinlatma-metni",
})

export default function UyeAydinlatmaPage() {
  return (
    <LegalPageShell title="Üye Aydınlatma Metni" updatedAt={LEGAL_UPDATED}>
      <LegalSection title="1. Veri Sorumlusunun Kimliği">
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca,{" "}
          {COMPANY.appHost} Platformu&apos;na (&quot;Platform&quot;) üye olmanız ve Platform
          üzerinden Hizmet almanız kapsamında elde edilen kişisel verileriniz bakımından
          veri sorumlusu, merkezi {COMPANY.address} adresinde bulunan, vergi numarası{" "}
          {COMPANY.taxId} olan {COMPANY.legalName} (&quot;Şirket&quot;) olup, HukukLabs
          markası altında yürütülen faaliyetler bakımından işbu Aydınlatma Metni
          KVKK&apos;nın 10. maddesi ile Aydınlatma Yükümlülüğünün Yerine Getirilmesinde
          Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında hazırlanmıştır. HukukLabs,{" "}
          {COMPANY.shortName} bünyesinde işletilen markalardan biridir.
        </p>
      </LegalSection>

      <LegalSection title="2. Aydınlatma Metninin Kapsamı">
        <p>
          İşbu Aydınlatma Metni, HukukLabs Platformu&apos;na üye olan, Platform üzerinden
          Hizmet alan Kullanıcılar ve Müşterileri (&quot;Üye&quot;) kapsar. İnternet
          Sitesi&apos;ni yalnızca ziyaret eden kişiler ile iletişim ve demo formları
          üzerinden iletişime geçen kişilerin verileri ayrı aydınlatma metinlerinde
          düzenlenir.
        </p>
        <p>
          Platforma yüklediğiniz belgeler ve bu belgelerde yer alan üçüncü kişilere ait
          veriler (&quot;İçerik ve Hukuki Veriler&quot;) bakımından Şirket&apos;in rolü
          farklıdır; bu husus 4. maddede açıklanmaktadır.
        </p>
      </LegalSection>

      <LegalSection title="3. İşlenen Kişisel Veri Kategorileri">
        <LegalTable
          headers={["Veri Kategorisi", "Açıklama / Örnekler"]}
          rows={[
            [
              "Kimlik Bilgisi",
              "Ad, soyad; faturalama gerektiren hâllerde T.C. kimlik veya vergi numarası",
            ],
            ["İletişim Bilgisi", "E-posta adresi, cep telefonu numarası"],
            [
              "Müşteri Ticari İşlem Bilgisi",
              "Abonelik ve paket bilgileri, fatura bilgileri, talep bilgileri",
            ],
            [
              "Talep/Şikâyet Bilgisi",
              "Destek talebi içeriği ile talebin tarih ve saati",
            ],
            ["Kullanıcı Hesap Bilgisi", "Dil tercihiniz ve hesap ayarlarınız"],
            [
              "İçerik ve Hukuki Veriler",
              "Yüklediğiniz belgeler, üretilen taslaklar, istemler, arama geçmişi, projeler",
            ],
            [
              "Kullanım ve Teknik Veri",
              "IP adresi, tarayıcı/OS bilgisi, log kayıtları, yaklaşık konum",
            ],
            [
              "Mesleki Deneyim",
              "Baro bilgisi, sicil numarası; veya şirket/kurum ve meslek birimi",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Tarafların Rolleri: Veri Sorumlusu ve Veri İşleyen">
        <p>
          Şirket; Kimlik, İletişim, Müşteri Ticari İşlem, Talep/Şikâyet, Kullanıcı Hesap
          ve Kullanım/Teknik Veri kategorileri bakımından veri sorumlusudur.
        </p>
        <p>
          İçerik ve Hukuki Veriler bakımından veri sorumlusu sizsiniz; Şirket yalnızca
          sizin talimatlarınızla hareket eden veri işleyendir. Yüklediğiniz belgelerdeki
          üçüncü kişilere ait verilerin hukuka uygun şekilde elde edilmiş olmasından, bu
          kişilerin gerektiğinde aydınlatılmasından ve işlemenin uygun bir hukuki sebebe
          dayanmasından siz sorumlusunuz. Özel nitelikli kişisel veriler (sağlık, ceza
          mahkûmiyeti vb.) içermesi hâlinde de aynı rol dağılımı geçerlidir.
        </p>
      </LegalSection>

      <LegalSection title="5. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri">
        <LegalTable
          headers={["Amaç", "Hukuki Sebep"]}
          rows={[
            [
              "Hesap oluşturma, sözleşme kurulması/yürütülmesi ve iletişim",
              "Sözleşmenin kurulması veya ifası",
            ],
            [
              "Satış, destek, operasyon ve müşteri ilişkileri yönetimi",
              "Sözleşmenin kurulması veya ifası",
            ],
            [
              "Hizmetlerin sunulması, geliştirilmesi ve kişiselleştirilmesi",
              "Sözleşmenin kurulması veya ifası",
            ],
            [
              "Destek talebinin karşılanması, talep/şikâyet takibi",
              "Sözleşmenin ifası",
            ],
            [
              "Ürün iletişimi ve pazarlama analizi",
              "Meşru menfaat (ticari ileti için ayrıca açık rıza)",
            ],
            [
              "Güvenlik, hatalı kullanım tespiti ve hizmet geliştirme",
              "Meşru menfaat",
            ],
            [
              "Hukuki yükümlülüklerin yerine getirilmesi",
              "Kanunlarda açıkça öngörülmüş olması",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Kişisel Verilerin Toplanma Yöntemi">
        <p>
          Kişisel verileriniz; Platform üzerinden hesap oluşturmanız, Platformu kullanmanız
          ve Hizmetlerimizden yararlanmanız sırasında, tamamen veya kısmen otomatik yollarla
          ya da bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan
          yöntemlerle toplanmaktadır.
        </p>
      </LegalSection>

      <LegalSection title="7. Kişisel Verilerin Aktarılması">
        <LegalList
          items={[
            "Ödeme kuruluşumuz — ödeme ve tahsilat",
            "Barındırma / bulut altyapı sağlayıcılarımız — barındırma ve depolama",
            "Yapay zekâ hizmet sağlayıcılarımız — talep ettiğiniz AI işlevleri",
            "Web analitik sağlayıcılarımız — kullanım analizi (onay hâlinde)",
            "Yetkili kamu kurum ve kuruluşları — yasal yükümlülükler",
          ]}
        />
        <p>
          Yurt dışı aktarımlar KVKK m.9 kapsamında uygun güvencelerle gerçekleştirilir.
        </p>
      </LegalSection>

      <LegalSection title="8. Kişisel Verilerin Saklama Süresi">
        <LegalTable
          headers={["Veri Kategorisi", "Saklama Süresi"]}
          rows={[
            [
              "Üyelik, satış ve sipariş kayıtları",
              "Sözleşme sona ermesini takiben 10 yıl",
            ],
            ["Pazarlama verileri", "Faaliyet sona ermesinden itibaren 5 yıl"],
            ["Destek talebi kayıtları", "Sonuçlandırmadan itibaren 1 yıl"],
            [
              "İçerik ve Hukuki Veriler",
              "Hesap silindiğinde derhal; aksi hâlde loglar 1 yıl",
            ],
            ["Kullanım ve Teknik Veriler", "1 yıl"],
            ["Bilgi güvenliği logları", "5 yıl"],
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Veri Güvenliğine İlişkin Alınan Tedbirler">
        <p>
          Erişim yetki matrisi, log kayıtları, şifreleme, güvenlik duvarları, yedekleme,
          çalışan gizlilik taahhütnameleri ve tedarikçi denetimi dahil olmak üzere gerekli
          teknik ve idari tedbirler alınır. Veri ihlali hâlinde en geç 72 saat içinde KVKK
          Kurulu&apos;na ve etkilenen kişilere bildirim yapılır.
        </p>
      </LegalSection>

      <LegalSection title="10. Çerezler">
        <p>
          Ayrıntılı bilgi için{" "}
          <LegalLink href="/cerez-politikasi">Çerez Politikası</LegalLink>&apos;na
          bakınız.
        </p>
      </LegalSection>

      <LegalSection title="11. İlgili Kişi Olarak Haklarınız">
        <p>
          KVKK m.11 kapsamındaki haklarınızı kullanabilirsiniz. İçerik ve Hukuki Veriler
          bakımından Şirket veri işleyen sıfatıyla hareket ettiğinde, ilgili kişi
          talepleri öncelikle bu verilerin veri sorumlusu olan ilgili Üye&apos;ye
          yöneltilmelidir.
        </p>
      </LegalSection>

      <LegalSection title="12. Başvuru Yöntemi ve İletişim">
        <p>
          Taleplerinizi{" "}
          <a
            href={`mailto:${COMPANY.privacyEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.privacyEmail}
          </a>{" "}
          adresine veya {COMPANY.addressFull} adresine yazılı olarak iletebilirsiniz.
          Başvurunuz en geç 30 gün içinde sonuçlandırılır.
        </p>
      </LegalSection>

      <LegalSection title="13. Değişiklik ve Güncellemeler">
        <p>
          Güncel metin Platform / İnternet Sitesi üzerinden yayımlanır ve yayımlandığı tarih
          itibarıyla yürürlüğe girer.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
