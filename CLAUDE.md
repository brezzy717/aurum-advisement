# 🤖 CLAUDE.md - AI Assistant Context

This document provides context for AI assistants (Claude Code, Cursor, ChatGPT, etc.) working on the Aurum Advisement project.

---

## 🎯 Project Purpose

**Aurum Advisement** is a comprehensive business formation and credit building platform that dominates the registered agent industry through superior technology and automation. Unlike traditional registered agent services that charge $300/year just to forward mail, Aurum provides:

- Complete entity formation with state filing automation
- Virtual registered agent services with physical addresses
- Full marketing automation (website, social media, directories)
- Business and personal credit building with tradeline reporting
- Virtual mail scanning and management
- AI-powered document generation and customer support

**The business model is built on 4 service tiers:**
1. **Base Service ($297)** - Entity formation + 1 year registered agent
2. **Market Me ($697)** - Complete 90-day marketing automation
3. **Perfect Paydex ($997)** - Business & personal credit building
4. **Business 360 ($1,647)** - Everything combined

**Key Insight:** The founder (Reshel) brings 15+ years of real estate experience and former COO expertise. This platform is designed to scale through automation, not manual labor. Every workflow must be optimized for minimal human intervention.

---

## 🏗️ Technical Architecture

### Stack Overview
- **Frontend**: Next.js 15 with TypeScript, Tailwind CSS, Radix UI
- **Database**: Supabase (PostgreSQL) for primary data
- **CRM**: HubSpot as backup and admin pipeline tracking
- **Authentication**: Clerk (user auth + role-based access)
- **Payments**: Stripe
- **Automation**: N8N on Hostinger VPS
- **AI**: OpenRouter with Claude 3.5 Sonnet (fallback to GPT-4o, Gemini Pro 1.5)
- **Voice Agent (Admin)**: Deepseek R1 + Retell.ai
- **Deployment**: Vercel (or Hostinger if preferred)

### Why These Choices?

**Next.js 15**: Latest features, excellent developer experience, Vercel deployment is seamless.

**Supabase over Neon**: Reshel has both but chose Supabase because it includes user authentication, storage, and real-time capabilities out of the box. Simpler to manage than separate services.

**Clerk over NextAuth**: Better UX, easier role-based access control, webhook support for syncing to Supabase.

**HubSpot + Supabase**: Dual system where Supabase is the source of truth for application data, HubSpot is for admin sales pipeline and backup. This separation prevents admin CRM clutter from affecting user-facing data.

**N8N on VPS (not cloud)**: More control, cheaper at scale, already integrated with Hostinger infrastructure. Reshel owns the VPS.

**OpenRouter with fallbacks**: Cost-effective, reliable uptime through automatic fallbacks. Claude 3.5 Sonnet is primary for quality, GPT-4o and Gemini Pro 1.5 are backups.

**No mandatory phone lines for users**: Reshel found this feature terrible from personal experience (had to log into another app, forward calls, etc.). Users can get a $10/month T-Mobile second line that's way better. Phone lines are OPTIONAL $10/month add-on, but not core offering. HumbleFax API is for ADMIN use (faxing to Secretary of State offices), not user-facing.

---

## 🎨 Design Philosophy

### Brand Colors
- **Navy Blue**: #070C6D (primary, authority, trust)
- **Cyan/Teal**: #81D8D0 (accent, modern, tech-forward)
- **Gold**: #FFD700 (premium, success)

### Design Style
- **Dark glassmorphic theme**: Modern, professional, stands out from competitors
- **Minimal but functional**: No unnecessary elements, every component serves a purpose
- **Desktop-first**: Most users will manage entities on desktop, mobile is secondary
- **Fast loading**: No heavy animations, optimized images, lazy loading

### UX Principles
1. **Clarity over cleverness**: Users should never be confused about what to do next
2. **One-click actions**: Minimize steps to complete tasks (upgrade tier, generate document, etc.)
3. **Intelligent defaults**: Pre-fill forms, suggest next steps based on context
4. **Proactive notifications**: Tell users what they need to do before they ask

---

## 📊 Database Design

### Key Tables and Relationships

**Users** (1) → **Entities** (many)
- One user can have multiple entities (LLCs, S-Corps, etc.)
- Each entity has its own mail, documents, credit scores

