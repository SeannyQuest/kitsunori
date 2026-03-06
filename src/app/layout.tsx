import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Kitsu Nori | Asian Fusion · Austin, TX",
    template: "%s | Kitsu Nori",
  },
  description:
    "Kitsu Nori is Austin's premier Asian fusion restaurant serving handcrafted sushi, rolls, and Japanese-inspired cuisine. Order online for pickup or book a private event.",
  keywords: [
    "sushi Austin",
    "Asian fusion Austin",
    "Japanese restaurant Austin TX",
    "sushi delivery Austin",
    "Kitsu Nori",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kitsunori.com",
    siteName: "Kitsu Nori",
    title: "Kitsu Nori | Asian Fusion · Austin, TX",
    description:
      "Handcrafted sushi and Japanese-inspired cuisine in Austin, Texas.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitsu Nori Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitsu Nori | Asian Fusion · Austin, TX",
    description: "Handcrafted sushi and Japanese-inspired cuisine in Austin, TX.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Kitsu Nori",
              description:
                "Asian fusion restaurant serving handcrafted sushi and Japanese-inspired cuisine in Austin, TX.",
              url: "https://kitsunori.com",
              telephone: "+1-512-555-0198",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2610 W Anderson Ln",
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "78757",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.3614",
                longitude: "-97.7377",
              },
              servesCuisine: ["Japanese", "Asian Fusion", "Sushi"],
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "11:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "11:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "12:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[rgb(252,250,246)] text-[rgb(42,40,38)] antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "rgb(29, 51, 98)",
                color: "white",
                border: "none",
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
