import type { Metadata } from "next";
import { Inter, Geist, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

import { Navbar } from "@/components/layout/Navbar";
import { BackgroundMesh } from "@/components/layout/BackgroundMesh";

export const metadata: Metadata = {
  title: "CODFY | Digital Agency",
  description: "CODFY is a forward-thinking digital agency specializing in UI/UX design, web & mobile development, motion graphics, and AI automation. We transform bold ideas into stunning digital experiences that drive growth and innovation.",
  metadataBase: new URL("https://codfy.tech"),
  openGraph: {
    title: "CODFY | Digital Agency",
    description: "We transform bold ideas into stunning digital experiences. Experts in UI/UX, Web Dev, Motion Design & AI.",
    url: "https://codfy.tech",
    siteName: "CODFY",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CODFY Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODFY | Premium Software Development",
    description: "We build high-quality digital products.",
    images: ["/og-image.jpg"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

import { CookieBanner } from "@/components/ui/CookieBanner";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} ${geist.variable} ${syne.variable} ${spaceGrotesk.variable} font-[family-name:var(--font-geist-sans)] antialiased min-h-screen flex flex-col relative bg-white text-black overflow-x-hidden w-full`}>
        <LanguageProvider>
          <BackgroundMesh />
          <Navbar />
          <main className="flex-grow pt-24">
            {children}
          </main>
          <CookieBanner />
        </LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-5RYVBWKER7" />
    </html>
  );
}
