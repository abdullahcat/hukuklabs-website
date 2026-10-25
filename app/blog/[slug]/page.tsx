import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, HeroItem, HeroStagger } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import { getPostBySlug, getAllSlugs, formatDate } from "@/lib/blog"
import { articleJsonLd, breadcrumbJsonLd, createMetadata } from "@/lib/seo"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Yazı Bulunamadı", robots: { index: false } }

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbJsonLd([
        { name: "Ana Sayfa", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${slug}` },
      ]),
      articleJsonLd({
        title: post.title,
        description: post.excerpt,
        path: `/blog/${slug}`,
        datePublished: post.date,
        author: post.author,
      }),
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <article>
          <header className={`${containerClass} pt-40 pb-12`}>
            <HeroStagger className="max-w-3xl">
              <HeroItem>
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    {post.category}
                  </span>
                  <span
                    className="h-1 w-1 rounded-full bg-muted-foreground/40"
                    aria-hidden="true"
                  />
                  <time
                    dateTime={post.date}
                    className="font-sans text-xs text-muted-foreground/60"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
              </HeroItem>
              <HeroItem>
                <h1
                  className="font-serif text-foreground leading-[1.1] tracking-tight text-balance mb-6"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  {post.title}
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed font-light max-w-2xl">
                  {post.excerpt}
                </p>
              </HeroItem>
              <HeroItem>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                    <span className="font-sans text-xs font-medium text-muted-foreground">
                      {post.author
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <span className="font-sans text-sm text-muted-foreground">
                    {post.author}
                  </span>
                </div>
              </HeroItem>
              <HeroItem>
                <div className="mt-10 h-px bg-border w-full" />
              </HeroItem>
            </HeroStagger>
          </header>

          <FadeIn>
            <div
              className={`${containerClass} pb-24 max-w-3xl prose-hukuk`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
        </article>

        <FadeIn>
          <div
            className={`${containerClass} pb-32 border-t border-border pt-12`}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M13 8H3M7 12l-4-4 4-4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tüm yazılara dön
            </Link>
          </div>
        </FadeIn>
      </main>
      <Footer />
    </div>
  )
}
