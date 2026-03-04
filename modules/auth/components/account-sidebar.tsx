'use client';

import * as React from 'react';

import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/modules/shared/components/ui/sidebar';

import { ACCOUNT_ITEMS } from '@/config/account-item';
import { NavLogout } from '@/modules/auth/components/nav-logout';
import { SidebarItem } from '@/modules/shared/components/sidebar-item';

export const AccountSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="offcanvas" {...props} className="border">
      <SidebarContent className="mt-6 px-3">
        {ACCOUNT_ITEMS.map(({ label, items }) => (
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

      <SidebarFooter className="border-t border-zinc-100 p-4 dark:border-zinc-800">
        <NavLogout />
      </SidebarFooter>
    </Sidebar>
  );
};
