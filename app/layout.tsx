// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import settingsData from "@/data/settings.json";

export const metadata: Metadata = {
  title: settingsData.seo.title,
  description: settingsData.seo.description,
  keywords: settingsData.seo.keywords,
  authors: [{ name: "Nityasa Niscita Solusi" }],
  openGraph: {
    title: settingsData.seo.title,
    description: settingsData.seo.description,
    url: 'https://nityasa-niscita-solusi.com',
    siteName: settingsData.companyName,
    images: [
      {
        url: settingsData.seo.ogImage || '/images/company/og-image.jpg',
        width: 1200,
        height: 630,
        alt: settingsData.companyName,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: settingsData.seo.title,
    description: settingsData.seo.description,
    images: [settingsData.seo.ogImage || '/images/company/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}