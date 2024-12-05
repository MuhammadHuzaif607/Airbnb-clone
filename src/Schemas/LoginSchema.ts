import { z } from 'zod';

export const SignInSchema = z.object({
  identifier: z.string().min(1, 'Username or Email is required'),
  password: z.string(),
});
