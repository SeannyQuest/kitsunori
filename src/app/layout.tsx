import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";

const BASE_URL = "https://kitsunori.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Kitsu Nori | Asian Fusion · Austin, TX",
    template: "%s | Kitsu Nori",
  },
  description:
    "Kitsu Nori is Austin's premier handroll bar and Asian fusion restaurant. Fresh sashimi, wagyu, uni, and signature handrolls. Order online for pickup.",
  keywords: [
    "Kitsu Nori",
    "sushi Austin TX",
    "handroll bar Austin",
    "Asian fusion Austin",
    "Japanese restaurant Austin",
    "sushi pickup Austin",
    "uni handroll",
    "wagyu sushi Austin",
    "best sushi Austin",
    "S Lamar Blvd restaurant Austin",
  ],
  authors: [{ name: "Kitsu Nori" }],
  creator: "Kitsu Nori",
  publisher: "Kitsu Nori",
  formatDetection: { telephone: true, address: true },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Kitsu Nori",
    title: "Kitsu Nori | Asian Fusion · Austin, TX",
    description:
      "Austin's premier handroll bar. Fresh sashimi, wagyu, uni, and signature handrolls. Order online for pickup.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kitsu Nori — Austin's premier handroll bar and Asian fusion restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kitsunori",
    title: "Kitsu Nori | Asian Fusion · Austin, TX",
    description:
      "Austin's premier handroll bar. Fresh sashimi, wagyu, uni, and signature handrolls.",
    images: ["/og-image.jpg"],
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
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_ID",  // add after connecting Search Console
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${BASE_URL}/#restaurant`,
  name: "Kitsu Nori",
  description:
    "Austin's premier handroll bar and Asian fusion restaurant. Fresh sashimi, wagyu, uni, and signature handrolls crafted with intention.",
  url: BASE_URL,
  telephone: "+1-512-555-0198",
  email: "hello@kitsunori.com",
  image: `${BASE_URL}/og-image.jpg`,
  logo: `${BASE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2310 S Lamar Blvd, Suite 102",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78704",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.3614",
    longitude: "-97.7377",
  },
  hasMap:
    "https://maps.google.com/?q=2310+S+Lamar+Blvd+Suite+102+Austin+TX+78704",
  servesCuisine: ["Japanese", "Asian Fusion", "Sushi", "Handroll"],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Apple Pay, Google Pay",
  menu: `${BASE_URL}/menu`,
  acceptsReservations: false,
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
  sameAs: [
    "https://www.instagram.com/kitsunori",
    "https://www.facebook.com/kitsunori",
    "https://www.yelp.com/biz/kitsu-nori-austin",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "124",
    bestRating: "5",
    worstRating: "1",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
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
