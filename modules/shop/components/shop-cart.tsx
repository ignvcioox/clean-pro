import Link from 'next/link';

import { IconShoppingBag } from '@tabler/icons-react';

export const ShopCart = () => {
  return (
    <Link href="/carrito" className="hover:text-primary transition-colors">
      <IconShoppingBag className="h-6 w-6" />
    </Link>
  );
};
