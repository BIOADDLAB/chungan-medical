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
  title: "청안메디칼 (CHEONGAN MEDICAL)",
  description: "합리적인 피부미용 의료장비, 최고의 선택 청안메디칼",
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
