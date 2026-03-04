import { RecoveryPasswordForm } from '@/modules/auth/components/recovery-password-form';
import { Card } from '@/modules/shared/components/ui';

export default function RecoveryPassword() {
  return (
    <Card className="bg-background mx-auto max-w-lg">
      <div className="px-2 py-4">
        <div className="items-left flex flex-col gap-2 px-4">
          <h1 className="text-lg font-semibold md:text-xl">
            Ingresa tu nueva contraseña
          </h1>
          <p className="text-muted-foreground mb-8 text-sm md:text-base">
            Recuerda no compartir tu nueva contraseña y asegurarte de que sea
            segura para proteger tu cuenta.
          </p>
        </div>
        <RecoveryPasswordForm />
      </div>
    </Card>
  );
}
