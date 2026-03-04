import { ForgotPasswordForm } from '@/modules/auth/components/forms/forgot-password-form';
import { Card, CardContent } from '@/modules/shared/components/ui';

export default function ForgotPasswordPage() {
  return (
    <Card className="bg-background dark:bg-background-secondary mx-auto max-w-lg">
      <CardContent>
        <div className="px-2 md:py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-lg font-semibold">Recupera tu contraseña</h1>
            <p className="text-foreground mb-4 text-sm tracking-wider">
              Ingresa tu correo electrónico para recibir un enlace de
              restablecimiento de contraseña.
            </p>
          </div>
          <ForgotPasswordForm />
        </div>
      </CardContent>
    </Card>
  );
}
