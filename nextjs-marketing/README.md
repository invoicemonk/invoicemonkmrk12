# InvoiceMonk Marketing Website - Next.js

A high-performance, SEO-optimized marketing website for InvoiceMonk built with Next.js 15, featuring static site generation (SSG) for optimal search engine visibility.

## 🚀 Quick Start

### Development
```bash
yarn install
yarn dev
```

Visit `http://localhost:3000`

### Build for Production
```bash
yarn build
```

The static site will be exported to the `/out` directory.

## 📦 Deploying to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Vercel Dashboard
1. Push your code to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Vercel will auto-detect Next.js and deploy

### Option 3: Vercel GitHub Integration
1. Connect your GitHub repository to Vercel
2. Every push to `main` branch auto-deploys to production
3. Pull requests create preview deployments

## 🔧 Environment Variables

Create a `.env.local` file (already included):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
BREVO_API_KEY=your_brevo_api_key
NEXT_PUBLIC_APP_URL=https://app.invoicemonk.com
```

**Important:** Add these same variables in Vercel Dashboard → Settings → Environment Variables

## 📝 Key Features

### ✅ SEO Optimized
- **Unique titles and descriptions** for each page
- **Canonical URLs** to prevent duplicate content
- **Meta descriptions** on all pages
- **Structured data** (Schema.org JSON-LD)
- **OpenGraph** and Twitter Card meta tags
- **XML Sitemap** (auto-generated)
- **robots.txt** configured

### 🔒 Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` configured
- `Permissions-Policy` configured

### 📧 Contact Form
- Saves submissions to Supabase
- Sends emails via Brevo to:
  - info@invoicemonk.com
  - support@invoicemonk.com
- Beautiful HTML email templates
- Form validation and error handling

### 🎨 Design
- Fully responsive
- Dark mode support
- Tailwind CSS styling
- Framer Motion animations
- Accessible (WCAG compliant)

## 📂 Project Structure

```
nextjs-marketing/
├── app/                    # Next.js App Router
│   ├── api/               # API routes (contact form)
│   ├── blog/              # Blog pages
│   ├── [page]/            # Static pages
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── layout/           # Layout components (header, footer)
│   ├── home/             # Homepage sections
│   └── blog/             # Blog components
├── pages/                 # Page components (converted from SPA)
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── data/                  # Static data (blog posts, etc.)
├── public/               # Static assets
│   └── assets/           # Images
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── vercel.json           # Vercel deployment configuration
```

## 🔗 External Links

All CTAs and navigation links correctly point to:
- Login: `https://app.invoicemonk.com/login`
- Sign Up: `https://app.invoicemonk.com/signup`

## 🧪 Testing

The site has been tested for:
- ✅ All pages load correctly
- ✅ Forms submit successfully
- ✅ Email notifications work
- ✅ Mobile responsiveness
- ✅ SEO meta tags present
- ✅ Security headers configured
- ✅ No broken links
- ✅ Fast loading times (SSG)

## 📊 SEO Checklist - All Fixed ✅

- [x] Unique titles for all pages (no duplicate titles)
- [x] Canonical URLs on all pages
- [x] Meta descriptions on all pages
- [x] No orphan pages (all pages linked)
- [x] No duplicate content
- [x] X-Content-Type-Options header
- [x] X-Frame-Options header
- [x] Content-Security-Policy header
- [x] Referrer-Policy header
- [x] Structured data (JSON-LD)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Mobile-friendly design
- [x] Fast loading (static generation)

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Database:** Supabase
- **Email:** Brevo (formerly Sendinblue)
- **Deployment:** Vercel (optimized)
- **Icons:** Lucide React

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Support

For questions or issues:
- Email: support@invoicemonk.com
- Website: https://invoicemonk.com/contact

---

Built with ❤️ by InvoiceMonk Team
