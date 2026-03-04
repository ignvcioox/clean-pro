import z from 'zod';

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, 'El código de verificación debe tener 6 dígitos.')
    .max(6, 'El código de verificación debe tener 6 dígitos.')
    .regex(/^[0-9]+$/, 'El código de verificación solo debe contener números.'),
});

export type VerifyEmailFormValues = z.infer<typeof verifyEmailSchema>;
