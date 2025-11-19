# 🏗️ AURUM ADVISEMENT - COMPLETE PROJECT STRUCTURE

Complete file structure, database schema, and architectural overview for the Aurum Advisement platform.

---

## 📁 FULL FILE STRUCTURE

```
aurum-advisement/
├── app/
│   ├── (marketing)/                      # Public marketing website
│   │   ├── layout.tsx                     # Marketing layout with nav/footer
│   │   ├── page.tsx                       # Homepage (hero, features, pricing carousel)
│   │   ├── pricing/
│   │   │   ├── page.tsx                   # Main pricing page with all tiers
│   │   │   ├── base/page.tsx              # Detailed Base Service pricing
│   │   │   ├── market-me/page.tsx         # Detailed Market Me pricing
│   │   │   ├── perfect-paydex/page.tsx    # Detailed Perfect Paydex pricing
│   │   │   └── business-360/page.tsx      # Detailed Business 360 pricing
│   │   ├── entity-types/
│   │   │   ├── page.tsx                   # Entity types overview
│   │   │   ├── llc-single/page.tsx        # Single-Member LLC info
│   │   │   ├── llc-multi/page.tsx         # Multi-Member LLC info
│   │   │   ├── s-corp/page.tsx            # S Corporation info
│   │   │   ├── c-corp/page.tsx            # C Corporation info
│   │   │   ├── corporation/page.tsx       # General Corporation info
│   │   │   ├── partnership/page.tsx       # Partnership info
│   │   │   ├── sole-proprietor/page.tsx   # Sole Proprietorship info
│   │   │   ├── unincorporated/page.tsx    # Unincorporated Association info
│   │   │   ├── nonprofit/page.tsx         # Nonprofit info
│   │   │   └── [state]/[entity]/page.tsx  # Dynamic state+entity pages
│   │   ├── about/page.tsx                 # About Us
│   │   ├── contact/page.tsx               # Contact form
│   │   └── get-started/page.tsx           # Get started wizard
│   │
│   ├── dashboard/                         # User dashboard (Clerk-protected)
│   │   ├── layout.tsx                     # Dashboard layout with sidebar + MY GPT widget
│   │   ├── page.tsx                       # Dashboard home (grid from sketches)
│   │   ├── entities/                      # Entity management
│   │   │   ├── page.tsx                   # List all entities
│   │   │   └── [id]/page.tsx              # Entity details
│   │   ├── documents/                     # Document vault
│   │   │   ├── page.tsx                   # Document list/grid
│   │   │   └── generate/page.tsx          # AI document generation
│   │   ├── mail/                          # Virtual mail center
│   │   │   ├── page.tsx                   # Mail items list
│   │   │   └── bundles/page.tsx           # Bundle history
│   │   ├── market-me/                     # Marketing automation dashboard
│   │   │   ├── page.tsx                   # Campaign overview
│   │   │   ├── campaigns/page.tsx         # Campaign list
│   │   │   ├── content/page.tsx           # Content library
│   │   │   ├── listings/page.tsx          # Directory listings
│   │   │   └── website/page.tsx           # Website editor
│   │   ├── credit-builder/                # Credit monitoring
│   │   │   ├── page.tsx                   # Credit score overview
│   │   │   ├── business/page.tsx          # Business credit details
│   │   │   ├── personal/page.tsx          # Personal credit details
│   │   │   └── accounts/page.tsx          # Tradeline accounts
│   │   ├── phone/page.tsx                 # Phone & Fax Central (if opted in)
│   │   ├── new-filing/page.tsx            # New entity formation wizard
│   │   ├── add-services/page.tsx          # Upgrade tiers
│   │   ├── education/                     # Education center
│   │   │   ├── page.tsx                   # Module list
│   │   │   └── [moduleId]/page.tsx        # Individual module
│   │   └── settings/                      # Account settings
│   │       ├── page.tsx                   # General settings
│   │       ├── billing/page.tsx           # Subscription management
│   │       └── notifications/page.tsx     # Notification preferences
│   │
│   ├── admin/                             # Admin dashboard (admin role only)
│   │   ├── layout.tsx                     # Admin layout
│   │   ├── page.tsx                       # Admin overview with metrics
│   │   ├── leads/page.tsx                 # Lead pipeline (HubSpot sync)
│   │   ├── entities/page.tsx              # All entities queue
│   │   ├── filings/page.tsx               # Document filing status
│   │   ├── credit-setup/page.tsx          # Credit account tracking
│   │   ├── mail-queue/page.tsx            # Mail processing queue
│   │   ├── campaigns/page.tsx             # Marketing campaigns management
│   │   ├── users/                         # User management
│   │   │   ├── page.tsx                   # User list
│   │   │   └── [id]/page.tsx              # User details (create/delete)
│   │   ├── analytics/page.tsx             # Revenue & metrics
│   │   └── settings/page.tsx              # System configuration
│   │
│   └── api/                               # API routes
│       ├── webhooks/
│       │   ├── n8n/route.ts               # N8N workflow callbacks
│       │   ├── stripe/route.ts            # Stripe payment webhooks
│       │   ├── clerk/route.ts             # Clerk user sync webhooks
│       │   └── mail/route.ts              # Mail scanner webhooks
│       ├── ai/
│       │   ├── generate/route.ts          # Document generation
│       │   ├── chat/route.ts              # MY GPT assistant
│       │   └── content/route.ts           # Marketing content generation
│       ├── documents/
│       │   ├── list/route.ts              # List documents
│       │   └── upload/route.ts            # Upload documents
│       ├── mail/
│       │   ├── action/route.ts            # User mail actions
│       │   └── preferences/route.ts       # Mail preferences
│       ├── credit/
│       │   ├── scores/route.ts            # Fetch credit scores
│       │   └── accounts/route.ts          # Credit account management
│       └── integrations/
│           ├── hubspot/route.ts           # HubSpot CRM sync
│           ├── dnb/route.ts               # D&B credit monitoring
│           └── humblefax/route.ts         # Fax filing status
│
├── components/
│   ├── marketing/                         # Marketing website components
│   │   ├── hero.tsx                       # Landing hero section
│   │   ├── pricing-cards.tsx              # Service tier cards
│   │   ├── pricing-carousel.tsx           # Interactive pricing carousel
│   │   ├── entity-type-card.tsx           # Entity type cards
│   │   ├── testimonials.tsx               # Review carousel
│   │   ├── navigation.tsx                 # Glass nav bar
│   │   ├── footer.tsx                     # Footer with links
│   │   └── chatbot-widget.tsx             # Marketing chatbot
│   │
│   ├── dashboard/                         # Dashboard components
│   │   ├── sidebar.tsx                    # Left navigation
│   │   ├── top-bar.tsx                    # Universal top bar
│   │   ├── my-gpt-widget.tsx              # Floating AI assistant
│   │   ├── calendar-todo.tsx              # 30-day calendar
│   │   ├── stats-grid.tsx                 # Dashboard widgets
│   │   ├── compliance-tracker.tsx         # To-do items
│   │   ├── entity-card.tsx                # Entity card component
│   │   ├── document-card.tsx              # Document card
│   │   ├── mail-item.tsx                  # Mail item component
│   │   ├── campaign-card.tsx              # Campaign card
│   │   └── credit-score-widget.tsx        # Credit score display
│   │
│   ├── admin/                             # Admin components
│   │   ├── user-table.tsx                 # User management table
│   │   ├── filing-queue.tsx               # Filing queue component
│   │   ├── lead-pipeline.tsx              # Lead pipeline kanban
│   │   ├── revenue-charts.tsx             # Analytics charts
│   │   └── system-status.tsx              # Health monitoring
│   │
│   └── ui/                                # Shared UI components (Radix UI wrapped)
│       ├── button.tsx                     # Button component
│       ├── input.tsx                      # Input component
│       ├── modal.tsx                      # Modal dialog
│       ├── glass-card.tsx                 # Glassmorphic card
│       ├── gradient-button.tsx            # Gradient CTA button
│       ├── data-table.tsx                 # Reusable table
│       ├── select.tsx                     # Select dropdown
│       ├── tabs.tsx                       # Tabs component
│       └── badge.tsx                      # Badge component
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts                      # Browser client
│   │   ├── server.ts                      # Server client (cookies)
│   │   ├── admin.ts                       # Service role client
│   │   └── types.ts                       # Generated types
│   ├── integrations/
│   │   ├── openrouter.ts                  # AI gateway
│   │   ├── stripe.ts                      # Payments
│   │   ├── clerk.ts                       # Auth helpers
│   │   ├── hubspot.ts                     # CRM
│   │   ├── dnb.ts                         # Credit API
│   │   ├── humblefax.ts                   # Fax API
│   │   └── retell.ts                      # Voice agent
│   ├── utils/
│   │   ├── formatting.ts                  # Format helpers (currency, date, etc.)
│   │   ├── validation.ts                  # Input validation
│   │   ├── constants.ts                   # App constants
│   │   └── helpers.ts                     # General helpers
│   └── hooks/
│       ├── use-user.ts                    # User data hook
│       ├── use-entities.ts                # Entities hook
│       └── use-documents.ts               # Documents hook
│
├── n8n-workflows/                         # N8N workflow JSON exports
│   ├── 01-lead-capture.json               # Lead capture & AI response
│   ├── 02-payment-processing.json         # Payment → entity creation
│   ├── 03-entity-formation.json           # State filing automation
│   ├── 04-ein-duns.json                   # EIN & DUNS acquisition
│   ├── 05-mail-processing.json            # Mail scanning & classification
│   ├── 06-credit-monitoring.json          # D&B credit monitoring
│   ├── 07-personal-credit.json            # Personal credit monitoring
│   ├── 08-social-media-drip.json          # Market Me content automation
│   ├── 09-directory-listings.json         # Directory setup
│   ├── 10-website-creation.json           # AI website generation
│   ├── 11-credit-accounts.json            # Net-30/Net-60 applications
│   └── 12-bank-setup.json                 # Business bank accounts
│
├── supabase/
│   ├── migrations/                        # Database migrations
│   │   └── 001_initial_schema.sql         # Initial schema (see DATABASE_SCHEMA.sql)
│   ├── seed.sql                           # Seed data (state requirements, etc.)
│   └── config.toml                        # Supabase config
│
├── public/
│   ├── images/
│   │   ├── logo.png                       # Aurum logo
│   │   ├── hero-bg.jpg                    # Hero background
│   │   └── entity-icons/                  # Entity type icons
│   └── assets/
│       ├── fonts/                         # Custom fonts
│       └── icons/                         # Icon set
│
├── styles/
│   └── globals.css                        # Tailwind + custom styles
│
├── .env.example                           # Environment variable template
├── .env.local                             # Local environment variables (gitignored)
├── next.config.js                         # Next.js configuration
├── tailwind.config.js                     # Tailwind configuration
├── tsconfig.json                          # TypeScript configuration
├── package.json                           # Dependencies
├── README.md                              # Main documentation
├── CLAUDE.md                              # AI assistant context
├── COMPLETE_IMPLEMENTATION.md             # This file
├── COMPLETE_PROJECT_STRUCTURE.md          # Full project structure (you are here)
└── DATABASE_SCHEMA.sql                    # Complete database schema

```

