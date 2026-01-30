import Image from 'next/image';
import { Product } from '@/modules/products/interfaces/product.interface';
import { Card } from '@/modules/shared/components/ui/card';
import { Button } from '../../shared/components/ui';

interface Props {
   product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
   return (
      <Card className="group h-full flex flex-col border border-gray-100 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-2">

         {/* Imagen */}
         <div className="relative w-full flex items-center justify-center pt-4 pb-2">
            <div className="absolute top-1 left-1 z-10">
               <span className="bg-white/90 border border-gray-100 text-[9px] font-bold px-2 py-1 rounded-full text-gray-500 uppercase tracking-tight">
                  {product.stock > 0 ? `${product.stock} DISPONIBLES` : 'SIN STOCK'}
               </span>
            </div>
            <Image
               src={`/${product.images[0]}`}
               alt={product.title}
               width={160}
               height={160}
               className="object-contain"
            />
         </div>

         <div className="flex flex-col grow px-2 pb-2">
            <h3 className="font-bold text-gray-900 text-[13px] leading-tight mb-1 line-clamp-2 min-h-8">
               {product.title}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-2">
               {product.description}
            </p>
            <div className="mt-auto">
               <p className="text-base font-bold text-gray-900 mb-2">
                  ${product.price.toLocaleString('es-CL')}
               </p>
               <Button
                  variant="outline"
                  className="w-full rounded-xl border-gray-200 text-gray-600 font-bold text-xs h-8 hover:bg-black hover:text-white hover:border-black transition-colors"
               >
                  Ver detalles
               </Button>
            </div>
         </div>
      </Card>
   );
};