This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Contact Form Email Setup

This project uses **Nodemailer** with Gmail and App Passwords to send emails from the contact form. Follow the steps below to configure your environment.

---

## 1. Enable Two-Factor Authentication

Before creating an App Password, you need to enable **Two-Factor Authentication (2FA)** on your Google account:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find **"2-Step Verification"** and enable it
3. Complete the setup process with your phone or authenticator app

---

## 2. Create an App Password

Once 2FA is enabled, create an App Password for your project:

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device and enter a name, e.g., `MaltaContact`
4. Click **Generate** and copy the 16-character password

---

## 3. Configure Environment Variables

Create a `.env` file in your project root and add the following variables:

```env
# Gmail account that will send emails
GMAIL_USER=your@gmail.com

# App Password generated in step 2
GMAIL_APP_PASSWORD=your-app-password

# Name displayed as the sender
APP_NAME=MaltaContact

# Email where contact messages will be sent
GOOGLE_TO_EMAIL=recipient@gmail.com

