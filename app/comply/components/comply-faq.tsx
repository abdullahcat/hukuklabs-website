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
    question: "Comply hangi metinleri oluşturur?",
    answer:
      "KVKK aydınlatma metni, gizlilik politikası, çerez bildirimi, kullanım koşulları ve veri işleme sözleşmesi taslağı oluşturur. Metinler sektörünüze göre özelleştirilir.",
  },
  {
    question: "Metinler avukat onayından geçmeli mi?",
    answer:
      "Comply metinleri mevzuata uygun taslaklar üretir. Yayınlamadan önce kurumunuza özel hukuki inceleme yapmanızı öneririz.",
  },
  {
    question: "GDPR desteği var mı?",
    answer:
      "Evet. AB'deki veri sahiplerine yönelik ek haklar ve veri aktarımı hükümleri GDPR uyumlu şablonlarda yer alır.",
  },
  {
    question: "Web siteme nasıl entegre ederim?",
    answer:
      "Tek satırlık gömülü kod veya WordPress/Shopify eklentisi ile metinlerinizi anında yayınlayabilirsiniz.",
  },
  {
    question: "Mevzuat değişince metinler güncellenir mi?",
    answer:
      "Evet. KVKK veya GDPR'da yapılan değişiklikler otomatik olarak şablonlara yansıtılır; değişiklik geçmişini panelden takip edebilirsiniz.",
  },
  {
    question: "Diğer HukukLabs ürünleriyle uyumlu mu?",
    answer:
      "Comply, kendi web sitenizin veya uygulamanızın uyumluluk metinlerini üretir. Diğer HukukLabs ürünleriyle (Studio, LawAPI, Lens) doğrudan bir entegrasyonu yoktur; her ürün kendi veri işleme kapsamında ayrı çalışır.",
  },
]

export function ComplyFaq() {
  return (
    <section id="sss" className={`${containerClass} border-t border-border pb-16`}>
      <FadeIn className="pt-16 mb-10">
        <p className="font-mono text-xs text-muted-foreground/50 uppercase tracking-widest mb-4">
          SSS
        </p>
        <h2 className="font-serif text-foreground text-3xl leading-tight">Sık Sorulan Sorular</h2>
      </FadeIn>

      <Stagger>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <StaggerItem key={item.question}>
              <AccordionItem value={`comply-faq-${index}`}>
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
    </section>
  )
}
