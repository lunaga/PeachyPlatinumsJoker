import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/contexts/cart-context"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PeachyPlatinums - Servicio Profesional de Trofeos Platino PlayStation | PS3, PS4, PS5 | Trophy Boosting",
  description:
    "Servicio profesional de trofeos platino para PlayStation. Completamos trofeos de PS3, PS4 y PS5. Trophy boosting seguro y rápido. Dark Souls, Elden Ring, Bloodborne y más. 100% legítimo, sin hacks. Expertos en platinos difíciles. Trophy hunter profesional.",
  keywords: [
    // Español - Palabras clave principales
    "trofeos platino PlayStation",
    "servicio trofeos PS4",
    "servicio trofeos PS5",
    "comprar platinos PlayStation",
    "trophy boosting",
    "completar trofeos PS4",
    "platinos PS5",
    "trofeos difíciles PlayStation",
    "servicio platinos videojuegos",
    "PeachyPlatinums",
    "comprar trofeos PlayStation",
    "ayuda trofeos PS4",
    "conseguir platinos rápido",

    // Español - Juegos específicos
    "platino Dark Souls",
    "platino Elden Ring",
    "platino Bloodborne",
    "trofeos Resident Evil",
    "platino Sekiro",
    "trofeos Devil May Cry",
    "completar Dark Souls",
    "platino Final Fantasy",

    // Español - Servicios
    "servicio profesional trofeos",
    "trophy hunter profesional",
    "boosting trofeos seguro",
    "completar juegos PlayStation",
    "platino 100%",
    "trofeos garantizados",
    "servicio rápido trofeos",

    // English - Main keywords
    "PlayStation platinum trophy service",
    "PS4 trophy service",
    "PS5 trophy service",
    "PS3 trophy service",
    "buy platinum trophies",
    "trophy boosting service",
    "PlayStation achievements",
    "gaming trophy service",
    "trophy completion service",
    "professional trophy hunter",
    "platinum trophy help",
    "trophy boosting PS4",
    "trophy boosting PS5",
    "get platinum trophies fast",

    // English - Specific games
    "Dark Souls platinum",
    "Elden Ring platinum",
    "Bloodborne platinum",
    "Sekiro platinum trophy",
    "Resident Evil trophies",
    "Devil May Cry platinum",
    "Final Fantasy platinum",
    "difficult PlayStation trophies",

    // English - Service types
    "safe trophy boosting",
    "legit trophy service",
    "professional gamer service",
    "trophy completion guaranteed",
    "PlayStation trophy expert",
    "trophy unlock service",
    "PlayStation trophy help",
    "complete PlayStation games",

    // Long-tail keywords
    "cómo conseguir platinos difíciles",
    "servicio completar trofeos platino",
    "comprar servicio trofeos PlayStation",
    "trophy boosting sin hacks",
    "servicio legítimo trofeos",
    "how to get platinum trophies fast",
    "professional PlayStation trophy service",
    "buy platinum trophy completion",
    "safe trophy boosting service",

    // Location-based
    "trophy service worldwide",
    "servicio trofeos internacional",
    "PlayStation trophy service UK",
    "trophy boosting USA",
    "servicio trofeos España",
    "servicio trofeos Argentina",
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
    locale: "es_ES",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://www.peachyplatinums.com",
    title: "PeachyPlatinums - Servicio Profesional de Trofeos Platino PlayStation | Trophy Boosting",
    description:
      "Servicio profesional de trofeos platino para PS3, PS4 y PS5. Trophy boosting seguro, rápido y 100% legítimo. Expertos en juegos difíciles como Dark Souls, Elden Ring, Bloodborne. Más de 2500+ platinos completados.",
    siteName: "PeachyPlatinums",
    images: [
      {
        url: "/images/games/logo.webp",
        width: 1200,
        height: 630,
        alt: "PeachyPlatinums - Servicio Profesional de Trofeos PlayStation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeachyPlatinums - Servicio Profesional de Trofeos Platino PlayStation",
    description:
      "Trophy boosting profesional para PS3, PS4 y PS5. Servicio seguro, rápido y legítimo. 2500+ platinos completados.",
    images: ["/images/games/logo.webp"],
  },
  alternates: {
    canonical: "https://www.peachyplatinums.com",
    languages: {
      "es-ES": "https://www.peachyplatinums.com",
      "en-US": "https://www.peachyplatinums.com",
      "en-GB": "https://www.peachyplatinums.com",
    },
  },
  verification: {
    google: "tu-codigo-de-google-search-console-aqui",
  },
  other: {
    "google-site-verification": "tu-codigo-de-verificacion",
  },
}

// Google Analytics ID
const GA_MEASUREMENT_ID = "G-T9TESKJTMB"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.peachyplatinums.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />

        {/* Favicon using PeachyPlatinums logo */}
        <link rel="icon" type="image/games/ico" href="/images/games/logo.ico" />
        <link rel="apple-touch-icon" href="/images/games/logo.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="PeachyPlatinums" />

        {/* Schema.org structured data - Enhanced */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PeachyPlatinums",
              description:
                "Servicio profesional de trofeos platino para PlayStation PS3, PS4 y PS5. Trophy boosting seguro y legítimo.",
              url: "https://www.peachyplatinums.com",
              logo: "https://www.peachyplatinums.com/images/games/logo.webp",
              image: "https://www.peachyplatinums.com/images/games/logo.webp",
              email: "Peachyplatinums@hotmail.com",
              telephone: "+5491164716955",
              priceRange: "£21-£250",
              currenciesAccepted: "GBP, USD, EUR",
              paymentAccepted: "PayPal, Credit Card",
              sameAs: [
                "https://discord.com/users/peachyplatinums",
                "https://psnprofiles.com/PeachyPlatinums",
                "https://www.ebay.com/str/peachyplatinums",
              ],
              serviceType: "Gaming Trophy Service",
              areaServed: "Worldwide",
              availableLanguage: ["Spanish", "English"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1000",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "PlayStation Trophy Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PS5 Platinum Trophy Service",
                      description: "Professional PS5 platinum trophy completion service for all games",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "PeachyPlatinums",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PS4 Platinum Trophy Service",
                      description: "Expert PS4 platinum trophy completion including difficult games",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "PeachyPlatinums",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "PS3 Platinum Trophy Service",
                      description: "Legacy PS3 platinum trophy completion service",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "PeachyPlatinums",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Trophy Boosting Service",
                      description: "Professional trophy boosting for difficult PlayStation games",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "PeachyPlatinums",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.peachyplatinums.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Store",
                  item: "https://www.peachyplatinums.com/store",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Trophy Services",
                  item: "https://www.peachyplatinums.com/playstation-trophy-service",
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Es seguro usar vuestro servicio de trofeos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, completamente seguro. Usamos métodos de juego legítimos, nunca hacks o cheats. Tratamos cada cliente con la máxima discreción.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo tarda en completarse un servicio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El tiempo de completado varía según el juego. Proporcionamos una estimación de tiempo antes de comenzar el servicio y actualizaciones regulares durante el proceso.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué necesito proporcionar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Necesitarás proporcionar las credenciales de tu cuenta de PlayStation (correo electrónico y contraseña).",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
