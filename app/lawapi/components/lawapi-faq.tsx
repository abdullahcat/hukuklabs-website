import { containerClass } from "@/components/page-container"
import { CONTACT_EMAIL } from "@/lib/site-links"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "LawAPI hangi veri kaynaklarına erişim sağlar?",
    answer:
      "Güncel Türk mevzuatı, Yargıtay ve Danıştay içtihatları, Resmi Gazete arşivi ve seçilmiş idari düzenlemelere programatik erişim sunar.",
  },
  {
    question: "API anahtarı nasıl alınır?",
    answer:
      "LawAPI sayfasından hesap oluşturarak anında test anahtarı alabilirsiniz. Üretim anahtarları için kimlik doğrulama gereklidir.",
  },
  {
    question: "Yanıtlar kaynak gösteriyor mu?",
    answer:
      "Evet. Her yanıt ilgili mevzuat maddesi veya içtihat kararına atıfla birlikte döner. Halüsinasyon riskini minimize etmek için kaynak doğrulama katmanı uygulanır.",
  },
  {
    question: "İstek limiti nedir?",
    answer:
      "İstek limiti, hesabınızdaki kullanım hacmine göre otomatik ayarlanır. Yalnızca tükettiğiniz token kadar ücretlendirilirsiniz; aylık plan veya taahhüt yoktur.",
  },
  {
    question: "SDK desteği var mı?",
    answer:
      "Şu anda resmi bir SDK sunmuyoruz. REST API herhangi bir dil ile doğrudan kullanılabilir.",
  },
  {
    question: "Verilerim nerede saklanıyor?",
    answer:
      "Veriler AES-256 şifreleme ile saklanır. Kişisel veriler KVKK ve GDPR gerekliliklerine uygun şekilde işlenir.",
  },
]

export function LawApiFaq() {
  return (
    <section id="sss" className="border-t border-border pt-16 pb-16">
      <div className={containerClass}>
        <FadeIn className="mb-10">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide uppercase mb-4">
            SSS
          </p>
          <h2 className="font-serif text-foreground text-3xl leading-tight">
            Sık Sorulan Sorular
          </h2>
        </FadeIn>

        <Stagger>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <StaggerItem key={item.question}>
                <AccordionItem value={`lawapi-faq-${index}`}>
                  <AccordionTrigger className="font-sans text-sm sm:text-base text-foreground hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </Stagger>

        <FadeIn className="mt-10 p-6 rounded-lg border border-border bg-card">
          <p className="font-sans text-sm text-muted-foreground leading-relaxed">
            Aradığınız yanıtı bulamadıysanız{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-foreground hover:opacity-80 transition-opacity"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            adresinden bize ulaşın.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
