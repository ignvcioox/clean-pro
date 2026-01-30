import Link from 'next/link';

import { ShoppingCart } from 'lucide-react';

export const ShopCart = () => {
   return (
      <Link
         href="/carrito"
         className="hover:text-primary transition-colors"
      >
         <ShoppingCart className="h-6 w-6" />
      </Link>
   );
};