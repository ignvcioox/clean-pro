import Link from 'next/link';
import Image from 'next/image';

import { ArrowLeft } from 'lucide-react';

import { SignUpForm } from '@/modules/auth/components/SignUpForm';
import { Card, CardContent } from '@/modules/shared/components/ui';

export default function SignUpPage() {
   return (
      <Card className="overflow-hidden p-0">
         <CardContent className="grid p-0 md:grid-cols-2">
            <div className="p-6 md:p-8">
               <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="text-2xl font-semibold">Crea tu cuenta</h1>
                  <p className="text-muted-foreground text-balance mb-8">Registrate para continuar con tu cuenta</p>
               </div>
               <SignUpForm />
               <div className="mt-4 text-center">
                  <Link
                     href="/"
                     aria-label="Volver al inicio"
                     className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                     <ArrowLeft size={16} />
                     Volver al inicio
                  </Link>
               </div>
            </div>
            <div className="relative hidden md:block">
               <Image
                  src="/images/clean-pro-authenticated.png"
                  alt="Clean Pro Logo"
                  fill
                  priority
                  aria-hidden="true"
               />
            </div>
         </CardContent>
      </Card>
   );
};