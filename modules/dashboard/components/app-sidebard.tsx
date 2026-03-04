'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';

import { NavUser } from '@/modules/dashboard/components/nav-user';
import { SIDEBAR_CONFIG } from '@/modules/dashboard/config/sidebar-nav';
import { SidebarItem } from '@/modules/shared/components/sidebar-item';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/modules/shared/components/ui/sidebar';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props} className="border">
      <SidebarContent className="mt-6 px-3">
        {SIDEBAR_CONFIG.map(({ label, items }) => (
          <SidebarGroup key={label}>
            <SidebarGroupLabel className="text-primary font-medium tracking-widest uppercase text-[10px]">
              {label}
            </SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarItem
                  {...item}
                  key={item.url}
                  isActive={pathname === item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
