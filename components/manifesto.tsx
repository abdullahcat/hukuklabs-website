import { FadeIn, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { ManifestoVideo } from "@/components/manifesto-video"
import { getAllPosts } from "@/lib/blog"

const principles = [
  {
    label: "Eğit",
    body: "Modeller genel internet metniyle değil, Türk mevzuatı ve yargı kararlarıyla ayarlanır.",
  },
  {
    label: "Konumla",
    body: "Her işe tek model koşulmaz. Araştırmaya arama, takibe otomasyon, taslağa model.",
  },
  {
    label: "Doğrula",
    body: "Her sonuç kaynağını gösterir. Kontrol edilemeyen cevap, cevap sayılmaz.",
  },
]

export function Manifesto() {
  const posts = getAllPosts()
  const announcement = posts.find((post) => post.category === "Duyuru") ?? posts[0]

  return (
    <section className="pt-2 pb-24">
      <div className="mb-20">
        {announcement && (
          <ManifestoVideo
            title={announcement.title}
            excerpt={announcement.excerpt}
            href={`/blog/${announcement.slug}`}
          />
        )}
      </div>

      <div className={`${containerClass} grid grid-cols-1 md:grid-cols-2 gap-16 items-start`}>
        <FadeIn>
          <div>
            <p className="font-mono text-muted-foreground/60 text-xs tracking-widest uppercase mb-8">
              Vizyonumuz
            </p>
            <blockquote className="font-serif text-foreground leading-snug text-balance"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              &ldquo;Hukukta yapay zekânın ölçüsü ne kadar hızlı cevap verdiği değil,
              ne kadar doğru cevap verdiğidir.&rdquo;
            </blockquote>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10 pt-0 md:pt-12">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                Hukuk teknolojisi pazarı bir bataklığa saplandı. Genel amaçlı modeller
                hukuk kılığına sokuluyor; olmayan kararlar, yürürlükten kalkmış maddeler ve
                kaynağı belirsiz cevaplar kendinden emin bir dille avukatın önüne konuyor.
                Hız vaat ediliyor, ama bedelini doğruluk ödüyor.
              </p>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                HukukLabs bu yarıştan bilinçli olarak ayrıldı. Yapay zekâyı her işi yapan
                bir sihirli kutu olarak değil, doğru yere konduğunda işe yarayan bir araç
                olarak görüyoruz. Amacımız avukata daha çok cevap vermek değil, güvenebileceği
                cevap vermek.
              </p>
            </div>

            <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              {principles.map((item) => (
                <StaggerItem key={item.label}>
                  <p className="font-serif text-foreground text-2xl mb-2">{item.label}</p>
                  <p className="font-sans text-muted-foreground text-xs leading-relaxed">
                    {item.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
