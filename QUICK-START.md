# ⚡ Quick Start - EmailJS Forms

## 🎯 TL;DR - 5 Minutes Setup

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Get Credentials (https://dashboard.emailjs.com/admin/)
- **Public Key** → Account → API Keys
- **Service ID** → Email Services → Your Service

### 3️⃣ Update `.env.local`
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_XXXXX
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_4cpqprc
NEXT_PUBLIC_EMAILJS_WAITLIST_TEMPLATE_ID=template_f1v1ecf
NEXT_PUBLIC_CONTACT_FORM_TO_EMAIL=your-email@hukuklabs.com
NEXT_PUBLIC_WAITLIST_REPLY_EMAIL=hukuklabs@gmail.com
```

### 4️⃣ Test
```bash
npm run dev
```
- Visit `/iletisim` (Contact Form)
- Visit `/comply` (Waitlist Form)

---

## 📋 What's Already Done

| Item | Status | File |
|------|--------|------|
| EmailJS library added | ✅ | `package.json` |
| Contact form updated | ✅ | `/app/iletisim/contact-form.tsx` |
| Waitlist form updated | ✅ | `/app/comply/components/comply-waitlist.tsx` |
| Environment file created | ✅ | `.env.local` |
| Setup guide created | ✅ | `EMAILJS-SETUP.md` |

---

## 📝 Form Details

### Contact Form (`/iletisim`)
- Name, Email, Subject, Message
- Sends to: `your-email@hukuklabs.com`
- Reply-to: From sender
- Template: `template_4cpqprc`

### Waitlist Form (`/comply`)
- Name, Email, Company (optional)
- Sends to: User's email (confirmation)
- Reply-to: `hukuklabs@gmail.com`
- Template: `template_f1v1ecf`

---

## ✨ Features Included

✅ Error handling & validation
✅ Loading animations
✅ Success messages with checkmark
✅ Turkish language
✅ Responsive design
✅ Smooth transitions
✅ Privacy notice

---

## 🚀 Deployment

### Vercel
1. Settings → Environment Variables
2. Add all 6 variables from `.env.local`
3. Redeploy

---

## 📧 Email Templates

The templates are pre-configured in EmailJS:
- Contact: `template_4cpqprc`
- Waitlist: `template_f1v1ecf`

Or use simple HTML if you prefer (see `EMAILJS-SETUP.md`).

---

## ❓ Need Help?

1. Check `EMAILJS-SETUP.md` for detailed guide
2. Visit https://www.emailjs.com/docs/
3. Check `.env.local` has all 6 variables filled

---

**You're all set!** 🎉
