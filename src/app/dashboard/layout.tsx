'use client';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useBreadcrumbs } from '@/hooks/use-breadcrumbs';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const links = useBreadcrumbs();
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <SidebarInset>
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              {links.map((item, index) => {
                if (index === links.length - 1) {
                  return (
                    <BreadcrumbItem key={index}>
                       <BreadcrumbPage className="text-black text-base">{item}</BreadcrumbPage>
                    </BreadcrumbItem>
                  );
                }
                return (
                  <>
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink
                        href="/components"
                        className="text-gray-400 text-base duration-300 hover:text-black hover:underline"
                      >
                        {item}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block">
                      <Slash />
                    </BreadcrumbSeparator>
                  </>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </SidebarInset>

        {children}
      </main>
    </SidebarProvider>
  );
}
