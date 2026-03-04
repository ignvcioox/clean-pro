'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
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
  FieldSeparator,
  Input,
} from '@/modules/shared/components/ui';

import {
  LoginUserFormValues,
  loginUserSchema,
} from '@/modules/auth/schemas/login-user.schema';

export const SignInForm = () => {
  const router = useRouter();

  const { loginUser, startClearErrorMessage, errorMessage } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginUserFormValues>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = async (values: LoginUserFormValues) => {
    const isAuthenticated = await loginUser(values);
    if (!isAuthenticated) return;
    toast.success('Inicio de sesión exitoso');
    router.push('/');
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(startClearErrorMessage, 1500);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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
          <div className="absolute -bottom-12 text-right">
            <Link
              href="/auth/forgot-password"
              className="text-primary hover:text-primary/80 text-sm underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </Field>

        <Button type="submit" disabled={isSubmitting} className="mt-10">
          {isSubmitting && <Loader2 className="animate-spin" />}
          Iniciar sesión
        </Button>

        <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card *:data-[slot=field-separator-content]:rounded">
          O continuar con
        </FieldSeparator>

        <Button
          variant="outline"
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center gap-2"
        >
          <IconBrandGoogleFilled />
        </Button>

        <FieldDescription className="text-center">
          ¿No tienes una cuenta? <Link href="/auth/sign-up">Regístrate</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
};
