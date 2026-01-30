'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { useAuthStore } from '@/modules/auth/hooks/useAuthStore';
import { RegisterUserFormValues, registerUserSchema } from '@/modules/auth/schemas/register-user.schema';

import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
   Button,
   Input
} from '@/modules/shared/components/ui';

export const SignUpForm = () => {

   const router = useRouter();

   const { registerUser, errorMessage, startClearErrorMessage } = useAuthStore();

   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterUserFormValues>({
      resolver: zodResolver(registerUserSchema),
      defaultValues: {
         fullName: '',
         email: '',
         password: ''
      }
   });

   const handleRegister = async (values: RegisterUserFormValues) => {
      const isRegistered = await registerUser(values);
      if (!isRegistered) return;
      toast.success('Cuenta creada exitosamente');
      router.push('/');
   }

   useEffect(() => {
      if (!errorMessage) return;
      toast.error(errorMessage);
      const timer = setTimeout(startClearErrorMessage, 3000);
      return () => clearTimeout(timer);
   }, [errorMessage]);

   return (
      <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-4">
         <FieldGroup>
            <Field className="relative">
               <FieldLabel htmlFor="fullName">Nombre Completo</FieldLabel>
               <Input
                  id="fullName"
                  type="text"
                  placeholder="Juan Pérez"
                  aria-invalid={!!errors.fullName}
                  {...register('fullName')}
               />
               <p className="absolute -bottom-6 left-0 text-sm text-destructive">
                  {errors.fullName?.message}
               </p>
            </Field>

            <Field className="relative">
               <FieldLabel htmlFor="email">Email</FieldLabel>
               <Input
                  id="email"
                  type="email"
                  placeholder="cleanpro@google.com"
                  aria-invalid={!!errors.email}
                  {...register('email')}
               />
               <p className="absolute -bottom-6 left-0 text-sm text-destructive">
                  {errors.email?.message}
               </p>
            </Field>

            <Field className="relative">
               <FieldLabel htmlFor="password">Contraseña</FieldLabel>
               <Input
                  id="password"
                  type="password"
                  showPasswordToggle
                  aria-invalid={!!errors.password}
                  {...register('password')}
               />
               <p className="absolute -bottom-6 left-0 text-sm text-destructive">
                  {errors.password?.message}
               </p>
            </Field>

            <Field>
               <Button type="submit" disabled={isSubmitting} className="mt-4">
                  {isSubmitting && (
                     <Loader2 className="animate-spin" />
                  )}
                  Crear cuenta
               </Button>
            </Field>

            <FieldDescription className="text-center">
               ¿Ya tienes una cuenta? <a href="/auth/sign-in">Inicia sesión</a>
            </FieldDescription>

         </FieldGroup>
      </form>
   );
};