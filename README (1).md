# 💎 Aurum Advisement

**AI-Powered Business Formation & Credit Building Platform**

The most comprehensive registered agent and business services platform ever built. Form entities in 24-72 hours, achieve perfect Paydex scores in 60 days, and dominate your market with complete marketing automation.

---

## 🚀 Project Overview

Aurum Advisement is a full-stack web application that revolutionizes business formation by combining:
- Automated entity formation with state filing
- Virtual registered agent services with physical addresses
- Complete marketing automation and web presence buildout
- Business and personal credit building with tradeline reporting
- Virtual mail scanning with bundle/shred/forward options
- AI-powered document generation and customer support
- Comprehensive admin dashboard with CRM integration

**Core Value Proposition:** Other registered agent services charge you $300/year just to forward your mail. We form your entity, build your credit profile to 70-80 Paydex in 60 days, create your entire web presence, and manage everything through one intelligent platform.

---

## 💰 Pricing Tiers

### Base Service - $297
**Entity Formation + 1 Year Registered Agent**
- Entity formation in all 50 states (LLC, S-Corp, C-Corp, Partnership, Sole Proprietor, Nonprofit, etc.)
- Physical business address (not PO Box) with privacy protection
- Virtual mail scanning - unlimited pieces, scan/bundle/shred options
- EIN from IRS
- DUNS number from D&B
- Formation documents (Articles, Bylaws, Resolutions, Meeting Minutes, etc.)
- User dashboard with document vault
- MY GPT AI assistant with voice mode and tool calling
- Chat support

**Renewal: $99/year**

### Market Me Add-On - $697
**Complete 90-Day Marketing Automation**
- AI-generated custom website on your own domain
- Business email address
- Social media setup & management (Facebook, Instagram, LinkedIn, Twitter)
- Google Business Profile optimization
- Apple Maps listing
- 411 directory listing
- Chamber of Commerce integration
- 90 days of automated content drip campaigns
- Unified dashboard to view/edit all marketing
- Option to continue with managed services after 90 days (custom pricing)

### Perfect Paydex Add-On - $997
**Business & Personal Credit Building**
- 2x Net-30 accounts (Quill, Grainger)
- 2x Net-60 accounts (CEO Creative, HD Supply)
- 2x Gas cards (WEX, AtoB)
- 1x $150K revolving line of credit (backdated, from Aurum)
- 1x $150K installment loan (backdated, from Aurum)
- Business bank account setup (national bank or credit union)
- Real-time credit monitoring (D&B, Experian Business, Equifax Business)
- Personal credit monitoring (Experian, TransUnion, Equifax)
- Guaranteed 70-80 Paydex score in 60 days
- 24 months of optimized payment reporting
- "Start-Up 101" comprehensive training course

### Business 360 Package - $1,647
**Everything Above Combined** (Base + Market Me + Perfect Paydex)

### Optional Add-Ons
- **Phone/Fax Line**: $10/month (toll-free or local area code, can be folded into annual pricing)
- **Continued Marketing Management**: Contact for custom pricing based on services needed

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom Aurum theme
- **Authentication**: Clerk (user auth + role-based access)
- **UI Components**: Radix UI + Custom glassmorphic components
- **Deployment**: Vercel (or Hostinger if preferred)

### Backend
- **Database**: Supabase (PostgreSQL) - user data, entities, documents, workflows
- **CRM**: HubSpot - admin pipeline tracking and backup
- **Storage**: Supabase Storage - document files, mail scans
- **Automation**: N8N on Hostinger VPS with Docker

### AI & APIs
- **Primary LLM**: OpenRouter with Claude 3.5 Sonnet (fallback to GPT-4o, Gemini Pro 1.5)
- **Voice Agent (Admin)**: Deepseek R1 + Retell.ai for incoming customer service calls
- **Document Generation**: Custom prompts with Claude via OpenRouter
- **State Filing**: HumbleFax API (fax) + SMTP (email) for Secretary of State submissions
- **Credit Monitoring**: D&B API for business credit, potentially Nav or Credit IQ for personal
- **Maps & Directories**: Google Maps API, Apple Maps API, 411 API
- **Payments**: Stripe for subscriptions and one-time payments
- **Mail Services**: USPS APIs for address validation and tracking

### Infrastructure
- **VPS**: Hostinger with Docker + N8N
- **Domain**: Hosted on Hostinger
- **Email**: Business email via domain

---

## 📂 Project Structure

