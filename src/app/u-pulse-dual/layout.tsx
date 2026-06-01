import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/u-pulse-dual');

export const metadata = createSiteMetadata(page);

export default function UPulseDualLayout({ children }: { children: ReactNode }) {
  return children;
}
