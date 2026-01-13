# Email Setup Instructions

## Why Email Isn't Working Yet

The email notification feature is ready but needs one more step:

### Install nodemailer dependency:
```bash
npm install
```

### For Vercel Deployment:
The `/api/send-email.js` serverless function will work automatically once deployed to Vercel because:
1. Vercel auto-detects API routes in `/api` folder
2. Environment variables (`SMTP_EMAIL` and `SMTP_PASSWORD`) are already in `.env`
3. You need to add them to Vercel environment variables in the dashboard

### Add Environment Variables to Vercel:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add these variables:
   - `SMTP_EMAIL` = `npdimagine@gmail.com`
   - `SMTP_PASSWORD` = `skjmrxhevzueophp` (your Gmail app password)

### Testing Locally:
For local testing, the API won't work with Vite dev server. You need to:
1. Run `npm run build`
2. Deploy to Vercel or use `vercel dev` command

That's it! Once deployed to Vercel with environment variables, emails will work automatically.
