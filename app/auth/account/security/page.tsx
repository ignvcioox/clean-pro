'use client';
import { Card, CardHeader, CardContent } from '@/modules/shared/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/modules/shared/components/ui/badge';
import { Button } from '@/modules/shared/components/ui';
import { Loader2, Monitor, ShieldAlert } from 'lucide-react';
import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';
import { useSessionStore } from '@/modules/auth/hooks/useSessionStore';
import { useEffect } from 'react';
import { IconLogout } from '@tabler/icons-react';

export default function SecurityPage() {

   return (
      <h1>Seguridad de la cuenta</h1>
   )

  /* return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="px-1 text-xl font-semibold">Seguridad de la cuenta</h1>

      <Card className="bg-card">
        <CardHeader className="pb-2">
          <h2 className="text-sm font-semibold">Sesiones iniciadas</h2>
          <p className="text-muted-foreground text-xs">
            Tienes la sesión iniciada en estos dispositivos o has iniciado sesión en ellos en los últimos 28 días.
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-lg border bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="text-muted-foreground grid grid-cols-2 border-b bg-zinc-100/50 px-4 py-2 text-[11px] font-bold tracking-wider uppercase dark:bg-zinc-800/50">
              <span>Sesión</span>
              <span>Última actividad</span>
            </div>

            {isLoading && sessions.length === 0 && (
              <div className="text-muted-foreground flex flex-col items-center justify-center gap-2 p-8">
                <Loader2 className="size-5 animate-spin" />
                <span className="text-xs">Cargando dispositivos...</span>
              </div>
            )}

            {sessions.map((session) => (
              <div key={session.id} className="grid grid-cols-2 items-center border-b px-4 py-3 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="bg-background rounded border p-2">
                    <Monitor className="text-muted-foreground size-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{session.browser}</span>
                      {(user as any)?.sessionId === session.id && (
                        <Badge className="h-4 border-none bg-blue-600 px-1.5 text-[10px] text-white shadow-none hover:bg-blue-600">
                          Sesión actual
                        </Badge>
                      )}
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {session.os} • {session.ip}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    {formatDistanceToNow(new Date(session.lastActivity), {
                      addSuffix: true,
                      locale: es,
                    })}
                  </span>

                  {(user as any)?.sessionId !== session.id ? (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground size-8 hover:text-red-600"
                      onClick={() => startRemoveSession(session.id)}
                    >
                      <IconLogout className="size-4" />
                    </Button>
                  ) : (
                    <div className="size-8" /> 
                  )}
                </div>
              </div>
            ))}
          </div>

        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center justify-between py-6">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Autenticación de dos factores (2FA)</h2>
            <p className="text-muted-foreground max-w-md text-xs">
              Protege tu cuenta con una capa adicional de seguridad. Configura 2FA utilizando Google Authenticator.
            </p>
          </div>
          <Button className="h-9 border-none bg-blue-600 px-4 text-xs font-bold text-white shadow-none hover:bg-blue-700">
            Habilitar 2FA
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center justify-between py-6">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold">Contraseña ••••••••••••</h2>
            <p className="text-muted-foreground text-xs">
              Asegúrate de no compartir con nadie tu contraseña, debe ser privada.
            </p>
          </div>
          <Button className="h-9 border-none bg-blue-600 px-4 text-xs font-bold text-white shadow-none hover:bg-blue-700">
            Cambiar Contraseña
          </Button>
        </CardContent>
      </Card>

      <Card className="border-red-200 bg-red-50/30 dark:border-red-900/50 dark:bg-red-950/10">
        <CardContent className="flex flex-col items-center gap-4 py-6 md:flex-row">
          <div className="flex-1 space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-red-600 md:justify-start">
              <ShieldAlert className="size-4" />
              <p className="text-sm font-bold tracking-tight uppercase">Zona de peligro</p>
            </div>
            <p className="text-muted-foreground text-xs">
              Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, asegúrate.
            </p>
          </div>
          <Button variant="destructive" size="sm" className="w-full font-semibold md:w-auto">
            Desactivar cuenta
          </Button>
        </CardContent>
      </Card>
    </div>
  ); */
}
