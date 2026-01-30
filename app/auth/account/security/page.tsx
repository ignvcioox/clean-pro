'use client';

// UI
import { Card, CardHeader, CardContent } from '@/modules/shared/components/ui/card';
import { Badge } from '@/modules/shared/components/ui/badge';
import { Button } from '@/src/modules/shared/components/ui';
import { InformationField } from '@/src/modules/shared/components/InformationField';
import { ShieldAlert } from 'lucide-react';

export default function SecurityPage() {
   return (
      <div className="max-w-3xl mx-auto space-y-6">
         <h1 className="text-xl font-semibold px-1">Seguridad de la cuenta</h1>

         {/* 1. Sesiones iniciadas */}
         <Card className="bg-card">
            <CardHeader className="pb-2">
               <h2 className="text-sm font-semibold">Sesiones iniciadas</h2>
               <p className="text-xs text-muted-foreground">
                  Tienes la sesión iniciada en estos dispositivos o has iniciado sesión en ellos en los últimos 28 días.
               </p>
            </CardHeader>
            <CardContent>
               <div className="rounded-lg border bg-zinc-50/50 dark:bg-zinc-900/50 overflow-hidden">
                  <div className="grid grid-cols-2 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground border-b bg-zinc-100/50 dark:bg-zinc-800/50">
                     <span>Sesión</span>
                     <span>Última actividad</span>
                  </div>

                  <div className="grid grid-cols-2 items-center px-4 py-3">
                     <div className="flex items-center gap-3">
                        <div className="p-2 bg-background rounded border">
                           <svg className="size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                           </svg>
                        </div>
                        <div className="flex flex-col">
                           <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">Chrome</span>
                              <Badge className="bg-blue-600 hover:bg-blue-600 text-[10px] h-4 px-1.5 shadow-none border-none text-white">
                                 Sesión actual
                              </Badge>
                           </div>
                           <span className="text-xs text-muted-foreground">Windows 10</span>
                        </div>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Hace 2 minutos</span>
                        <Button variant="ghost" size="icon" className="size-8">
                           <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                           </svg>
                        </Button>
                     </div>
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* 2. Autenticación de dos factores (2FA) */}
         <Card>
            <CardContent className="flex items-center justify-between py-6">
               <div className="space-y-1">
                  <h2 className="text-sm font-semibold">Autenticación de dos factores (2FA)</h2>
                  <p className="text-xs text-muted-foreground max-w-md">
                     Protege tu cuenta con una capa adicional de seguridad. Configura 2FA utilizando Google Authenticator.
                  </p>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs h-9 px-4 shadow-none border-none">
                  Habilitar 2FA
               </Button>
            </CardContent>
         </Card>

         {/* 3. Contraseña */}
         <Card>
            <CardContent className="flex items-center justify-between py-6">
               <div className="space-y-1">
                  <h2 className="text-sm font-semibold">Contraseña ••••••••••••</h2>
                  <p className="text-xs text-muted-foreground">
                     Asegúrate de no compartir con nadie tu contraseña, debe ser privada.
                  </p>
               </div>
               <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs h-9 px-4 shadow-none border-none">
                  Cambiar Contraseña
               </Button>
            </CardContent>
         </Card>

         {/* 4. Eliminar Cuenta (Zona de Peligro) */}
         <Card className="border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/10">
            <CardContent className="flex flex-col md:flex-row items-center gap-4 py-6">
               <div className="flex-1 space-y-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-red-600">
                     <ShieldAlert className="size-4" />
                     <p className="text-sm font-bold tracking-tight uppercase">Zona de peligro</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                     Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, asegúrate.
                  </p>
               </div>
               <Button variant="destructive" size="sm" className="w-full md:w-auto font-semibold">
                  Desactivar cuenta
               </Button>
            </CardContent>
         </Card>
      </div>
   );
}