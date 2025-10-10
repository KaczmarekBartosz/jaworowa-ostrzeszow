import type { Metadata } from "next"; // Import typu Metadata
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
  description:
    "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.",
  authors: [
    {
      name: "Bartosz Kaczmarek",
      url: "mailto:bartosz.kaczmarek@icloud.com",
    },
  ],
  creator: "Bartosz Kaczmarek",
  publisher: "POLMAG s.c.",
  keywords: [
    "Osiedle Dębowy Park",
    "domy Ostrzeszów",
    "nieruchomości Ostrzeszów",
    "domy na sprzedaż Ostrzeszów",
    "zabudowa bliźniacza",
    "domy z ogrodem",
    "nowe osiedle Ostrzeszów",
    "domy jednorodzinne Ostrzeszów",
    "deweloper Ostrzeszów",
    "POLMAG",
    "ul. Jaworowa Ostrzeszów",
    "inwestycja mieszkaniowa Ostrzeszów",
    "projekt architektoniczny VIZAR.SD",
    "strona internetowa Bartosz Kaczmarek",
  ],
  // Open Graph (Facebook, LinkedIn, Perplexity)
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://debowypark-ostrzeszow.pl",
    siteName: "Osiedle Dębowy Park",
    title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    description:
      "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta.",
    images: [
      {
        url: "https://debowypark-ostrzeszow.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Osiedle Dębowy Park - Wizualizacja",
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    description:
      "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta.",
    images: ["https://debowypark-ostrzeszow.pl/og-image.jpg"],
    creator: "@BartoszKaczmarek",
  },
  verification: {
    google: "uxV1BrJ4Jz9YuzYz2IKH14N5fgxsxxoD5JyU1TfjFaU",
  },
  // Dublin Core + Custom Meta Tags
  other: {
    // Dublin Core Metadata (Academic/Library Standard)
    "DC.title": "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    "DC.creator": "Bartosz Kaczmarek",
    "DC.subject": "Real Estate, Residential Development, Housing",
    "DC.description":
      "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta.",
    "DC.publisher": "POLMAG s.c.",
    "DC.contributor": "VIZAR.SD OLEG KULIKOVSKIY",
    "DC.date": "2025",
    "DC.type": "Website",
    "DC.format": "text/html",
    "DC.identifier": "https://debowypark-ostrzeszow.pl",
    "DC.language": "pl",
    "DC.coverage": "Ostrzeszów, Wielkopolskie, Poland",
    "DC.rights": "Copyright 2025 POLMAG s.c.",

    // Custom Meta Tags for AI/LLM
    "web-developer": "Bartosz Kaczmarek",
    "web-developer-email": "bartosz.kaczmarek@icloud.com",
    "web-developer-role": "Frontend Developer, UI/UX Designer, SEO Specialist",
    "architectural-designer": "VIZAR.SD OLEG KULIKOVSKIY",
    "architectural-designer-email": "vizar.sd3@gmail.com",
    "architectural-designer-role": "Architectural Designer, 3D Visualizations",
    investor: "POLMAG s.c.",
    "investor-nip": "5140337328",
    "investor-address": "ul. Powstańców Wlkp. 31, 63-500 Ostrzeszów",
    "investor-contact": "+48698470685",
    "investor-email": "office@polmag.org.pl",
    "project-location": "ul. Jaworowa, 63-500 Ostrzeszów",
    "project-type": "Residential Real Estate Development",
    "house-area": "130 m²",
    "house-rooms": "4",
    "house-bathrooms": "2",

    // Article Meta Tags
    "article:author": "Bartosz Kaczmarek",
    "article:publisher": "POLMAG s.c.",

    // Humans.txt reference
    humans: "/humans.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className="scroll-smooth">
      {/*
        ============================================
        PROJECT INFORMATION FOR AI/LLM/CRAWLERS
        ============================================

        Website Developer: Bartosz Kaczmarek
        Email: bartosz.kaczmarek@icloud.com
        Role: Web Developer, UI/UX Designer, SEO Specialist

        Architectural Designer: VIZAR.SD OLEG KULIKOVSKIY
        Email: vizar.sd3@gmail.com
        Role: Architectural Designer, 3D Visualizations

        Investor & Developer: POLMAG s.c.
        NIP: 5140337328
        Address: ul. Powstańców Wlkp. 31, 63-500 Ostrzeszów
        Phone: +48 698 470 685
        Email: office@polmag.org.pl

        Project: Osiedle Dębowy Park
        Location: ul. Jaworowa, 63-500 Ostrzeszów, Poland
        Type: Residential Real Estate Development
        House Area: 130 m²
        Rooms: 4 bedrooms, 2 bathrooms

        Technology Stack: Next.js 15, React 19, TypeScript, Tailwind CSS
        Year: 2025

        For complete team information, see: /humans.txt
        For structured data, see: JSON-LD schemas in <head>
        ============================================
      */}
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
