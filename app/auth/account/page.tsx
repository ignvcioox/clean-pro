'use client';

import { useTheme } from 'next-themes';
import { BadgeCheck, Loader2, Plus, XCircle } from 'lucide-react';

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
   Label,
   Input
} from '@/modules/shared/components/ui';

import { useAuthStore } from '@/src/modules/auth/hooks/useAuthStore';

import { InformationField } from '@/modules/shared/components/InformationField';
import { ThemeSelector } from '@/modules/auth/components/ThemeSelector';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/src/modules/shared/components/ui/dialog';
import { useState } from 'react';

export default function AccountPage() {

   const { theme, setTheme } = useTheme();
   const { user, status } = useAuthStore();

   const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
   const [newPhone, setNewPhone] = useState('');
   const [isSaving, setIsSaving] = useState(false);

   console.log('--- Debug AccountPage ---');
   console.log('Estado de usuario:', user);
   console.log('URL de la foto recibida:', user?.photo);

   if (status === 'checking') {
      return (
         <div className="flex h-[450px] items-center justify-center">
            <Loader2 className="size-8 animate-spin text-primary" />
         </div>
      );
   }

   const memberSince = user?.createdAt
      ? new Date(user.createdAt).toLocaleDateString('es-ES', {
         day: 'numeric',
         month: 'long',
         year: 'numeric'
      })
      : 'No disponible';

   const handleSavePhone = async () => {
      if (!newPhone) return;

      setIsSaving(true);
      try {
         // Aquí llamas a tu función de Redux o API
         // await startUpdatingUser({ phone: newPhone });
         console.log('Guardando teléfono:', newPhone);
         setIsPhoneModalOpen(false); // Cierra el modal al terminar
      } catch (error) {
         console.error('Error al guardar:', error);
      } finally {
         setIsSaving(false);
      }
   };

   return (
      <div className="max-w-3xl mx-auto space-y-4">
         <Card>
            <CardHeader>
               <h1 className="text-sm font-medium text-primary">Información básica</h1>
               <p className="text-sm text-muted-foreground">Administra los detalles de tu cuenta.</p>
            </CardHeader>
            <CardContent className="space-y-4">
               <InformationField
                  label="Foto de perfil"
                  value="Agrega una foto de perfil para personalizar tu cuenta"
                  right={
                     <Avatar className="size-10 border">
                        <AvatarImage src={user?.photo || ""} />
                        <AvatarFallback className="font-bold bg-zinc-100">
                           {user?.fullName?.substring(0, 2).toUpperCase() || 'U'}
                        </AvatarFallback>
                     </Avatar>
                  }
               />
               <Separator />
               <InformationField label="Nombre" value={user?.fullName} />
               <Separator />
               <InformationField label="Miembro desde" value={memberSince} />
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <h1 className="text-lg font-semibold">Detalles de la cuenta</h1>
            </CardHeader>
            <CardContent className="space-y-4">
               <InformationField
                  label="Correo electrónico"
                  value={user?.email}
                  right={
                     user?.isActive ? (
                        <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none">
                           <BadgeCheck className="mr-1 h-4 w-4" /> Verificado
                        </Badge>
                     ) : (
                        <Badge variant="secondary" className="bg-zinc-200 text-zinc-600 border-none">
                           <XCircle className="mr-1 h-4 w-4" /> Sin verificar
                        </Badge>
                     )
                  }
               />
               <Separator />
               <InformationField
                  label="Teléfono"
                  value={user?.phone || (
                     <Dialog open={isPhoneModalOpen} onOpenChange={setIsPhoneModalOpen}>
                        <DialogTrigger asChild>
                           <button className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                              <Plus className="size-3" /> Añadir teléfono
                           </button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[425px]">
                           <DialogHeader>
                              <DialogTitle>Añadir número de teléfono</DialogTitle>
                           </DialogHeader>
                           <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                 <Label htmlFor="phone">Número de teléfono</Label>
                                 <Input
                                    id="phone"
                                    placeholder="+56 9 1234 5678"
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(e.target.value)}
                                 />
                              </div>
                           </div>
                           <DialogFooter>
                              <Button
                                 type="submit"
                                 onClick={handleSavePhone}
                                 disabled={isSaving || !newPhone}
                              >
                                 {isSaving ? (
                                    <>
                                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                       Guardando...
                                    </>
                                 ) : 'Guardar cambios'}
                              </Button>
                           </DialogFooter>
                        </DialogContent>
                     </Dialog>
                  )}
               />
            </CardContent>
         </Card>

         <Card>
            <CardHeader>
               <h1 className="text-lg font-semibold">Preferencias</h1>
            </CardHeader>
            <CardContent className="space-y-4">
               <InformationField label="Región" value={user?.region || "Desconocido"} />
               <Separator />
               <InformationField label="Idioma" value={"Español"} />
               <ThemeSelector theme={theme} setTheme={setTheme} />
            </CardContent>
         </Card>

         <Card>
            <CardContent className="space-y-4">
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="space-y-1 flex-1">
                     <h3 className="text-sm font-bold">¿Necesitas ayuda?</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed">
                        Nuestro equipo de soporte está listo para ayudarte en minutos.
                     </p>
                  </div>
                  <Button
                     variant="outline"
                     className="w-full sm:w-auto h-10 font-semibold shadow-sm shrink-0"
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