---

## 🗄️ DATABASE ARCHITECTURE

See `DATABASE_SCHEMA.sql` for the complete schema with all tables, relationships, indexes, RLS policies, and triggers.

### Core Tables

**Users & Auth**
- `users` - User accounts (synced with Clerk)
- `subscriptions` - Stripe subscriptions
- `payments` - Payment history

**Business Entities**
- `entities` - Formed entities (LLCs, S-Corps, etc.)
- `formation_documents` - State filing tracking
- `documents` - Document vault (14 categories)

**Virtual Mail**
- `mail_items` - Scanned mail
- `mail_bundles` - Scheduled shipments
- `mail_preferences` - Auto-actions

**Marketing (Market Me)**
- `campaigns` - Social media posts/ads
- `marketing_listings` - Google Business, Apple Maps, 411, etc.
- `marketing_services` - 90-day automation tracking

**Credit Building (Perfect Paydex)**
- `credit_scores` - Business + personal credit scores
- `credit_accounts` - Net-30, Net-60, gas cards, Aurum tradelines
- `bank_accounts` - Business banking
- `credit_services` - Paydex achievement tracking

**Admin & System**
- `leads` - Website inquiries (synced to HubSpot)
- `admin_alerts` - Human oversight alerts
- `workflow_jobs` - N8N execution tracking
- `system_config` - System configuration
- `state_requirements` - Reference data for all 50 states

