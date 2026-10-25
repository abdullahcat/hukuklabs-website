"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function ClientRedirect({ href }: { href: string }) {
  const router = useRouter()
  const isExternal = /^https?:\/\//i.test(href)

  useEffect(() => {
    if (isExternal) {
      window.location.replace(href)
      return
    }
    router.replace(href)
  }, [href, isExternal, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="font-sans text-sm text-muted-foreground">
        Yönlendiriliyorsunuz…
        {isExternal && (
          <>
            {" "}
            <a
              href={href}
              className="text-foreground underline underline-offset-2"
            >
              Tıklayın
            </a>
          </>
        )}
      </p>
    </div>
  )
}
