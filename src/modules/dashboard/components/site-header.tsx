'use client';

import { usePathname } from 'next/navigation';

import { Separator } from '@/src/modules/shared/components/ui/separator';
import { SidebarTrigger } from '@/src/modules/shared/components/ui/sidebar';

function getBreadcrumb(pathname: string) {
   const parts = pathname.replace(/^\/|\/$/g, '').split('/');
   return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' > ');
}

export function SiteHeader() {

   const pathname = usePathname();
   const breadcrumb = getBreadcrumb(pathname);

   return (
      <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
         <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator
               orientation="vertical"
               className="mx-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-sm font-medium text-neutral-700">{breadcrumb}</h1>
         </div>
      </header>
   );
};
