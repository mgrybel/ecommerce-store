import { z } from 'zod';

const passwordValidation = new RegExp(
  /(?=^.{8,12}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/
);

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(passwordValidation, {
    message:
      'Password must contain 1 lowercase character, 1 uppercase character, 1 number, 1 special and be 8-12 characters',
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
