import Stripe from 'stripe'

// Initialize Stripe with the secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
})

/**
 * Create a payment link for entity formation
 */
export async function createFormationPaymentLink(
  tier: 'base' | 'market_me' | 'perfect_paydex' | 'business_360',
  metadata: {
    lead_id: string
    client_email: string
    entity_type: string
    state: string
  }
): Promise<string> {
  const prices = {
    base: 29700, // $297
    market_me: 69700, // $697
    perfect_paydex: 99700, // $997
    business_360: 164700, // $1,647
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: prices[tier],
    currency: 'usd',
    metadata,
    automatic_payment_methods: {
      enabled: true,
    },
  })

  return paymentIntent.client_secret!
}

/**
 * Create a subscription for registered agent renewal
 */
export async function createRenewalSubscription(
  customerId: string,
  entityId: string
): Promise<Stripe.Subscription> {
  // Registered agent renewal: $99/year
  const priceId = process.env.STRIPE_RA_RENEWAL_PRICE_ID!

  return await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceId }],
    metadata: {
      entity_id: entityId,
      service: 'registered_agent_renewal',
    },
  })
}
