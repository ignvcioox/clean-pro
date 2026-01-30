import { Navbar } from '@/modules/shop/components/Navbar';
import { Footer } from '@/modules/shop/components/Footer';

export default function ShopLayout({ children, }: { children: React.ReactNode }) {
   return (
      <main className="min-h-screen flex flex-col bg-white">
         <div className="bg-red-600 text-white font-semibold py-1 text-sm flex items-center justify-center gap-2">
            <span role="img" aria-label="paquete">📦</span>
            Envíos a todo Chile
            <span role="img" aria-label="bandera chile">🇨🇱</span>
         </div>
         <Navbar />
         <section>
            {children}
         </section>
         <Footer />
      </main>
   );
};