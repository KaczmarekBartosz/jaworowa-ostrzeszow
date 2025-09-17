import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Poprawny import zgodny z szablonem
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({ // Poprawne użycie
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({ // Poprawne użycie
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaworowa Ostrzeszów",
  description: "Perfekcja w prostocie — każdy piksel ma znaczenie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}