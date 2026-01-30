'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const NotFound = () => {

   const router = useRouter();

   useEffect(() => {
      const timerRedirect = setTimeout(() => {
         router.push('/');
      }, 3000000);
      return () => clearTimeout(timerRedirect);
   }, [router]);

   return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-muted selection:bg-indigo-100">

         <div className="relative mb-6 flex items-center justify-center">
            <h2 className="text-[120px] sm:text-[180px] font-black text-muted leading-none select-none">
               404
            </h2>
            <p className="absolute text-3xl sm:text-4xl font-bold text-gray-800">
               Oops!
            </p>
         </div>

         <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-4xl tracking-tight">
            Página no encontrada
         </h1>

         <p className="max-w-md mb-10 text-gray-500 text-sm sm:text-base leading-relaxed">Parece que te has perdido. Te estamos llevando de vuelta a casa automáticamente.</p>

         <div className="flex flex-col items-center gap-4">
            <div className="relative flex items-center justify-center">
               <div className="w-10 h-10 border-4 border-gray-100 rounded-full"></div>
               <div className="absolute w-10 h-10 border-4 border-transparent border-t-gray-800 rounded-full animate-spin"></div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
               Redirigiendo
            </p>
         </div>
      </div>
   );
};