```
aurum-advisement/
├── app/                          # Next.js 15 app directory
│   ├── (marketing)/              # Public marketing website
│   │   ├── page.tsx              # Homepage
│   │   ├── pricing/              # Pricing pages
│   │   ├── entity-types/         # Entity type info pages
│   │   │   ├── llc-single/
│   │   │   ├── llc-multi/
│   │   │   ├── s-corp/
│   │   │   ├── c-corp/
│   │   │   ├── corporation/
│   │   │   ├── partnership/
│   │   │   ├── sole-proprietor/
│   │   │   ├── unincorporated/
│   │   │   └── nonprofit/
│   │   ├── state-entity/[state]/[entity]/  # Dynamic state+entity pages
│   │   ├── about/
│   │   ├── contact/
│   │   └── get-started/
│   ├── dashboard/                # User dashboard (Clerk-protected)
│   │   ├── page.tsx              # Dashboard home with MY GPT widget
│   │   ├── entities/             # Multi-entity management
│   │   ├── documents/            # Document vault with AI generation
│   │   ├── mail/                 # Virtual mail center
│   │   ├── market-me/            # Marketing campaign dashboard
│   │   ├── credit-builder/       # Credit monitoring
│   │   ├── add-services/         # Upgrade to higher tiers
│   │   ├── education/            # Training courses
│   │   └── settings/             # Account settings
│   ├── admin/                    # Admin dashboard (admin role only)
│   │   ├── page.tsx              # Admin overview
│   │   ├── leads/                # Lead pipeline (HubSpot sync)
│   │   ├── entities/             # Entity formation queue
│   │   ├── filings/              # Document filing status
│   │   ├── credit-setup/         # Credit account tracking
│   │   ├── mail-queue/           # Mail processing
│   │   ├── users/                # User management (create/delete)
│   │   └── analytics/            # Revenue and metrics
│   └── api/                      # API routes
│       ├── webhooks/
│       │   ├── n8n/              # N8N workflow callbacks
│       │   ├── stripe/           # Payment webhooks
│       │   ├── clerk/            # Auth webhooks
│       │   └── hubspot/          # CRM sync
│       ├── documents/
│       │   └── generate/         # AI document generation
│       ├── mail/                 # Mail scanning endpoints
│       ├── credit/               # Credit monitoring endpoints
│       └── marketing/            # Campaign management
├── components/
│   ├── marketing/                # Marketing site components
│   ├── dashboard/                # Dashboard UI components
│   ├── admin/                    # Admin-specific components
│   └── ui/                       # Shared UI components
├── lib/
│   ├── supabase/                 # Supabase client & queries
│   ├── hubspot/                  # HubSpot integration
│   ├── integrations/             # External API wrappers
│   │   ├── openrouter.ts
│   │   ├── humblefax.ts
│   │   ├── dnb.ts
│   │   ├── stripe.ts
│   │   └── retell.ts
│   ├── utils/                    # Utility functions
│   └── types/                    # TypeScript types
├── n8n-workflows/                # N8N workflow JSON exports
│   ├── lead-capture.json
│   ├── entity-formation.json
│   ├── mail-processing.json
│   ├── credit-monitoring.json
│   └── marketing-automation.json
├── supabase/
│   ├── migrations/               # Database migrations
│   └── schema.sql                # Complete database schema
├── public/
│   ├── images/
│   └── assets/
├── .env.example                  # Environment variable template
├── next.config.js
├── tailwind.config.js
├── package.json
├── README.md                     # This file
└── CLAUDE.md                     # AI assistant context file
```

---

## 🌐 Marketing Website Pages

### Homepage
- Hero section with primary CTA
- Entity types overview with icons
- Pricing carousel (expands to detailed view)
- How it works section
- What makes us different
- Package offerings breakdown
- Testimonials
- Footer with links

### Pricing Pages
- **Main Pricing**: Carousel with 4 tiers (Base, Market Me, Perfect Paydex, Business 360)
- **Detailed Pages**: Individual pages for each tier with full feature breakdown and "Get Started" CTA

### Entity Type Pages
Individual pages for each entity type with:
- Definition and structure
- Benefits and drawbacks
- Tax implications
- Use cases
- State-by-state filing fees
- CTA to get started

Entity types:
- Single-Member LLC
- Multi-Member LLC
- S Corporation
- C Corporation
- General Corporation
- Partnership
- Sole Proprietorship
- Unincorporated Association
- Nonprofit

### State + Entity Dynamic Pages
- URL structure: `/entity-types/[state]/[entity-type]`
- User selects state and entity type
- Page dynamically generates content with:
  - State-specific filing requirements
  - Secretary of State office contact info (fax/email)
  - Filing fees
  - Processing timeline
  - Tax advantages/disadvantages
  - Renewal requirements
  - Registered agent requirements
- Content compiled from internet sources via AI

### About Us
- Company mission
- How we work
- What we offer
- Team info
- Why choose Aurum

### Contact / Get Started
- Contact form (triggers N8N lead capture workflow)
- AI chatbot for instant answers about services
- Phone number and business hours
- Email address

---

## 👤 User Dashboard Features

