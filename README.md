# 🔄 N8N Automation Workflows

This folder contains all N8N workflow JSON files that can be imported into your N8N instance.

---

## 📋 Workflow List

### ✅ Implemented Workflows

1. **01-lead-capture.json** - Lead Capture & AI Response Flow
   - Triggers: Website contact form submission
   - Creates lead in Supabase
   - Syncs to HubSpot CRM
   - AI analyzes inquiry and generates personalized response
   - Creates Stripe payment link
   - Sends email with response and payment link
   - Updates lead status
   - Creates admin alert

### 🚧 Workflows To Be Created

2. **02-payment-processing.json** - Payment Processing & Entity Creation
   - Triggers: Stripe payment completed webhook
   - Creates user account in Clerk
   - Creates entity record in Supabase
   - Sends welcome email with dashboard login
   - Triggers formation workflow

3. **03-entity-formation.json** - State-Specific Entity Formation
   - Triggers: New entity with pending_formation status
   - AI generates formation documents (Articles, Bylaws, etc.)
   - Stores documents in Supabase Storage
   - Files with Secretary of State (fax or email)
   - Tracks filing status
   - Triggers EIN/DUNS workflows upon approval

4. **04-ein-duns.json** - EIN & DUNS Number Acquisition
   - Triggers: Entity status changes to "active"
   - Applies for EIN with IRS
   - Applies for DUNS with D&B
   - Updates entity record with numbers
   - Emails client confirmation

5. **05-mail-processing.json** - Virtual Mail Processing
   - Triggers: Daily mail scanning
   - AI classifies urgency (urgent/important/routine)
   - Creates mail item in Supabase
   - Notifies user
   - Processes user actions (shred/bundle/forward)

6. **06-credit-monitoring.json** - Business Credit Monitoring
   - Triggers: Weekly cron job
   - Queries D&B, Experian Business, Equifax Business
   - Compares with historical scores
   - Notifies user of changes
   - Reports Aurum tradeline payments

7. **07-personal-credit.json** - Personal Credit Monitoring
   - Triggers: Weekly cron job
   - Queries personal credit bureaus
   - Updates scores in Supabase
   - Notifies user of changes

8. **08-social-media-drip.json** - Market Me Content Automation
   - Triggers: Entity created with Market Me tier
   - AI generates 90 days of social media content
   - Stores in campaigns table
   - Posts to platforms on schedule
   - Tracks engagement metrics

9. **09-directory-listings.json** - Directory Listings Setup
   - Triggers: Entity created with Market Me tier
   - Creates Google Business Profile
   - Creates Apple Maps listing
   - Creates 411.com listing
   - Creates Chamber of Commerce listing
   - Verifies all listings

10. **10-website-creation.json** - AI Website Generation
    - Triggers: Entity created with Market Me tier
    - Purchases/configures domain
    - AI generates website content
    - Deploys to Hostinger VPS
    - Sets up business email
    - Emails client with credentials

11. **11-credit-accounts.json** - Credit Account Applications
    - Triggers: Entity created with Perfect Paydex tier
    - Applies for Net-30 accounts (Quill, Grainger)
    - Applies for Net-60 accounts (CEO Creative, HD Supply)
    - Applies for gas cards (WEX, AtoB)
    - Creates Aurum tradelines (backdated)
    - Sets up payment reporting schedule

12. **12-bank-setup.json** - Business Bank Account Setup
    - Triggers: Entity created with Perfect Paydex tier
    - Determines best bank for entity type
    - Submits application
    - Tracks approval status
    - Emails client with instructions

---

## 🔧 How To Import Workflows

### Step 1: Access N8N
```bash
# SSH into your Hostinger VPS
ssh root@your-vps-ip

# Access N8N (should be running on port 5678)
# Open http://your-vps-ip:5678 in browser
```

### Step 2: Import Workflow
1. Click "+" in top right to create new workflow
2. Click the 3-dot menu (⋮) in top right
3. Select "Import from File"
4. Upload the JSON file
5. Click "Save" to save the workflow

