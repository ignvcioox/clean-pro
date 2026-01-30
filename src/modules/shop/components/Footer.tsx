import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
   return (
      <footer className="bg-[#0a0a0a] text-gray-400 py-16 px-6 md:px-20 border-t border-white/5">
         <div className="max-w-7xl mx-auto">
            {/* Grilla Principal: Alineación superior estricta */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

               {/* Columna Logo: Ocupa 3 espacios */}
               <div className="md:col-span-3 flex flex-col gap-6">
                  <Image
                     src="/images/clean-pro-authenticated.png"
                     alt="Clean Pro Logo"
                     width={140}
                     height={60}
                     className="rounded-full"
                  />
                  <p className="text-sm leading-relaxed pr-4">
                     Especialistas en detailing automotriz. Productos de alta gama para el cuidado de tu vehículo.
                  </p>
                  <div className="flex gap-4">
                     <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                     <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
                  </div>
               </div>

               {/* Columna Productos: Ocupa 2 espacios */}
               <div className="md:col-span-2">
                  <h6 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Productos</h6>
                  <ul className="flex flex-col gap-4 text-sm">
                     <li><Link href="/category/accessories" className="hover:text-white transition-all">Accesorios</Link></li>
                     <li><Link href="/category/interior-care" className="hover:text-white transition-all">Cuidado Interior</Link></li>
                     <li><Link href="/category/exterior-care" className="hover:text-white transition-all">Cuidado Exterior</Link></li>
                  </ul>
               </div>

               {/* Columna Contacto: Ocupa 3 espacios */}
               <div className="md:col-span-3">
                  <h6 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em]">Contacto</h6>
                  <ul className="flex flex-col gap-5 text-sm">
                     <li className="flex items-center gap-3">
                        <Mail size={16} className="text-gray-500" />
                        <span>cleanpro@support.com</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <Phone size={16} className="text-gray-500" />
                        <span>+56 9 2367 4449</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <MapPin size={16} className="text-gray-500 mt-0.5" />
                        <span>Independencia 555, Ovalle.</span>
                     </li>
                  </ul>
               </div>

               {/* Columna Mapa: Ocupa los últimos 4 espacios */}
               <div className="md:col-span-4 w-full">
                  <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 group">
                     <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.014889837252!2d-71.19839368481313!3d-30.6019648816921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691c7d2e2f6e3e7%3A0x8e2e2e2e2e2e2e2e!2sIndependencia%20555%2C%20Ovalle%2C%20Coquimbo%2C%20Chile!5e0!3m2!1ses-419!2scl!4v1705870000000!5m2!1ses-419!2scl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
                  </div>
               </div>
            </div>

            {/* Divisor y Copyright */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-gray-600 font-medium">
               <p>© 2026 Clean Pro Detailing</p>
               <div className="flex gap-8">
                  <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                  <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
               </div>
            </div>
         </div>
      </footer>
   );
};