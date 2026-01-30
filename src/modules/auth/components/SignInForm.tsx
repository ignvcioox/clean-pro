'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Loader2 } from 'lucide-react';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { toast } from 'sonner';

import { useAuthStore } from '@/modules/auth/hooks/useAuthStore';
import { LoginUserFormValues, loginUserSchema } from '@/modules/auth/schemas/login-user.schema';

import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
   FieldSeparator,
   Input,
   Button
} from '@/modules/shared/components/ui';

export const SignInForm = () => {

   const router = useRouter();

   const { loginUser, errorMessage, startClearErrorMessage } = useAuthStore();

   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginUserFormValues>({
      resolver: zodResolver(loginUserSchema),
      defaultValues: {
         email: '',
         password: ''
      }
   });

   const handleLogin = async (values: LoginUserFormValues) => {
      const isAuthenticated = await loginUser(values);
      if (!isAuthenticated) return;
      toast.success('Inicio de sesión exitoso');
      router.push('/');
   }

   const handleGoogleLogin = () => {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
   }

   useEffect(() => {
      if (!errorMessage) return;
      toast.error(errorMessage);
      const timer = setTimeout(startClearErrorMessage, 1500);
      return () => clearTimeout(timer);
   }, [errorMessage]);

   return (
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
         <FieldGroup>
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
               <p className="absolute -bottom-10 sm:-bottom-6 left-0 text-sm text-destructive">
                  {errors.password?.message}
               </p>
            </Field>

            <Field>
               <Button type="submit" disabled={isSubmitting} className="mt-5">
                  {isSubmitting && (
                     <Loader2 className="animate-spin" />
                  )}
                  Iniciar sesión
               </Button>
            </Field>

            <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
               O continuar con
            </FieldSeparator>

            <Field className="flex">
               <Button
                  variant="outline"
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center gap-2"
               >
                  <IconBrandGoogleFilled />
               </Button>
            </Field>

            <FieldDescription className="text-center">
               ¿No tienes una cuenta? <a href="/auth/sign-up">Regístrate</a>
            </FieldDescription>

         </FieldGroup>
      </form >
   );
};