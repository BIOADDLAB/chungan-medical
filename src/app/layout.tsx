import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealProvider from "@/components/RevealProvider";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { createSiteMetadata } from "@/lib/metadata";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createSiteMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.companyName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl('/images/favicon.png'),
    email: 'chungan@chungancorp.com',
    telephone: '+82-31-217-6813',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '학동로3길 27, 2층 일부',
      addressLocality: '강남구',
      addressRegion: '서울특별시',
      addressCountry: 'KR',
    },
    sameAs: [
      'https://www.instagram.com/chungan_medical_corporation',
      'https://naver.me/5zUXvUyk',
    ],
  };

  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Noto+Sans+KR:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <RevealProvider />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
