import { z } from 'zod';

export const loginUserSchema = z.object({
   email   : z.string().pipe(z.email('El correo electrónico no es válido')),
   password: z.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(50, 'La contraseña no debe exceder los 50 caracteres')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/, 'Debe tener mayúscula, minúscula, número y símbolo.'),
})

export type LoginUserFormValues = z.infer<typeof loginUserSchema>;