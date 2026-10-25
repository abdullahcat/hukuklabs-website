import { containerClass } from "@/components/page-container"
import { FadeIn, Stagger, StaggerItem } from "@/components/motion"

const endpoints = [
  {
    method: "POST",
    path: "/v1/query",
    description: "Doğal dil sorgusu ile mevzuat ve içtihat araması yapar.",
  },
  {
    method: "GET",
    path: "/v1/mevzuat/{id}",
    description: "Belirli bir mevzuat maddesinin tam metnini döndürür.",
  },
  {
    method: "GET",
    path: "/v1/ictihat/search",
    description: "Yargıtay ve Danıştay kararlarında anahtar kelime veya semantik arama.",
  },
  {
    method: "POST",
    path: "/v1/analyze",
    description: "Hukuki metin analizi: risk tespiti, madde çıkarımı ve özet.",
  },
  {
    method: "GET",
    path: "/v1/resmi-gazete",
    description: "Resmi Gazete'de yayınlanan güncel düzenlemelere erişim.",
  },
]

const methodColors: Record<string, string> = {
  GET: "text-emerald-600 bg-emerald-50",
  POST: "text-blue-600 bg-blue-50",
}

export function LawApiEndpoints() {
  return (
    <section id="ozellikler" className="py-24 border-t border-border">
      <div className={containerClass}>
        <FadeIn className="mb-12">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-wide uppercase mb-4">
            API Referansı
          </p>
          <h2
            className="font-serif text-foreground leading-tight max-w-xl"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Temel uç noktalar
          </h2>
        </FadeIn>

        <Stagger className="border border-border rounded-lg overflow-hidden">
          {endpoints.map((endpoint, index) => (
            <StaggerItem key={endpoint.path}>
              <div
                className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-5 ${
                  index !== endpoints.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span
                  className={`font-mono text-xs font-medium px-2 py-1 rounded w-fit ${
                    methodColors[endpoint.method] ?? "text-muted-foreground bg-muted"
                  }`}
                >
                  {endpoint.method}
                </span>
                <code className="font-mono text-sm text-foreground shrink-0">{endpoint.path}</code>
                <p className="font-sans text-sm text-muted-foreground">{endpoint.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
