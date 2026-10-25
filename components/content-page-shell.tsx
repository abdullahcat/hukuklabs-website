import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroItem, HeroStagger, Stagger, StaggerItem } from "@/components/motion"
import { containerClass } from "@/components/page-container"

type ContentSection = {
  heading: string
  body: string
}

type ContentPageShellProps = {
  eyebrow: string
  title: string
  description?: string
  meta?: React.ReactNode
  sections: ContentSection[]
}

export function ContentPageShell({
  eyebrow,
  title,
  description,
  meta,
  sections,
}: ContentPageShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className={`${containerClass} pt-40 pb-16`}>
          <HeroStagger>
            <HeroItem>
              <p className="text-muted-foreground font-sans text-xs tracking-widest uppercase mb-8">
                {eyebrow}
              </p>
            </HeroItem>
            <HeroItem>
              <h1
                className="font-serif text-foreground leading-tight tracking-tight text-balance mb-4"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                {title}
              </h1>
            </HeroItem>
            {description && (
              <HeroItem>
                <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl font-light">
                  {description}
                </p>
              </HeroItem>
            )}
            {meta && (
              <HeroItem>
                <p className="font-sans text-sm text-muted-foreground mt-4">{meta}</p>
              </HeroItem>
            )}
            <HeroItem>
              <div className="mt-12 h-px bg-border w-full" />
            </HeroItem>
          </HeroStagger>
        </section>

        <section className={`${containerClass} pb-32`}>
          <Stagger className="flex flex-col gap-10 max-w-3xl">
            {sections.map((section) => (
              <StaggerItem key={section.heading}>
                <h2 className="font-serif text-xl text-foreground mb-3">{section.heading}</h2>
                <p className="font-sans text-muted-foreground leading-relaxed">{section.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </main>
      <Footer />
    </div>
  )
}
