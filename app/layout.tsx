// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import settingsData from "@/data/settings.json";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}