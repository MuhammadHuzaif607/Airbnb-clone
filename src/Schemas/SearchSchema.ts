import z from 'zod';

export const FormSchema = z.object({
  destination: z.string().trim().min(1, 'Destination is required'),
  check_in_date: z.date({ required_error: 'Check-in date is required' }),
  check_out_date: z.date(),
  property_type: z.string().trim().min(1, 'Property type is required'),
});
