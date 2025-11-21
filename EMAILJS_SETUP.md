# EmailJS Setup Guide

The contact form uses EmailJS to send emails directly without requiring a backend server. Follow these steps to configure it:

## Step 1: Create a Free EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - Select **Gmail**
   - Click **Connect Account** and authorize with your Gmail (n.yelukati@gmail.com)
   - Name your service (e.g., "Gmail Service")
   - Click **Create Service**
4. Copy your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up the template with these variables:
   ```
   Subject: New Contact Form Submission from {{from_name}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Click **Save**
5. Copy your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your dashboard
2. Find your **Public Key** (starts with a string of letters/numbers)
3. Copy this key

## Step 5: Update the Code

Open `src/components/Contact.jsx` and replace these placeholders:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',     // ← Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',    // ← Replace with your Template ID from Step 3
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'n.yelukati@gmail.com'
  },
  'YOUR_PUBLIC_KEY'      // ← Replace with your Public Key from Step 4
);
```

## Example Configuration

After setup, your code should look like this:

```javascript
await emailjs.send(
  'service_abc123',      // Your actual Service ID
  'template_xyz789',     // Your actual Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'n.yelukati@gmail.com'
  },
  'xYz123AbC456'         // Your actual Public Key
);
```

## Free Plan Limits

EmailJS free plan includes:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ 2 email services
- ✅ No credit card required

## Testing

1. After updating the code with your credentials
2. Run `npm run dev`
3. Go to the contact section
4. Fill out and submit the form
5. Check your email at n.yelukati@gmail.com

## Troubleshooting

- **"Failed to send"**: Check that all three IDs are correct
- **No email received**: Check your spam folder
- **Rate limit error**: Free plan is limited to 200 emails/month

## Security Note

The public key is safe to include in your code - it's meant to be public. EmailJS handles authentication on their servers.