**Entities** (1) → **Documents** (many)
- Each entity has 14 document categories
- Documents can be AI-generated or user-uploaded

**Entities** (1) → **Mail Items** (many)
- Virtual mail scanning creates mail items
- Each mail item belongs to one entity

**Entities** (1) → **Campaigns** (many) *(if Market Me tier)*
- Social media posts, ads, content scheduled over 90 days
- Each campaign belongs to one entity

**Entities** (1) → **Credit Accounts** (many) *(if Perfect Paydex tier)*
- Net-30, Net-60, gas cards, Aurum tradelines
- Each account tracks payment history and reporting status

**Entities** (1) → **Credit Scores** (many) *(if Perfect Paydex tier)*
- Historical tracking of Paydex, business credit, personal credit
- New score record created weekly

### Important Schema Notes

**Never store sensitive data in plain text:**
- Credit card numbers → Use Stripe tokens only
- Bank account numbers → Store last 4 digits only, full number is NOT in database
- SSN/EIN → Hash if storing, prefer not storing at all

**Status fields are critical:**
- `entities.status`: pending → pending_formation → filed_with_state → active
- `leads.status`: new_inquiry → responded → contract_sent → paid → in_progress → complete
- `mail_items.status`: pending → shredded / bundled / forwarded / delivered

**JSONB columns for flexibility:**
- `entities.business_address`: Store full address object
- `campaigns.content`: Store post text, image URLs, etc.
- `credit_accounts.payment_history`: Array of payment records

**UUID primary keys everywhere:**
- Better for distributed systems
- No sequential ID leakage
- Easier to merge data if needed

---

## 🔄 N8N Workflow Architecture

### Workflow Principles

1. **Every workflow writes to Supabase AND HubSpot** (where applicable) for admin visibility
2. **Every workflow creates admin alerts** for failed operations
3. **AI is used for classification and generation**, not decision-making (human admin reviews)
4. **Idempotency**: Workflows should be safe to retry without duplicating data

### Critical Workflows

**Lead Capture → AI Response → Payment Link**
- Triggers on website contact form submission
- AI analyzes intent and generates personalized response
- Creates Stripe payment link with state filing fee
- Syncs to HubSpot for admin tracking

**Payment Received → Entity Formation → State Filing**
- Triggers on Stripe payment webhook
- AI generates all formation documents (Articles, Bylaws, etc.)
- Determines fax vs email based on state preference
- Uses HumbleFax API or SMTP to submit to Secretary of State
- Polls for approval (manual admin check or automated)
- Sends welcome package with leather binder

**Mail Scanning → AI Classification → User Notification**
- Admin scans physical mail daily
- AI classifies urgency (urgent, important, routine)
- Uploads to Supabase Storage
- User chooses: shred, bundle, forward immediately
- Auto-actions based on user preferences

**Weekly Credit Monitoring → Score Updates → User Notification**
- Cron job runs weekly
- Queries D&B, Experian, Equifax for current scores
- Compares with historical data
- Notifies user if score changed

**90-Day Marketing Drip Campaign → Social Media Posting**
- AI generates 90 days of content upfront
- Posts scheduled at optimal times
- Posted to platforms via APIs
- User can edit any post before it goes live

### Workflow Error Handling

**Always implement:**
- Try/catch blocks in code nodes
- Error notifications to admin via `admin_alerts` table
- Retry logic with exponential backoff
- Manual intervention option in admin dashboard

**Never:**
- Silently fail without logging
- Retry infinitely (max 3 retries)
- Send duplicate notifications to users

---

## 🤖 AI Integration Patterns

### Three AI Instances in the System

**1. Marketing Website Chatbot**
- **Purpose**: Answer prospect questions about services
- **Model**: Claude 3.5 Sonnet via OpenRouter
- **Knowledge Base**: All Aurum service offerings, pricing, entity types, state requirements
- **Prompt**: "You are an expert business formation consultant. Answer questions about Aurum's services..."
- **No tool calling**: Just Q&A
- **Placement**: Floating widget on marketing pages