**Education**
- `education_modules` - Training content
- `education_progress` - User completion tracking

### Key Relationships

```
users (1) → (many) entities
users (1) → (many) subscriptions
users (1) → (many) payments
entities (1) → (many) documents
entities (1) → (many) mail_items
entities (1) → (many) campaigns
entities (1) → (many) credit_scores
entities (1) → (many) credit_accounts
mail_items (many) → (1) mail_bundles
```

### Row-Level Security (RLS)

**All tables have RLS enabled.**

**Users can:**
- View/edit their own data
- View/edit their own entities, documents, mail, campaigns, credit info

**Admins can:**
- View/edit ALL data
- Access admin-only tables (leads, admin_alerts, workflow_jobs)

**Public:**
- Read-only access to `state_requirements` table

---

## 🎨 DESIGN SYSTEM

### Color Palette
```css
:root {
  --aurum-navy: #070C6D;
  --aurum-cyan: #81D8D0;
  --aurum-gold: #FFD700;
  --neutral-950: #0a0a0a;
  --neutral-900: #171717;
  --neutral-800: #262626;
  --white-5: rgba(255, 255, 255, 0.05);
  --white-10: rgba(255, 255, 255, 0.10);
}
```

### Glassmorphic Components
```css
.glass-card {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.05) 0%, 
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.7);
}

.glass-nav {
  background: rgba(10, 10, 10, 0.60);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Typography
- **Headings**: Space Grotesk (bold, modern)
- **Body**: Inter (clean, readable)

### Component Library
- Radix UI primitives (accessible, unstyled)
- Wrapped with Tailwind styles
- Custom glassmorphic design

---

## 🔄 DATA FLOW

### User Registration Flow
```
User visits website
  ↓
