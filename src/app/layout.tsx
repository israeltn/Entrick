import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://entrick.com"),
  title: {
    default: "Entrick Technologies | Intelligent IT Solutions",
    template: "%s | Entrick Technologies",
  },
  description: "Empowering tomorrow with intelligent IT solutions. Modern software development, cybersecurity, AI automation, and cutting-edge Agentic AI collaboration.",
  keywords: ["IT solutions", "software development", "cybersecurity", "AI automation", "agentic AI", "digital transformation", "Sovereign SLM", "Domain AI Agents"],
  authors: [{ name: "Entrick Technologies" }],
  creator: "Entrick Technologies",
  publisher: "Entrick Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://entrick.com",
    siteName: "Entrick Technologies",
    title: "Entrick Technologies | Intelligent IT Solutions",
    description: "Empowering tomorrow with intelligent IT solutions. Modern software development, cybersecurity, AI automation, and cutting-edge Agentic AI collaboration.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Entrick Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrick Technologies | Intelligent IT Solutions",
    description: "Empowering tomorrow with intelligent IT solutions.",
    images: ["/og-image.jpg"],
    creator: "@entricktech",
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
  category: "technology",
};

export const viewport = {
  themeColor: "#DC2626",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
