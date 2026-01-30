import Image from "next/image"
import { Button } from "../../shared/components/ui"
import { Badge } from "../../shared/components/ui/badge";
import { ShoppingBag, Sparkles } from "lucide-react";

export const Header = () => {
   return (
      // overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-neutral-900 min-h-[60vh] mb-10
      <section className="relative overflow-hidden bg-linear-to-br from-black via-zinc-900 to-neutral-800 min-h-[60vh] mb-10">


         <div className="absolute right-0 bottom-0 hidden md:block">
            <Image
               src="/images/hero-detailing.png"
               alt="Clean Pro Detailing"
               width={1000}
               height={900}
               quality={100}
               priority
            />
         </div>

         {/* Contenido */}
         <div className="relative z-10 p-6 md:p-10">
            <Badge variant="destructive" className="font-medium text-sm">
               <Sparkles />
               Premium Detailing Supplies
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-6xl uppercase mt-6 text-secondary font-black">
               Cuida tu auto <br />
               <span>
                  como un profesional
               </span>
            </h1>

            <p className="text-sm md:text-lg text-secondary font-medium mt-4 max-w-3xl">
               Productos de detailing automotriz de nivel profesional para un brillo impecable,
               protección duradera y resultados que se notan desde el primer uso.
            </p>

            <div className="flex gap-4 mt-6">
               <Button variant="outline" className="cursor-pointer">
                  <ShoppingBag className="w-4 h-4" />
                  Ver Catálogo
               </Button>
            </div>

            <div className="mt-10 flex gap-8">
               <Stat value="500+" label="Productos" />
               <Stat value="10K+" label="Clientes felices" />
               <Stat value="4.9★" label="Calificación" />
            </div>
         </div>
      </section>
   )
}


const Stat = ({ value, label }: { value: string; label: string }) => (
   <div className="flex flex-col">
      <span className="text-xl font-bold text-secondary">{value}</span>
      <span className="text-xs uppercase text-secondary">{label}</span>
   </div>
);
