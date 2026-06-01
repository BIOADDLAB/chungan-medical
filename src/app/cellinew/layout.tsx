import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/cellinew');

export const metadata = createSiteMetadata(page);

export default function CellinewLayout({ children }: { children: ReactNode }) {
  return children;
}
