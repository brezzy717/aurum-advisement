/**
 * Application Constants
 */

// Pricing (in cents)
export const PRICING = {
  BASE_SERVICE: 29700, // $297
  MARKET_ME: 69700, // $697
  PERFECT_PAYDEX: 99700, // $997
  BUSINESS_360: 164700, // $1,647
  RA_RENEWAL: 9900, // $99/year
  PHONE_FAX_ADDON: 1000, // $10/month (optional)
} as const

// Service Tiers
export const SERVICE_TIERS = {
  BASE: 'base',
  MARKET_ME: 'market_me',
  PERFECT_PAYDEX: 'perfect_paydex',
  BUSINESS_360: 'business_360',
} as const

// Entity Types
export const ENTITY_TYPES = {
  LLC_SINGLE: 'llc_single',
  LLC_MULTI: 'llc_multi',
  S_CORP: 's_corp',
  C_CORP: 'c_corp',
  CORPORATION: 'corporation',
  PARTNERSHIP: 'partnership',
  SOLE_PROPRIETOR: 'sole_proprietor',
  UNINCORPORATED: 'unincorporated',
  NONPROFIT: 'nonprofit',
} as const

// Entity Status
export const ENTITY_STATUS = {
  PENDING: 'pending',
  PENDING_FORMATION: 'pending_formation',
  FILED_WITH_STATE: 'filed_with_state',
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  DISSOLVED: 'dissolved',
} as const

// Document Categories (14 categories per build specs)
export const DOCUMENT_CATEGORIES = [
  'articles',
  'bylaws',
  'operating_agreement',
  'banking_resolution',
  'meeting_minutes',
  'ein_letter',
  'state_filing',
  'annual_report',
  'tax_documents',
  'contracts',
  'licenses',
  'certificates',
  'amendments',
  'other',
] as const

// Mail Actions
export const MAIL_ACTIONS = {
  SHRED: 'shred',
  BUNDLE: 'bundle',
  FORWARD: 'forward',
  DELIVERED: 'delivered',
} as const

// Mail Urgency Levels
export const MAIL_URGENCY = {
  URGENT: 'urgent',
  IMPORTANT: 'important',
  ROUTINE: 'routine',
} as const

// US States
export const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
] as const
