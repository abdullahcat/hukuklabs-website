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
  title: "Gizlilik Politikası",
  description:
    "HukukLabs gizlilik politikası: kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgilendirme.",
  path: "/gizlilik-politikasi",
})

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPageShell
      title="Gizlilik Politikası"
      updatedAt={LEGAL_UPDATED}
      version="1.0"
    >
      <LegalSection title="1. Giriş, Amaç ve Kapsam">
        <p>
          HukukLabs, hukuk profesyonelleri için yapay zekâ destekli hukuk araştırma, belge
          üretimi, mevzuat ve içtihat erişimi ile uyumluluk araçları sunan bir teknoloji
          markasıdır. HukukLabs, {COMPANY.shortName} bünyesinde işletilen markalardan
          biridir; marka altında sunulan hizmetler {COMPANY.legalName} (&quot;Şirket&quot;,
          &quot;biz&quot;) tarafından işletilmektedir. Bu Gizlilik Politikası
          (&quot;Politika&quot;) ile, 6698 sayılı Kişisel Verilerin Korunması Kanunu
          (&quot;KVKK&quot;) uyarınca; {COMPANY.websiteHost} internet sitemiz ve HukukLabs
          platformumuz (topluca &quot;Hizmetlerimiz&quot;) aracılığıyla kişisel verilerinizi
          nasıl ve hangi sebeplere dayanarak topladığımızı, sakladığımızı, kullandığımızı,
          paylaştığımızı ve başka şekillerde işlediğimizi açıklamaktayız.
        </p>
        <p>
          Kişisel verilerinizin bu Politika&apos;da açıklandığı şekilde işlenmesi hakkında
          sorularınız olması hâlinde, lütfen aşağıda yer alan &quot;Veri Sorumlusu Kimliği
          ve İletişim Bilgileri&quot; bölümündeki iletişim bilgilerinden bize ulaşınız.
        </p>
      </LegalSection>

      <LegalSection title="2. Veri Sorumlusu Kimliği ve İletişim Bilgileri">
        <p>
          Kişisel verileriniz, KVKK uyarınca veri sorumlusu sıfatıyla aşağıda unvanı
          belirtilen şirket (&quot;Şirket&quot;, &quot;biz&quot;) tarafından HukukLabs markası
          kapsamında işlenmektedir:
        </p>
        <LegalList
          items={[
            <>Unvan: {COMPANY.legalName}</>,
            <>Adres: {COMPANY.addressFull}</>,
            <>Vergi Dairesi: {COMPANY.taxOffice}</>,
            <>Vergi Kimlik No: {COMPANY.taxId}</>,
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
      </LegalSection>

      <LegalSection title="3. Bu Politikanın Diğer Aydınlatma Metinleriyle İlişkisi">
        <p>
          Bu Politika, Şirket&apos;in HukukLabs markası kapsamındaki kişisel veri işleme
          faaliyetlerine ilişkin genel çerçeveyi ve temel ilkeleri düzenleyen çatı bir belge
          niteliğindedir. İnternet
          sitesi ziyaretçilerine, iletişim formu/demo talebi süreçlerine ve platform
          üyelerine ilişkin süreçler dahil olmak üzere, kişisel veri işlediğimiz her bir
          sürece özgü olarak KVKK&apos;nın 10. maddesi uyarınca ayrıca aydınlatma metinleri
          yayımlanır. Aydınlatma metinleri ile işbu Politika arasında bir çelişki
          bulunması hâlinde, ilgili sürece özgü aydınlatma metni esas alınır.
        </p>
        <p>
          İlgili metinler:{" "}
          <LegalLink href="/ziyaretci-aydinlatma-metni">Ziyaretçi Aydınlatma Metni</LegalLink>
          ,{" "}
          <LegalLink href="/demo-aydinlatma-metni">
            İletişim Formu ve Demo Talebi Aydınlatma Metni
          </LegalLink>
          ,{" "}
          <LegalLink href="/uye-aydinlatma-metni">Üye Aydınlatma Metni</LegalLink>. Çerezlerin
          kullanımına ilişkin ayrıntılı bilgi için{" "}
          <LegalLink href="/cerez-politikasi">Çerez Politikası</LegalLink> geçerlidir.
        </p>
      </LegalSection>

      <LegalSection title="4. Toplanan Kişisel Veri Kategorileri">
        <p>
          Kişisel verileriniz; internet sitemiz, platform arayüzümüz, çerezler ve benzer
          teknolojiler, destek ve iletişim formları ile e-posta kanalları aracılığıyla,
          tamamen veya kısmen otomatik yollarla ya da bir veri kayıt sisteminin parçası
          olmak kaydıyla otomatik olmayan yöntemlerle toplanmaktadır.
        </p>
        <LegalList
          items={[
            <>
              <strong className="text-foreground">Kimlik Bilgisi:</strong> Ad, soyad;
              faturalama gerektiren hâllerde T.C. kimlik veya vergi numarası.
            </>,
            <>
              <strong className="text-foreground">İletişim Bilgisi:</strong> E-posta
              adresi, cep telefonu numarası.
            </>,
            <>
              <strong className="text-foreground">Müşteri Ticari İşlem Bilgisi:</strong>{" "}
              Abonelik ve paket bilgileri, fatura bilgileri, talep bilgileri.
            </>,
            <>
              <strong className="text-foreground">Talep/Şikâyet Bilgisi:</strong> Demo
              talebi, iletişim formu mesajı veya destek talebi içeriği ile talebin tarih
              ve saati.
            </>,
            <>
              <strong className="text-foreground">Kullanıcı Hesap Bilgisi:</strong> Dil
              tercihiniz ve hesap ayarlarınız.
            </>,
            <>
              <strong className="text-foreground">İçerik ve Hukuki Veriler:</strong>{" "}
              Platforma yüklediğiniz belgeler ve bu belgelerde yer alan kişisel veriler;
              oluşturduğunuz özet, tablo ve taslaklar; yapay zekâ asistanına girdiğiniz
              istemler; arama geçmişiniz; projeleriniz.
            </>,
            <>
              <strong className="text-foreground">Kullanım ve Teknik Veri:</strong> Cihaz
              tanımlayıcı, IP adresi, tarayıcı ve işletim sistemi bilgisi, gezinme
              geçmişi, IP adresiyle ilişkilendirilebilecek yaklaşık konum bilgisi.
            </>,
          ]}
        />
        <p>
          <strong className="text-foreground">Tarafların rolleri:</strong> Şirket;
          Kimlik, İletişim, Müşteri İşlem, Talep/Şikâyet, Kullanıcı Hesap ve
          Kullanım/Teknik Veri kategorileri bakımından veri sorumlusudur. İçerik ve Hukuki
          Veriler bakımından (yüklediğiniz dava dosyaları, sözleşmeler ve bunlardaki üçüncü
          kişilere ait veriler) veri sorumlusu sizsiniz; Şirket yalnızca sizin
          talimatlarınızla hareket eden veri işleyendir.
        </p>
        <p>
          Hizmetlerimiz kapsamında ürettiğimiz yapay zekâ destekli çıktılar (dilekçe
          taslakları, sözleşme taslakları, özetler, analizler vb.) yalnızca birer taslak ve
          referans materyalidir; hukuki danışmanlık niteliği taşımaz. Bu çıktıların
          doğruluğunu ve somut olaya uygunluğunu teyit etmek sizin sorumluluğunuzdadır.
          Hizmetlerimiz kapsamında kullanıcı davranışlarınıza ilişkin bir profilleme
          yapılmaz.
        </p>
      </LegalSection>

      <LegalSection title="5. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri">
        <LegalList
          items={[
            "Hesabınızın oluşturulması, sözleşme ilişkimizin kurulması ve yürütülmesi ile sizinle iletişime geçilmesi: sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması.",
            "Satış, satış sonrası destek, üretim ve operasyon ile müşteri ilişkileri yönetimi süreçlerinin yürütülmesi: sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması.",
            "Hizmetlerimizin sunulması, geliştirilmesi ve size özel hâle getirilmesi: sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması.",
            "Demo talebinizin değerlendirilmesi için sizinle iletişime geçilmesi: sözleşmenin kurulmasından önce gerekli olan tedbirlerin alınması.",
            "İletişim formu ile ilettiğiniz mesajın değerlendirilmesi ve size geri dönüş yapılması: meşru menfaatimiz.",
            "Destek talebinizin karşılanması: üye iseniz sözleşmenin ifası, üye değilseniz meşru menfaatimiz.",
            "Ürün ve hizmetlerimizle ilgili sizinle iletişimde kalmak ve pazarlama analizi çalışmaları yürütmek: meşru menfaatimiz (ticari elektronik ileti için 6563 sayılı Kanun ve İYS uyarınca ayrıca açık rızanız alınır).",
            "Hizmetlerimizin güvenliğinin sağlanması, hatalı kullanımların tespit edilmesi ve Hizmetlerimizin geliştirilmesi: meşru menfaatimiz.",
            "Hukuki yükümlülüklerimizin yerine getirilmesi ve yetkili mercilere bilgi verilmesi: kanunlarda açıkça öngörülmüş olması.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Kişisel Verilerin Aktarılması">
        <p>Kişisel verileriniz aşağıdaki alıcı gruplarına aktarılabilir:</p>
        <p className="text-foreground font-medium">Yurt içinde:</p>
        <LegalList
          items={[
            "Ödeme kuruluşumuz: ödeme ve tahsilat işlemlerinin gerçekleştirilmesi amacıyla.",
            "Web analitik ve reklam hizmeti sağlayıcımız: internet sitemizin ve Hizmetlerimizin kullanımının analiz edilmesi amacıyla.",
            "Yetkili kamu kurum ve kuruluşları: hukuki yükümlülüklerimizin yerine getirilmesi amacıyla.",
          ]}
        />
        <p className="text-foreground font-medium">Yurt dışında:</p>
        <LegalList
          items={[
            "Barındırma (hosting) hizmeti sağlayıcımız: Hizmetlerimizin barındırılması ve verilerinizin güvenli şekilde depolanması amacıyla.",
            "Yapay zekâ destekli analiz ve içerik üretimi hizmeti sağlayıcılarımız: talep ettiğiniz yapay zekâ işlevlerinin sağlanması amacıyla.",
            "Ödeme kuruluşumuz ve web analitik hizmet sağlayıcılarımız: ilgili işlemlerin gerçekleştirilmesi amacıyla.",
          ]}
        />
        <p>
          Yeterlilik kararı bulunmayan ülkelere yaptığımız aktarımlar, KVKK m.9 kapsamında
          öngörülen uygun güvence mekanizmaları çerçevesinde gerçekleştirilir.
        </p>
      </LegalSection>

      <LegalSection title="7. Kişisel Verilerin Saklanma Süresi ve İmhası">
        <LegalTable
          headers={["Veri Kategorisi", "Saklama Süresi"]}
          rows={[
            [
              "Üyelik, satış ve sipariş süreçleri",
              "Sözleşme ilişkisinin sona ermesini takiben 10 yıl",
            ],
            [
              "Pazarlama faaliyetleri",
              "İlgili faaliyetin sona ermesinden itibaren 5 yıl",
            ],
            [
              "Demo, iletişim ve destek talepleri",
              "Talebin sonuçlandırılmasından itibaren 1 yıl",
            ],
            [
              "İçerik ve Hukuki Veriler",
              "Hesap silindiğinde derhal; aksi hâlde ilgili loglar 1 yıl",
            ],
            ["Kullanım ve Teknik Veriler", "1 yıl"],
            ["Bilgi güvenliği log kayıtları", "5 yıl"],
          ]}
        />
        <p>
          Saklama süresinin sonunda kişisel verileriniz, KVKK hükümleri çerçevesinde resen
          veya talebiniz üzerine silinir, yok edilir veya anonim hâle getirilir.
        </p>
      </LegalSection>

      <LegalSection id="cerez" title="8. Çerezler">
        <p>
          Hizmetlerimiz kapsamında, Site&apos;nin çalışmasını sağlamak, kullanımı analiz etmek
          ve deneyiminizi iyileştirmek amacıyla çerezler ve benzer teknolojiler
          kullanılmaktadır. Zorunlu çerezler dışındaki çerezler için açık rızanız alınır.
          Ayrıntılı bilgiye{" "}
          <LegalLink href="/cerez-politikasi">Çerez Politikası</LegalLink>&apos;ndan
          ulaşabilirsiniz.
        </p>
      </LegalSection>

      <LegalSection title="9. Kişisel Verilerinizin Güvenliğine İlişkin Alınan Tedbirler">
        <p>
          Kişisel verilerinizin hukuka aykırı olarak işlenmesini ve bu verilere yetkisiz
          erişimi önlemek amacıyla; erişim yetki matrisi ve kontrolü, günlük (log)
          kayıtlarının düzenli tutulması, şifreleme, güvenlik duvarları, yedekleme,
          çalışan gizlilik taahhütnameleri ve farkındalık eğitimleri dahil olmak üzere
          gerekli teknik ve idari tedbirleri almaktayız. Bir veri ihlali meydana gelmesi
          hâlinde, durumu gecikmeksizin ve en geç 72 saat içinde Kişisel Verileri Koruma
          Kurulu&apos;na ve etkilenen ilgili kişilere bildiririz.
        </p>
      </LegalSection>

      <LegalSection title="10. İlgili Kişi Hakları ve Başvuru Usulü">
        <p>KVKK&apos;nın 11. maddesi uyarınca İlgili Kişi olarak aşağıdaki haklara sahipsiniz:</p>
        <LegalList
          items={[
            "Kişisel veri işlenip işlenmediğini öğrenme",
            "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme",
            "Kişisel verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
            "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
            "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
            "Mevzuatta öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme",
            "Yukarıdaki işlemlerin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
            "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
            "Kişisel verilerin kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
          ]}
        />
        <p>
          Taleplerinizi kimliğinizi tevsik edici belgelerle birlikte Madde 2&apos;de yer alan
          adresimize yazılı olarak veya{" "}
          <a
            href={`mailto:${COMPANY.privacyEmail}`}
            className="text-foreground underline underline-offset-2"
          >
            {COMPANY.privacyEmail}
          </a>{" "}
          adresine e-posta ile iletebilirsiniz. Başvurunuz en geç otuz gün içinde ücretsiz
          olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kurulca
          belirlenen tarifedeki ücret alınabilir.
        </p>
      </LegalSection>

      <LegalSection title="11. Güncellemeler ve Yürürlük">
        <p>
          Bu Politika&apos;yı zaman zaman güncelleyebiliriz. Güncel sürüm bu sayfada
          yayımlanır. Esaslı değişiklikler yapılması hâlinde, uygun iletişim kanalları
          aracılığıyla sizi bilgilendiririz. Bu Politika, yayımlandığı tarihten itibaren
          yürürlüğe girer.
        </p>
      </LegalSection>
    </LegalPageShell>
  )
}
