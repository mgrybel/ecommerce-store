import { z } from 'zod';

export const contactSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .trim()
    .min(2, { message: 'First name must contain at least 2 characters' })
    .max(30, { message: 'First name must be less than 30 characters' }),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .trim()
    .min(2, { message: 'Last name must contain at least 2 characters' })
    .max(30, { message: 'Last name must be less than 30 characters' }),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email('Please enter a valid email address'),
  message: z.string({ required_error: 'Please specify your message' }).trim(),
});
