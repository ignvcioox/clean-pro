'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import {
  Button,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from '@/modules/shared/components/ui';

import {
  RecoveryPasswordFormValues,
  recoveryPasswordSchema,
} from '@/modules/auth/schemas/recovery-password.schema';
import { useAuthStore } from '../hooks/use-auth-store';

export const RecoveryPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Obtenemos datos de la URL: ?email=...&code=...
  const email = searchParams.get('email') || '';
  const codeFromUrl = searchParams.get('code') || '';

  const { resetPassword, startClearErrorMessage, errorMessage } =
    useAuthStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RecoveryPasswordFormValues>({
    resolver: zodResolver(recoveryPasswordSchema),
    // Es vital inicializar 'code' para que Zod no falle
    defaultValues: {
      code: codeFromUrl,
      password: '',
      confirmPassword: '',
    },
  });

  // Si el código llega por URL después de cargar, lo sincronizamos con el form
  useEffect(() => {
    if (codeFromUrl) {
      setValue('code', codeFromUrl);
    }
  }, [codeFromUrl, setValue]);

  const onSubmit = async (values: RecoveryPasswordFormValues) => {
    if (!email) {
      toast.error('No se encontró el correo electrónico en la URL');
      return;
    }

    const isSuccess = await resetPassword({
      email,
      code: values.code,
      newPassword: values.password,
    });

    if (isSuccess) {
      toast.success('Contraseña cambiada exitosamente');
      router.push('/auth/sign-in');
    }
  };

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(startClearErrorMessage, 2000);
    return () => clearTimeout(timer);
  }, [errorMessage, startClearErrorMessage]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Eliminamos el onSubmit extra de FieldGroup */}
      <FieldGroup className="space-y-10">
        {/* NUEVO: Campo de código. 
            Si ya viene en la URL, el usuario solo verá que está ahí. 
            Si no, deberá escribirlo. */}
        <Field className="relative">
          <FieldLabel htmlFor="code">Código de recuperación</FieldLabel>
          <Input
            id="code"
            placeholder="123456"
            aria-invalid={!!errors.code}
            {...register('code')}
          />
          {errors.code && (
            <p className="text-destructive absolute -bottom-6 left-0 text-sm">
              {errors.code.message}
            </p>
          )}
        </Field>

        <Field className="relative">
          <FieldLabel htmlFor="password">Nueva Contraseña</FieldLabel>
          <Input
            id="password"
            type="password"
            showPasswordToggle
            placeholder="••••••••"
            aria-invalid={!!errors.password}
            {...register('password')}
          />
          {errors.password && (
            <p className="text-destructive absolute -bottom-6 left-0 text-sm">
              {errors.password.message}
            </p>
          )}
        </Field>

        <Field className="relative">
          <FieldLabel htmlFor="confirmPassword">
            Confirmar Contraseña
          </FieldLabel>
          <Input
            id="confirmPassword"
            type="password"
            showPasswordToggle
            placeholder="••••••••"
            aria-invalid={!!errors.confirmPassword}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="text-destructive absolute -bottom-6 left-0 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </Field>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Cambiar contraseña
        </Button>
      </FieldGroup>
    </form>
  );
};
