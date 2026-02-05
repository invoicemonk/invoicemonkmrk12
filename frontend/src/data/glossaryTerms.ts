/**
 * Glossary Terms for Business Finance & Invoicing
 * Implements DefinedTermSet schema for SEO
 */

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  extendedDescription?: string;
  relatedTerms?: string[];
  category: 'invoicing' | 'payments' | 'accounting' | 'tax' | 'freelancing' | 'business';
  relatedArticles?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  // Invoicing Terms
  {
    term: 'Invoice',
    slug: 'invoice',
    definition: 'A commercial document issued by a seller to a buyer, detailing products or services provided, quantities, prices, and payment terms.',
    extendedDescription: 'An invoice serves as a legal record of a transaction and a formal request for payment. Professional invoices include essential elements like invoice numbers, dates, itemized descriptions, and tax information. They are crucial for cash flow management, tax compliance, and maintaining professional business relationships.',
    relatedTerms: ['credit-note', 'pro-forma-invoice', 'recurring-invoice', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['complete-guide-to-business-invoicing', '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners']
  },
  {
    term: 'Credit Note',
    slug: 'credit-note',
    definition: 'A document issued by a seller to reduce the amount a buyer owes, typically used for returns, overcharges, or billing corrections.',
    extendedDescription: 'Credit notes function as negative invoices, reducing the total amount owed by a customer. They are essential for maintaining accurate accounting records when adjustments are needed. A credit note should reference the original invoice and clearly state the reason for the credit.',
    relatedTerms: ['invoice', 'debit-note', 'accounts-receivable'],
    category: 'invoicing',
    relatedArticles: ['credit-notes-how-and-when-to-use-them']
  },
  {
    term: 'Pro Forma Invoice',
    slug: 'pro-forma-invoice',
    definition: 'A preliminary invoice sent before goods are delivered or services rendered, outlining terms and estimated costs.',
    extendedDescription: 'Pro forma invoices are used as quotations or estimates and are not demands for payment. They help clients understand expected costs and are commonly used in international trade for customs purposes. Unlike regular invoices, they can be modified before the final invoice is issued.',
    relatedTerms: ['invoice', 'estimate', 'quote'],
    category: 'invoicing',
    relatedArticles: ['proforma-invoice-vs-commercial-invoice']
  },
  {
    term: 'Recurring Invoice',
    slug: 'recurring-invoice',
    definition: 'An invoice automatically generated at regular intervals for ongoing services or subscriptions.',
    extendedDescription: 'Recurring invoices save time for businesses with retainer clients or subscription-based services. They can be set up to send automatically on a weekly, monthly, quarterly, or annual basis. Automation reduces administrative burden and ensures consistent billing.',
    relatedTerms: ['invoice', 'retainer', 'subscription-billing'],
    category: 'invoicing',
    relatedArticles: ['recurring-invoices-automating-billing']
  },
  {
    term: 'Invoice Number',
    slug: 'invoice-number',
    definition: 'A unique identifier assigned to each invoice for tracking, reference, and accounting purposes.',
    extendedDescription: 'Invoice numbering systems help organize records, simplify payment reconciliation, and meet tax authority requirements. Common formats include sequential numbers (001, 002), date-based codes (2024-001), or client-prefixed identifiers (ABC-001). Invoice numbers should never be reused.',
    relatedTerms: ['invoice', 'purchase-order'],
    category: 'invoicing',
    relatedArticles: ['invoice-numbering-best-practices']
  },
  {
    term: 'Payment Terms',
    slug: 'payment-terms',
    definition: 'Conditions specifying when and how payment is expected, such as due date, accepted methods, and any early payment discounts.',
    extendedDescription: 'Common payment terms include Net 15, Net 30, Due on Receipt, and 2/10 Net 30 (2% discount if paid within 10 days). Clear payment terms set expectations, reduce disputes, and can incentivize faster payments. Terms should be agreed upon before work begins and clearly stated on invoices.',
    relatedTerms: ['net-30', 'due-on-receipt', 'early-payment-discount'],
    category: 'payments',
    relatedArticles: ['how-to-write-invoice-payment-terms', 'understanding-payment-terms-guide']
  },
  
  // Payment Terms
  {
    term: 'Net 30',
    slug: 'net-30',
    definition: 'Payment terms indicating the full invoice amount is due within 30 days of the invoice date.',
    extendedDescription: 'Net 30 is one of the most common payment terms in business. Variations include Net 15, Net 60, and Net 90 for shorter or longer payment windows. The "net" refers to the total amount due without any deductions.',
    relatedTerms: ['payment-terms', 'due-on-receipt', 'accounts-receivable'],
    category: 'payments'
  },
  {
    term: 'Due on Receipt',
    slug: 'due-on-receipt',
    definition: 'Payment terms requiring immediate payment upon receiving the invoice.',
    extendedDescription: 'Due on Receipt terms request payment as soon as the invoice is received, though practically this often means within a few days. These terms are common for new client relationships, smaller amounts, or when the seller needs immediate cash flow.',
    relatedTerms: ['payment-terms', 'net-30', 'cash-on-delivery'],
    category: 'payments'
  },
  {
    term: 'Early Payment Discount',
    slug: 'early-payment-discount',
    definition: 'A percentage reduction offered to customers who pay before the standard due date.',
    extendedDescription: 'Commonly expressed as "2/10 Net 30" meaning 2% discount if paid within 10 days, otherwise full amount due in 30 days. Early payment discounts improve cash flow but should be calculated carefully—a 2% discount for 20 days early equals approximately 36% annually.',
    relatedTerms: ['payment-terms', 'cash-flow', 'accounts-receivable'],
    category: 'payments',
    relatedArticles: ['early-payment-discounts-do-they-work']
  },

  // Accounting Terms
  {
    term: 'Accounts Receivable',
    slug: 'accounts-receivable',
    definition: 'Money owed to a business by customers for goods or services delivered but not yet paid for.',
    extendedDescription: 'Accounts receivable appears as an asset on the balance sheet. Effective AR management includes timely invoicing, clear payment terms, systematic follow-up on overdue accounts, and aging analysis to identify collection issues. High AR can indicate cash flow problems.',
    relatedTerms: ['accounts-payable', 'invoice', 'cash-flow', 'aging-report'],
    category: 'accounting',
    relatedArticles: ['ultimate-guide-getting-paid-faster']
  },
  {
    term: 'Accounts Payable',
    slug: 'accounts-payable',
    definition: 'Money a business owes to suppliers and vendors for goods or services received but not yet paid for.',
    extendedDescription: 'Accounts payable is a liability on the balance sheet representing short-term obligations. Managing AP effectively involves tracking payment due dates, taking advantage of early payment discounts, and maintaining good vendor relationships while optimizing cash flow.',
    relatedTerms: ['accounts-receivable', 'vendor', 'cash-flow'],
    category: 'accounting'
  },
  {
    term: 'Cash Flow',
    slug: 'cash-flow',
    definition: 'The movement of money into and out of a business, measuring liquidity and the ability to pay obligations.',
    extendedDescription: 'Positive cash flow means more money coming in than going out. Even profitable businesses can fail with poor cash flow management. Key strategies include timely invoicing, efficient collections, managing payment terms with suppliers, and maintaining cash reserves.',
    relatedTerms: ['accounts-receivable', 'accounts-payable', 'working-capital'],
    category: 'accounting',
    relatedArticles: ['cash-flow-forecasting-for-freelancers']
  },
  {
    term: 'Chart of Accounts',
    slug: 'chart-of-accounts',
    definition: 'A complete listing of all accounts used by a business to categorize financial transactions.',
    extendedDescription: 'The chart of accounts organizes transactions into categories like assets, liabilities, equity, revenue, and expenses. A well-structured chart of accounts enables accurate financial reporting, tax preparation, and business analysis. It should be customized for your specific business needs.',
    relatedTerms: ['general-ledger', 'double-entry-bookkeeping', 'financial-statements'],
    category: 'accounting',
    relatedArticles: ['chart-of-accounts-setup-guide']
  },
  {
    term: 'Profit Margin',
    slug: 'profit-margin',
    definition: 'The percentage of revenue remaining after costs are deducted, indicating business profitability.',
    extendedDescription: 'Gross profit margin measures revenue minus cost of goods sold. Net profit margin accounts for all expenses including overhead, taxes, and interest. Higher margins indicate better efficiency and pricing power. Industry benchmarks vary significantly.',
    relatedTerms: ['gross-profit', 'net-profit', 'revenue'],
    category: 'accounting',
    relatedArticles: ['profit-margins-how-to-calculate-and-improve']
  },
  {
    term: 'Cash Basis Accounting',
    slug: 'cash-basis-accounting',
    definition: 'An accounting method that records income when cash is received and expenses when cash is paid.',
    extendedDescription: 'Cash basis accounting is simpler than accrual accounting and is commonly used by small businesses and sole proprietors. It provides a clear picture of actual cash on hand but may not accurately reflect long-term financial position or profitability.',
    relatedTerms: ['accrual-accounting', 'revenue-recognition'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },
  {
    term: 'Accrual Accounting',
    slug: 'accrual-accounting',
    definition: 'An accounting method that records income when earned and expenses when incurred, regardless of when cash changes hands.',
    extendedDescription: 'Accrual accounting provides a more accurate picture of a company\'s financial health by matching revenues with related expenses. It\'s required for larger businesses and those seeking outside investment. GAAP (Generally Accepted Accounting Principles) requires accrual-based financial statements.',
    relatedTerms: ['cash-basis-accounting', 'revenue-recognition', 'matching-principle'],
    category: 'accounting',
    relatedArticles: ['cash-vs-accrual-accounting-explained']
  },

  // Tax Terms
  {
    term: 'VAT (Value Added Tax)',
    slug: 'vat',
    definition: 'A consumption tax added at each stage of production or distribution, ultimately paid by the end consumer.',
    extendedDescription: 'VAT is used in over 160 countries including the UK, EU, Nigeria, and Australia (as GST). VAT-registered businesses collect VAT on sales and can reclaim VAT paid on business purchases. Rates and thresholds vary by country.',
    relatedTerms: ['sales-tax', 'gst', 'tax-invoice'],
    category: 'tax',
    relatedArticles: ['hmrc-invoicing-rules-uk-mtd-compliance']
  },
  {
    term: 'Tax Invoice',
    slug: 'tax-invoice',
    definition: 'An invoice that includes specific tax information required by tax authorities for VAT/GST purposes.',
    extendedDescription: 'Tax invoices must contain elements like tax registration numbers, tax amounts, and in some jurisdictions, specific wording. They enable businesses to claim input tax credits and are essential for tax compliance and audit readiness.',
    relatedTerms: ['vat', 'invoice', 'input-tax-credit'],
    category: 'tax'
  },
  {
    term: 'Tax Deduction',
    slug: 'tax-deduction',
    definition: 'A business expense that can be subtracted from taxable income, reducing the amount of tax owed.',
    extendedDescription: 'Common business deductions include office expenses, equipment, travel, professional services, and insurance. Proper documentation is essential—keep receipts and records for the required retention period. Consult a tax professional for jurisdiction-specific rules.',
    relatedTerms: ['taxable-income', 'business-expense', 'depreciation'],
    category: 'tax',
    relatedArticles: ['small-business-tax-deductions-guide']
  },
  {
    term: 'Withholding Tax',
    slug: 'withholding-tax',
    definition: 'Tax deducted at source from payments, typically on income, dividends, or payments to foreign entities.',
    extendedDescription: 'Withholding tax requirements vary by country and payment type. In some jurisdictions, businesses must withhold tax from contractor payments above certain thresholds. The withheld amount is paid directly to tax authorities on behalf of the recipient.',
    relatedTerms: ['income-tax', 'tax-compliance'],
    category: 'tax'
  },

  // Business Terms
  {
    term: 'Estimate',
    slug: 'estimate',
    definition: 'An approximation of costs for a project or service, not legally binding and subject to change.',
    extendedDescription: 'Estimates give clients an idea of expected costs before committing. They differ from quotes (which are typically fixed) and should clearly state assumptions and conditions that could affect the final price. Converting accepted estimates to invoices streamlines billing.',
    relatedTerms: ['quote', 'proposal', 'pro-forma-invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Quote',
    slug: 'quote',
    definition: 'A fixed price offer for specific goods or services, typically valid for a stated period.',
    extendedDescription: 'Unlike estimates, quotes are generally considered binding once accepted. They should specify exactly what is included, the validity period, payment terms, and any conditions. Professional quotes build client confidence and reduce scope creep.',
    relatedTerms: ['estimate', 'proposal', 'invoice'],
    category: 'business',
    relatedArticles: ['estimate-vs-quote-vs-invoice-difference']
  },
  {
    term: 'Proposal',
    slug: 'proposal',
    definition: 'A detailed document presenting solutions, approach, timeline, and pricing to win new business.',
    extendedDescription: 'Business proposals go beyond pricing to demonstrate understanding of client needs, proposed methodology, relevant experience, and expected outcomes. Effective proposals are customized, professional, and clearly articulate value. They often include terms and conditions.',
    relatedTerms: ['estimate', 'quote', 'scope-of-work'],
    category: 'business',
    relatedArticles: ['how-to-write-winning-business-proposal']
  },
  {
    term: 'Retainer',
    slug: 'retainer',
    definition: 'An ongoing fee paid to secure continued services, often billed monthly for a set number of hours or deliverables.',
    extendedDescription: 'Retainer agreements provide predictable income for service providers and priority access for clients. They typically specify minimum hours/deliverables, rollover policies, and scope boundaries. Monthly retainers are common in consulting, legal, and creative services.',
    relatedTerms: ['recurring-invoice', 'service-agreement', 'scope-of-work'],
    category: 'business'
  },
  {
    term: 'Scope of Work',
    slug: 'scope-of-work',
    definition: 'A document defining the specific tasks, deliverables, timeline, and boundaries of a project or engagement.',
    extendedDescription: 'A clear scope of work prevents misunderstandings and scope creep. It should detail what is and isn\'t included, milestones, acceptance criteria, and how changes will be handled. Both parties should agree to the scope before work begins.',
    relatedTerms: ['proposal', 'contract', 'deliverable'],
    category: 'business',
    relatedArticles: ['freelance-contract-templates']
  },
  {
    term: 'Purchase Order',
    slug: 'purchase-order',
    definition: 'A commercial document issued by a buyer to a seller, authorizing a purchase transaction.',
    extendedDescription: 'Purchase orders (POs) formalize buying intent and create a contractual obligation when accepted. They specify products/services, quantities, prices, and delivery terms. In B2B transactions, invoices often reference the corresponding PO number for matching.',
    relatedTerms: ['invoice', 'vendor', 'procurement'],
    category: 'business'
  },

  // Freelancing Terms
  {
    term: 'Billable Hours',
    slug: 'billable-hours',
    definition: 'Time spent on client work that can be charged to the client, as opposed to administrative or unbillable time.',
    extendedDescription: 'Tracking billable hours accurately is essential for freelancers and consultants. Typically, only 60-70% of total work time is billable due to admin, marketing, and business development. Rates should account for this reality to maintain profitability.',
    relatedTerms: ['time-tracking', 'hourly-rate', 'utilization-rate'],
    category: 'freelancing',
    relatedArticles: ['freelance-time-tracking-guide']
  },
  {
    term: 'Scope Creep',
    slug: 'scope-creep',
    definition: 'The gradual expansion of a project beyond its original boundaries, often without corresponding adjustments to budget or timeline.',
    extendedDescription: 'Scope creep erodes profitability and strains client relationships. Prevent it with clear scope definitions, change order processes, and regular project reviews. When additional work is requested, document it and discuss budget implications before proceeding.',
    relatedTerms: ['scope-of-work', 'change-order', 'project-management'],
    category: 'freelancing'
  },
  {
    term: 'Milestone Payment',
    slug: 'milestone-payment',
    definition: 'A payment structure where portions of the total fee are paid upon completing defined project phases.',
    extendedDescription: 'Milestone payments reduce risk for both parties by tying payments to deliverables. Common structures include 50% upfront/50% completion, or thirds (33% start, 33% midpoint, 34% completion). Define clear, measurable milestones in your contract.',
    relatedTerms: ['payment-terms', 'project-management', 'deliverable'],
    category: 'freelancing'
  }
];

// Get terms by category
export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter(term => term.category === category);
}

// Get term by slug
export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

// Get all category names
export function getGlossaryCategories(): GlossaryTerm['category'][] {
  return ['invoicing', 'payments', 'accounting', 'tax', 'freelancing', 'business'];
}

// Search terms
export function searchGlossaryTerms(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(term => 
    term.term.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery)
  );
}

// Get related terms for a given term
export function getRelatedTerms(slug: string): GlossaryTerm[] {
  const term = getTermBySlug(slug);
  if (!term?.relatedTerms) return [];
  return term.relatedTerms
    .map(relatedSlug => getTermBySlug(relatedSlug))
    .filter((t): t is GlossaryTerm => t !== undefined);
}
