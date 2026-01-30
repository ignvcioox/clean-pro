'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { LogIn, LogOut, Menu, X } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';
import { useAuthStore } from '@/modules/auth/hooks/useAuthStore';

import { ShopCart } from '@/modules/shop/components/shop-cart';
import { ShopSearch } from '@/modules/shop/components/shop-search';
import { ShopUserMenu } from '@/modules/shop/components/shop-user-menu';

import { Button } from '@/modules/shared/components/ui';
import { NAVIGATION_LINKS } from '@/modules/shop/constants/navigation-link';


export const Navbar = () => {

   const [open, setOpen] = useState(false);

   const isMobile = useIsMobile();
   const { status, user, startLogout } = useAuthStore();
   const isAuthenticated = status === 'authenticated' && !!user;

   return (
      <nav className="flex justify-between items-center px-4 border-b">

         <Link href="/" aria-label="Ir a la página principal">
            <Image
               src="/images/clean-pro.webp"
               alt="Clean Pro Logo"
               width={160}
               height={80}
               priority
            />
         </Link>

         <div className="hidden md:flex gap-6">
            {NAVIGATION_LINKS.map(({ id, href, label }) => (
               <Link key={id} href={href} className="text-sm font-medium px-4 py-2 hover:bg-muted rounded">
                  {label}
               </Link>
            ))}
         </div>

         <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
               <ShopSearch />
               <ShopUserMenu />
            </div>
            <ShopCart />
            {isMobile && (
               <button onClick={() => setOpen(!open)}>
                  {open ? <X size={24} /> : <Menu size={24} />}
               </button>
            )
            }
         </div>

         {isMobile && (
            <div className={`fixed top-0 h-full left-0 bg-white transition-transform duration-300 z-50 border-r px-4 w-2/3
               ${open ? 'translate-x-0' : '-translate-x-full'}`
            }>
               <Image
                  src="/images/clean-pro.webp"
                  alt="Clean Pro Logo"
                  width={160}
                  height={80}
                  priority
               />
               <h1 className="font-semibold mt-4 mb-2 px-2 underline underline-offset-2 text-neutral-800">
                  Categorías
               </h1>

               <div className="w-full flex flex-col gap-2 px-2">
                  {NAVIGATION_LINKS.map(({ id, href, label }) => (
                     <Link
                        key={id}
                        href={href}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium py-2"
                     >
                        {label}
                     </Link>
                  ))}
               </div>

               {isAuthenticated ? (
                  <Button
                     className="w-full mt-4 flex items-center justify-center gap-2"
                     variant="destructive"
                     onClick={() => {
                        startLogout()
                        setOpen(false)
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
                     <Button className="w-full mt-4 flex items-center justify-center gap-2" variant="default">
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