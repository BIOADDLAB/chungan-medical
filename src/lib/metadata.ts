import type { Metadata } from 'next';
import { absoluteUrl, siteConfig, type SitePage } from '@/lib/site';

export const defaultKeywords = [
  '청안메디칼',
  '청안메디칼코퍼레이션',
  'chungancorp',
  '피부미용 의료장비',
  '피부미용기기',
  '병원 장비',
  '피코레이저',
  'CO2 레이저',
  'Needle RF',
  '고주파',
  '리프팅',
  'PICO-K',
  'U-Pulse',
  'N-Pulse',
  'SYLFIRM X',
  'CELLINEW',
  'V-RO ADVANCE',
  'MIGLOW',
] as const;

const sharedOpenGraphImage = {
  url: '/images/opengraph.png',
  width: 1200,
  height: 630,
  alt: '청안메디칼 대표 이미지',
};

export function createSiteMetadata(page?: Pick<SitePage, 'title' | 'description' | 'path'>): Metadata {
  const isHome = !page || page.path === '/';
  const title = isHome
    ? siteConfig.title
    : { absolute: `${page.title} | ${siteConfig.name}` };
  const description = page?.description ?? siteConfig.description;
  const canonicalPath = page?.path ?? '/';
  const canonicalUrl = absoluteUrl(canonicalPath);

  return {
    title,
    description,
    keywords: [...defaultKeywords],
    authors: [{ name: siteConfig.companyName, url: siteConfig.url }],
    creator: siteConfig.companyName,
    publisher: siteConfig.companyName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: canonicalUrl,
      types: isHome
        ? {
            'application/rss+xml': absoluteUrl('/rss.xml'),
          }
        : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: siteConfig.verification.google,
      other: {
        'naver-site-verification': siteConfig.verification.naver,
      },
    },
    icons: {
      icon: '/images/favicon.png',
    },
    openGraph: {
      title: isHome ? siteConfig.title : `${page!.title} | ${siteConfig.name}`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [sharedOpenGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: isHome ? siteConfig.title : `${page!.title} | ${siteConfig.name}`,
      description,
      images: [sharedOpenGraphImage.url],
    },
  };
}
