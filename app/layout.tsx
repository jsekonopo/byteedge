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
  metadataBase: new URL('https://byteedge.ca'),
  title: {
    default: "ByteEdge Consulting | AI & Technology For Business Impact",
    template: "%s | ByteEdge Consulting"
  },
  description: "Strategy, Execution, Scale. We help companies design, build, and integrate AI systems that create real competitive edges.",
  keywords: ["AI Consulting", "Software Engineering", "Tech Strategy", "Next.js", "Cloud Architecture", "Digital Transformation"],
  authors: [{ name: "ByteEdge Consulting" }],
  creator: "ByteEdge Consulting",
  publisher: "ByteEdge Consulting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ByteEdge Consulting | AI & Tech Strategy",
    description: "We help companies design, build, and integrate AI systems that create real competitive edges.",
    url: 'https://byteedge.ca',
    siteName: 'ByteEdge Consulting',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Placeholder, user can add specific OG image later
        width: 1200,
        height: 630,
        alt: 'ByteEdge Consulting - AI & Technology',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ByteEdge Consulting',
    description: 'We help companies design, build, and integrate AI systems that create real competitive edges.',
    creator: '@byteedge',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ByteEdge Consulting",
  "url": "https://byteedge.ca",
  "logo": "https://byteedge.ca/logo.png",
  "sameAs": [
    "https://linkedin.com/company/byteedge-consulting",
    "https://twitter.com/byteedge"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-0123",
    "contactType": "customer service"
  }
}

import { ThemeProvider } from "@/app/components/ThemeProvider";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
