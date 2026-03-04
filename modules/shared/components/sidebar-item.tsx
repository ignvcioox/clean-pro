'use client';

import Link from 'next/link';

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/modules/shared/components/ui/sidebar';

interface Props {
  title: string;
  url: string;
  isActive: boolean;
  icon: React.ElementType;
}

export function SidebarItem({ title, url, isActive, icon: Icon }: Props) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className="relative flex items-center gap-3 rounded-md px-3 py-2.5 transition-all duration-200"
      >
        <Link href={url}>
          <Icon
            className={`transition-colors ${isActive ? 'text-blue-600' : 'text-zinc-400'}`}
          />
          <span className="text-sm">{title}</span>
          {isActive && (
            <span
              className="absolute left-0 h-4 w-[3px] rounded-full bg-blue-600"
              aria-hidden="true"
            />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
