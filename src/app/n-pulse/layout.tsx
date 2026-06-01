import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/n-pulse');

export const metadata = createSiteMetadata(page);

export default function NPulseLayout({ children }: { children: ReactNode }) {
  return children;
}
