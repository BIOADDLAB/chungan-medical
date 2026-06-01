import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/contact');

export const metadata = createSiteMetadata(page);

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
