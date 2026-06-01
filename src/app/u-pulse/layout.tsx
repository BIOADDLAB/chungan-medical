import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/u-pulse');

export const metadata = createSiteMetadata(page);

export default function UPulseLayout({ children }: { children: ReactNode }) {
  return children;
}
