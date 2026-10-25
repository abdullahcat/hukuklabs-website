import type { Metadata, Viewport } from "next"
import { DM_Sans, Instrument_Serif } from "next/font/google"
import { CookieConsent } from "@/components/cookie-consent"
import { ConditionalAnalytics } from "@/components/conditional-analytics"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  OG_IMAGE,
  SITE_URL,
} from "@/lib/seo"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | HukukLabs",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "HukukLabs" }],
  creator: "HukukLabs",
  publisher: "HukukLabs",
  applicationName: "HukukLabs",
  category: "technology",
  formatDetection: {
    email: false,
    telephone: false,
  },
  // Canonical ve og:url sayfa bazında createMetadata ile set edilir.
  // Buraya homepage URL koymak tüm sayfaları ana sayfaya bağlardı.
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "HukukLabs",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${dmSans.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
