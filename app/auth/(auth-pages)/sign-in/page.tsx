import Image from 'next/image';

import { SignInForm } from '@/modules/auth/components/forms/sign-in-form';
import { Card, CardContent } from '@/modules/shared/components/ui';

export default function SignInPage() {
  return (
    <Card className="bg-background dark:bg-background-secondary overflow-hidden p-0">
      <CardContent className="grid p-0 lg:grid-cols-2">
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xl font-semibold">Bienvenido de nuevo</h1>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Inicie sesión en su cuenta de Clean Pro
            </p>
          </div>
          <SignInForm />
        </div>
        <div className="relative hidden lg:block dark:border-l">
          <Image
            src="/images/clean-pro-authenticated.png"
            alt="Clean Pro Logo"
            fill
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
}
