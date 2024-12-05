import { z } from 'zod';

export const SignUpSchema = z.object({
  username: z.string().min(3, 'Username  is required'),
  email: z.string(),
  password: z.string()
});