**2. MY GPT (User Dashboard)**
- **Purpose**: User assistant with superpowers
- **Model**: Claude 3.5 Sonnet via OpenRouter
- **Capabilities**:
  - Voice mode (speech-to-text + text-to-speech)
  - Tool calling:
    - `generate_document(type, entity_id)`: Creates any document from vault
    - `lookup_state_requirements(state, entity_type)`: Fetches state-specific info
    - `query_tax_law(question, entity_type)`: Answers tax questions
    - `check_credit_score(entity_id)`: Gets latest scores
    - `manage_mail(mail_id, action)`: Shred, bundle, or forward
    - `get_entity_info(entity_id)`: Retrieves entity details
  - Internet access via web search
  - Memory across conversations (via embeddings or conversation history)
  - Context from user's entities and account
- **Prompt**: "You are MY GPT, a powerful AI assistant for Aurum users. You have access to their entities, documents, mail, and credit info..."
- **Placement**: Floating widget in user dashboard (minimize, expand, full-screen)

**3. Retell Voice Agent (Admin Side)**
- **Purpose**: Handle incoming customer service calls
- **Model**: Deepseek R1 (reasoning) + Retell.ai (voice infrastructure)
- **Capabilities**: Answer questions, create support tickets, escalate to human
- **NOT user-facing**: This is for admin to handle inbound calls

### AI Prompt Engineering Best Practices

**For Document Generation:**
```typescript
const prompt = `Generate a ${documentType} for ${entityName}, a ${entityType} in ${state}.

Entity Details:
- Name: ${entityName}
- Type: ${entityType}
- State: ${state}
- Formation Date: ${formationDate}
- Owners: ${JSON.stringify(owners)}

Requirements:
- Follow ${state} legal requirements for ${entityType}
- Use formal legal language
- Include all mandatory clauses
- Format as a professional legal document

Output the complete document in Markdown format.`;
```

**For Intent Analysis:**
```typescript
const prompt = `Analyze this customer inquiry and extract:
1. Entity type mentioned (LLC, S-Corp, etc.)
2. State mentioned
3. Intent (general_info, pricing, specific_question, ready_to_start)
4. Key concerns or questions

Inquiry: "${customerMessage}"
Entity Type Provided: "${providedEntityType}"
State Provided: "${providedState}"

Return JSON only with keys: entity_type, state, intent, concerns.`;
```

**For Content Generation (Market Me):**
```typescript
const prompt = `Generate ${numPosts} ${platform} posts for ${entityName}, a ${industry} business.

Business Info:
- Name: ${entityName}
- Industry: ${industry}
- Location: ${city}, ${state}
- Services: ${services}

Guidelines:
- Posts should be ${platform}-appropriate (length, tone, hashtags)
- Mix of educational, promotional, and engagement posts
- Include relevant hashtags
- Use professional but approachable tone
- Avoid generic content

Return JSON array: [{post_text, hashtags[], best_time_to_post, image_suggestion}]`;
```

### Tool Calling Implementation

**When implementing MY GPT, use function calling with OpenRouter:**

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
          document_type: {
            type: "string",
            enum: ["articles", "bylaws", "operating_agreement", "banking_resolution", "meeting_minutes"]
          },
          entity_id: {
            type: "string",
            description: "UUID of the entity"
          }
        },
        required: ["document_type", "entity_id"]
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

## 🔐 Security Considerations

### Authentication & Authorization

**Clerk roles:**
- `user`: Regular customers (default)
- `admin`: Aurum staff with full system access

**Row-level security (Supabase):**
- Users can only see their own entities, documents, mail, etc.
- Admins can see everything

**API route protection:**
```typescript
import { auth } from "@clerk/nextjs";

export async function GET(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  
  // Fetch user's data from Supabase
  const { data, error } = await supabase
    .from("entities")
    .select("*")
    .eq("clerk_id", userId);
  
  return Response.json(data);
}
```

**Admin-only routes:**
```typescript
import { auth } from "@clerk/nextjs";

export async function GET(req: Request) {
  const { userId, sessionClaims } = auth();
  
  if (sessionClaims?.metadata?.role !== "admin") {
    return new Response("Forbidden", { status: 403 });
  }
  
  // Admin-only logic
}
```

### Data Protection

**Never log sensitive data:**
- No credit card numbers in logs
- No passwords in logs
- No SSN/EIN in plain text logs

**Use environment variables for secrets:**
- All API keys in `.env.local` (never committed to git)
- Use Vercel environment variables in production

