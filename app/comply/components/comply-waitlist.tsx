"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { containerClass } from "@/components/page-container"
import { FadeIn } from "@/components/motion"

interface WaitlistFormData {
  name: string
  email: string
  company: string
}

export function ComplyWaitlist() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    company: "",
  })

  // Initialize EmailJS on component mount
  if (typeof window !== "undefined" && !emailjs.getSessionID) {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "")
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_WAITLIST_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration incomplete. Check .env.local")
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        user_email: formData.email,
        company_name: formData.company || "Belirtilmedi",
        signup_date: new Date().toLocaleDateString("tr-TR"),
      })

      setSubmitted(true)
      setFormData({ name: "", email: "", company: "" })

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Kayıt başarısız oldu. Lütfen tekrar deneyin.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="bekleme-listesi" className="py-24 border-t border-border">
      <div className={containerClass}>
        <FadeIn className="text-center mb-12 max-w-xl mx-auto">
          <p className="font-mono text-xs tracking-wide text-muted-foreground/60 uppercase mb-4">
            Bekleme Listesi
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Erken erişime katılın.
          </h2>
          <p className="font-sans text-muted-foreground">
            Comply henüz aktif değil. Erken erişim için bekleme listesine katılın; lansman
            olduğunda ilk siz haberdar olun.
          </p>
        </FadeIn>

        <FadeIn className="max-w-md mx-auto">
          {submitted ? (
            <div className="border border-border rounded-lg bg-card p-8 text-center animate-in fade-in duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                Listedesiniz!
              </h3>
              <p className="font-sans text-sm text-muted-foreground mb-3">
                Comply açıldığında e-posta adresinize haber vereceğiz.
              </p>
              <p className="font-sans text-xs text-muted-foreground/60">
                Onay e-postası {formData.email} adresine gönderildi.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {error && (
                <div className="p-3 rounded-md bg-destructive/10 border border-destructive/30 text-sm text-destructive animate-in fade-in duration-200">
                  ⚠️ {error}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="comply-name" className="font-sans text-sm text-foreground font-medium">
                  Ad Soyad
                </label>
                <input
                  id="comply-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Adınız ve soyadınız"
                  disabled={loading}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="comply-email" className="font-sans text-sm text-foreground font-medium">
                  E-posta
                </label>
                <input
                  id="comply-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="ornek@firma.com"
                  disabled={loading}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="comply-company" className="font-sans text-sm text-foreground font-medium">
                  Şirket <span className="text-muted-foreground/60 font-normal">(isteğe bağlı)</span>
                </label>
                <input
                  id="comply-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="px-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm font-sans placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Şirket veya büro adı"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 px-6 py-2.5 text-sm font-mono font-medium text-primary-foreground bg-foreground rounded-sm hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed duration-200"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-3 h-3 bg-current rounded-full animate-pulse"></span>
                    Kaydediliyor...
                  </span>
                ) : (
                  "Bekleme Listesine Katıl"
                )}
              </button>

              <p className="text-xs text-muted-foreground/60 text-center">
                Gizliliğiniz önemlidir. E-posta adresiniz hiçbir şekilde paylaşılmayacaktır.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
