import z from 'zod';

export const recoveryPasswordSchema = z
  .object({
    code: z.string().min(6, 'El código debe tener 6 dígitos'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(50, 'La contraseña no debe exceder los 50 caracteres')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/,
        'Debe tener mayúscula, minúscula, número y símbolo.',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

export type RecoveryPasswordFormValues = z.infer<typeof recoveryPasswordSchema>;