**Sanitize user input:**
- Always validate and sanitize form inputs
- Use Zod or similar for schema validation
- Prevent SQL injection (use Supabase parameterized queries)
- Prevent XSS (React escapes by default, but be careful with `dangerouslySetInnerHTML`)

---

## 📁 File Organization

### Component Structure

**`components/ui/`**: Shared UI primitives (buttons, inputs, modals, etc.)
- Radix UI components wrapped with Tailwind styles
- Example: `Button.tsx`, `Input.tsx`, `Modal.tsx`

**`components/marketing/`**: Marketing website components
- Hero sections, pricing cards, testimonials, etc.
- Example: `Hero.tsx`, `PricingCard.tsx`, `EntityTypeCard.tsx`

**`components/dashboard/`**: User dashboard components
- Entity cards, document lists, mail items, etc.
- Example: `EntityCard.tsx`, `DocumentVault.tsx`, `MailItem.tsx`

**`components/admin/`**: Admin dashboard components
- Lead pipeline, entity queue, user management, etc.
- Example: `LeadPipeline.tsx`, `EntityQueue.tsx`, `UserTable.tsx`

### Utility Functions

**`lib/utils/`**: Helper functions
- `formatDate(date)`: Format dates consistently
- `formatCurrency(amount)`: $1,234.56 format
- `classNames(...classes)`: Conditional class names (or use `clsx`)

**`lib/supabase/`**: Supabase client and queries
- `client.ts`: Supabase client initialization
- `queries.ts`: Reusable database queries
  - Example: `getEntitiesByUserId(userId)`
  - Example: `getDocumentsByEntityId(entityId)`

**`lib/integrations/`**: External API wrappers
- `openrouter.ts`: OpenRouter API calls
- `humblefax.ts`: HumbleFax faxing
- `stripe.ts`: Stripe payment helpers
- `hubspot.ts`: HubSpot CRM sync

### API Route Organization

**`app/api/webhooks/`**: Webhook handlers
- `n8n/route.ts`: N8N workflow callbacks
- `stripe/route.ts`: Stripe payment webhooks
- `clerk/route.ts`: Clerk user sync webhooks
- `hubspot/route.ts`: HubSpot CRM webhooks (if needed)

**`app/api/documents/`**: Document operations
- `generate/route.ts`: AI document generation

**`app/api/mail/`**: Mail operations
- `scan/route.ts`: Upload mail scans
- `action/route.ts`: User actions (shred, bundle, forward)

**`app/api/credit/`**: Credit monitoring
- `scores/route.ts`: Fetch latest scores
- `accounts/route.ts`: Manage credit accounts

---

## 🧪 Testing Strategy

### What to Test

**Critical paths (must test):**
- Lead capture → AI response → payment
- Payment → entity formation → state filing
- Document generation
- Mail scanning and classification
- Credit score monitoring

**Nice to have (test if time):**
- Marketing content generation
- Social media posting
- Directory listings

### How to Test

**Unit tests**: Use Jest for utility functions
```typescript
// lib/utils/formatCurrency.test.ts
import { formatCurrency } from "./formatCurrency";

test("formats currency correctly", () => {
  expect(formatCurrency(1234.56)).toBe("$1,234.56");
  expect(formatCurrency(0)).toBe("$0.00");
});
```

**Integration tests**: Use Playwright for user flows
```typescript
// tests/entity-formation.spec.ts
test("user can form an entity", async ({ page }) => {
  await page.goto("/get-started");
  await page.fill("#name", "Test Entity LLC");
  await page.selectOption("#entity-type", "llc_single");
  await page.selectOption("#state", "AZ");
  await page.click("button[type=submit]");
  
  // Should redirect to payment
  await expect(page).toHaveURL(/stripe.com/);
});
```

**Manual testing checklist**:
- [ ] Contact form triggers N8N workflow
- [ ] Payment creates entity in Supabase
- [ ] Documents are generated correctly
- [ ] Mail items show up in dashboard
- [ ] MY GPT responds to questions
- [ ] Admin can create/delete users

---

## 🚨 Common Gotchas

### 1. N8N Webhook URLs
**Problem**: N8N workflows have dynamic webhook URLs that change if you recreate the workflow.

**Solution**: Always use the same webhook path in N8N (e.g., `/webhook/lead-capture`), don't let N8N auto-generate. Update Next.js API routes if webhook URLs change.

