import Image from 'next/image';
import { Button } from '../../shared/components/ui';
import { Badge } from '../../shared/components/ui/badge';
import { ShoppingBag, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <div className="relative mx-auto mt-10 max-w-[1600px] overflow-hidden rounded-xl">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_50%,rgba(39,39,42,1)_0%,rgba(9,9,11,1)_100%)]" />
      </div>

      <div className="pointer-events-none absolute right-16 bottom-0 z-10 h-full w-full md:w-1/2">
        <Image
          src="/images/hero-detailing.png"
          alt="Clean Pro Detailing Products"
          fill
          className="object-contain"
          quality={100}
          priority
        />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-20 w-full p-8 md:p-16">
        <div className="animate-in fade-in slide-in-from-left-6 max-w-xl duration-1000">
          <Badge
            variant="outline"
            className="mb-6 inline-flex items-center gap-2 border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-zinc-400 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
              Premium Detailing Supplies
            </span>
          </Badge>

          <h1 className="mb-6 text-4xl leading-[1] font-black tracking-tighter text-white uppercase md:text-5xl lg:text-6xl">
            Cuida tu auto <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              como un profesional
            </span>
          </h1>

          <p className="mb-8 max-w-md text-sm leading-relaxed font-medium text-zinc-400 md:text-base">
            Eleva el estándar de limpieza con tecnología avanzada. Brillo
            impecable y protección cerámica que perdura.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-11 bg-white px-8 text-[10px] font-bold tracking-widest text-black uppercase transition-all hover:scale-105 hover:bg-zinc-200 active:scale-95"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Ver Catálogo
            </Button>
          </div>

          {/* Stats con divisores sutiles */}
          <div className="flex items-center gap-8 border-t border-white/5 pt-8">
            <Stat value="500+" label="Productos" />
            <div className="hidden h-6 w-px bg-zinc-800 sm:block" />
            <Stat value="10K+" label="Clientes" />
            <div className="hidden h-6 w-px bg-zinc-800 sm:block" />
            <Stat value="4.9★" label="Rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col">
    <span className="mb-1 text-xl leading-none font-black tracking-tighter text-white">
      {value}
    </span>
    <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
      {label}
    </span>
  </div>
);