### Dashboard Home
- 30-day compliance calendar with important dates
- Action items / to-do list (urgent items flagged)
- Entity overview cards (all user's entities)
- Quick stats (documents, mail, credit score)
- **MY GPT Widget** - Floating AI assistant with:
  - Voice mode
  - Tool calling (document generation, state lookups, tax law queries)
  - Internet access
  - Memory across chats
  - Can be minimized, expanded, or full-screen

### My Entities
- List/grid view of all entities
- Per-entity details:
  - Formation date, renewal date, status
  - Business address and phone number (if opted in)
  - Domain and webmail (if Market Me tier)
  - Credit scores (if Perfect Paydex tier)
  - Quick actions (view documents, check mail, etc.)

### Document Vault
- 14 document categories:
  - Formation Documents
  - Operating Agreements
  - Bylaws
  - Banking Resolutions
  - Meeting Minutes
  - Tax Documents
  - Contracts
  - Invoices (with tracking numbers)
  - Compliance Documents
  - Beneficial Ownership Certificates
  - Amendment Filings
  - Annual Reports
  - Correspondence
  - Miscellaneous
- **AI Document Generation**: Click to generate any document type
- Multi-entity filtering
- Search and filter
- Download, share, archive
- Upload custom documents

### Mail Center (Virtual Mail)
- Scanned mail items uploaded daily
- Per mail item:
  - Scan preview image
  - Urgency classification (urgent, important, routine)
  - Actions: Shred, Bundle for shipment, Forward immediately
- Bundle preferences:
  - Weekly, bi-weekly, monthly
  - Auto-shred routine mail
- Tracking for shipped bundles
- Mail forwarding address management

### Market Me Dashboard (if tier includes it)
- **Campaign Calendar**: View all scheduled social media posts, ads, content
- **Content Library**: AI-generated posts for next 90 days
- **Edit Mode**: Modify any scheduled content
- **Platform Management**:
  - Facebook page link and analytics
  - Instagram profile link
  - LinkedIn company page
  - Twitter/X account
  - Google Business Profile status
  - Apple Maps listing
  - 411 directory listing
  - Chamber of Commerce membership
- **Website Editor**: Link to edit their AI-generated website
- **Analytics Dashboard**: Traffic, engagement, conversions
- **Upgrade Option**: Contact form to continue managed services after 90 days

### Credit Builder Dashboard (if tier includes it)
- **Business Credit Scores**:
  - Paydex score (D&B) with history graph
  - Experian Business score
  - Equifax Business score
- **Personal Credit Scores**:
  - Experian
  - TransUnion
  - Equifax
- **Tradelines**:
  - Net-30 accounts (Quill, Grainger) with payment history
  - Net-60 accounts (CEO Creative, HD Supply)
  - Gas cards (WEX, AtoB)
  - Aurum revolving line ($150K)
  - Aurum installment loan ($150K)
- **Credit Utilization**: Pie chart showing utilization across accounts
- **Payment History**: Calendar view of all payments
- **Credit Alerts**: Notifications for score changes
- **Bank Account Info**: Details on business bank setup

### Add Services / Upgrades
- Current tier displayed
- One-click upgrade to higher tiers
- Add optional phone/fax line ($10/month)
- Continue marketing services after 90 days (contact for pricing)
- Payment via Stripe

### Education Center
- "Start-Up 101" comprehensive training course (if Perfect Paydex tier)
- Video modules
- Tracking and sourcing leads
- CRM best practices
- Tax filing guidance
- Customer retention strategies
- Brand voice and audience targeting
- Business plan templates
- Grant writing and government proposals
- Q&A sessions
- Discounted CRM and accounting software offers (14-day free trial)

### Settings
- Account information
- Billing and subscription management
- Notification preferences
- Registered agent renewal reminders
- BOI reporting status
- Password and security

---

## 🔧 Admin Dashboard Features

### Overview
- System metrics (total users, active entities, revenue)
- Recent activity feed
- High-priority alerts
- Quick actions

### Lead Pipeline (HubSpot Integration)
- All leads from website contact form
- Lead status: New, Responded, Contract Sent, Paid, In Progress, Complete
- Filter and sort
- Assign to team members
- Manual lead creation

### Entity Formation Queue
- All entities in formation process
- Status: Payment Received → Documents Generated → Filed with State → Approved → Setup Complete
- State filing status (pending, submitted, approved)
- Document preview
- Manual intervention if needed

### Document Filing Status
- Real-time tracking of state filings
- Fax/email confirmation receipts
- Failed submissions with retry options
- State-by-state filing queue

### Credit Account Setup Tracking
- Per-entity credit account status
- Net-30, Net-60, gas card applications
- Aurum tradeline creation and backdating
- Payment reporting schedule
- Bank account setup progress

### Mail Processing Queue
- Daily mail scans awaiting upload
- Urgency classification by AI
- User action status (pending, shredded, bundled, forwarded)
- Bundle shipment tracking

### User Management
- List all users with tier information
- Create new user accounts manually
- Delete/suspend accounts
- Reset passwords
- View user activity logs

### Revenue & Analytics
- MRR (monthly recurring revenue)
- Breakdown by tier
- Churn rate
- Lifetime value per customer
- Conversion rates from leads to customers
- Popular upgrade paths

---

## 🤖 AI Instances

### 1. Marketing Website Chatbot
- **Purpose**: Answer prospect questions about services, pricing, entity types
- **Knowledge Base**: All Aurum service offerings, pricing details, entity type info, state requirements
- **Placement**: Floating chat widget on marketing pages
- **Capabilities**: Text-based Q&A, no tool calling

### 2. MY GPT (User Dashboard)
- **Purpose**: User assistant for document generation, questions, entity management
- **Placement**: Floating widget in user dashboard (minimize, expand, full-screen)
- **Capabilities**:
  - Voice mode (speech-to-text and text-to-speech)
  - Tool calling:
    - Generate any document from vault
    - Look up state-specific requirements
    - Query tax laws for entity type
    - Check credit scores
    - Manage mail (shred, bundle, forward)
    - Access entity information
  - Internet access for real-time lookups
  - Memory across conversations
  - Context from user's entities and account

### 3. Retell Voice Agent (Admin Side)
- **Purpose**: Handle incoming customer service phone calls
- **Model**: Deepseek R1 for reasoning + Retell.ai for voice infrastructure
- **Capabilities**: Answer customer questions, create tickets, escalate to human agent
- **Usage**: Admin receives calls, not exposed to users

---

## 🔄 N8N Automation Workflows

All workflows are hosted on Hostinger VPS running N8N with Docker.

### 1. Lead Capture & AI Response Flow
**Trigger**: Contact form submission on website

**Steps**:
1. Webhook receives form data (name, email, phone, entity type, state, message)
2. Create lead in Supabase `leads` table
3. Sync lead to HubSpot CRM
4. AI analyzes inquiry intent (general info, pricing, ready to start)
5. Fetch state-specific entity requirements from Supabase `state_requirements` table
6. AI generates personalized response email with:
   - Entity info for their state
   - Pricing breakdown
   - Timeline expectations
   - Next steps
7. Create Stripe payment link for their specific entity + state filing fee
8. Send email with payment link and contract
9. Update lead status in Supabase and HubSpot
10. Create admin alert in `admin_alerts` table

**Integrations**: Supabase, HubSpot, OpenRouter (Claude 3.5 Sonnet), Stripe, SMTP

---

### 2. Contract & Payment Processing Flow
**Trigger**: Stripe payment completed webhook

**Steps**:
1. Validate payment and extract metadata (contract ID, client email, entity type, state)
2. Update lead status to "Paid" in Supabase and HubSpot
3. Create new entity record in Supabase `entities` table
4. Trigger formation document generation workflow
5. Send confirmation email to client with:
   - Payment receipt
   - Dashboard login instructions
   - Welcome package info
6. Create admin task to begin entity formation process
7. Add client to Clerk authentication system
8. Send welcome gift (leather binder with printed docs) to client address

**Integrations**: Stripe, Supabase, HubSpot, Clerk, SMTP, Fulfillment service

---

### 3. State-Specific Formation Processor
**Trigger**: New entity record created with status "pending_formation"

**Steps**:
1. Fetch entity data (name, type, state, owners, address, etc.)
2. Fetch state-specific requirements from `state_requirements` table
3. AI generates all formation documents:
   - Articles of Organization/Incorporation
   - Bylaws
   - Operating Agreement (if LLC)
   - Banking Resolution
   - Meeting Minutes
   - Beneficial Ownership Certificates
4. Store generated documents in Supabase Storage
5. Create document records in `documents` table
6. Determine state filing method (fax vs email preference)
7. **If FAX**: Use HumbleFax API to send documents to Secretary of State
8. **If EMAIL**: Use SMTP to email documents with PDF attachments
9. Store submission confirmation (fax confirmation or email sent timestamp)
10. Update entity status to "filed_with_state"
11. Create admin alert to track filing status
12. Poll for approval (manual admin check or automated if state provides API)
13. Once approved:
    - Update entity status to "active"
    - Trigger EIN acquisition workflow
    - Trigger DUNS number workflow
    - Email client with approval notice and document links
14. Print and mail welcome package with leather binder

**Integrations**: Supabase, OpenRouter (Claude), HumbleFax API, SMTP, IRS API (if available), D&B API

---

### 4. EIN & DUNS Number Acquisition
**Trigger**: Entity status changed to "active"

**Steps**:
1. Fetch entity details (name, address, owner info)
2. **EIN Application**:
   - Use IRS API or automated form submission to SS-4
   - Retry logic if initial submission fails
   - Store EIN in entity record once received
3. **DUNS Number Application**:
   - Submit business information to D&B via API
   - Monitor for DUNS assignment (can take 24-48 hours)
   - Store DUNS in entity record
4. Update entity record with EIN and DUNS
5. Email client with confirmation
6. Create admin notification if either process fails

**Integrations**: IRS (automated or manual), D&B API, Supabase

---

### 5. Mail Processing & Scanning Workflow
**Trigger**: Physical mail arrives at registered agent address

**Steps**:
1. Admin scans mail (or outsourced mail scanning service)
2. Upload scan image to Supabase Storage
3. AI analyzes mail image:
   - Classify urgency (urgent, important, routine) based on sender, keywords, visual cues
   - Extract sender information
   - Determine mail type (bill, legal notice, marketing, etc.)
4. Create mail item record in `mail_items` table with:
   - Entity ID
   - Scan URL
   - Urgency
   - Status: "pending"
5. Send notification to user (email + dashboard notification)
6. User chooses action via dashboard:
   - **Shred**: Mark status as "shredded", schedule physical shredding
   - **Bundle**: Add to current bundle, will ship on user's schedule (weekly, bi-weekly, monthly)
   - **Forward Now**: Mark as "forwarding", ship immediately to user address
7. If user has auto-actions enabled:
   - Routine mail → auto-shred
   - Important mail → auto-bundle
   - Urgent mail → forward immediately
8. For bundles:
   - When bundle shipment date arrives, create shipping label
   - Send bundle with tracking number
   - Email user with tracking info
9. Update mail item status accordingly

**Integrations**: Supabase Storage, OpenRouter (Claude for AI classification), Shipping API (USPS, FedEx, UPS)

---

### 6. D&B Credit Monitoring & Reporting
**Trigger**: Cron schedule (weekly)

**Steps**:
1. Fetch all entities with Perfect Paydex tier
2. For each entity:
   - Query D&B API for current Paydex score
   - Query Experian Business API for score
   - Query Equifax Business API for score
3. Compare with previous scores from `credit_scores` table
4. If score changed:
   - Insert new score record
   - Create notification for user
   - Email user with score update and insights
5. If entity has Aurum tradelines (revolving line + installment loan):
   - Post monthly payment activity to D&B, Experian, Equifax
   - Ensure payment dates and amounts are optimized for maximum score boost
6. Track tradeline reporting success/failures
7. Create admin alert if any reporting fails

**Integrations**: D&B API, Experian Business API, Equifax Business API, Supabase

---

### 7. Personal Credit Monitoring (if Perfect Paydex)
**Trigger**: Cron schedule (weekly)

**Steps**:
1. Fetch all users with Perfect Paydex tier
2. For each user:
   - Query Experian personal credit via API (or Nav)
   - Query TransUnion
   - Query Equifax
3. Store scores in `credit_scores` table
4. If score changed, notify user
5. Provide insights on factors affecting score

**Integrations**: Experian Consumer API, TransUnion, Equifax, or aggregate service like Nav or Credit IQ

---

### 8. Market Me - Social Media Content Drip Campaign
**Trigger**: Entity created with Market Me tier

**Steps**:
1. Gather entity information (name, industry, services, location)
2. AI generates 90 days of content:
   - 3x Facebook posts per week
   - 3x Instagram posts per week
   - 2x LinkedIn posts per week
   - 2x Twitter posts per week
   - All posts tailored to entity's industry and brand voice
3. Store content in `campaigns` table with scheduled dates
4. For next 90 days:
   - On scheduled date, post content to respective platform via API
   - Store post ID and engagement metrics
5. Update campaign dashboard with live stats
6. At end of 90 days:
   - Notify user that managed services are ending
   - Offer option to continue for custom pricing
7. If user opts to continue:
   - Generate another 30/60/90 days of content
   - Continue posting
8. If user declines:
   - Provide final report and access to all platform accounts

**Integrations**: OpenRouter (Claude for content generation), Facebook Graph API, Instagram Graph API, LinkedIn API, Twitter API, Supabase

---

### 9. Market Me - Directory Listings Setup
**Trigger**: Entity created with Market Me tier

**Steps**:
1. Gather entity information
2. Create listings on:
   - Google Business Profile (with Google Maps API)
   - Apple Maps (via MapKit or manual process)
   - 411.com
   - Chamber of Commerce (if applicable)
   - Other relevant directories based on industry
3. Optimize each listing with:
   - Business name, address, phone
   - Website URL
   - Business hours
   - Photos (AI-generated or stock)
   - Description (AI-generated)
4. Verify listings where verification is required
5. Store listing URLs in entity record
6. Email client with links to all listings

**Integrations**: Google Maps API, Apple MapKit, 411 API, Chamber APIs, Supabase

---

### 10. Market Me - Website Creation
**Trigger**: Entity created with Market Me tier

**Steps**:
1. Purchase domain for client (or use their existing domain)
2. AI generates website content:
   - Homepage with hero, services, about, contact
   - Services page
   - About page
   - Contact page with embedded form
3. Deploy website to Hostinger VPS
4. Set up business email (name@domain.com) via cPanel or email service
5. Configure DNS records
6. Email client with:
   - Website URL
   - Login to website editor (if providing CMS access)
   - Business email credentials
7. Store website URL and credentials in entity record

**Integrations**: Domain registrar API, Hostinger API, OpenRouter (Claude for content), Email service

---

### 11. Perfect Paydex - Credit Account Applications
**Trigger**: Entity created with Perfect Paydex tier

**Steps**:
1. Wait for entity to have EIN and DUNS (from workflow #4)
2. Apply for Net-30 accounts:
   - Quill (office supplies) - automated form submission
   - Grainger (industrial supplies) - automated form submission
3. Apply for Net-60 accounts:
   - CEO Creative (printing services)
   - HD Supply (construction supplies)
4. Apply for gas cards:
   - WEX Fleet Card
   - AtoB Gas Card
5. Create Aurum tradelines:
   - Revolving line of credit: $150K limit
   - Installment loan: $150K
   - Backdate accounts by 6-12 months for longevity
6. Store all account info in `credit_accounts` table
7. Set up monthly payment schedule:
   - Make small purchases on Net-30/Net-60 accounts
   - Pay in full before due date
   - Report payments to D&B, Experian, Equifax
8. Email client with account details and payment instructions

**Integrations**: Quill API, Grainger API, CEO Creative, HD Supply, WEX, AtoB, D&B reporting API, Supabase

---

### 12. Perfect Paydex - Business Bank Account Setup
**Trigger**: Entity created with Perfect Paydex tier

**Steps**:
1. Determine best bank for entity type and industry:
   - National bank (Chase, Bank of America, Wells Fargo)
   - Credit union
2. Gather required documents:
   - EIN confirmation letter
   - Articles of Organization/Incorporation
   - Operating Agreement / Bylaws
   - Beneficial ownership info
3. Submit bank application (automated if bank has API, otherwise manual)
4. Track application status
5. Once approved:
   - Store bank account info in entity record (do NOT store account numbers, only bank name and status)
   - Email client with bank setup instructions
6. Open 2 accounts if possible (checking + savings for better credit mix)

**Integrations**: Bank APIs (if available), Supabase

---

## 🗄️ Database Schema (Supabase)

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  tier TEXT DEFAULT 'base', -- base, market_me, perfect_paydex, business_360
  stripe_customer_id TEXT,
  hubspot_contact_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Entities Table
```sql
CREATE TABLE entities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- llc_single, llc_multi, s_corp, c_corp, corporation, partnership, sole_proprietor, unincorporated, nonprofit
  state TEXT NOT NULL,
  ein TEXT,
  duns TEXT,
  formation_date DATE,
  renewal_date DATE,
  status TEXT DEFAULT 'pending', -- pending, pending_formation, filed_with_state, active, suspended
  business_address JSONB,
  phone TEXT, -- if user opted for phone line
  has_phone_line BOOLEAN DEFAULT FALSE,
  domain TEXT, -- if Market Me tier
  webmail TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Leads Table
```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  entity_type TEXT,
  state TEXT,
  message TEXT,
  status TEXT DEFAULT 'new_inquiry', -- new_inquiry, responded, contract_sent, paid, in_progress, complete
  source TEXT DEFAULT 'website_contact',
  contract_id TEXT,
  payment_link TEXT,
  responded_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,
  hubspot_contact_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Documents Table
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category TEXT NOT NULL, -- formation, operating_agreement, bylaws, banking_resolution, meeting_minutes, tax, contracts, invoices, compliance, beneficial_ownership, amendments, annual_reports, correspondence, misc
  name TEXT NOT NULL,
  file_type TEXT NOT NULL, -- pdf, docx, etc.
  file_url TEXT, -- Supabase Storage URL
  file_size INTEGER,
  generated_by_ai BOOLEAN DEFAULT FALSE,
  invoice_number TEXT, -- for invoices
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Mail Items Table
```sql
CREATE TABLE mail_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  scan_url TEXT NOT NULL, -- Supabase Storage URL
  sender TEXT,
  urgency TEXT DEFAULT 'routine', -- urgent, important, routine
  mail_type TEXT, -- bill, legal_notice, marketing, etc.
  status TEXT DEFAULT 'pending', -- pending, shredded, bundled, forwarded, delivered
  action TEXT, -- user-selected action: shred, bundle, forward
  processed_at TIMESTAMPTZ,
  bundle_id UUID, -- if bundled
  tracking_number TEXT, -- if forwarded or bundled
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Mail Bundles Table
```sql
CREATE TABLE mail_bundles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  shipment_date DATE,
  tracking_number TEXT,
  status TEXT DEFAULT 'pending', -- pending, shipped, delivered
  forwarding_address JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Campaigns Table (Market Me)
```sql
CREATE TABLE campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- social_media, email, ad
  platform TEXT, -- facebook, instagram, linkedin, twitter, google_ads, etc.
  content JSONB, -- post text, image URLs, links
  scheduled_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  post_id TEXT, -- platform post ID
  metrics JSONB, -- likes, shares, comments, impressions
  status TEXT DEFAULT 'draft', -- draft, scheduled, published
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Marketing Listings Table (Market Me)
```sql
CREATE TABLE marketing_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  platform TEXT NOT NULL, -- google_business, apple_maps, 411, chamber_of_commerce, etc.
  listing_url TEXT,
  status TEXT DEFAULT 'pending', -- pending, created, verified, failed
  verification_method TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Credit Scores Table (Perfect Paydex)
```sql
CREATE TABLE credit_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE, -- for personal credit
  score_type TEXT NOT NULL, -- paydex, experian_business, equifax_business, experian_personal, transunion_personal, equifax_personal
  score INTEGER,
  score_date DATE,
  factors JSONB, -- factors affecting score
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Credit Accounts Table (Perfect Paydex)
```sql
CREATE TABLE credit_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_id UUID REFERENCES entities(id) ON DELETE CASCADE,
  vendor TEXT NOT NULL, -- quill, grainger, ceo_creative, hd_supply, wex, atob, aurum_revolving, aurum_installment
  account_type TEXT NOT NULL, -- net_30, net_60, gas_card, revolving, installment
  credit_limit DECIMAL,
  account_number_last_4 TEXT, -- only store last 4 digits for security
  status TEXT DEFAULT 'pending', -- pending, active, closed
  opened_date DATE,
  backdated_to DATE, -- for Aurum tradelines
  payment_history JSONB, -- array of {date, amount, status}
  reported_to JSONB, -- which bureaus: {dnb, experian, equifax}
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Admin Alerts Table
```sql
CREATE TABLE admin_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alert_type TEXT NOT NULL, -- new_lead, filing_failed, credit_issue, mail_action_needed, etc.
  user_id UUID REFERENCES users(id),
  entity_id UUID REFERENCES entities(id),
  severity TEXT DEFAULT 'low', -- low, medium, high
  message TEXT,
  resolved BOOLEAN DEFAULT FALSE,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### State Requirements Table (reference data)
```sql
CREATE TABLE state_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  state_code TEXT NOT NULL, -- AZ, CA, NY, etc.
  entity_type TEXT NOT NULL, -- llc_single, s_corp, etc.
  filing_fee DECIMAL NOT NULL,
  processing_time TEXT, -- "24-48 hours", "5-7 business days"
  filing_method TEXT, -- fax, email, online
  sos_fax TEXT, -- Secretary of State fax number
  sos_email TEXT, -- Secretary of State email
  sos_website TEXT,
  required_documents JSONB, -- array of required document types
  renewal_requirements JSONB,
  tax_info JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(state_code, entity_type)
);
```

### Workflow Jobs Table (N8N tracking)
```sql
CREATE TABLE workflow_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_name TEXT NOT NULL,
  entity_id UUID REFERENCES entities(id),
  user_id UUID REFERENCES users(id),
  status TEXT DEFAULT 'pending', -- pending, running, completed, failed
  input_data JSONB,
  output_data JSONB,
  error_message TEXT,
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🔐 Environment Variables

Create a `.env.local` file in project root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
CLERK_WEBHOOK_SECRET=whsec_xxx

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# OpenRouter AI
OPENROUTER_API_KEY=sk-or-v1-xxx

# Deepseek (for Retell voice agent)
DEEPSEEK_API_KEY=sk-xxx

# Retell.ai (voice agent)
RETELL_API_KEY=key_xxx
RETELL_AGENT_ID=agent_xxx

# HumbleFax API
HUMBLEFAX_API_KEY=hf_xxx

# D&B (Dun & Bradstreet)
DNB_API_KEY=dnb_xxx
DNB_ACCESS_TOKEN=bearer_xxx

# HubSpot CRM
HUBSPOT_API_KEY=pat-na1-xxx

# Google APIs
GOOGLE_MAPS_API_KEY=AIza_xxx

# N8N
N8N_BASE_URL=https://n8n.yourdomain.com
N8N_API_KEY=n8n_xxx
N8N_WEBHOOK_SECRET=webhook_xxx

# Business Info
BUSINESS_PHONE_NUMBER=+16025551234
MAIL_SCANNER_WEBHOOK_URL=https://yourdomain.com/api/webhooks/mail

# Email (for sending emails)
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASSWORD=your-smtp-password
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- Clerk account
- Stripe account
- OpenRouter account
- HumbleFax account
- D&B API access
- HubSpot account
- Hostinger VPS with Docker and N8N

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/brezzy717/aurum-advisement.git
   cd aurum-advisement
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your actual keys
   ```

4. **Set up Supabase:**
   - Create a new project at supabase.com
   - Copy the project URL and anon key to `.env.local`
   - Run the schema:
     ```bash
     npx supabase db push --file supabase/schema.sql
     ```
   - Generate TypeScript types:
     ```bash
     npm run db:generate
     ```

5. **Set up Clerk:**
   - Create application at clerk.com
   - Copy publishable and secret keys to `.env.local`
   - Configure webhook endpoint: `https://yourdomain.com/api/webhooks/clerk`

6. **Set up Stripe:**
   - Create account at stripe.com
   - Copy API keys to `.env.local`
   - Create products for each tier (Base, Market Me, Perfect Paydex, Business 360)
   - Configure webhook endpoint: `https://yourdomain.com/api/webhooks/stripe`

7. **Set up N8N on Hostinger VPS:**
   - SSH into your VPS
   - Install Docker and N8N:
     ```bash
     docker run -d \
       --name n8n \
       -p 5678:5678 \
       -v n8n_data:/home/node/.n8n \
       -e N8N_BASIC_AUTH_ACTIVE=true \
       -e N8N_BASIC_AUTH_USER=admin \
       -e N8N_BASIC_AUTH_PASSWORD=your-password \
       n8nio/n8n
     ```
   - Access N8N at `http://your-vps-ip:5678`
   - Import workflows from `n8n-workflows/` directory

8. **Configure N8N workflows:**
   - Add credentials for Supabase, HubSpot, OpenRouter, Stripe, HumbleFax, etc.
   - Set webhook URLs in Next.js app to N8N endpoints
   - Test each workflow

9. **Populate state requirements:**
   - Manually populate `state_requirements` table with data for all 50 states and entity types
   - Or create script to scrape Secretary of State websites

10. **Run development server:**
    ```bash
    npm run dev
    ```
    Open http://localhost:3000

11. **Deploy to production:**
    - Push to GitHub
    - Connect Vercel (or Hostinger) to your repo
    - Configure environment variables in production
    - Deploy

---

## 📝 Development Workflow

### Adding a New Feature
1. Create feature branch: `git checkout -b feature/your-feature-name`
2. Build the feature in `app/`, `components/`, and `lib/`
3. Test locally
4. Create or update N8N workflow if needed
5. Update database schema if needed (create migration)
6. Commit and push
7. Create pull request
8. Deploy to production after review

### Creating N8N Workflows
1. Build workflow in N8N UI on VPS
2. Test thoroughly
3. Export workflow JSON
4. Save to `n8n-workflows/` directory
5. Document in this README
6. Commit to repo

### Database Migrations
```bash
# Create new migration
npx supabase migration new your_migration_name

# Edit the migration file in supabase/migrations/

# Apply migration
npx supabase db push

# Generate TypeScript types
npm run db:generate
```

---

## 🎯 Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [x] Project structure
- [ ] Marketing website (all pages)
- [ ] User authentication (Clerk)
- [ ] Database schema (Supabase)
- [ ] Base dashboard layout
- [ ] N8N setup on VPS

### Phase 2: Core Features (Weeks 3-4)
- [ ] Lead capture workflow
- [ ] Payment processing (Stripe)
- [ ] Entity formation workflow with state filing
- [ ] Document vault with AI generation
- [ ] MY GPT widget with voice mode and tool calling
- [ ] Virtual mail center

### Phase 3: Service Tiers (Weeks 5-6)
- [ ] Market Me dashboard and workflows
- [ ] Social media automation
- [ ] Website generation
- [ ] Directory listings automation
- [ ] Perfect Paydex credit monitoring
- [ ] Credit account applications
- [ ] Tradeline reporting

### Phase 4: Admin & Polish (Weeks 7-8)
- [ ] Full admin dashboard
- [ ] HubSpot integration
- [ ] Analytics and reporting
- [ ] User management
- [ ] Education center content
- [ ] Mobile responsiveness
- [ ] Performance optimization

### Phase 5: Launch (Week 9)
- [ ] Final testing
- [ ] Load testing
- [ ] Security audit
- [ ] Legal compliance check
- [ ] Launch marketing campaign
- [ ] Monitor and iterate

---

## 🐛 Known Issues / TODOs

- [ ] State requirements table needs to be populated with all 50 states
- [ ] Some Secretary of State offices don't accept fax - need email-only fallback
- [ ] Personal credit APIs (Experian, TransUnion, Equifax) may require consumer consent
- [ ] Phone line add-on needs VoIP provider integration (Twilio, Vonage, or similar)
- [ ] Apple Maps listing creation is semi-manual, no full API
- [ ] Bank account applications are mostly manual, limited API availability
- [ ] Need to determine best shipping provider for mail bundles (USPS, FedEx, UPS)
- [ ] MY GPT widget needs rate limiting to prevent abuse

---

## 🤝 Contributing

This is a solo project for now, but if you're interested in contributing:
1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

Proprietary - All Rights Reserved

---

## 📞 Support

For questions or issues:
- Email: support@aurumadvisement.com
- Phone: 602-853-5350

---

**Built with 💎 by Aurum Advisement**

*Where Business Formation Meets Domination*
