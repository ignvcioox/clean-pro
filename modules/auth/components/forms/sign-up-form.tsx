'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';

import {
  Button,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from '@/modules/shared/components/ui';

import {
  RegisterUserFormValues,
  registerUserSchema,
} from '@/modules/auth/schemas/register-user.schema';

export const SignUpForm = () => {
  const router = useRouter();

  const { registerUser, startClearErrorMessage, errorMessage } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterUserFormValues>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  const handleRegister = async ({
    fullName,
    email,
    password,
  }: RegisterUserFormValues) => {
    const isRegistered = await registerUser({ fullName, email, password });
    if (!isRegistered) return;
    router.push('/auth/verify-email');
  };

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(startClearErrorMessage, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
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
          <p className="text-destructive absolute -bottom-6 left-0 text-sm">
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
          <p className="text-destructive absolute -bottom-6 left-0 text-sm">
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
          <p className="text-destructive absolute -bottom-12 left-0 text-sm sm:-bottom-6">
            {errors.password?.message}
          </p>
        </Field>

        <Button type="submit" disabled={isSubmitting} className="mt-10">
          {isSubmitting && <Loader2 className="animate-spin" />}
          Crear cuenta
        </Button>

        <FieldDescription className="text-center">
          ¿Ya tienes una cuenta? <Link href="/auth/sign-in">Inicia sesión</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
};
