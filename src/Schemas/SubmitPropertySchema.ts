import { z } from 'zod';

export const SubmitPropertySchema = z.object({
  location: z.string().min(1, 'Location is required'),
  country: z.string().min(1, 'Country is required'),
  street_address: z.string().min(1, 'Street address is required'),
  appartment: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip_code: z.string().min(1, 'Zip code is required'),
});
