import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/sylfirm-x');

export const metadata = createSiteMetadata(page);

export default function SylfirmXLayout({ children }: { children: ReactNode }) {
  return children;
}
