'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';

import { VerifyEmailForm } from '@/modules/auth/components/forms/verify-email-form';
import { Card, CardContent } from '@/modules/shared/components/ui';

export default function VerifyEmailPage() {
  const router = useRouter();

  const { verificationEmail } = useAuthStore();

  useEffect(() => {
    if (!verificationEmail) {
      router.replace('/auth/sign-in');
    }
  }, [verificationEmail, router]);

  if (!verificationEmail) return null;

  return (
    <Card className="bg-background dark:bg-background-secondary mx-auto max-w-lg">
      <CardContent>
        <div className="px-2 md:py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-lg font-semibold">
              Verifica tu correo electrónico
            </h1>
            <p className="text-muted-foreground mb-4 text-sm tracking-wider">
              Hemos enviado un código de verificación al correo <br />
              <span className="text-foreground mt-2 block cursor-default font-medium tracking-wide">
                {verificationEmail}
              </span>
            </p>
          </div>
          <VerifyEmailForm email={verificationEmail} />
        </div>
      </CardContent>
    </Card>
  );
}
