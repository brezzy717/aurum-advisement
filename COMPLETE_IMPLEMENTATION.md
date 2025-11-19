# 🚀 AURUM ADVISEMENT - COMPLETE BUILD IMPLEMENTATION

This document contains the complete implementation specs for building the Aurum Advisement platform.

---

## 💰 PRICING STRUCTURE (CORRECT)

- **Base Service (Entity Formation + 1 Year RA)**: $297
- **Registered Agent Renewal**: $99/year  
- **Market Me Add-On**: $697 (complete 90-day marketing automation)
- **Perfect Paydex Add-On**: $997 (business & personal credit building)
- **Business 360 Complete Package**: $1,647 (Base + Market Me + Perfect Paydex)
- **Optional Phone/Fax Line**: $10/month (NOT mandatory - users can add if wanted, can fold into annual pricing)

**IMPORTANT**: Phone/fax is OPTIONAL. Most users will use their own phone (T-Mobile $10/month second line is easier). Only provision VoIP numbers for users who actually pay for it.

---

## 📋 COMPLETE FEATURE CHECKLIST

### ✅ Marketing Website (Public)
- [ ] Homepage with hero, pricing carousel, features, how it works, testimonials
- [ ] Pricing page with detailed breakdowns for each tier
- [ ] Entity Types overview page
- [ ] Individual entity type pages (9 types):
  - [ ] Single-Member LLC
  - [ ] Multi-Member LLC
  - [ ] S Corporation
  - [ ] C Corporation
  - [ ] General Corporation
  - [ ] Partnership
  - [ ] Sole Proprietorship
  - [ ] Unincorporated Association
  - [ ] Nonprofit
- [ ] State + Entity dynamic pages (`/entity-types/[state]/[entity-type]`)
- [ ] About Us page
- [ ] Contact / Get Started page with form
- [ ] Marketing website chatbot (answers questions about services)

### ✅ User Dashboard (Authenticated)
- [ ] Dashboard home with grid layout (from sketches)
- [ ] 30-day calendar with compliance tracking
- [ ] Action items / to-do list
- [ ] **MY GPT floating widget** (voice mode, tool calling, minimize/expand/full-screen)
- [ ] My Entities (multi-entity management)
- [ ] Document Vault with AI generation (14 categories)
- [ ] New Filing (entity formation wizard)
- [ ] Mail Center (virtual mail with scan/bundle/shred/forward)
- [ ] Market Me Dashboard (campaign management, content editing, unified view)
- [ ] Credit Builder Dashboard (business + personal credit scores, tradelines, payment history)
- [ ] Phone & Fax Central (if user opts in for $10/month - dial pad, call logs)
- [ ] Domain & Web Editor (for Market Me tier)
- [ ] WebMail client (for Market Me tier)
- [ ] Add Services / Upgrades page
- [ ] Education Center (training modules, videos, Start-Up 101 course)
- [ ] Settings (account management, notifications, billing)

### ✅ Admin Dashboard (Admin Role Only)
- [ ] Overview with system metrics
- [ ] Lead Pipeline (synced with HubSpot)
- [ ] Entity Formation Queue (status tracking)
- [ ] Document Filing Status (state submissions)
- [ ] Credit Account Setup Tracking
- [ ] Mail Processing Queue
- [ ] Campaign Management
- [ ] **User Management (create/delete accounts)**
- [ ] Revenue & Analytics
- [ ] System Settings

### ✅ AI Instances
- [ ] Marketing website chatbot (knowledge base on services)
- [ ] MY GPT (user dashboard assistant with voice, tool calling, memory)
- [ ] Retell voice agent (admin side for incoming customer service calls)

### ✅ N8N Automation Workflows
- [ ] Lead Capture & AI Response
- [ ] Contract & Payment Processing
- [ ] State-Specific Entity Formation with Fax/Email Filing
- [ ] EIN & DUNS Number Acquisition
- [ ] Mail Processing & Scanning
- [ ] D&B Credit Monitoring
- [ ] Personal Credit Monitoring
- [ ] Market Me - Social Media Content Drip Campaign
- [ ] Market Me - Directory Listings Setup
- [ ] Market Me - Website Creation
- [ ] Perfect Paydex - Credit Account Applications
- [ ] Perfect Paydex - Business Bank Account Setup

---

## 🎨 DESIGN SYSTEM

### Brand Colors
```css
--aurum-navy: #070C6D;
--aurum-cyan: #81D8D0;
--aurum-gold: #FFD700;
```

### Design Style
- Dark glassmorphic theme
- Navy blue primary with cyan accents
- Minimal but professional
- Desktop-first (mobile responsive)