Fills contact form
  ↓
N8N: Lead Capture Workflow triggered
  ↓
AI analyzes intent → generates response
  ↓
Creates Stripe payment link
  ↓
Emails user with contract + payment link
  ↓
User pays via Stripe
  ↓
N8N: Payment Processing Workflow triggered
  ↓
Creates entity in Supabase
  ↓
Creates Clerk user account
  ↓
Sends welcome email with login
  ↓
User logs into dashboard
```

### Entity Formation Flow
```
Entity created (status: pending_formation)
  ↓
N8N: Entity Formation Workflow triggered
  ↓
AI generates all formation documents
  ↓
Stores documents in Supabase Storage
  ↓
Determines state filing method (fax/email)
  ↓
Submits to Secretary of State (HumbleFax or SMTP)
  ↓
Updates status to "filed_with_state"
  ↓
Admin monitors for approval
  ↓
Once approved: triggers EIN/DUNS workflows
  ↓
Entity status → "active"
  ↓
Emails user with documents
  ↓
Ships welcome package
```

### Mail Processing Flow
```
Physical mail arrives at office
  ↓
Admin scans mail
  ↓
Uploads to Supabase Storage
  ↓
N8N: Mail Processing Workflow triggered
  ↓
AI classifies urgency (urgent/important/routine)
  ↓
Creates mail_item record
  ↓
Notifies user (email + dashboard notification)
  ↓
User chooses action:
  - Shred → marks for physical shredding
  - Bundle → adds to next scheduled shipment
  - Forward → ships immediately with tracking
  ↓
Status updated → processed
```

### Credit Monitoring Flow
```
Weekly cron job runs
  ↓
Fetches all Perfect Paydex entities
  ↓
For each entity:
  ↓
  Queries D&B for Paydex score
  ↓
  Queries Experian Business
  ↓
  Queries Equifax Business
  ↓
  Compares with historical scores
  ↓
  If changed: creates credit_scores record
  ↓
  Notifies user
  ↓
  Posts Aurum tradeline payments to bureaus