### 2. Stripe Webhook Verification
**Problem**: Stripe webhooks fail if signature verification is wrong.

**Solution**: Always use raw body for signature verification:
```typescript
export const config = {
  api: {
    bodyParser: false, // Disable body parsing, need raw body
  },
};

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text(); // Raw body
  
  const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  // ...
}
```

### 3. Supabase Storage URLs
**Problem**: Supabase storage URLs are private by default.

**Solution**: Either make buckets public or generate signed URLs:
```typescript
const { data: url } = supabase.storage
  .from("documents")
  .createSignedUrl("path/to/file.pdf", 3600); // 1 hour expiry
```

### 4. OpenRouter Fallbacks
**Problem**: Primary model (Claude) might be down or rate-limited.

**Solution**: Always specify fallback models:
```json
{
  "model": "anthropic/claude-3.5-sonnet:beta",
  "route": "fallback",
  "fallback_models": [
    "openai/gpt-4o",
    "google/gemini-pro-1.5"
  ]
}
```

### 5. HumbleFax API Errors
**Problem**: Fax submission might fail (wrong number, busy signal, etc.).

**Solution**: Always check HumbleFax response status and create admin alert if failed. Have email fallback ready.

### 6. State Filing Delays
**Problem**: Some states take weeks to approve, not 24-72 hours.

**Solution**: Set expectations correctly in UI. Show estimated timeline per state. Allow admin to manually update status.

### 7. Credit Score APIs
**Problem**: Personal credit APIs require consumer consent and are heavily regulated.

**Solution**: Ensure user explicitly consents. Store consent timestamp. Consider using aggregator like Nav or Credit IQ instead of direct APIs.

### 8. Phone Line Add-On
**Problem**: VoIP providers charge per number, which adds up fast.

**Solution**: Make it OPTIONAL $10/month add-on, not mandatory. Most users will use their own phone. Only provision numbers for users who actually pay for it.

---

## 🎓 Learning Resources

### Tech Stack Documentation
- **Next.js 15**: https://nextjs.org/docs
- **Supabase**: https://supabase.com/docs
- **Clerk**: https://clerk.com/docs
- **Stripe**: https://stripe.com/docs
- **N8N**: https://docs.n8n.io
- **Tailwind CSS**: https://tailwindcss.com/docs
- **OpenRouter**: https://openrouter.ai/docs

### Business Context
- **D&B Paydex Score**: https://www.dnb.com/business-directory/guides/paydex-score.html
- **LLC Formation by State**: https://www.nolo.com/legal-encyclopedia/llc
- **Registered Agent Requirements**: https://www.nolo.com/legal-encyclopedia/what-is-a-registered-agent.html

---

## 🔧 Development Commands

### Next.js
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Supabase
```bash
npx supabase init                    # Initialize Supabase locally
npx supabase db push                 # Push schema to Supabase
npx supabase db pull                 # Pull schema from Supabase
npx supabase db reset                # Reset local database
npx supabase migration new my_migration  # Create new migration
npm run db:generate                  # Generate TypeScript types
```

### N8N (on VPS via SSH)
```bash
ssh root@your-vps-ip
docker ps                            # Check N8N container status
docker logs n8n                      # View N8N logs
docker restart n8n                   # Restart N8N
```

---

## 🎯 Key Business Rules

