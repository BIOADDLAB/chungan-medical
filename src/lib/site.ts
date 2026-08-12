export const siteConfig = {
  name: '청안메디칼',
  title: '청안메디칼 (CHUNGAN MEDICAL)',
  description:
    '(주)청안메디칼코퍼레이션은 PICO-K, U-Pulse, SYLFIRM X, CELLINEW, V-RO ADVANCE, MIGLOW 등 병원·피부과 맞춤 피부미용 의료장비를 공급하는 전문 기업입니다.',
  companyName: '(주)청안메디칼코퍼레이션',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chungancorp.com').replace(/\/$/, ''),
  language: 'ko-KR',
  locale: 'ko_KR',
  verification: {
    google: 'NUbPKBh-7buxybUJr0MJ86DXNAKks2usu6FioI-jLdE',
    naver: '319f95fb0b6fdda0ba5f6a66e4d79212be398176',
  },
  gaMeasurementId:
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-4H2HBNQVR0',
} as const;

export type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export type SitePage = {
  path: string;
  title: string;
  description: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

export const sitePages: SitePage[] = [
  {
    path: '/',
    title: '홈',
    description: siteConfig.description,
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    path: '/contact',
    title: '문의하기',
    description: '청안메디칼 피부미용 의료장비 도입, 시연, 견적 문의. 전화 031-217-6813',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/future-vision',
    title: '미래비전',
    description: '청안메디칼코퍼레이션의 AI·의료기기 혁신 비전과 미래 성장 전략',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: '/pico-k',
    title: 'PICO-K',
    description: 'PICO-K 피코 레이저. 정밀 색소 치료와 피부 재생을 위한 청안메디칼 프리미엄 솔루션',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/u-pulse',
    title: 'U-Pulse',
    description: 'U-Pulse 100W CO2 레이저. 고출력 프랙셔널 및 수술 모드를 지원하는 피부미용 장비',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/u-pulse-dual',
    title: 'U-Pulse DUAL',
    description: 'U-Pulse DUAL 듀얼 CO2 레이저 시스템. 다양한 시술 환경에 최적화된 청안메디칼 장비',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/n-pulse-prime',
    title: 'N-Pulse Prime',
    description: 'N-Pulse Prime 차세대 하이엔드 CO2 레이저. Ultra Pulse와 Prime Beam 기술 적용',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/n-pulse',
    title: 'N-Pulse PRO / N-Pulse FX',
    description: 'N-Pulse PRO와 N-Pulse FX CO2 레이저. 병원 맞춤형 피부미용 시술 솔루션',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/sylfirm-x',
    title: 'SYLFIRM X',
    description: 'SYLFIRM X Needle RF. 8가지 모드로 피부 타입·색소·혈관 치료를 지원하는 장비',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/cellinew',
    title: 'CELLINEW',
    description: 'CELLINEW 6.78MHz 모노폴라 RF. Auto Fit 기술로 맞춤형 피부 리뉴얼 케어 제공',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/v-ro-advance',
    title: 'V-RO ADVANCE',
    description: 'V-RO ADVANCE HIFU·RF 듀얼 에너지 리프팅. 개인별 맞춤형 안티에이징 솔루션',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    path: '/miglow',
    title: 'MIGLOW',
    description: 'MIGLOW 2.45GHz 극초단파(UHF) Face & Body 케어. CNF 매칭과 파워 쿨링 시스템 적용',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
];

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export function getSitePage(path: string) {
  return sitePages.find((page) => page.path === path);
}
