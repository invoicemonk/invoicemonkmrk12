/**
 * Topical Map Configuration - Koray Tuğberk Gübür's Semantic SEO Framework
 * 
 * Source Context: Help small businesses, freelancers, and entrepreneurs manage 
 * invoicing, payments, and accounting with compliance-first software that works globally.
 * 
 * Central Entity: Invoicing Software
 * Central Search Intent: Users want to get paid faster, stay compliant, and save time on bookkeeping.
 */

export type ClusterType = 'pillar' | 'cluster' | 'supporting' | 'outer';
export type ContentPriority = 'P1' | 'P2' | 'P3';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface KeyTopic {
  title: string;
  description: string;
  link?: string;
}

export interface Pillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  targetProduct: string;
  hubPage: string;
  blogHubPage: string;
  icon: string;
  color: string;
  keyTopics: KeyTopic[];
  faq: FAQItem[];
}

export interface TopicalCluster {
  pillarId: string;
  postSlugs: string[];
}

// Pillar definitions aligned with product offerings
export const pillars: Pillar[] = [
  {
    id: 'invoicing-mastery',
    title: 'Invoicing Mastery',
    slug: 'invoicing',
    description: 'Master the art of professional invoicing to get paid faster and look more professional.',
    longDescription: 'Everything you need to know about creating professional invoices, from essential elements to best practices. Learn how to invoice correctly, get paid faster, and maintain compliance with tax regulations across different countries.',
    targetProduct: '/invoicing',
    hubPage: '/guides/invoicing',
    blogHubPage: '/blog/complete-guide-to-business-invoicing',
    icon: 'FileText',
    color: 'hsl(var(--primary))',
    keyTopics: [
      {
        title: 'Invoice Essentials',
        description: 'Learn the must-have elements every professional invoice needs.',
        link: '/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners'
      },
      {
        title: 'Invoice Templates',
        description: 'Create professional templates that reflect your brand.',
        link: '/blog/invoicemonk-template-how-to-create-a-perfect-invoice-template'
      },
      {
        title: 'Timely Invoicing',
        description: 'Master the timing of your invoices for better cash flow.',
        link: '/blog/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently'
      },
      {
        title: 'Invoice Numbering',
        description: 'Implement a numbering system that keeps you organized.',
        link: '/blog/invoice-numbering-best-practices'
      },
      {
        title: 'Payment Terms',
        description: 'Write clear payment terms that clients understand.',
        link: '/blog/how-to-write-invoice-payment-terms'
      },
      {
        title: 'Recurring Invoices',
        description: 'Automate billing for retainer clients and subscriptions.',
        link: '/blog/recurring-invoices-automating-billing'
      }
    ],
    faq: [
      {
        question: 'What are the essential elements of a professional invoice?',
        answer: 'A professional invoice must include: your business name and contact details, client information, unique invoice number, invoice date and due date, itemized list of products/services with quantities and prices, subtotal and total amounts, applicable taxes, and accepted payment methods.'
      },
      {
        question: 'How do I number my invoices correctly?',
        answer: 'Use a sequential numbering system that\'s easy to track. Common formats include: simple sequential (001, 002, 003), date-based (2024-001), or client-prefixed (ABC-001). The key is consistency—never reuse invoice numbers.'
      },
      {
        question: 'When should I send an invoice?',
        answer: 'For project work, send invoices immediately upon completion or at agreed milestones. For recurring services, establish a consistent schedule (weekly, monthly). The sooner you invoice, the faster you get paid.'
      },
      {
        question: 'What payment terms should I use?',
        answer: 'Common payment terms include Net 15, Net 30, or Due Upon Receipt. For new clients, shorter terms reduce risk. Consider offering early payment discounts (2/10 Net 30) to incentivize faster payments.'
      },
      {
        question: 'How do I handle international invoicing?',
        answer: 'For international clients, include: currency specification, your international bank details (IBAN, SWIFT), applicable tax information, and ensure compliance with both your country\'s and your client\'s tax regulations.'
      }
    ]
  },
  {
    id: 'getting-paid',
    title: 'Getting Paid Faster',
    slug: 'getting-paid',
    description: 'Strategies and tools to accelerate your payment collection and improve cash flow.',
    longDescription: 'Discover proven strategies to reduce payment delays and improve your cash flow. From payment reminder templates to choosing the right payment methods, learn everything about getting paid faster as a small business owner or freelancer.',
    targetProduct: '/payments',
    hubPage: '/guides/getting-paid',
    blogHubPage: '/blog/ultimate-guide-getting-paid-faster',
    icon: 'Wallet',
    color: 'hsl(142, 76%, 36%)',
    keyTopics: [
      {
        title: 'Late Payment Handling',
        description: 'Professional approaches to collecting overdue payments.',
        link: '/blog/how-to-handle-late-payments-professionally'
      },
      {
        title: 'Payment Methods',
        description: 'Compare online payment options for your business.',
        link: '/blog/online-payment-methods-comparison-small-business'
      },
      {
        title: 'Payment Reminders',
        description: 'Automate reminders to reduce late payments.',
        link: '/blog/payment-reminder-email-templates'
      },
      {
        title: 'Early Payment Discounts',
        description: 'Incentivize clients to pay faster.',
        link: '/blog/early-payment-discounts-do-they-work'
      },
      {
        title: 'Cash Flow Forecasting',
        description: 'Predict and plan your incoming payments.',
        link: '/blog/cash-flow-forecasting-for-freelancers'
      }
    ],
    faq: [
      {
        question: 'What\'s the best way to follow up on late payments?',
        answer: 'Start with a friendly reminder 1-3 days after the due date. If unpaid after a week, send a firmer reminder with the overdue amount. For 30+ days overdue, consider phone contact. Always remain professional and document all communications.'
      },
      {
        question: 'Should I offer early payment discounts?',
        answer: 'Early payment discounts like "2/10 Net 30" (2% discount if paid within 10 days) can accelerate payments. However, calculate the effective annual cost—a 2% discount for 20 days early equals about 36% annually. It works best for high-margin businesses or when cash flow is critical.'
      },
      {
        question: 'What payment methods should I accept?',
        answer: 'Accept multiple methods to make paying easy: bank transfers (lowest fees), credit/debit cards (convenient for clients), and digital wallets like PayPal or Stripe. Consider local payment preferences in your target markets.'
      },
      {
        question: 'How can I reduce late payments?',
        answer: 'Key strategies include: clear payment terms upfront, immediate invoicing after work completion, automatic payment reminders, offering multiple payment methods, and requiring deposits for large projects.'
      }
    ]
  },
  {
    id: 'business-finances',
    title: 'Business Finances',
    slug: 'business-finances',
    description: 'Essential accounting and expense management knowledge for small business success.',
    longDescription: 'Master the fundamentals of small business accounting and financial management. From creating budgets to understanding financial reports, gain the knowledge to make informed financial decisions and grow your business sustainably.',
    targetProduct: '/accounting',
    hubPage: '/guides/business-finances',
    blogHubPage: '/blog/small-business-accounting-guide',
    icon: 'Calculator',
    color: 'hsl(221, 83%, 53%)',
    keyTopics: [
      {
        title: 'Accounting Basics',
        description: 'Foundation concepts every business owner needs.',
        link: '/blog/the-basics-of-small-business-accounting'
      },
      {
        title: 'Budget Creation',
        description: 'Build a budget that drives business growth.',
        link: '/blog/how-to-create-a-budget-for-your-small-business'
      },
      {
        title: 'Financial Reports',
        description: 'Understand the reports that matter for your business.',
        link: '/blog/small-business-accounting-guide'
      },
      {
        title: 'Profit Margins',
        description: 'Calculate and improve your business profitability.',
        link: '/blog/profit-margins-how-to-calculate-and-improve'
      },
      {
        title: 'Cash vs Accrual',
        description: 'Choose the right accounting method for your business.',
        link: '/blog/cash-vs-accrual-accounting-explained'
      }
    ],
    faq: [
      {
        question: 'Should I use cash or accrual accounting?',
        answer: 'Cash accounting records income when received and expenses when paid—simpler for small businesses. Accrual accounting records when earned/incurred, providing a more accurate financial picture. Most small businesses start with cash; switch to accrual as you grow or if required by regulations.'
      },
      {
        question: 'What financial reports do I need to track?',
        answer: 'Essential reports include: Profit & Loss (income statement) for profitability, Balance Sheet for assets and liabilities, Cash Flow Statement for money movement, and Accounts Receivable Aging for unpaid invoices.'
      },
      {
        question: 'How do I create a small business budget?',
        answer: 'Start by reviewing past income and expenses. Categorize fixed costs (rent, salaries) and variable costs (supplies, marketing). Set realistic revenue targets, allocate funds by priority, and review monthly to adjust for actual performance.'
      },
      {
        question: 'When should I hire an accountant?',
        answer: 'Consider hiring an accountant when: your business grows beyond simple bookkeeping, you need tax planning advice, you\'re seeking funding, or you\'re spending more time on finances than your core business. Start with a bookkeeper and upgrade to a CPA as needed.'
      }
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Tax & Compliance',
    slug: 'tax-compliance',
    description: 'Stay audit-ready and compliant with tax regulations across different regions.',
    longDescription: 'Navigate tax compliance with confidence across Nigeria, UK, US, Canada, and Australia. Learn about invoice requirements, tax deductions, audit preparation, and record-keeping standards specific to each country\'s tax authority.',
    targetProduct: '/compliance',
    hubPage: '/guides/tax-compliance',
    blogHubPage: '/blog/small-business-tax-compliance-guide',
    icon: 'Shield',
    color: 'hsl(271, 91%, 65%)',
    keyTopics: [
      {
        title: 'Tax Deductions',
        description: 'Maximize legitimate deductions for your business.',
        link: '/blog/small-business-tax-deductions-guide'
      },
      {
        title: 'Audit Preparation',
        description: 'Stay ready for tax authority reviews.',
        link: '/blog/how-to-prepare-business-tax-audit'
      },
      {
        title: 'Nigeria (FIRS)',
        description: 'NRS-compliant invoicing requirements.',
        link: '/blog/firs-invoice-requirements-nigeria'
      },
      {
        title: 'UK (HMRC)',
        description: 'Making Tax Digital compliance guide.',
        link: '/blog/hmrc-invoicing-rules-uk-mtd-compliance'
      },
      {
        title: 'US (IRS)',
        description: 'US small business tax compliance.',
        link: '/blog/irs-invoice-requirements-us-compliance'
      },
      {
        title: 'Record Keeping',
        description: 'Maintain compliant business records.',
        link: '/blog/how-to-prepare-business-tax-audit'
      }
    ],
    faq: [
      {
        question: 'How long should I keep business records?',
        answer: 'Generally, keep records for 6-7 years. Nigeria (FIRS): 6 years, UK (HMRC): 6 years, US (IRS): 7 years for most records, Canada (CRA): 6 years, Australia (ATO): 5 years. Keep permanently: annual accounts, asset purchase records, and legal documents.'
      },
      {
        question: 'What invoice elements are legally required?',
        answer: 'Requirements vary by country but typically include: your business name/address, client details, unique invoice number, date, description of goods/services, amounts, tax breakdown (VAT/GST), and your tax registration number.'
      },
      {
        question: 'How do I prepare for a tax audit?',
        answer: 'Keep organized, dated records of all transactions. Maintain supporting documents (receipts, contracts, bank statements). Reconcile accounts regularly. Use accounting software for accurate, searchable records. Respond promptly to authority requests.'
      },
      {
        question: 'Do I need to charge VAT/GST on my invoices?',
        answer: 'This depends on your registration status and thresholds. UK: VAT if turnover exceeds £85,000. Australia: GST if turnover exceeds $75,000. Nigeria: VAT registration required for businesses above threshold. US: Sales tax varies by state.'
      }
    ]
  },
  {
    id: 'freelancer-success',
    title: 'Freelancer Success',
    slug: 'freelancing',
    description: 'Build a thriving freelance business with practical guidance and tools.',
    longDescription: 'Everything freelancers need to build a sustainable, profitable business. From finding clients and setting rates to managing multiple projects and scaling your services, learn the strategies that successful freelancers use every day.',
    targetProduct: '/freelancers',
    hubPage: '/guides/freelancing',
    blogHubPage: '/blog/freelancer-business-guide',
    icon: 'User',
    color: 'hsl(25, 95%, 53%)',
    keyTopics: [
      {
        title: 'Finding Work',
        description: 'Best platforms to find freelance clients.',
        link: '/blog/top-10-freelance-websites'
      },
      {
        title: 'Building Skills',
        description: 'Develop marketable creative skills.',
        link: '/blog/how-to-become-a-good-graphic-designer'
      },
      {
        title: 'Pricing Services',
        description: 'Set rates that reflect your value.',
        link: '/blog/pricing-your-freelance-services'
      },
      {
        title: 'Client Management',
        description: 'Handle multiple clients efficiently.',
        link: '/blog/freelancer-business-guide'
      },
      {
        title: 'Contracts',
        description: 'Protect yourself with solid agreements.',
        link: '/blog/freelance-contract-templates'
      },
      {
        title: 'Time Tracking',
        description: 'Bill accurately for your time.',
        link: '/blog/freelance-time-tracking-guide'
      }
    ],
    faq: [
      {
        question: 'How do I set my freelance rates?',
        answer: 'Calculate your desired annual income, add business expenses and taxes, divide by billable hours (typically 60-70% of work time). Research market rates in your niche. Consider value-based pricing for experienced freelancers—charge based on outcomes, not hours.'
      },
      {
        question: 'Where can I find freelance clients?',
        answer: 'Start with platforms like Upwork, Fiverr, and Toptal for beginners. Build your network through LinkedIn and industry events. Ask for referrals from satisfied clients. Create content showcasing your expertise to attract inbound leads.'
      },
      {
        question: 'Do I need a contract for every project?',
        answer: 'Yes! A contract protects both you and your client. Include: scope of work, deliverables, timeline, payment terms, revision policy, intellectual property rights, and termination conditions. Even small projects benefit from a simple agreement.'
      },
      {
        question: 'How do I handle scope creep?',
        answer: 'Define project scope clearly in your contract. When clients request additions, acknowledge the request, explain it\'s outside the original scope, and provide a quote for the additional work. Frame it as protecting the project timeline and budget.'
      }
    ]
  },
  {
    id: 'estimates-proposals',
    title: 'Estimates & Proposals',
    slug: 'estimates',
    description: 'Win more clients with compelling proposals and accurate estimates.',
    longDescription: 'Learn to create winning proposals and accurate estimates that convert prospects into paying clients. From understanding the difference between quotes and estimates to following up effectively, master the pre-sale process that grows your business.',
    targetProduct: '/estimates',
    hubPage: '/guides/estimates',
    blogHubPage: '/blog/winning-proposals-estimates-guide',
    icon: 'ClipboardList',
    color: 'hsl(340, 82%, 52%)',
    keyTopics: [
      {
        title: 'Proposal Writing',
        description: 'Write proposals that win clients.',
        link: '/blog/how-to-write-winning-business-proposal'
      },
      {
        title: 'Quote vs Estimate',
        description: 'Understand when to use each document.',
        link: '/blog/estimate-vs-quote-vs-invoice-difference'
      },
      {
        title: 'Project Pricing',
        description: 'Price projects accurately and profitably.',
        link: '/blog/how-to-price-project-work'
      },
      {
        title: 'Following Up',
        description: 'Increase acceptance with smart follow-ups.',
        link: '/blog/following-up-on-proposals'
      },
      {
        title: 'Handling Rejection',
        description: 'Learn from rejected proposals.',
        link: '/blog/proposal-rejection-next-steps'
      }
    ],
    faq: [
      {
        question: 'What\'s the difference between an estimate, quote, and invoice?',
        answer: 'An estimate is an approximation of costs that may change. A quote is a fixed price commitment for a specific scope. An invoice is a request for payment after work is completed. Use estimates for complex projects, quotes for defined work, and invoices to get paid.'
      },
      {
        question: 'How do I write a winning proposal?',
        answer: 'Start by understanding the client\'s problem deeply. Structure your proposal to show: you understand their challenge, your proposed solution, relevant experience/portfolio, clear pricing and timeline, and next steps. Focus on outcomes, not just deliverables.'
      },
      {
        question: 'When should I follow up on a proposal?',
        answer: 'Follow up 3-5 days after sending if you haven\'t heard back. Send a brief, value-adding message—perhaps addressing a potential concern or sharing relevant insight. If no response after two follow-ups, move on but keep them in your pipeline for future outreach.'
      },
      {
        question: 'How do I handle price objections?',
        answer: 'Don\'t immediately lower your price—this devalues your work. Instead, understand their budget constraints, adjust scope if needed, emphasize ROI and value, offer payment plans, or politely decline if the fit isn\'t right.'
      }
    ]
  }
];

// Map existing posts to their pillars (hub pages listed first in each cluster)
export const pillarClusters: TopicalCluster[] = [
  {
    pillarId: 'invoicing-mastery',
    postSlugs: [
      'complete-guide-to-business-invoicing',
      'invoicemonk-template-how-to-create-a-perfect-invoice-template',
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'the-importance-of-invoicing-timely-and-how-to-do-it-efficiently',
      'invoice-numbering-best-practices',
      'how-to-write-invoice-payment-terms',
      'recurring-invoices-automating-billing',
      'invoice-disputes-how-to-handle-professionally',
      'credit-notes-and-invoice-corrections',
      'how-to-create-first-professional-invoice',
      'invoice-mistakes-that-cost-you-money',
      'digital-vs-paper-invoices-pros-and-cons',
      'invoice-design-professional-branding-tips',
      'proforma-invoice-vs-commercial-invoice'
    ]
  },
  {
    pillarId: 'getting-paid',
    postSlugs: [
      'ultimate-guide-getting-paid-faster',
      'how-to-handle-late-payments-professionally',
      'online-payment-methods-comparison-small-business',
      'payment-reminder-email-templates',
      'early-payment-discounts-do-they-work',
      'cash-flow-forecasting-for-freelancers',
      'setting-up-automatic-payment-reminders',
      'payment-terms-comparison-net-30-vs-net-15',
      'mobile-payment-options-for-small-business',
      'international-payment-fees-explained'
    ]
  },
  {
    pillarId: 'business-finances',
    postSlugs: [
      'small-business-accounting-guide',
      'the-basics-of-small-business-accounting',
      'how-to-create-a-budget-for-your-small-business',
      'chart-of-accounts-for-small-business',
      'profit-margins-how-to-calculate-and-improve',
      'cash-vs-accrual-accounting-explained',
      'simple-accounting-for-small-business-beginners',
      'how-to-do-accounting-small-business-step-by-step',
      'small-business-accounting-for-owners',
      'monthly-financial-review-checklist',
      'business-bank-account-vs-personal',
      'financial-reports-every-business-needs',
      'year-end-financial-preparation'
    ]
  },
  {
    pillarId: 'tax-compliance',
    postSlugs: [
      'small-business-tax-compliance-guide',
      'small-business-tax-deductions-guide',
      'how-to-prepare-business-tax-audit',
      'firs-invoice-requirements-nigeria',
      'hmrc-invoicing-rules-uk-mtd-compliance',
      'irs-invoice-requirements-us-compliance',
      'cra-invoice-standards-canadian-compliance',
      'ato-invoice-requirements-australian-compliance',
      'quarterly-tax-payment-guide',
      'business-tax-calendar-by-country',
      'business-record-keeping-requirements',
      'tax-software-integration-guide'
    ]
  },
  {
    pillarId: 'freelancer-success',
    postSlugs: [
      'freelancer-business-guide',
      'top-10-freelance-websites',
      'how-to-become-a-good-graphic-designer',
      'freelance-contract-templates',
      'pricing-your-freelance-services',
      'freelance-time-tracking-guide',
      'finding-your-first-freelance-clients',
      'freelance-portfolio-best-practices',
      'managing-multiple-clients-efficiently',
      'when-to-hire-help-as-a-freelancer'
    ]
  },
  {
    pillarId: 'estimates-proposals',
    postSlugs: [
      'winning-proposals-estimates-guide',
      'how-to-write-winning-business-proposal',
      'estimate-vs-quote-vs-invoice-difference',
      'how-to-price-project-work',
      'following-up-on-proposals',
      'proposal-rejection-next-steps',
      'proposal-vs-estimate-vs-quote-explained',
      'winning-proposal-templates-by-industry',
      'document-types-comparison-business'
    ]
  }
];

// Outer section posts (authority building, not tied to specific pillars)
export const outerPosts: string[] = [
  'invoicemonk-free-online-invoice-and-accounting-platform',
  'small-business-marketing-101-a-guide-to-growth',
  'top-10-lucrative-business-ideas-with-small-capital',
  'impact-of-fintech-on-business-growth',
  'savings-and-investment-on-alat-how-it-works',
  'the-10-best-personal-finance-blogs'
];

// Product-aligned category mapping
export const categoryMapping: Record<string, string> = {
  'Small Business': 'Business Finance',
  'Invoicing and Billing Tips': 'Invoicing',
  'Freelancing': 'Freelancer',
  'Finance': 'Getting Paid'
};

// New semantic categories aligned with pillars
export const semanticCategories = [
  { id: 'invoicing', label: 'Invoicing', pillarId: 'invoicing-mastery' },
  { id: 'getting-paid', label: 'Getting Paid', pillarId: 'getting-paid' },
  { id: 'business-finance', label: 'Business Finance', pillarId: 'business-finances' },
  { id: 'tax-compliance', label: 'Tax & Compliance', pillarId: 'tax-compliance' },
  { id: 'freelancer', label: 'Freelancer', pillarId: 'freelancer-success' },
  { id: 'estimates', label: 'Estimates & Proposals', pillarId: 'estimates-proposals' }
];

// Helper functions
export function getPillarById(pillarId: string): Pillar | undefined {
  return pillars.find(p => p.id === pillarId);
}

export function getPillarBySlug(slug: string): Pillar | undefined {
  return pillars.find(p => p.slug === slug);
}

export function getPillarForPost(postSlug: string): Pillar | undefined {
  const cluster = pillarClusters.find(c => c.postSlugs.includes(postSlug));
  return cluster ? getPillarById(cluster.pillarId) : undefined;
}

export function getClusterPostsForPillar(pillarId: string): string[] {
  const cluster = pillarClusters.find(c => c.pillarId === pillarId);
  return cluster?.postSlugs || [];
}

export function isOuterPost(postSlug: string): boolean {
  return outerPosts.includes(postSlug);
}

export function getClusterType(postSlug: string, isPillarContent?: boolean): ClusterType {
  if (isPillarContent) return 'pillar';
  if (isOuterPost(postSlug)) return 'outer';
  const pillar = getPillarForPost(postSlug);
  return pillar ? 'cluster' : 'outer';
}

export function getSemanticCategory(oldCategory: string): string {
  return categoryMapping[oldCategory] || oldCategory;
}
