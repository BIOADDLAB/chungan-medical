import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/pico-k');

export const metadata = createSiteMetadata(page);

export default function PicoKLayout({ children }: { children: ReactNode }) {
  return children;
}
