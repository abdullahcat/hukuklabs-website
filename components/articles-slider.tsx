"use client"

import Link from "next/link"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type ArticlePreview = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
}

export function ArticlesSlider({ posts }: { posts: ArticlePreview[] }) {
  return (
    <section className="py-24 border-t border-border" aria-labelledby="articles-heading">
      <div className={containerClass}>
        <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="font-sans text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Blog
            </p>
            <h2
              id="articles-heading"
              className="font-serif text-foreground leading-tight text-balance"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Son yazılar
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            Tüm yazılar
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <Stagger className="w-full">
            <CarouselContent className="-ml-4">
              {posts.map((post) => (
                <CarouselItem key={post.slug} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <StaggerItem className="h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col h-full rounded-lg border border-border bg-card p-6 hover:border-muted-foreground/40 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">
                          {post.category}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                        <span className="font-sans text-xs text-muted-foreground/60">{post.date}</span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground leading-snug mb-3 text-balance group-hover:opacity-80 transition-opacity">
                        {post.title}
                      </h3>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Stagger>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 border-border bg-background hover:bg-accent" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12 border-border bg-background hover:bg-accent" />
        </Carousel>
      </div>
    </section>
  )
}
