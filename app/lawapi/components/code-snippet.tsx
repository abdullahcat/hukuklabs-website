"use client"

import { useState } from "react"
import { containerClass } from "@/components/page-container"
import { FadeIn } from "@/components/motion"

const REQUEST_CODE = `curl -X POST https://api.hukuklabs.com/v1/query \\
  -H "Authorization: Bearer sk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "İş sözleşmesinin feshinde ihbar tazminatı nasıl hesaplanır?",
    "include_citations": true,
    "max_results": 3
  }'`

const RESPONSE_CODE = `{
  "id": "req_8x7kLm2nP4qR",
  "answer": "İhbar tazminatı, işçinin kıdemine göre belirlenen ihbar süresine karşılık gelen ücret tutarıdır. 4857 sayılı İş Kanunu'nun 17. maddesine göre: 6 aya kadar çalışanlarda 2 hafta, 6 ay-1.5 yıl arasında 4 hafta, 1.5-3 yıl arasında 6 hafta, 3 yıldan fazla çalışanlarda 8 haftalık ücret tutarında ihbar tazminatı ödenir.",
  "citations": [
    {
      "source": "Yargıtay 9. Hukuk Dairesi",
      "case_no": "2023/1847 E., 2023/4521 K.",
      "date": "2023-03-15",
      "relevance": 0.94
    },
    {
      "source": "Yargıtay 22. Hukuk Dairesi", 
      "case_no": "2022/8934 E., 2023/2156 K.",
      "date": "2023-01-22",
      "relevance": 0.89
    }
  ],
  "model": "claude-3.5-sonnet",
  "usage": { "input_tokens": 847, "output_tokens": 312 }
}`

export function CodeSnippet() {
  const [activeTab, setActiveTab] = useState<"request" | "response">("request")

  return (
    <section id="docs" className="pt-24 pb-24 border-t border-border">
      <div className={containerClass}>
        <FadeIn>
        {/* Code block container */}
        <div className="rounded-lg border border-border overflow-hidden bg-[#0a0a0a]">
          {/* Tab bar */}
          <div className="flex items-center border-b border-white/10 bg-[#0f0f0f]">
            <button
              onClick={() => setActiveTab("request")}
              className={`px-4 py-2.5 text-xs font-sans transition-colors ${
                activeTab === "request"
                  ? "text-white bg-[#0a0a0a] border-b border-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              İstek
            </button>
            <button
              onClick={() => setActiveTab("response")}
              className={`px-4 py-2.5 text-xs font-sans transition-colors ${
                activeTab === "response"
                  ? "text-white bg-[#0a0a0a] border-b border-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Yanıt
            </button>
            <div className="flex-1" />
            <span className="px-4 text-[10px] font-mono text-white/20">
              api.hukuklabs.com/v1/query
            </span>
          </div>

          {/* Code content */}
          <div className="p-4 overflow-x-auto">
            <pre className="font-mono text-[13px] leading-relaxed text-white/80 whitespace-pre">
              {activeTab === "request" ? (
                <code>{REQUEST_CODE}</code>
              ) : (
                <code>{RESPONSE_CODE}</code>
              )}
            </pre>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-3 text-center font-sans text-xs text-muted-foreground/50">
          Gerçek bir API isteği ve Yargıtay kararları içeren yanıt örneği
        </p>
        </FadeIn>
      </div>
    </section>
  )
}
