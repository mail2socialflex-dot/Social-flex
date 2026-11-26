import { createServerFn } from "@tanstack/react-start";

// ── SECURITY: Apps Script URL is server-only — never exported to the client ──
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby60Syzt8c3cD57n-huzHMURqT1gbpbQcq4jpdv7xbnBIAF9QnTkex_lfkPrmj2roqS/exec";

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  project_type: string;
  message: string;
};

// ── Simple in-memory rate limiter (per server instance) ──
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 submissions per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// Clean up stale entries periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 5 * 60_000);

async function sendToAppsScript(payload: {
  name: string;
  phone: string;
  email: string;
  business: string;
  service: string;
  message: string;
}) {
  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });
    return true;
  } catch (err) {
    console.error("[AppsScript Submission Error]", err);
    return false;
  }
}

async function processEnquirySubmission(payload: EnquiryPayload) {
  // Lazy-import the server-side admin client to avoid bundling it into client code
  const { supabaseAdmin } = await import(
    "@/integrations/supabase/client.server"
  );

  const formattedPayload = {
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    business: payload.company || "",
    service: payload.project_type,
    message: payload.message,
  };

  const results = {
    appsScript: false,
    email: false,
    supabase: false,
  };

  // 1. Google Apps Script (server-side only — no longer called from the browser)
  try {
    await sendToAppsScript(formattedPayload);
    results.appsScript = true;
  } catch (err) {
    console.error("[Enquiry] Google Apps Script error:", err);
  }

  // 2. Email Notification to Social Flex business email
  const emailApiKey = process.env["RESEND_API_KEY"];
  const targetEmail =
    process.env["NOTIFICATION_EMAIL"] || "mail2socialflex@gmail.com";

  if (emailApiKey) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + emailApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Social Flex Enquiries <onboarding@resend.dev>",
          to: [targetEmail],
          subject:
            "NEW SOCIAL FLEX INQUIRY: " +
            payload.name +
            " (" +
            payload.project_type +
            ")",
          text: [
            "NEW SOCIAL FLEX INQUIRY",
            "",
            "Name: " + payload.name,
            "Phone: " + payload.phone,
            "Email: " + payload.email,
            "Business: " + (payload.company || "N/A"),
            "Service: " + payload.project_type,
            "Message: " + payload.message,
          ].join("\n"),
        }),
      });
      if (emailRes.ok) results.email = true;
    } catch (err) {
      console.error("[Enquiry] Resend email error:", err);
    }
  }

  // Direct FormSubmit fallback — ensures emails always reach targetEmail even without API keys
  if (!results.email) {
    try {
      const formSubmitRes = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: "https://www.socialflex.in",
            Referer: "https://www.socialflex.in/",
          },
          body: JSON.stringify({
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            company: payload.company || "N/A",
            service: payload.project_type,
            message: payload.message,
            _subject: `New Social Flex Inquiry: ${payload.name} (${payload.project_type})`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );
      if (formSubmitRes.ok) {
        results.email = true;
      }
    } catch (err) {
      console.error("[Enquiry] Direct email delivery error:", err);
    }
  }

  // 3. Supabase insert via admin client (bypasses RLS, server-only)
  try {
    const { error } = await supabaseAdmin.from("enquiries").insert({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      company: payload.company ?? null,
      project_type: payload.project_type ?? null,
      message: payload.message,
    });
    if (!error) results.supabase = true;
    else console.error("[Enquiry] Supabase insert error:", error.message);
  } catch (err) {
    console.error("[Enquiry] Supabase insert error:", err);
  }

  return {
    success: true,
    results,
  };
}

export const submitEnquiryServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object") {
      throw new Error("Invalid payload format");
    }
    const p = data as Record<string, unknown>;
    const name = String(p["name"] ?? "").trim();
    const email = String(p["email"] ?? "").trim();
    const phone = String(p["phone"] ?? "").trim();
    const company = String(p["company"] ?? "").trim();
    const project_type = String(p["project_type"] ?? "").trim();
    const message = String(p["message"] ?? "").trim();

    if (!name || name.length < 2 || name.length > 200)
      throw new Error("Name is required (2-200 characters)");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      throw new Error("Valid email address is required");
    if (email.length > 320) throw new Error("Email address is too long");
    if (!phone || !/^[+\d\s\-()]{7,20}$/.test(phone))
      throw new Error("Valid phone number is required");
    if (!project_type || project_type.length > 200)
      throw new Error("Please select a service required");
    if (!message || message.length < 5 || message.length > 5000)
      throw new Error("Please describe your project details (5-5000 chars)");
    if (company && company.length > 300)
      throw new Error("Company name is too long");

    return { name, email, phone, company, project_type, message };
  })
  .handler(async ({ data, context }) => {
    // Rate limit by IP (extract from request headers)
    try {
      const { getRequest } = await import("@tanstack/react-start/server");
      const request = getRequest();
      const ip =
        request?.headers?.get("cf-connecting-ip") ||
        request?.headers?.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request?.headers?.get("x-real-ip") ||
        "unknown";

      if (isRateLimited(ip)) {
        throw new Error(
          "Too many submissions. Please wait a minute and try again.",
        );
      }
    } catch (err) {
      // If rate limiting fails (e.g., can't get request), log but don't block
      if (
        err instanceof Error &&
        err.message.includes("Too many submissions")
      ) {
        throw err;
      }
      console.warn("[Enquiry] Rate limit check failed:", err);
    }

    return await processEnquirySubmission(data);
  });
