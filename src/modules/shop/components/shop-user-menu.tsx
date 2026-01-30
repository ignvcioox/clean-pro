'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BadgeCheckIcon, User } from 'lucide-react';

import { useAuthStore } from '@/modules/auth/hooks/useAuthStore';
import { Badge } from '../../shared/components/ui/badge';

export const ShopUserMenu = () => {

   const [isOpen, setIsOpen] = useState(false);

   const { status, user, startLogout } = useAuthStore();

   const isAuthenticated = status === 'authenticated' && !!user;

   const initials = isAuthenticated
      ? user.fullName
         .split(' ')
         .slice(0, 2)
         .map(n => n[0])
         .join('')
         .toUpperCase()
      : null;

   return (
      <div className="relative">

         {isAuthenticated ? (
            <button
               onClick={() => setIsOpen(prev => !prev)}
               className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold"
               aria-label="User menu"
            >
               {initials}
            </button>
         ) : (
            <Link
               href="/auth/sign-in"
               aria-label="Login"
               className="hover:text-primary transition-colors"
            >
               <User className="h-6 w-6" />
            </Link>
         )}

         {/* Dropdown */}
         {isAuthenticated && isOpen && (
            <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border bg-background shadow-md">

               <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium">{user.email}</p>
                  <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
                     <BadgeCheckIcon />
                     admin
                  </Badge>
               </div>

               <div className="flex flex-col">

                  <Link
                     href="/auth/account"
                     onClick={() => setIsOpen(false)}
                     className="px-4 py-2 hover:bg-muted"
                  >
                     Mi cuenta
                  </Link>

                  <Link
                     href="/mis-pedidos"
                     onClick={() => setIsOpen(false)}
                     className="px-4 py-2 hover:bg-muted"
                  >
                     Mis pedidos
                  </Link>

                  {'admin' === 'admin' && (
                     <Link
                        href="/admin"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 hover:bg-muted"
                     >
                        Panel administrativo
                     </Link>
                  )}

                  <button
                     onClick={() => {
                        startLogout();
                        setIsOpen(false);
                     }}
                     className="px-4 py-2 text-left text-destructive hover:bg-muted"
                  >
                     Cerrar sesión
                  </button>

               </div>
            </div>
         )
         }
      </div >
   );
};
