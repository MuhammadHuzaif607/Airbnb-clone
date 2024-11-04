import { z } from 'zod';

// Full schema with dynamic court_space validation
export const FormDataSchema = z.object({
  location: z.string().min(1, 'Location is required'),
  country: z.string().min(1, 'Country is required'),
  street_address: z.string().min(1, 'Street address is required'),
  apartment_suite: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip_code: z.string().min(1, 'Zip Code is required'),
  listing: z.enum(['Home_Spaces', 'Pool', 'Sports_court', 'Horses']),
  listing_subcategory: z.enum([
    'Tennis_court',
    'Pickleball_court',
    'Basketball_court',
    'Volleyball_court',
  ]),
  space_type_desc: z
    .string()
    .min(1, 'You have to specify Space Type with a minimum of 25 characters'),
  yard_width: z.string(),
  yard_length: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  popular_amenities: z.enum(['fixed_net', 'temporary_net']).optional(),
  bathroom_amenities: z
    .enum(['night_lighting', 'shaded_area', 'sitting_area'])
    .optional(),
  kitchen_amenities: z
    .enum(['towels', 'rackets', 'water', 'instructor'])
    .optional(),
  laundry: z.enum(['shower', 'speaker']).optional(),
  standout_amenities: z
    .enum(['pools', 'patio', 'grill', 'hot_tub', 'bar', 'lake_access'])
    .optional(),
  parking_space: z.enum(['No-parking', '1', '2', '3', '4', '5']).optional(),
  limitations: z
    .array(z.enum(['no_smoke', 'no_bike', 'no_loud_music', 'no_own_food']))
    .min(0)
    .optional(),
  kids: z
    .array(z.enum(['0-3', '0-12', '0-16']))
    .min(0)
    .optional(),
  pets: z
    .array(z.enum(['small', 'medium', 'big', 'all_dog_breds']))
    .min(0)
    .optional(),
  own_rules: z.string().optional(),
  guests: z.string().min(1, 'Fill out this field'),
  lease_property: z.enum(['by_day', 'by_hourly']),
});
