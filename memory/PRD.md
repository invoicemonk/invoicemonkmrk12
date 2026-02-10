# InvoiceMonk Marketing Website - Product Requirements Document

## Project Overview
Migration of React SPA marketing website to Next.js for improved SEO. The main application is hosted separately at `app.invoicemonk.com`.

## Original Requirements
1. **Framework:** Migrate React SPA to Next.js for SSR/SSG SEO benefits
2. **CTAs:** All "Get Started" links → `https://app.invoicemonk.com/signup`, "Login" → `https://app.invoicemonk.com/login`
3. **Contact Form:** Save to Supabase, send email notifications via Brevo to `info@invoicemonk.com` and `support@invoicemonk.com`
4. **SEO Fixes:** Proper meta tags, Open Graph tags, security headers (X-Frame-Options, X-Content-Type-Options, etc.)
5. **Content Updates:** Receipts feature updated to "live" status, credible trust signals instead of unsubstantiated claims
6. **Deployment Target:** Vercel

## Architecture

### Directory Structure
```
/app/nextjs-marketing/          # Main Next.js project
├── app/                        # App Router (routes + metadata)
│   ├── [route]/page.tsx        # Server components with SEO metadata
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── layout.tsx              # Root layout with providers
│   └── globals.css             # Global styles
├── page-components/            # Client-side page implementations
├── components/                 # Shared components
│   ├── PageWrapper.tsx         # Dynamic client-side imports
│   ├── providers/              # Client-side providers (Theme, Locale, Toast)
│   ├── layout/                 # Header, Footer, Layout
│   ├── ui/                     # shadcn/ui components
│   └── ...                     # Feature-specific components
├── data/                       # Static data files
├── hooks/                      # Custom React hooks
├── contexts/                   # React contexts
└── public/                     # Static assets
```

### Technical Stack
- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (contact_messages table)
- **Email:** Brevo API
- **Deployment:** Vercel-ready

### Key Design Decisions
1. **Client/Server Split:** Pages use Server Components for metadata (SEO) + dynamically imported Client Components for interactivity
2. **PageWrapper Pattern:** `components/PageWrapper.tsx` handles `dynamic(..., { ssr: false })` imports from a client component, avoiding Next.js 15's restriction on `ssr: false` in Server Components
3. **Directory Naming:** Page components stored in `page-components/` (not `pages/`) to avoid conflict with Next.js Pages Router

## Completed Work (Dec 2025)

### ✅ Build Fix (Critical P0)
- **Issue:** Build failed with `TypeError: Cannot read properties of undefined (reading 'add')` during pre-rendering
- **Root Cause:** 
  1. `dynamic(..., { ssr: false })` was used directly in Server Components (not allowed in Next.js 15)
  2. `/pages/` directory was being interpreted as Pages Router routes, causing SSR conflicts
- **Solution:**
  1. Created `components/PageWrapper.tsx` as a client component to handle all dynamic imports
  2. Renamed `/pages/` to `/page-components/` to avoid Next.js router conflicts
  3. Updated all page.tsx files to use the PageWrapper exports
- **Result:** Build succeeds, all 28 pages statically generated

### ✅ SEO Implementation
- All pages have proper `<Metadata>` exports
- Security headers configured in `next.config.ts`
- Open Graph and Twitter Card meta tags
- Canonical URLs set

### ✅ Contact Form API
- POST `/api/contact/` endpoint functional
- Saves to Supabase `contact_messages` table
- Sends notifications via Brevo (requires sender verification for production)

## Environment Variables (Vercel)
Required environment variables for deployment:
```
NEXT_PUBLIC_SUPABASE_URL=<supabase-url>
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<supabase-anon-key>
BREVO_API_KEY=<brevo-api-key>
NEXT_PUBLIC_APP_URL=https://app.invoicemonk.com
```

## Deployment Instructions
1. Connect GitHub repo to Vercel
2. Set root directory to `nextjs-marketing`
3. Add all environment variables above
4. Deploy

## Known Limitations
- Brevo email notifications may fail without sender domain verification
- Security headers are set in `next.config.ts`; additional headers may be set in Vercel

## Future/Backlog (P2)
- Payment intelligence tools (user mentioned for future development)
- Additional blog posts and content
- Analytics integration
