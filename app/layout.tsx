import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { AnimatedBackground } from "@/app/components/ui/AnimatedBackground";
import { CustomCursor } from "@/app/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteEdge Consulting | AI & Technology For Business Impact",
  description: "Strategy, Execution, Scale. We help companies design, build, and integrate AI systems that create real competitive edges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CustomCursor />

        {/* Global Noise Texture */}
        <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        <AnimatedBackground />
        <Navbar />
        <main className="flex-grow pt-16 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
