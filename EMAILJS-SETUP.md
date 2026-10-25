# EmailJS Setup Guide

## ✅ What's Been Done

- ✅ Added `@emailjs/browser` to package.json
- ✅ Created `.env.local` with placeholder credentials
- ✅ Updated Contact Form (`/app/iletisim/contact-form.tsx`)
- ✅ Updated Comply Waitlist Form (`/app/comply/components/comply-waitlist.tsx`)
- ✅ Added error handling, loading states, and success messages
- ✅ Improved UI with animations and better feedback

## 📋 Setup Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Get EmailJS Credentials

1. Go to **https://dashboard.emailjs.com/admin/**
2. Sign up or log in

**Get Public Key:**
- Click "Account" in the left sidebar
- Go to "API Keys" tab
- Copy your Public Key

**Get Service ID:**
- Click "Email Services" in the left sidebar
- Select your email service (Gmail, Outlook, etc.)
- Copy the Service ID

**Template IDs (Already Set):**
- Contact Form: `template_4cpqprc`
- Waitlist Form: `template_f1v1ecf`

### Step 3: Update .env.local

Edit `.env.local` and replace placeholders:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY_HERE
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_XXXXXXX
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=template_4cpqprc
NEXT_PUBLIC_EMAILJS_WAITLIST_TEMPLATE_ID=template_f1v1ecf
NEXT_PUBLIC_CONTACT_FORM_TO_EMAIL=your-email@hukuklabs.com
NEXT_PUBLIC_WAITLIST_REPLY_EMAIL=hukuklabs@gmail.com
```

**Note:** `NEXT_PUBLIC_*` variables are exposed to the frontend (secure for public info only).

### Step 4: Configure EmailJS Templates

Go to **https://dashboard.emailjs.com/admin/templates**

#### Contact Form Template (`template_4cpqprc`)

**Settings:**
- To Email: `your-email@hukuklabs.com`
- From Name: `{{from_name}}`
- From Email: Use Default Email Address
- Reply To: `{{from_email}}`

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Variables Used:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

---

#### Waitlist Form Template (`template_f1v1ecf`)

**Settings:**
- To Email: `{{user_email}}`
- From Name: `HukukLabs Comply`
- From Email: Use Default Email Address
- Reply To: `hukuklabs@gmail.com`

**Subject:**
```
Comply'a Hoş Geldiniz, {{name}}! 🎉
```

**Variables Used:**
- `{{name}}` - User's full name
- `{{user_email}}` - User's email
- `{{company_name}}` - User's company
- `{{signup_date}}` - Registration date

---

### Step 5: Paste Email Templates

Copy the HTML templates from `/Desktop/emailjs-templates.txt` and paste into EmailJS template editor.

Or use these simpler HTML versions:

#### Contact Form HTML:
```html
<h2>{{from_name}} adlı kişiden mesaj</h2>
<p><strong>E-posta:</strong> {{from_email}}</p>
<p><strong>Konu:</strong> {{subject}}</p>
<hr>
<p>{{message}}</p>
```

#### Waitlist Form HTML:
```html
<h2>Merhaba {{name}},</h2>
<p>Comply'ın bekleme listesine başarıyla katıldığınız için teşekkür ederiz!</p>
<p><strong>Şirket:</strong> {{company_name}}</p>
<p><strong>Kayıt Tarihi:</strong> {{signup_date}}</p>
<p>Lansman olduğunda ilk siz haberdar edileceksiniz.</p>
```

### Step 6: Test the Forms

1. Run dev server:
   ```bash
   npm run dev
   ```

2. Test Contact Form: http://localhost:3000/iletisim
3. Test Waitlist Form: http://localhost:3000/comply
4. Check your email inbox for confirmations

## 📧 Email Features

- ✅ **Contact Form:** Sends to your email with reply-to from sender
- ✅ **Waitlist Form:** Sends confirmation email to user
- ✅ **Error Handling:** User-friendly error messages in Turkish
- ✅ **Loading States:** Visual feedback while sending
- ✅ **Success Messages:** Confirmation after submission
- ✅ **Animations:** Smooth transitions and effects

## 🔐 Security Notes

- `NEXT_PUBLIC_*` variables are visible in client code (public info only)
- Public Key is safe to expose (designed for client-side use)
- Email addresses are not sensitive here
- EmailJS handles email delivery securely

## 🚀 Deployment

When deploying to Vercel:

1. Go to **Settings → Environment Variables**
2. Add all 6 variables from `.env.local`
3. Redeploy
4. Test forms in production

## 📝 File Changes

### Modified Files:
- `/app/iletisim/contact-form.tsx` - Added EmailJS integration
- `/app/comply/components/comply-waitlist.tsx` - Added EmailJS integration
- `/package.json` - Added @emailjs/browser

### New Files:
- `.env.local` - Your EmailJS credentials
- `.env.example` - Template for credentials
- `EMAILJS-SETUP.md` - This guide

## ✨ UI Improvements

### Both Forms Now Have:
- ✅ Loading spinner animation
- ✅ Error message display
- ✅ Success checkmark icon
- ✅ Disabled state during submission
- ✅ Focus border color change
- ✅ Privacy notice (Waitlist only)
- ✅ Smooth animations

## 🐛 Troubleshooting

**"Configuration incomplete" Error:**
- Check `.env.local` exists in project root
- Verify all 6 variables are filled
- Restart dev server

**"Failed to send email":**
- Check Service ID is correct
- Verify email service is active in EmailJS dashboard
- Check Template IDs match

**Emails not arriving:**
- Check spam/junk folder
- Verify "To Email" recipient
- Check EmailJS dashboard for errors

## 📧 Support

For EmailJS issues:
- Visit: https://www.emailjs.com/docs/
- Dashboard: https://dashboard.emailjs.com/

---

**Setup Complete!** Your forms are ready to use. 🎉
