import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { LanguageProvider } from "@/app/context/LanguageContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fun Guitar Hub",
  description: "Guitar lessons with a professional teacher",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}
      >
        <LanguageProvider>
          {/* Fondo de madera */}
          <div className="absolute inset-0 bg-[url('/wood-bg2.jpg')] bg-cover bg-center bg-fixed opacity-60 z-0"></div>

          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          {/* Contenido */}
          <div className="relative z-10">
            <ScrollProgressBar />
            <Navbar />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
