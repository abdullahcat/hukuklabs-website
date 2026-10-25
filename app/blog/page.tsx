import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { getAllPosts, formatDate } from "@/lib/blog"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Hukuk teknolojisi, yapay zekâ ve Türk hukuk sistemi üzerine HukukLabs ekibinden yazılar ve rehberler.",
  path: "/blog",
  keywords: ["hukuk teknolojisi blog", "legal tech Türkiye", "yapay zekâ hukuk"],
})

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-16`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-10">
                Blog
              </p>
            </HeroItem>
            <HeroItem>
              <h1
                className="font-serif text-foreground leading-[1.05] tracking-tight text-balance mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
              >
                Yazılar
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                Hukukta yapay zekânın nasıl doğru kullanılacağı üzerine ekibimizden
                görüşler, rehberler ve duyurular.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="mt-16 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        {featured && (
          <FadeIn>
            <section className={`${containerClass} pb-12`}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-lg border border-border bg-card p-8 sm:p-12 hover:border-muted-foreground/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    {featured.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                  <time dateTime={featured.date} className="font-sans text-xs text-muted-foreground/60">
                    {formatDate(featured.date)}
                  </time>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight mb-4 max-w-2xl text-balance">
                  {featured.title}
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl mb-6">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 font-sans text-sm text-foreground">
                  Yazıyı oku
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </section>
          </FadeIn>
        )}

        {rest.length > 0 && (
          <section className={`${containerClass} pb-32`}>
            <Stagger className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
              {rest.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-card p-8 hover:bg-accent transition-colors flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                        {post.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                      <time dateTime={post.date} className="font-sans text-xs text-muted-foreground/60">
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <h3 className="font-serif text-xl text-foreground leading-snug mb-3 text-balance">
                      {post.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 font-sans text-sm text-foreground mt-5">
                      Yazıyı oku
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
