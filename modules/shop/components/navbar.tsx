'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { LogIn, LogOut, Menu, X } from 'lucide-react';

import { useIsMobile } from '@/modules/shared/hooks/use-mobile';
import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';
import { ShopCart } from '@/modules/shop/components/shop-cart';
import { Button } from '@/modules/shared/components/ui';
import { NAVIGATION_LINKS } from '@/modules/shop/constants/navigation-link';
import { UserMenu } from './user-menu';

export const Navbar = () => {
  const isMobile = useIsMobile();

  const [open, setOpen] = useState(false);
  const { status, user, startLogout } = useAuthStore();

  const isAuthenticated = status === 'authenticated' && !!user;

  return (
    <nav className="flex justify-between items-center px-4 bg-background border-border/80 border-b">
      <Link href="/">
        <Image
          src="/images/clean-pro.webp"
          alt="Clean Pro Logo"
          width={160}
          height={80}
          className="dark:invert"
          priority
        />
      </Link>

      <div className="hidden gap-6 md:flex">
        {NAVIGATION_LINKS.map(({ id, href, label }) => (
          <Link
            key={id}
            href={href}
            className="text-primary/80 hover:text-primary group relative px-4 py-2 text-sm"
          >
            {label}
            <div className="absolute inset-x-0 bottom-1 flex justify-center">
              <span className="bg-primary h-[1.5px] w-0 opacity-0 transition-all duration-300 ease-out group-hover:w-3/4 group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-4 md:flex">
          <UserMenu />
        </div>
        <ShopCart />
        {isMobile && (
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {isMobile && (
        <div
          className={`fixed top-0 left-0 z-50 h-full w-2/3 border-r bg-white px-4 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <Image
            src="/images/clean-pro.webp"
            alt="Clean Pro Logo"
            width={160}
            height={80}
            priority
          />
          <h1 className="mt-4 mb-2 px-2 font-semibold text-neutral-800 underline underline-offset-2">
            Categorías
          </h1>

          <div className="flex w-full flex-col gap-2 px-2">
            {NAVIGATION_LINKS.map(({ id, href, label }) => (
              <Link
                key={id}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </div>

          {isAuthenticated ? (
            <Button
              className="mt-4 flex w-full items-center justify-center gap-2"
              variant="destructive"
              onClick={() => {
                startLogout();
                setOpen(false);
              }}
            >
              Cerrar Sesión
              <LogOut />
            </Button>
          ) : (
            <Link
              href="/auth/sign-in"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              <Button
                className="mt-4 flex w-full items-center justify-center gap-2"
                variant="default"
              >
                Iniciar Sesión
                <LogIn />
              </Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};
