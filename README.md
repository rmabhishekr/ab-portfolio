# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## EmailJS Setup for Contact Form

The contact form uses EmailJS to send emails directly from the frontend. To set it up:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Create an Email Service:**
   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template:**
   - Go to Email Templates
   - Create a new template with these variables:

     ```
     Subject: New Contact Form Message from {{user_name}}

     From: {{user_name}} ({{user_email}})

     Message:
     {{message}}
     ```

4. **Update Configuration:**
   - Open `src/config/emailjs.js`
   - Replace the placeholder values with your actual EmailJS IDs:
     - `SERVICE_ID`: Your email service ID
     - `TEMPLATE_ID`: Your email template ID
     - `PUBLIC_KEY`: Your public key (found in Account → General)

5. **Test the Form:**
   - Fill out and submit the contact form
   - Check your email for the message

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