### Pricing Logic
- Base service is $297, includes 1 year registered agent
- Renewal is $99/year (not $149 - that was a typo in Opus's docs)
- Market Me is $697 add-on
- Perfect Paydex is $997 add-on
- Business 360 is $1,647 (base + both add-ons)
- Phone/fax is OPTIONAL $10/month, can be folded into annual pricing

### Entity Formation Timeline
- Most states: 24-72 hours
- Some states: 5-7 business days
- A few states: 2-4 weeks
- Always set expectations per state in UI

### Credit Building Timeline
- Net-30/Net-60 accounts: Apply immediately after EIN/DUNS received
- First purchase: Within 7 days of account opening
- First payment: 10 days after purchase (within Net-30 window)
- Aurum tradelines: Created and backdated 6-12 months
- Guaranteed 70-80 Paydex: Within 60 days of setup
- 24 months of payment reporting: Even if user doesn't renew, as long as they have RA services

### Market Me Timeline
- 90 days of automated content and posting
- User can edit any post before it goes live
- After 90 days: User can continue (custom pricing) or take over themselves
- All accounts remain user's property

### Mail Handling
- Daily scanning (admin scans or outsourced service)
- AI classifies urgency
- User chooses action: shred, bundle, forward immediately
- Bundles ship on user's schedule: weekly, bi-weekly, monthly
- Auto-actions based on preferences (routine mail → auto-shred)

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] All environment variables set in Vercel
- [ ] Supabase project is production-ready (not in paused mode)
- [ ] Database schema is up to date
- [ ] N8N workflows are tested and active on VPS
- [ ] Stripe is in live mode (not test mode)
- [ ] All webhook URLs point to production domain
- [ ] Clerk is configured for production domain
- [ ] OpenRouter API key is funded
- [ ] HumbleFax API key is active
- [ ] D&B API access is confirmed
- [ ] Domain DNS is pointed correctly
- [ ] SSL certificate is active
- [ ] State requirements table is populated
- [ ] Email sending is configured (SMTP)
- [ ] Marketing website content is finalized
- [ ] Legal pages are added (Terms, Privacy, Refund Policy)
- [ ] Error tracking is set up (Sentry or similar)
- [ ] Performance monitoring is set up
- [ ] Backup strategy is in place (Supabase auto-backups)
- [ ] Load testing is complete
- [ ] Security audit is done
- [ ] Launch checklist: https://github.com/thedaviddias/Front-End-Checklist

---

## 🤝 Working with AI Assistants

### How to Use This Document

**When starting a task:**
1. Read the relevant section of this document first
2. Check the README for technical setup
3. Review existing code in the codebase
4. Ask clarifying questions if something is unclear

**When stuck:**
1. Check "Common Gotchas" section
2. Review the N8N workflow if automation-related
3. Check Supabase logs for database errors
4. Check Vercel logs for API route errors
5. Ask for help with specific error messages

**When refactoring:**
1. Understand the "why" behind the current implementation
2. Don't change core business logic without confirming with Reshel
3. Test thoroughly before committing
4. Update this document if you learn something new

### Communication Style

**Reshel's preferences:**
- Be direct and efficient
- Don't sugarcoat or over-explain
- Ask questions upfront, then execute
- Show results, not just plans
- If something is wrong, say it clearly
- No corporate fluff or buzzwords

**What Reshel values:**
- Speed of execution
- Accuracy and attention to detail
- Proactive problem-solving
- Not wasting time on unnecessary features
- Building systems that scale without manual intervention

---

## 📝 Code Style Guide

### TypeScript
- Use `const` over `let` (immutability)
- Prefer functional components over class components
- Use async/await over promises
- Type everything (no `any` unless absolutely necessary)

### React Components
```typescript
// Good: Functional component with TypeScript
interface EntityCardProps {
  entity: Entity;
  onSelect: (id: string) => void;
}

export function EntityCard({ entity, onSelect }: EntityCardProps) {
  return (
    <div onClick={() => onSelect(entity.id)}>
      <h3>{entity.name}</h3>
      <p>{entity.type}</p>
    </div>
  );
}
```

### API Routes
```typescript
// Good: Typed request/response, error handling
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    if (!body.entity_id) {
      return NextResponse.json(
        { error: "Missing entity_id" },
        { status: 400 }
      );
    }
    
    // Process
    const result = await processEntity(body.entity_id);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### Database Queries
```typescript
// Good: Typed queries with error handling
import { supabase } from "@/lib/supabase/client";

export async function getEntitiesByUserId(userId: string): Promise<Entity[]> {
  const { data, error } = await supabase
    .from("entities")
    .select("*")
    .eq("user_id", userId);
  
  if (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch entities");
  }
  
  return data || [];
}
```

---

## 🎉 You're Ready!

You now have the full context to work on Aurum Advisement. Key things to remember:

1. **This is a comprehensive platform** - not just a registered agent service
2. **Automation is critical** - every workflow should minimize manual work
3. **User experience matters** - make it intuitive and fast
4. **Security is paramount** - protect user data always
5. **Reshel values speed and accuracy** - ask questions upfront, then execute fast

If you need clarification on anything, check the README first, then ask specific questions. Let's build this empire! 💎

---

**Last Updated**: November 18, 2025
**Version**: 1.0
**Maintainer**: Reshel (Aurum Advisement)
