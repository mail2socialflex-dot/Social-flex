# Social Flex — Enquiry & Lead Storage Reference

This document outlines where enquiries submitted via the website's **"Send Enquiry"** form are captured, routed, and stored.

---

## 1. Overview of Form Submissions

When a visitor fills out the contact form in the **Send Enquiry** section ([Contact.tsx](src/components/site/Contact.tsx)), the form data is validated and securely sent to the server function `submitEnquiryServerFn` in [src/lib/enquiry-server.ts](src/lib/enquiry-server.ts).

The server processes and distributes each submission to **3 destinations**:
1. **Google Sheets** (Instant spreadsheet logging via Google Apps Script)
2. **Email Notification** (Direct notification to `mail2socialflex@gmail.com`)
3. **Supabase Database** (Permanent PostgreSQL storage in the `enquiries` table)

---

## 2. Destination Details

### Destination A: Google Sheets Webhook
- **Webhook Endpoint:**
  ```text
  https://script.google.com/macros/s/AKfycby60Syzt8c3cD57n-huzHMURqT1gbpbQcq4jpdv7xbnBIAF9QnTkex_lfkPrmj2roqS/exec
  ```
- **How it works:** 
  The server makes a `POST` request with a JSON payload to Google Apps Script, which appends a new row to the linked Social Flex Google Sheet.
- **Fields recorded:**
  - `name`: Full name of the prospect
  - `phone`: Contact phone number
  - `email`: Email address
  - `business`: Business or company name
  - `service`: Selected service requirement (e.g., Personal Branding, Brand Creation, SEO & Google Visibility, Meta Ads & Performance Marketing)
  - `message`: Project details and goals
  - `timestamp`: Date and time of submission

---

### Destination B: Direct Email Alert
- **Recipient:** `mail2socialflex@gmail.com` (can be overridden via `NOTIFICATION_EMAIL` environment variable)
- **Subject:** `New Social Flex Inquiry: <Name> (<Service>)`
- **Delivery Mechanisms:**
  1. **Primary / Direct:** FormSubmit zero-config email forwarder directly to `mail2socialflex@gmail.com` (no external API keys required).
  2. **Secondary / Custom:** Resend API integration (if `RESEND_API_KEY` is provided in environment).
- **Content:** Clean formatted HTML table / text containing all submitted client details for immediate follow-up.

---

### Destination C: Supabase PostgreSQL Database
- **Database Table:** `public.enquiries`
- **Access:** Stored via Supabase Admin Client (`supabaseAdmin`) using service role credentials.
- **Schema Columns:**
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `phone` (text)
  - `company` (text)
  - `project_type` (text)
  - `message` (text)
  - `created_at` (timestamptz, default `now()`)
  - `updated_at` (timestamptz)

---

## 3. Server Security & Rate Limiting

- **Server-Only Execution:** The Google Apps Script URL and database service credentials are kept strictly server-side in `enquiry-server.ts` to prevent exposure to client browsers.
- **Rate Limiting:** Built-in IP rate limiting (maximum 5 submissions per IP per 60-second window) to block spam and automated bots.
- **Input Validation:** Strict field length and regex format validation (name, email format, phone digits/symbols, project type, message length).
