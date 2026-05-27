# Email setup — Martin Web Works

This is a plain-English checklist for the email + DNS work that has to happen **outside** the codebase before the Free Audit form can send real notifications.

Nothing in this file requires any code changes. It is the operations side of the contact form.

> **Goal:** when someone submits the Free Audit form on the site, you receive a clean notification email at `team@martinwebworks.com`, and that email **does not** land in spam.

---

## 1. Confirm the inbox itself works

Before touching DNS, make sure `team@martinwebworks.com` is set up at your email host (Google Workspace, iCloud, Fastmail, Zoho, etc.).

- [ ] You can **send** from `team@martinwebworks.com` to a personal address.
- [ ] You can **receive** mail at `team@martinwebworks.com` from a personal address.
- [ ] You can sign into the inbox on at least one device.

If any of these are broken, fix that first. The Free Audit form is useless if you can't read the inbox it sends to.

---

## 2. Add a Resend account

The site uses [Resend](https://resend.com) to send the actual notification email when someone submits the form.

- [ ] Create a free Resend account.
- [ ] Go to **Domains → Add Domain** and add `martinwebworks.com`.
- [ ] Resend will show you a list of DNS records to add. Keep that page open — you'll need it for the next step.

---

## 3. Add Resend's DNS records at your domain registrar

Whoever you bought the domain from (Cloudflare, Namecheap, GoDaddy, Porkbun, Squarespace, etc.) is where you add DNS records.

Add **every record Resend shows you**, exactly as shown. You will typically see:

- One **MX** record (for inbound bounce handling — only if your email host doesn't already use MX records for receiving mail).
- One **SPF** TXT record (or an update to the one you already have).
- One **DKIM** TXT/CNAME record (signs outgoing mail so receivers know it's really you).
- One **DMARC** TXT record (tells receivers what to do with mail that fails SPF or DKIM).
- A Resend domain-verification record.

A few things to watch for:

- **SPF:** if your email host (Google Workspace, iCloud, etc.) already gave you an SPF record, you must **merge** Resend's `include:` directive into your existing record — not add a second SPF record. Two SPF records cause both to be ignored.
- **DKIM:** these records can be long. Copy them carefully. Most registrars trim whitespace; that's fine.
- **DMARC:** start with `p=none` (monitor only). Once you've verified nothing is breaking after a week, you can move to `p=quarantine` and eventually `p=reject`.

After adding the records:

- [ ] Go back to Resend → **Domains** and click **Verify**.
- [ ] Wait until Resend shows the domain as **Verified**. DNS propagation can take 5 minutes to a few hours.

---

## 4. Add the API key + email addresses to the app

You now have what the app needs to actually send email.

- [ ] In Resend, go to **API Keys** → create a new key. Copy it.
- [ ] In the project root, copy `.env.example` to `.env.local`:
  ```bash
  cp .env.example .env.local
  ```
- [ ] Open `.env.local` and fill in:
  ```bash
  RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
  CONTACT_TO_EMAIL=team@martinwebworks.com
  CONTACT_FROM_EMAIL=team@martinwebworks.com
  ```
- [ ] Save the file.
- [ ] Restart the dev server (`npm run dev`).

> `.env.local` is in `.gitignore`. It will not be committed.

**About `CONTACT_FROM_EMAIL`:** Resend will only let you send from an address whose **domain** you have verified in step 3. `team@martinwebworks.com` only works once `martinwebworks.com` is verified. If you try to send from an unverified domain, Resend will reject the send and the form will show a generic error. The server logs will explain the real reason.

---

## 5. Test a real submission

- [ ] Run the site locally (`npm run dev`) or on a staging deployment.
- [ ] Go to `/free-audit`.
- [ ] Fill in the form with real values.
- [ ] Click **Request My Free Audit**.
- [ ] Check `team@martinwebworks.com` — the notification email should arrive within a few seconds.

If it doesn't arrive:

1. Check the spam folder.
2. Check the server console — there's a `[martinwebworks]` log line for every attempt.
3. In Resend, open **Emails** → look at the most recent send. The error will be visible there if delivery failed.

---

## 6. Warm up the domain before any outreach

A brand-new domain that suddenly starts sending lots of email looks exactly like a spammer to Gmail and Outlook.

- [ ] For the first 2–4 weeks, only use the inbox for **personal email** and **inbound contact form submissions**. Reply naturally to people who write to you.
- [ ] **Do not send bulk outreach** — no cold campaigns, no newsletters, no scripted sequences — until you have at least a few weeks of normal inbox activity.
- [ ] Watch the DMARC reports (your email host may show them, or use [dmarc.postmarkapp.com](https://dmarc.postmarkapp.com/) for free aggregated reports).
- [ ] Once the domain shows clean SPF + DKIM + DMARC alignment for two weeks, you can begin small, personal outreach. Keep volume modest. Real one-to-one emails do not trigger spam filters.

---

## 7. Operational guarantees the app makes for you

The site is wired so that:

- The Free Audit form **never crashes** if `RESEND_API_KEY` is missing — it still shows the user a success screen, and the server logs `RESEND_API_KEY not configured. Skipping email send.`
- The honeypot field (`company_website`) silently rejects bot submissions without telling the bot.
- IP-based rate limiting holds at **5 submissions per 10 minutes per IP**. Beyond that, the API returns `429`.
- Server errors do **not** leak stack traces to users. The UI always offers `team@martinwebworks.com` as a fallback.

If something fails, the user always sees something like:

> Something went wrong on our end. Please email us at team@martinwebworks.com.

That fallback is intentional. Email is the actual contract you have with the prospect; the form is just a convenience layer on top of it.

---

## Where things live in the code

- **API route:** `app/api/free-audit/route.ts`
- **Server validation + email content:** `app/lib/audit-submission.ts`
- **Resend wrapper:** `app/lib/email.ts`
- **Rate limit:** `app/lib/rate-limit.ts`
- **Frontend form:** `app/components/features/AuditForm.tsx`
- **Site-wide email constant:** `app/data/site.ts` (`SITE.email`)
- **Env template:** `.env.example`
- **Scheduling URL placeholder:** `app/data/site.ts` (`SCHEDULING_URL`)
