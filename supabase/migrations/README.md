# Database Migrations

This folder contains all Supabase database migrations.

## Setup

1. **Link to your Supabase project:**
   ```bash
   npx supabase link --project-ref YOUR_PROJECT_ID
   ```

2. **Create the initial schema:**

   The complete database schema is documented in the root-level documentation files. To create your initial migration:

   ```bash
   npx supabase migration new initial_schema
   ```

   Then copy the schema from the documentation into the generated migration file.

3. **Push migrations to Supabase:**
   ```bash
   npx supabase db push
   ```

4. **Generate TypeScript types:**
   ```bash
   npm run db:generate
   ```

## Migration Best Practices

- **Never modify existing migrations** - Create new ones instead
- **Test locally first** with `npx supabase db reset`
- **Always generate types** after schema changes
- **Use descriptive names** for migrations (e.g., `add_credit_scores_table`)

## Schema Overview

The database includes these core tables:

### Users & Auth
- `users` - User accounts (synced with Clerk)
- `subscriptions` - Stripe subscriptions
- `payments` - Payment history

### Business Entities
- `entities` - Formed entities (LLCs, S-Corps, etc.)
- `formation_documents` - State filing tracking
- `documents` - Document vault (14 categories)

### Virtual Mail
- `mail_items` - Scanned mail
- `mail_bundles` - Scheduled shipments
- `mail_preferences` - Auto-actions

### Marketing (Market Me)
- `campaigns` - Social media posts/ads
- `marketing_listings` - Directory listings
- `marketing_services` - 90-day automation tracking

### Credit Building (Perfect Paydex)
- `credit_scores` - Business + personal credit scores
- `credit_accounts` - Net-30, Net-60, tradelines
- `bank_accounts` - Business banking
- `credit_services` - Paydex achievement tracking

### Admin & System
- `leads` - Website inquiries (synced to HubSpot)
- `admin_alerts` - Human oversight alerts
- `workflow_jobs` - N8N execution tracking
- `system_config` - System configuration
- `state_requirements` - Reference data for all 50 states

### Education
- `education_modules` - Training content
- `education_progress` - User completion tracking

See `COMPLETE_PROJECT_STRUCTURE.md` in the root directory for complete schema details.
