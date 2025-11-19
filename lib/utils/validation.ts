import { z } from 'zod'

/**
 * Email validation schema
 */
export const emailSchema = z.string().email('Invalid email address')

/**
 * Phone validation schema
 */
export const phoneSchema = z
  .string()
  .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number')

/**
 * EIN validation schema
 */
export const einSchema = z
  .string()
  .regex(/^\d{2}-?\d{7}$/, 'Invalid EIN format (XX-XXXXXXX)')

/**
 * Lead capture form schema
 */
export const leadCaptureSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  phone: phoneSchema.optional(),
  entity_type: z.enum([
    'llc_single',
    'llc_multi',
    's_corp',
    'c_corp',
    'corporation',
    'partnership',
    'sole_proprietor',
    'unincorporated',
    'nonprofit',
  ]),
  state: z.string().length(2, 'State code must be 2 characters'),
  message: z.string().optional(),
})

/**
 * Entity creation schema
 */
export const entityCreationSchema = z.object({
  name: z.string().min(1, 'Entity name is required'),
  entity_type: z.enum([
    'llc_single',
    'llc_multi',
    's_corp',
    'c_corp',
    'corporation',
    'partnership',
    'sole_proprietor',
    'unincorporated',
    'nonprofit',
  ]),
  state: z.string().length(2, 'State code must be 2 characters'),
  business_address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  service_tier: z.enum(['base', 'market_me', 'perfect_paydex', 'business_360']),
})

/**
 * Validate data against a schema
 */
export function validate<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data)
}

/**
 * Safe validate - returns result with error
 */
export function safeValidate<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  const result = schema.safeParse(data)
  if (result.success) {
    return { success: true, data: result.data }
  }
  return { success: false, error: result.error }
}
