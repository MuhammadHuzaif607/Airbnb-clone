'use client';

import { usePathname } from 'next/navigation';
export function useBreadcrumbs() {
  const path = usePathname();
  const arr = path.split('/').slice(1);
  return arr;
}
