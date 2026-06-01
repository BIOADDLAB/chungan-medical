import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/miglow');

export const metadata = createSiteMetadata(page);

export default function MiglowLayout({ children }: { children: ReactNode }) {
  return children;
}
