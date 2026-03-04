'use client';
import { useTheme } from 'next-themes';
import { BadgeCheck, BadgeXIcon } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator,
  Badge,
} from '@/modules/shared/components/ui';
import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';
import { InformationField } from '@/modules/shared/components/InformationField';
import { ThemeSelector } from '@/modules/auth/components/theme-selector';
import { useEffect, useState } from 'react';

export default function AccountPage() {
  const { theme, setTheme } = useTheme();
  const { user } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'No disponible';

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <Card>
        <CardHeader>
          <h1 className="text-primary text-sm font-medium">
            Información básica
          </h1>
          <p className="text-muted-foreground text-sm">
            Administra los detalles de tu cuenta.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <InformationField
            label="Foto de perfil"
            value="Agrega una foto de perfil para personalizar tu cuenta"
            right={
              <Avatar className="size-10 border">
                <AvatarImage src={user?.photo || ''} />
                <AvatarFallback className="bg-zinc-100 font-bold">
                  {user?.fullName?.substring(0, 2).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
            }
          />
          <Separator />
          <InformationField
            label="Nombre"
            value={user?.fullName || 'Benjamín López'}
          />
          <Separator />
          <InformationField label="Miembro desde" value={memberSince} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-primary text-sm font-medium">
            Detalles de la cuenta
          </h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <InformationField
            label="Correo electrónico"
            value={user?.email || 'No disponible'}
            right={
              user?.isActive ? (
                <Badge variant="outline" className="bg-blue-500 text-white">
                  <BadgeCheck data-icon="inline-start" />
                  Verificado
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <BadgeXIcon data-icon="inline-start" />
                  Sin verificar
                </Badge>
              )
            }
          />
          <Separator />
          <InformationField
            label="Teléfono"
            value={user?.phone || 'No disponible'}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-primary text-sm font-medium">Preferencias</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <InformationField
            label="Región"
            value={user?.region || 'No disponible'}
          />
          <Separator />
          <InformationField label="Idioma" value={'Español'} />
          <ThemeSelector theme={theme} setTheme={setTheme} />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex-1 space-y-1">
              <h3 className="text-sm font-bold">¿Necesitas ayuda?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nuestro equipo de soporte está listo para ayudarte en minutos.
              </p>
            </div>
            <Button
              variant="outline"
              className="h-10 w-full shrink-0 font-semibold shadow-sm sm:w-auto"
            >
              <a href="mailto:cleanpro@support.com?subject=Ayuda con mi cuenta">
                Contactar soporte
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
