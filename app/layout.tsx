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
  verification: {
    google: "uxV1BrJ4Jz9YuzYz2IKH14N5fgxsxxoD5JyU1TfjFaU",
  },
  other: {
    "web-developer": "Bartosz Kaczmarek",
    "web-developer-email": "bartosz.kaczmarek@icloud.com",
    "architectural-designer": "VIZAR.SD OLEG KULIKOVSKIY",
    "architectural-designer-email": "vizar.sd3@gmail.com",
    investor: "POLMAG s.c.",
    "investor-nip": "5140337328",
    "investor-address": "ul. Powstańców Wlkp. 31, 63-500 Ostrzeszów",
    "investor-contact": "+48698470685",
    "project-location": "ul. Jaworowa, 63-500 Ostrzeszów",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className="scroll-smooth">
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