```

---

## 🔌 INTEGRATION ARCHITECTURE

### External APIs

**Authentication & Payments**
- Clerk (user auth)
- Stripe (payments)

**AI & Content**
- OpenRouter (Claude 3.5 Sonnet, GPT-4o, Gemini Pro fallbacks)
- Deepseek R1 (voice reasoning for admin agent)
- Retell.ai (voice infrastructure)

**Business Formation**
- HumbleFax (fax to Secretary of State offices)
- IRS (EIN application)
- D&B (DUNS number + credit monitoring)

**Marketing**
- Facebook Graph API
- Instagram Graph API
- LinkedIn API
- Twitter API
- Google Maps API (Google Business Profile)
- Apple MapKit (Apple Maps listing)
- 411.com API

**Credit Monitoring**
- D&B API (business credit)
- Experian Business API
- Equifax Business API
- Experian Consumer API (personal credit)
- TransUnion API
- Equifax Consumer API

**CRM & Communication**
- HubSpot (admin CRM)
- SMTP (email sending)
- Twilio/Vonage (optional VoIP for $10/month phone lines)

**Shipping**
- USPS API
- FedEx API
- UPS API

### N8N Webhook Endpoints

All N8N workflows are accessible via webhooks:

```
https://n8n.yourdomain.com/webhook/lead-capture
https://n8n.yourdomain.com/webhook/payment-completed
https://n8n.yourdomain.com/webhook/entity-formation
https://n8n.yourdomain.com/webhook/mail-scanned
https://n8n.yourdomain.com/webhook/credit-check
...etc
```

Next.js API routes call these webhooks to trigger workflows.

---

## 🛡️ SECURITY

### Authentication
- Clerk for user auth (secure, battle-tested)
- JWT tokens for session management
- Role-based access control (user vs admin)

### Database Security
- Row-Level Security (RLS) on all tables
- Users can only access their own data
- Admins have elevated permissions
- Service role key stored securely (never exposed to client)

### API Security
- Webhook signature verification (Stripe, N8N)
- API route protection with Clerk
- Rate limiting on sensitive endpoints
- Input validation with Zod

### Data Protection
- **Never store sensitive data in plain text:**
  - Credit card numbers → Stripe tokens only
  - Bank account numbers → last 4 digits only
  - SSN/EIN → hashed if stored at all
- All files stored in Supabase Storage with access controls
- Signed URLs for temporary file access

---

## 📊 MONITORING & ANALYTICS

### Error Tracking
- Sentry for error monitoring
- Webhook failure alerts
- Workflow execution tracking in `workflow_jobs` table

### Performance Monitoring
- Vercel Analytics
- Supabase dashboard metrics
- N8N execution logs

### Business Metrics
- User growth (signups, tier distribution)
- Revenue (MRR, churn, LTV)
- Entity formation success rate
- Paydex achievement rate
- Mail processing volume
- Campaign engagement

---

## 🧪 TESTING STRATEGY

### Unit Tests
- Utility functions
- API route handlers
- Component logic

### Integration Tests
- User registration → payment → entity creation flow
- Mail scanning → classification → user action flow
- Credit account application → approval → reporting flow

### E2E Tests (Playwright)
- Complete user journeys
- Admin workflows
- Payment processing

### Load Testing
- Simulate 1000+ concurrent users
- Stress test N8N workflows
- Database query performance

---

## 🚀 DEPLOYMENT

### Infrastructure
- **Frontend**: Vercel (Next.js 15)
- **Database**: Supabase (hosted PostgreSQL)
- **Automation**: N8N on Hostinger VPS (Docker)
- **Domain**: Hostinger
- **Email**: Business email via domain

### CI/CD
- GitHub Actions for automated deployments
- Preview deployments for pull requests
- Automatic database migrations

### Environment Variables
All sensitive keys stored in:
- `.env.local` (local development)
- Vercel environment variables (production)
- N8N credentials store (N8N workflows)

---

## 📝 DEVELOPMENT WORKFLOW

### Starting Development
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your keys

# Run database migrations
npx supabase db push

# Generate TypeScript types
npm run db:generate

# Start development server
npm run dev
```

### Making Changes
1. Create feature branch
2. Make changes
3. Test locally
4. Commit and push
5. Create pull request
6. Review and merge
7. Automatic deployment to production

### Database Changes
1. Create migration: `npx supabase migration new your_migration_name`
2. Write SQL in migration file
3. Test locally: `npx supabase db push`
4. Commit migration file
5. Deploys automatically on merge

---

## 🎯 KEY ARCHITECTURAL DECISIONS

### Why Next.js 15?
- Latest features (app router, server components)
- Excellent developer experience
- Vercel deployment is seamless
- Strong TypeScript support

### Why Supabase over Neon?
- Includes auth + storage + realtime out of the box
- Better ecosystem and documentation
- Real-time subscriptions for live updates
- Row-level security built-in

### Why N8N on VPS instead of cloud?
- More control over workflows
- Cheaper at scale
- Already have Hostinger VPS
- Can run custom nodes if needed

### Why OpenRouter with fallbacks?
- Cost-effective
- Reliable uptime through automatic fallbacks
- Claude 3.5 Sonnet for quality
- GPT-4o and Gemini Pro as backups

### Why HubSpot + Supabase?
- Supabase is source of truth for app data
- HubSpot is for admin sales pipeline
- Prevents CRM clutter from affecting user experience
- Each serves a specific purpose

---

**Built with 💎 by Aurum Advisement**
*Where Business Formation Meets Domination*
