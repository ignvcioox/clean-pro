'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
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
  FieldSeparator,
  Input,
} from '@/modules/shared/components/ui';

import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from '@/modules/auth/schemas/forgot-password.schema';

export const ForgotPasswordForm = () => {
  const { forgotPassword, startClearErrorMessage, errorMessage } =
    useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    const isSuccess = await forgotPassword(values);
    if (!isSuccess) return;
    toast.success('Correo de recuperación enviado');
  };

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(startClearErrorMessage, 1500);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <FieldGroup>
        <Field className="relative flex flex-col items-center border">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="correo@google.com"
            aria-invalid={!!errors.email}
            className="w-2/3"
            {...register('email')}
          />
          <p className="text-destructive absolute -bottom-6 left-0 text-sm">
            {errors.email?.message}
          </p>
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="m-4 mx-auto flex w-2/3"
        >
          {isSubmitting && <Loader2 className="animaste-spin" />}
          Continuar
        </Button>

        <FieldDescription className="text-center">
          ¿Aún no tienes cuenta? <Link href="/auth/sign-up">Crear cuenta</Link>
        </FieldDescription>
      </FieldGroup> */}
    </form>
  );
};
