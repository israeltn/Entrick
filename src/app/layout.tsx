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
  metadataBase: new URL("https://entricksystems.com"),
  title: {
    default: "Entrick Information Systems | Secure AI & Modern Software Company",
    template: "%s | Entrick Information Systems",
  },
  description: "Entrick Information Systems is a modern software company delivering Secure AI, Research, LLM/SLM fine-tuning for domain-specific privacy environments, data curation for model training, Cybersecurity, and Sovereign AI for resource-constrained environments.",
  keywords: ["Secure AI", "modern Software company", "AI Research", "LLM fine-tuning", "SLM fine-tuning", "domain specific privacy", "data curation", "Model training", "Cybersecurity", "Sovereign AI", "resource constrained environments", "IT solutions", "Entrick Information Systems"],
  authors: [{ name: "Entrick Information Systems" }],
  creator: "Entrick Information Systems",
  publisher: "Entrick Information Systems",
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
    url: "https://entricksystems.com",
    siteName: "Entrick Information Systems",
    title: "Entrick Information Systems | Secure AI & Modern Software Company",
    description: "Entrick Information Systems delivers Secure AI, LLM/SLM fine-tuning, data curation, Cybersecurity, and Sovereign AI solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Entrick Information Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrick Information Systems | Intelligent IT Solutions",
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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
