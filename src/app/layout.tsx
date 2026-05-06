import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealProvider from "@/components/RevealProvider";

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '500', '700', '800'],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});

const inter = Inter({
  weight: ['400', '500', '700', '800'],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cheongan-next.vercel.app"),
  title: "청안메디칼 (CHEONGAN MEDICAL)",
  description: "합리적인 피부미용 의료장비, 최고의 선택 청안메디칼",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "청안메디칼 (CHEONGAN MEDICAL)",
    description: "합리적인 피부미용 의료장비, 최고의 선택 청안메디칼",
    url: "https://cheongan-next.vercel.app",
    siteName: "청안메디칼",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "청안메디칼 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        <RevealProvider />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
