'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const REDIRECT_DELAY_MS = 3000;
const HOME_PATH = '/';

export const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push(HOME_PATH), REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="bg-background flex h-dvh items-center justify-center overflow-hidden">
      <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <header className="mb-4 text-center">
          <h1 className="text-primary mb-3 text-xs font-bold tracking-[0.3em] uppercase md:text-sm">
            oops! página no encontrada
          </h1>
          <p className="text-muted-foreground max-w-[320px] text-sm leading-relaxed md:max-w-md md:text-base">
            Lo sentimos, el recurso que buscas no existe o ha sido movido a otra dirección.
          </p>
        </header>

        <footer className="flex flex-col items-center gap-3">
          <div className="border-muted-foreground/20 border-t-primary size-5 animate-spin rounded-full border-2" />
          <span className="text-primary text-[10px] font-semibold tracking-[0.2em] uppercase md:text-[11px]">
            Redirigiendo
          </span>
        </footer>
      </section>
    </main>
  );
};
