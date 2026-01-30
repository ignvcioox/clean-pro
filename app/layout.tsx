import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Toaster } from 'sonner';
import { ThemeProvider, Providers } from '@/src/providers';

const inter = Inter({
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: {
      default: "Clean Pro - Detailing Automotriz",
      template: "%s | Clean Pro",
   },
   description: "La plataforma definitiva para la gestión y servicios de detailing automotriz profesional.",
   keywords: ["detailing", "automotriz", "limpieza de autos", "estética vehicular", "Clean Pro", "servicio de detailing"],
   authors: [{ name: "Benjamín López" }],
   creator: "Benjamín López",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <Providers>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
               >
                  {children}
               </ThemeProvider>
            </Providers>
            <Toaster position="top-right" richColors duration={1500} />
         </body>
      </html>
   );
};
