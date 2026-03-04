import { Footer } from '@/modules/shop/components/footer';
import { Navbar } from '@/modules/shop/components/navbar';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background flex min-h-screen flex-col">
      <Navbar />
      <section className="bg-background-secondary">{children}</section>
      <Footer />
    </main>
  );
}
