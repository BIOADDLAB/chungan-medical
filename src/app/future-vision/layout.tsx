import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/future-vision');

export const metadata = createSiteMetadata(page);

export default function FutureVisionLayout({ children }: { children: ReactNode }) {
  return children;
}