### Step 3: Configure Credentials
Each workflow requires credentials to be configured:

**Supabase**:
- Name: Supabase Account
- URL: Your Supabase project URL
- Service Role Key: Your Supabase service role key

**HubSpot**:
- Name: HubSpot Account
- API Key: Your HubSpot API key

**OpenRouter**:
- Name: OpenRouter API
- Type: Header Auth
- Header Name: Authorization
- Header Value: Bearer YOUR_OPENROUTER_API_KEY
- Additional Header: HTTP-Referer: https://aurumadvisement.com

**Stripe**:
- Name: Stripe API
- Type: Header Auth
- Header Name: Authorization
- Header Value: Bearer YOUR_STRIPE_SECRET_KEY

**SMTP (Email)**:
- Name: SMTP Account
- Host: Your SMTP host
- Port: 587 (TLS) or 465 (SSL)
- Username: Your email
- Password: Your email password

**HumbleFax**:
- Name: HumbleFax API
- Type: Header Auth
- Header Name: X-API-Key
- Header Value: YOUR_HUMBLEFAX_API_KEY

### Step 4: Activate Workflow
1. Toggle the "Active" switch in top right
2. Test the webhook trigger by sending test data
3. Check execution logs for any errors

---

## 🔐 Environment Variables Needed

Make sure these are set in your N8N instance:

```bash
# Database
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-key

# Auth & Payments
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# AI
OPENROUTER_API_KEY=sk-or-v1-xxx

# Integrations
HUBSPOT_API_KEY=pat-na1-xxx
HUMBLEFAX_API_KEY=hf_xxx
DNB_API_KEY=dnb_xxx

# N8N Config
N8N_BASE_URL=https://n8n.yourdomain.com
```

---

## 🧪 Testing Workflows

### Test Lead Capture Workflow
```bash
curl -X POST https://n8n.yourdomain.com/webhook/lead-capture \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "602-555-0100",
    "entity_type": "llc_single",
    "state": "AZ",
    "message": "I want to form an LLC in Arizona"
  }'
```

### Test Payment Processing Workflow
```bash
# Stripe will send this automatically, but you can simulate:
curl -X POST https://n8n.yourdomain.com/webhook/payment-completed \
  -H "Content-Type: application/json" \
  -d '{
    "type": "payment_intent.succeeded",
    "data": {
      "object": {
        "id": "pi_test123",
        "amount_received": 29700,
        "metadata": {
          "lead_id": "uuid-here",
          "client_email": "test@example.com"
        }
      }
    }
  }'
```

---

## 🐛 Troubleshooting

### Workflow Not Triggering
- Check that workflow is **Active** (toggle in top right)
- Verify webhook URL is correct in your Next.js API routes
- Check N8N execution logs for errors

### Credential Errors
- Ensure all credentials are properly configured
- Test each credential independently in N8N
- Check that API keys have not expired

### AI Generation Fails
- Verify OpenRouter API key is funded
- Check that model name is correct: `anthropic/claude-3.5-sonnet:beta`
- Ensure fallback models are specified

### Database Errors
- Check Supabase service role key is correct
- Verify RLS policies allow service role access
- Check that table names match your schema

### Email Not Sending
- Verify SMTP credentials
- Check that port is correct (587 for TLS, 465 for SSL)
- Some providers require "app passwords" instead of account password

---

## 📊 Monitoring Workflow Executions

### View Execution Logs
1. Go to N8N dashboard
2. Click "Executions" in left sidebar
3. View all workflow runs with status (success/error)
4. Click individual execution to see detailed logs

### Set Up Alerts
1. Create admin alert workflow that runs on cron
2. Query `workflow_jobs` table for failed executions
3. Send email/Slack notification to admin

---

## 🚀 Next Steps

1. Import all workflows into N8N
2. Configure all credentials
3. Test each workflow individually
4. Activate workflows
5. Monitor execution logs
6. Set up error alerting

---

**Note**: These workflows are templates. You may need to adjust them based on your specific integrations, API endpoints, and business logic. Always test thoroughly in a development environment before deploying to production.
