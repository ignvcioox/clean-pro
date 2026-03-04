'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';
import { useCountdown } from '@/modules/shared/hooks/use-countdown';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/modules/shared/components/ui';

import {
  VerifyEmailFormValues,
  verifyEmailSchema,
} from '@/modules/auth/schemas/verify-email.schema';

export const VerifyEmailForm = ({ email }: { email: string }) => {
  const router = useRouter();

  const {
    verifyEmail,
    resendVerificationCode,
    startClearErrorMessage,
    errorMessage,
  } = useAuthStore();

  const { timeLeft, startCountdown } = useCountdown({
    initialTime: 60,
    key: `auth-cooldown-${email}`,
  });

  const form = useForm<VerifyEmailFormValues>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: { code: '' },
  });

  const { control, handleSubmit } = form;
  const { errors, isSubmitting } = form.formState;

  const handleVerified = async ({ code }: VerifyEmailFormValues) => {
    const isVerified = await verifyEmail({ email, code });
    if (!isVerified) return;
    toast.success('Correo verificado con éxito');
    localStorage.removeItem(`auth-cooldown-${email}`);
    router.push('/');
  };

  const handleResendCode = async () => {
    const isSent = await resendVerificationCode({ email });
    if (!isSent) return;
    toast.success('Código de verificación reenviado');
    startCountdown();
  };

  useEffect(() => {
    if (!errorMessage) return;
    toast.error(errorMessage);
    const timer = setTimeout(startClearErrorMessage, 3000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(handleVerified)} className="space-y-8">
        <FormField
          control={control}
          name="code"
          render={({ field }) => (
            <FormItem className="relative flex flex-col items-center">
              <p className="text-primary mb-2 text-sm font-semibold">
                Código de Verificación
              </p>
              <FormControl>
                <InputOTP {...field} maxLength={6} aria-invalid={!!errors.code}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <p className="text-destructive absolute -bottom-6 text-sm">
                {errors.code?.message}
              </p>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="m-4 mx-auto flex w-2/3"
        >
          {isSubmitting && <Loader2 className="animate-spin" />}
          Verificar correo
        </Button>

        <div className="flex items-center justify-center gap-2">
          <p className="text-primary text-sm">¿No recibiste el código?</p>
          <Button
            type="button"
            variant="link"
            onClick={handleResendCode}
            disabled={timeLeft > 0}
            className="text-muted-foreground hover:text-foreground border-none p-0 underline"
          >
            {timeLeft > 0 ? `Reenviar en ${timeLeft}s` : 'Reenviar código'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
