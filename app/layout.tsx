import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/contexts/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PeachyPlatinums - Professional PlayStation Platinum Trophy Services | PS3, PS4, PS5",
  description:
    "Professional PlayStation platinum trophy services for PS3, PS4, and PS5. Expert gamers complete the most difficult trophies and challenges. Fast, safe, and reliable trophy boosting services.",
  keywords: [
    "PlayStation trophies",
    "platinum trophy service",
    "PS4 trophies",
    "PS5 trophies",
    "PS3 trophies",
    "trophy boosting",
    "PlayStation achievements",
    "gaming services",
    "PeachyPlatinums",
    "trophy hunting",
    "PlayStation completion",
    "gaming help",
    "trophy guide",
    "PlayStation expert",
  ],
  authors: [{ name: "PeachyPlatinums" }],
  creator: "PeachyPlatinums",
  publisher: "PeachyPlatinums",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peachy-platinums.vercel.app",
    title: "PeachyPlatinums - Professional PlayStation Platinum Trophy Services",
    description:
      "Expert PlayStation trophy services for PS3, PS4, and PS5. Fast, safe, and reliable trophy completion by professional gamers.",
    siteName: "PeachyPlatinums",
    images: [
      {
        url: "/images/games/logo.webp",
        width: 1200,
        height: 630,
        alt: "PeachyPlatinums - PlayStation Trophy Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeachyPlatinums - Professional PlayStation Trophy Services",
    description:
      "Expert PlayStation trophy services for PS3, PS4, and PS5. Fast, safe, and reliable trophy completion.",
    images: ["/images/games/logo.webp"],
  },
  alternates: {
    canonical: "https://peachy-platinums.vercel.app",
  },
  verification: {
    google: "googled0ebe4a9a03bbf66.html", // Reemplaza con tu código de Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://peachy-platinums.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/games/logo.webp" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PeachyPlatinums",
              description: "Professional PlayStation platinum trophy services for PS3, PS4, and PS5",
              url: "https://peachy-platinums.vercel.app",
              logo: "https://peachy-platinums.vercel.app/images/peachy-logo.png",
              image: "https://peachy-platinums.vercel.app/images/peachy-logo.png",
              email: "Peachyplatinums@hotmail.com",
              sameAs: [
                "https://discord.com/users/peachyplatinums",
                "https://psnprofiles.com/PeachyPlatinums",
                "https://www.ebay.com/str/peachyplatinums",
              ],
              serviceType: "Gaming Services",
              areaServed: "Worldwide",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "PlayStation Trophy Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PS4 Platinum Trophy Service",
                      description: "Professional PS4 platinum trophy completion service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PS5 Platinum Trophy Service",
                      description: "Professional PS5 platinum trophy completion service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PS3 Platinum Trophy Service",
                      description: "Professional PS3 platinum trophy completion service",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}