'use client';

import Link from 'next/link';
import React from 'react';

import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  SidebarTrigger,
} from '@/modules/shared/components/ui';
import { routeTranslations } from '@/modules/shared/lib/breadcrumb-translations';

export function SiteHeader() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  // Verificamos si estamos en la sección de Dashboard
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <header className="bg-background flex h-16 shrink-0 items-center gap-2 border-b px-4 transition-all lg:px-6">
      <div className="flex w-full items-center gap-1">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mx-2 h-4" />

        {isDashboard ? (
          <Breadcrumb>
            <BreadcrumbList>
              {/* Primer Item: Siempre Panel de Control para esta sección */}
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Panel de Control</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              {/* Renderizamos sub-rutas (ej: /users) */}
              {pathSegments.map((segment, index) => {
                // Saltamos 'dashboard' porque ya lo pusimos como raíz arriba
                if (segment === 'dashboard') return null;

                const label =
                  routeTranslations[segment] ||
                  segment.charAt(0).toUpperCase() + segment.slice(1);
                const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                const isLast = index === pathSegments.length - 1;

                return (
                  <React.Fragment key={href}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={href}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        ) : (
          /* Contenido alternativo para Account u otras secciones */
          <span className="text-muted-foreground text-sm font-medium">
            Configuración de cuenta
          </span>
        )}
      </div>
    </header>
  );
}
