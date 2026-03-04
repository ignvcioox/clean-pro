'use client';

import Link from 'next/link';

import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';
import {
  Avatar,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/modules/shared/components/ui';

import { AvatarFallback } from '@radix-ui/react-avatar';
import { IconLogout, IconShieldCheck, IconUser } from '@tabler/icons-react';

export const UserMenu = () => {
  const { status, user, startLogout } = useAuthStore();

  if (status !== 'authenticated' || !user) {
    return (
      <Link href="/auth/sign-in">
        <IconUser className="size-6" />
      </Link>
    );
  }

  const initials = user?.fullName
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-8 rounded-lg">
          <AvatarImage src={user.photo} alt={user.fullName} />
          <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user.fullName}</span>
            <span className="text-muted-foreground truncate text-xs">
              {user.email}
            </span>
          </div>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={user.photo || ''} alt={user.fullName} />
              <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.fullName}</span>
              <span className="text-muted-foreground truncate text-xs">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/auth/account" className="flex items-center gap-2">
              <IconUser />
              Mi perfil
            </Link>
          </DropdownMenuItem>

          {user.roles[0] === 'user' && (
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center gap-2">
                <IconShieldCheck />
                Panel de control
              </Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => startLogout()}>
          <IconLogout />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