### Tailwind Config
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'aurum-navy': '#070C6D',
        'aurum-cyan': '#81D8D0',
        'aurum-gold': '#FFD700',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
    },
  },
};
```

---

## 🗄️ DATABASE SCHEMA

See `DATABASE_SCHEMA.sql` for the complete schema with all tables, indexes, RLS policies, and triggers.

**Key Tables:**
- `users` - User accounts (synced with Clerk)
- `subscriptions` - Stripe subscriptions
- `payments` - Payment history
- `leads` - Website inquiries (synced to HubSpot)
- `entities` - Formed entities (LLCs, S-Corps, etc.)
- `documents` - Document vault
- `mail_items` - Virtual mail scanning
- `mail_bundles` - Shipments
- `campaigns` - Marketing automation
- `marketing_listings` - Directory listings
- `credit_scores` - Business + personal credit
- `credit_accounts` - Net-30, Net-60, gas cards, Aurum tradelines
- `admin_alerts` - Human oversight
- `workflow_jobs` - N8N execution tracking
- `state_requirements` - Reference data for all 50 states

---

## 🔄 N8N WORKFLOWS

All workflows are in `/n8n-workflows/` folder as importable JSON files.

### Workflow 1: Lead Capture & AI Response
**Trigger**: Website contact form submission

**Steps**:
1. Webhook receives form data
2. Create lead in Supabase `leads` table
3. Sync to HubSpot CRM
4. AI analyzes inquiry intent
5. Fetch state requirements from Supabase
6. AI generates personalized response email
7. Create Stripe payment link
8. Send email with contract and payment link
9. Update lead status
10. Create admin alert

**Integrations**: Supabase, HubSpot, OpenRouter (Claude), Stripe, SMTP

---

### Workflow 2: Payment Processing & Entity Creation
**Trigger**: Stripe payment completed webhook

**Steps**:
1. Validate payment
2. Update lead to "Paid"
3. Create entity record in Supabase
4. Trigger document generation workflow
5. Send confirmation email with dashboard login
6. Create admin task
7. Add user to Clerk
8. Schedule welcome package shipment

**Integrations**: Stripe, Supabase, HubSpot, Clerk, SMTP

---

### Workflow 3: Entity Formation & State Filing
**Trigger**: Entity status = "pending_formation"

**Steps**:
1. Fetch entity data
2. Fetch state requirements
3. AI generates all formation documents
4. Store documents in Supabase Storage
5. Determine filing method (fax or email)
6. **If FAX**: Use HumbleFax API
7. **If EMAIL**: Use SMTP
8. Store confirmation
9. Update entity status to "filed_with_state"
10. Create admin alert to track
11. Once approved: trigger EIN/DUNS workflows
12. Email client with approval + documents
13. Ship welcome package (leather binder)

**Integrations**: Supabase, OpenRouter (Claude), HumbleFax, SMTP

---

### Workflow 4: EIN & DUNS Acquisition
**Trigger**: Entity status = "active"

**Steps**:
1. Apply for EIN with IRS (automated form submission)
2. Apply for DUNS with D&B via API
3. Store EIN and DUNS in entity record
4. Email client confirmation

**Integrations**: IRS, D&B API, Supabase

---

### Workflow 5: Mail Processing
**Trigger**: Physical mail arrives (daily)

**Steps**:
1. Admin scans mail
2. Upload to Supabase Storage
3. AI classifies urgency (urgent/important/routine)
4. Create mail item record
5. Notify user (email + dashboard)
6. User chooses action (shred/bundle/forward)
7. Process based on action
8. Update status

**Integrations**: Supabase Storage, OpenRouter (Claude), Shipping API

---

### Workflow 6: Credit Monitoring (Weekly Cron)
**Trigger**: Cron schedule (weekly)

**Steps**:
1. Fetch all Perfect Paydex entities
2. Query D&B for Paydex score
3. Query Experian Business
4. Query Equifax Business
5. Compare with historical scores
6. If changed: notify user
7. Post Aurum tradeline payments to bureaus

**Integrations**: D&B API, Experian, Equifax, Supabase

---

### Workflow 7: Personal Credit Monitoring (Weekly Cron)
**Trigger**: Cron schedule (weekly)

**Steps**:
1. Fetch all Perfect Paydex users
2. Query personal credit APIs
3. Store scores
4. Notify if changed

**Integrations**: Experian Consumer, TransUnion, Equifax, Supabase

---

### Workflow 8: Social Media Content Drip
**Trigger**: Entity created with Market Me tier

**Steps**:
1. Gather entity info
2. AI generates 90 days of content
3. Store in `campaigns` table
4. For 90 days: post to platforms on schedule
5. Track metrics
6. At end: offer extension

**Integrations**: OpenRouter (Claude), Facebook API, Instagram API, LinkedIn API, Twitter API, Supabase

---

### Workflow 9: Directory Listings
**Trigger**: Entity created with Market Me tier

**Steps**:
1. Create Google Business Profile
2. Create Apple Maps listing
3. Create 411.com listing
4. Create Chamber of Commerce listing
5. Verify listings
6. Store URLs

**Integrations**: Google Maps API, Apple MapKit, 411 API, Supabase

---

### Workflow 10: Website Creation
**Trigger**: Entity created with Market Me tier

**Steps**:
1. Purchase/use domain
2. AI generates website content
3. Deploy to Hostinger VPS
4. Set up business email
5. Configure DNS
6. Email client with credentials

**Integrations**: Domain API, Hostinger, OpenRouter (Claude), Email service

---

### Workflow 11: Credit Account Applications
**Trigger**: Entity created with Perfect Paydex tier

**Steps**:
1. Wait for EIN + DUNS
2. Apply for Net-30 accounts (Quill, Grainger)
3. Apply for Net-60 accounts (CEO Creative, HD Supply)
4. Apply for gas cards (WEX, AtoB)
5. Create Aurum tradelines (revolving + installment, backdated)
6. Store account info
7. Set up payment reporting schedule
8. Email client with details

**Integrations**: Vendor APIs, D&B reporting API, Supabase

---

### Workflow 12: Bank Account Setup
**Trigger**: Entity created with Perfect Paydex tier

**Steps**:
1. Determine best bank
2. Submit application
3. Track status
4. Store account info (NOT account numbers)
5. Email client with instructions

**Integrations**: Bank APIs (if available), Supabase

---

## 🔌 API INTEGRATIONS

### OpenRouter (AI Gateway)
- Primary model: Claude 3.5 Sonnet
- Fallbacks: GPT-4o, Gemini Pro 1.5
- Used for: document generation, content creation, intent analysis, classification

### Clerk (Authentication)
- User auth + role-based access
- Webhooks sync users to Supabase

### Stripe (Payments)
- One-time payments + subscriptions
- Webhooks trigger workflows

### HubSpot (CRM)
- Admin pipeline tracking
- Lead sync from Supabase

### HumbleFax (State Filing)
- Fax documents to Secretary of State offices
- **Admin use only** (not user-facing)

### D&B (Credit)
- Business credit monitoring
- Tradeline reporting

### Deepseek R1 + Retell.ai (Voice Agent)
- Admin customer service calls
- **NOT user-facing**

### USPS/FedEx/UPS (Shipping)
- Mail bundle shipments
- Tracking

---

## 🎯 MY GPT IMPLEMENTATION

### Capabilities
- **Voice mode** (speech-to-text + text-to-speech)
- **Tool calling**:
  - `generate_document(type, entity_id)`
  - `lookup_state_requirements(state, entity_type)`
  - `query_tax_law(question, entity_type)`
  - `check_credit_score(entity_id)`
  - `manage_mail(mail_id, action)`
  - `get_entity_info(entity_id)`
- **Internet access** via web search
- **Memory** across conversations
- **Context** from user's entities and account

### Implementation
```typescript
const tools = [
  {
    type: "function",
    function: {
      name: "generate_document",
      description: "Generate a legal document for an entity",
      parameters: {
        type: "object",
        properties: {
          document_type: { type: "string", enum: ["articles", "bylaws", ...] },
          entity_id: { type: "string" }
        }
      }
    }
  },
  // ... other tools
];

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "anthropic/claude-3.5-sonnet:beta",
    messages: conversationHistory,
    tools: tools,
    tool_choice: "auto"
  })
});
```

---

## 🚀 DEPLOYMENT CHECKLIST

### Infrastructure
- [ ] Supabase project created
- [ ] Database schema deployed
- [ ] Clerk app configured
- [ ] Stripe account set up (live mode)
- [ ] N8N running on Hostinger VPS
- [ ] Domain configured
- [ ] SSL certificate active

### Integrations
- [ ] OpenRouter API key
- [ ] HumbleFax API key
- [ ] D&B API access
- [ ] HubSpot API key
- [ ] Google Maps API key
- [ ] Deepseek + Retell configured

### Application
- [ ] All environment variables set
- [ ] Webhooks configured
- [ ] N8N workflows imported and tested
- [ ] State requirements table populated
- [ ] RLS policies tested

### Launch
- [ ] Load testing
- [ ] Security audit
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring
- [ ] Backup strategy confirmed

---

## 📝 DEVELOPMENT NOTES

### Phone/Fax Reality
- Users don't want to log into another app for calls
- Make it OPTIONAL $10/month add-on
- HumbleFax is for ADMIN use (state filing) only
- Most users will get T-Mobile $10/month second line (way better UX)

### Database Choices
- **Supabase**: Primary database + auth + storage
- **HubSpot**: Admin CRM backup + pipeline tracking
- Both serve different purposes - not redundant

### AI Model Selection
- Claude 3.5 Sonnet for quality (document generation, content)
- Fallbacks for reliability (GPT-4o, Gemini Pro)
- Deepseek R1 for voice agent (admin only)

### State Filing
- Email first, fax fallback (depending on state preference)
- Some states don't accept fax anymore
- Manual admin check for approval if state has no API

---

## 🎉 SUCCESS METRICS

- **Formation Time**: < 72 hours
- **Paydex Achievement**: 70-80 in 60 days
- **Credit Lines**: $150K+ on EIN only
- **Platform Uptime**: 99.9%
- **User Satisfaction**: 95%+

---

**Built with 💎 by Aurum Advisement**
*Where Business Formation Meets Domination*
