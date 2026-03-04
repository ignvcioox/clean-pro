import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-zinc-900 px-6 py-16 text-gray-400 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-3">
            <Image
              src="/images/clean-pro-authenticated.png"
              alt="Clean Pro Logo"
              width={140}
              height={60}
              className="rounded-full"
            />
            <p className="pr-4 text-sm leading-relaxed">
              Especialistas en detailing automotriz. Productos de alta gama para
              el cuidado de tu vehículo.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="transition-colors hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="transition-colors hover:text-white">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h6 className="mb-8 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Productos
            </h6>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <Link
                  href="/category/accessories"
                  className="transition-all hover:text-white"
                >
                  Accesorios
                </Link>
              </li>
              <li>
                <Link
                  href="/category/interior-care"
                  className="transition-all hover:text-white"
                >
                  Cuidado Interior
                </Link>
              </li>
              <li>
                <Link
                  href="/category/exterior-care"
                  className="transition-all hover:text-white"
                >
                  Cuidado Exterior
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h6 className="mb-8 text-xs font-bold tracking-[0.2em] text-white uppercase">
              Contacto
            </h6>
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
                <MapPin size={16} className="mt-0.5 text-gray-500" />
                <span>Independencia 555, Ovalle.</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:col-span-4">
            <div className="group relative h-44 w-full overflow-hidden rounded-2xl border border-white/10">
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
      </div>
    </footer>
  );
};
