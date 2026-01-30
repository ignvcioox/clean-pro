import { Product } from '@/modules/products/interfaces/product.interface';
import { ProductGridItem } from '@/modules/products/components/ProductGridItem';

interface Props {
   products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 p-6 max-w-7xl mx-auto">
         {products.map(product => (
            <ProductGridItem
               key={product.slug}
               product={product}
            />
         ))}
      </div>
   );
};
