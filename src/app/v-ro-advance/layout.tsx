import type { ReactNode } from 'react';
import { createSiteMetadata } from '@/lib/metadata';
import { getSitePage } from '@/lib/site';

const page = getSitePage('/v-ro-advance');

export const metadata = createSiteMetadata(page);

export default function VRoAdvanceLayout({ children }: { children: ReactNode }) {
  return children;
}
