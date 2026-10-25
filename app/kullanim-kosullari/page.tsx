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
  title: "Kullanım Koşulları",
  description:
    "HukukLabs platformu ve ürünlerinin (Studio, LawAPI, Comply, Lens) kullanımına ilişkin koşullar.",
  path: "/kullanim-kosullari",
})

export default function KullanimKosullariPage() {
  return (
    <LegalPageShell title="HukukLabs Kullanım Koşulları" updatedAt={LEGAL_UPDATED}>
      <LegalSection title="1. Taraflar, Amaç ve Tanımlar">
        <p>
          İşbu Kullanım Koşulları (&quot;Sözleşme&quot;), merkezi {COMPANY.address} adresinde
          bulunan, vergi numarası {COMPANY.taxId} olan {COMPANY.legalName}{" "}
          (&quot;Şirket&quot;) ile Şirket&apos;in HukukLabs markası altında geliştirdiği ve
          işlettiği web sitesi, masaüstü uygulama, tarayıcı uzantısı, uygulama programlama
          arayüzleri ve bunlarla bağlantılı diğer dijital kanallar üzerinden erişilebilen
          dijital platform (&quot;HukukLabs Platformu&quot; veya &quot;Platform&quot;) üzerinden
          sunulan hizmetlerden faydalanan gerçek veya tüzel kişi (&quot;Kullanıcı&quot;)
          arasında elektronik ortamda akdedilmiştir. HukukLabs, {COMPANY.shortName}{" "}
          bünyesinde işletilen markalardan biridir. Kullanıcı, Platform&apos;a üye olmakla
          veya Platform&apos;u kullanmaya başlamakla işbu Sözleşme&apos;yi okuduğunu,
          anladığını ve kabul ettiğini beyan eder.
        </p>
        <p>İşbu Sözleşme&apos;de geçen başlıca tanımlar şunlardır:</p>
        <LegalList
          items={[
            <>
              <strong className="text-foreground">Hizmet:</strong> Studio, LawAPI, Comply,
              Lens ve bağlantılı ürünler dahil olmak üzere Platform üzerinden sunulan yazılım
              ve yapay zekâ hizmetlerini;
            </>,
            <>
              <strong className="text-foreground">Girdi:</strong> Kullanıcı tarafından
              Hizmet&apos;e yüklenen, iletilen veya girilen her türlü veri, belge, komut ve
              talimatı;
            </>,
            <>
              <strong className="text-foreground">Çıktı:</strong> Girdi temel alınarak
              Hizmet tarafından üretilen her türlü metin, belge taslağı, özet, analiz veya
              sair sonucu;
            </>,
            <>
              <strong className="text-foreground">Kullanıcı İçeriği:</strong> Girdi ve
              Çıktı&apos;nın birlikte ifade edilişini;
            </>,
            <>
              <strong className="text-foreground">Beta Özellikler:</strong> HukukLabs
              tarafından önizleme, beta veya erken erişim aşamasında sunulan özellikleri;
            </>,
            <>
              <strong className="text-foreground">Üçüncü Taraf Hizmet Sağlayıcı:</strong>{" "}
              Platform&apos;un işletilmesi, barındırılması ve güvenliği amacıyla hizmet
              alınan bulut bilişim, yapay zekâ modeli ve benzeri altyapı sağlayıcılarını
              ifade eder.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Hizmetin Tanımı ve Hukuki Niteliği">
        <p>
          <strong className="text-foreground">2.1. Hizmetin Kapsamı.</strong> Platform;
          hukuki metinler, mevzuat, içtihatlar ve diğer hukuki verilere dayalı olarak
          çalışan, yapay zekâ destekli otomasyon, doküman oluşturma, araştırma, analiz ve
          uyumluluk araçları sunar. Platform münhasıran hukuki iş ve işlemlerin
          yürütülmesinde destek amacıyla geliştirilmiş olup bireysel veya tüketim amaçlı
          kullanıma açık değildir; hukuk profesyonellerinin mesleki faaliyetleri ile tüzel
          kişi kullanıcıların kendi hukuki iş ve işlemleri kapsamında kullanılabilir.
          Taraflar arasındaki ilişki kural olarak 6502 sayılı Tüketicinin Korunması Hakkında
          Kanun kapsamında değerlendirilmez; uyuşmazlıklarda 6098 sayılı Türk Borçlar Kanunu
          ile 6102 sayılı Türk Ticaret Kanunu&apos;nun ticari işlere ilişkin hükümleri
          uygulanır.
        </p>
        <p>
          <strong className="text-foreground">2.2. Yapay Zekâ Sınırlamaları.</strong>{" "}
          Üretilen çıktılar yapay zekâ kaynaklı olduğundan hatalar veya eksikler içerebilir.
          Kullanıcı, çıktıları kendi mesleki değerlendirmesi ve özen yükümlülüğü
          çerçevesinde doğrulamak ve bunlara dayalı kararların sorumluluğunu üstlenmekle
          yükümlüdür. Platform tarafından üretilen Çıktı, hukuki danışmanlık, avukatlık
          hizmeti veya hukuki mütalaa niteliği taşımaz. Şirket bir hukuk bürosu değildir,
          hukuk pratiği yapmaz ve hukuki tavsiye vermez.
        </p>
        <p>
          <strong className="text-foreground">2.3. Kullanıcının Sorumluluğu.</strong>{" "}
          Kullanıcı, Platform&apos;dan elde ettiği her türlü Çıktı&apos;nın yalnızca bir ön
          taslak ve referans materyali olduğunu; doğruluğunu, güncelliğini ve somut olaya
          uygunluğunu kendisinin teyit etmesi gerektiğini kabul eder. Kullanıcı, Çıktı&apos;yı
          gerekli mesleki denetimden geçirmeden yasal veya resmi işlemlerde kullanmamayı
          taahhüt eder.
        </p>
      </LegalSection>

      <LegalSection title="3. Hesap, Erişim ve Kullanım Kuralları">
        <p>
          Platform&apos;a üye olmak için 18 yaşını doldurmuş olmak ve üyelik formunda talep
          edilen bilgileri eksiksiz, doğru ve güncel şekilde sunmak gereklidir. Kullanıcı,
          hesabının güvenliğinden münhasıran sorumludur; hesabını üçüncü kişilere
          kullandıramaz, devredemez veya satamaz. Yetkisiz erişim şüphesinde HukukLabs&apos;ı
          derhal bilgilendirir.
        </p>
        <p>Kullanıcı, Platform&apos;u kullanırken aşağıdaki eylemlerde bulunamaz:</p>
        <LegalList
          items={[
            "Üçüncü kişilerin haklarını ihlal edecek şekilde kullanmak",
            "Kullanım hakkını alt lisanslamak, satmak veya devretmek",
            "Platform'u tersine mühendisliğe tabi tutmak veya kaynak koduna ulaşmaya çalışmak",
            "Otomatik yöntemlerle veri veya çıktı çekmek (veri kazıma, bot kullanımı vb.)",
            "Platform'a erişimi rakip bir ürün geliştirmek amacıyla kullanmak",
            "Yapay zekâ modellerinin eğitimi veya taklit edilmesi amacıyla Platform'dan faydalanmak",
            "Sisteme suç teşkil eden veya hukuka aykırı içerik yüklemek",
            "Çıktı'yı gerekli kontrol olmaksızın nihai hukuki görüş olarak sunmak",
          ]}
        />
        <p>
          Şirket, ihlal hâlinde önceden bildirim yapmaksızın erişimi askıya alabilir veya
          sona erdirebilir. Beta Özellikler &quot;mevcut haliyle&quot; sunulur; erişilebilirlik
          ve performansa ilişkin garanti verilmez.
        </p>
      </LegalSection>

      <LegalSection title="4. Ücretlendirme ve Ödeme">
        <p>
          Ücretli plan veya paketlerin bedeli, ilgili plan/paket sayfasında veya ayrı bir
          sipariş formunda/sözleşmede belirtilir. Ücretler aksi belirtilmedikçe KDV
          hariçtir. Ödemenin vadesinde yapılmaması hâlinde Kullanıcı temerrüde düşmüş
          sayılır; HukukLabs Hizmet&apos;i askıya alma ve fesih hakkını saklı tutar. İade ve
          teslimata ilişkin ayrıntılar{" "}
          <LegalLink href="/teslimat-ve-iade">Teslimat ve İade Şartları</LegalLink> ile{" "}
          <LegalLink href="/mesafeli-satis-sozlesmesi">
            Mesafeli Satış Sözleşmesi
          </LegalLink>
          &apos;nda düzenlenir.
        </p>
      </LegalSection>

      <LegalSection title="5. Süre ve Fesih">
        <p>
          İşbu Sözleşme, Kullanıcı&apos;nın Platform&apos;a üye olması veya Platform&apos;u
          kullanmaya başlaması ile yürürlüğe girer. Şirket, Sözleşme ihlali hâlinde
          üyeliği geçici olarak askıya alabilir veya kalıcı olarak sonlandırabilir.
          Sözleşme&apos;nin sona ermesi hâlinde erişim kesilir; veriler yasal saklama
          yükümlülükleri saklı kalmak kaydıyla saklama ve imha politikası ile KVKK
          çerçevesinde silinir.
        </p>
      </LegalSection>

      <LegalSection title="6. Fikri ve Sınai Mülkiyet Hakları">
        <p>
          Platform&apos;un kaynak kodu, yazılımı, tasarımı, arayüzü, algoritmaları, &quot;HukukLabs&quot;
          markası, logosu ve Platform&apos;da yer alan Şirket&apos;e ait tüm içerikler
          Şirket&apos;e aittir. Kullanıcı İçeriği&apos;ne ilişkin tüm haklar Kullanıcı&apos;ya
          aittir. Kullanıcı, Platform&apos;a yüklediği içerikler üzerinde Şirket&apos;e,
          yalnızca Hizmet&apos;in sunulması amacıyla sınırlı bir kullanım lisansı verdiğini
          kabul eder.
        </p>
      </LegalSection>

      <LegalSection title="7. Gizlilik ve Kişisel Veriler">
        <p>
          Kişisel verilerin işlenmesine ilişkin esaslar{" "}
          <LegalLink href="/gizlilik-politikasi">Gizlilik Politikası</LegalLink> ve ilgili
          aydınlatma metinlerinde düzenlenmiştir. Kullanıcı, Platform&apos;a yüklediği üçüncü
          kişilere ait veriler bakımından veri sorumlusu olduğunu ve bu verilerin hukuka
          uygun şekilde elde edilmiş olmasından sorumlu olduğunu kabul eder.
        </p>
      </LegalSection>

      <LegalSection title="8. Sorumluluk Sınırlaması">
        <p>
          Hizmet &quot;olduğu gibi&quot; sunulur. Şirket; kesintisiz, hatasız veya kesintisiz
          erişim; çıktıların doğruluğu, güncelliği veya belirli bir amaca uygunluğu
          konusunda açık veya zımni herhangi bir garanti vermez. Şirket&apos;in
          sorumluluğu, uygulanabilir hukukun izin verdiği azami ölçüde, Kullanıcı&apos;nın
          ilgili dönemde ödediği ücretlerle sınırlıdır. Dolaylı, arızi veya kar kaybı
          dahil sonuç zararlarından Şirket sorumlu tutulamaz.
        </p>
      </LegalSection>

      <LegalSection title="9. Uygulanacak Hukuk ve Yetkili Mahkeme">
        <p>
          İşbu Sözleşme Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıkların çözümünde
          Antalya Mahkemeleri ve İcra Daireleri yetkilidir.
        </p>
      </LegalSection>

      <LegalSection title="10. Değişiklikler">
        <p>
          Şirket, bu koşulları zaman zaman güncelleyebilir. Güncel metin bu sayfada
          yayımlanır. Esaslı değişiklikler uygun kanallarla bildirilir. Güncelleme sonrası
          Hizmet&apos;i kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına
          gelir.
        </p>
      </LegalSection>

      <LegalSection title="11. İletişim">
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
