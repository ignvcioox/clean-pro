import { initialData } from '@/src/mock/product';
import { ProductGrid } from '@/src/modules/products/components/ProductGrid';
import { Features } from '@/modules/shop/components/Features';
import { Header } from '@/src/modules/shop/components/Header';

const products = initialData.products;

export default function ShopPage() {
   return (
      <div>
         <Header />
         <Features />
         <h1 className="text-xl font-semibold text-center">Productos para Detailing Automotriz</h1>
         <ProductGrid products={products} />
      </div>
   );
};