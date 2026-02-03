/**
 * Query Intent Classification System
 * Categorizes content by user search intent for better navigation and SEO
 */

export type ContentIntent = 
  | 'informational'    // User wants to learn (what is, how does, why)
  | 'navigational'     // User wants to find a specific page
  | 'transactional'    // User wants to take action (buy, sign up, download)
  | 'commercial'       // User is researching before purchase (best, vs, comparison, review)
  | 'problem-solving'; // User has a specific problem to solve

export type ContentStage = 
  | 'awareness'        // User just discovering they have a need
  | 'consideration'    // User comparing options
  | 'decision'         // User ready to choose
  | 'retention';       // Existing customer seeking help

export type ExperienceLevel =
  | 'beginner'         // First-time users, needs basics explained
  | 'intermediate'     // Has some knowledge, needs deeper info
  | 'advanced';        // Expert user, needs specific details

export interface ContentMetadata {
  intent: ContentIntent;
  stage: ContentStage;
  experienceLevel: ExperienceLevel;
  queryPatterns: string[];     // Example search queries this content answers
  problemsSolved: string[];    // Specific problems this content addresses
  nextSteps?: string[];        // Suggested follow-up content slugs
}

// Intent display configuration
export const intentConfig: Record<ContentIntent, { label: string; color: string; description: string }> = {
  informational: {
    label: 'Learn',
    color: 'bg-blue-500/10 text-blue-600',
    description: 'Educational content to build your knowledge'
  },
  navigational: {
    label: 'Find',
    color: 'bg-gray-500/10 text-gray-600',
    description: 'Quick reference and documentation'
  },
  transactional: {
    label: 'Get Started',
    color: 'bg-green-500/10 text-green-600',
    description: 'Ready-to-use tools and templates'
  },
  commercial: {
    label: 'Compare',
    color: 'bg-purple-500/10 text-purple-600',
    description: 'Comparisons to help you choose'
  },
  'problem-solving': {
    label: 'Solve',
    color: 'bg-orange-500/10 text-orange-600',
    description: 'Solutions to specific challenges'
  }
};

export const stageConfig: Record<ContentStage, { label: string; description: string }> = {
  awareness: {
    label: 'Just Starting',
    description: 'Perfect if you\'re new to this topic'
  },
  consideration: {
    label: 'Exploring Options',
    description: 'Comparing different approaches'
  },
  decision: {
    label: 'Ready to Act',
    description: 'Make an informed choice'
  },
  retention: {
    label: 'Getting Better',
    description: 'Tips for existing users'
  }
};

export const experienceConfig: Record<ExperienceLevel, { label: string; description: string }> = {
  beginner: {
    label: 'Beginner-Friendly',
    description: 'No prior knowledge required'
  },
  intermediate: {
    label: 'Intermediate',
    description: 'Some experience helpful'
  },
  advanced: {
    label: 'Advanced',
    description: 'For experienced professionals'
  }
};

// Map of blog post slugs to their intent metadata
export const postIntentMetadata: Record<string, ContentMetadata> = {
  // New Month 1 Content (February 2026)
  'how-to-create-first-professional-invoice': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to create an invoice for the first time',
      'first invoice as freelancer',
      'invoice tutorial for beginners',
      'step by step invoice creation',
      'how to make my first invoice',
      'creating an invoice as a new business'
    ],
    problemsSolved: [
      'Don\'t know how to create my first invoice',
      'Starting freelancing and need to bill clients',
      'Nervous about sending first invoice',
      'Never created an invoice before',
      'Need to learn invoicing from scratch'
    ],
    nextSteps: [
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'invoice-numbering-best-practices',
      'how-to-write-invoice-payment-terms'
    ]
  },
  'invoice-mistakes-that-cost-you-money': {
    intent: 'problem-solving',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'common invoice mistakes',
      'invoice errors to avoid',
      'why invoices get rejected',
      'invoice problems',
      'invoicing mistakes small business',
      'why am I not getting paid on time'
    ],
    problemsSolved: [
      'Clients complain about my invoices',
      'Invoices keep getting rejected',
      'Taking too long to get paid',
      'Making costly invoicing errors',
      'Payments are always delayed',
      'Not sure what\'s wrong with my invoices'
    ],
    nextSteps: [
      'complete-guide-to-business-invoicing',
      'ultimate-guide-getting-paid-faster',
      'setting-up-automatic-payment-reminders'
    ]
  },
  
  // Pillar content - typically informational, awareness/consideration stage
  'complete-guide-to-business-invoicing': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to create an invoice',
      'what is invoicing',
      'invoice guide for beginners',
      'business invoicing basics'
    ],
    problemsSolved: [
      'Don\'t know how to invoice clients',
      'Confused about what goes on an invoice',
      'Need to learn invoicing fundamentals'
    ],
    nextSteps: [
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'invoicemonk-template-how-to-create-a-perfect-invoice-template'
    ]
  },
  'ultimate-guide-getting-paid-faster': {
    intent: 'problem-solving',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to get paid faster',
      'clients not paying invoices',
      'reduce late payments',
      'improve cash flow'
    ],
    problemsSolved: [
      'Clients pay late consistently',
      'Cash flow problems from delayed payments',
      'Need strategies to collect payments'
    ],
    nextSteps: [
      'how-to-handle-late-payments-professionally',
      'setting-up-automatic-payment-reminders'
    ]
  },
  
  // How-to content - informational, various stages
  '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'what to include on invoice',
      'invoice requirements',
      'essential invoice elements',
      'invoice checklist'
    ],
    problemsSolved: [
      'Not sure what information to put on invoice',
      'Invoices missing important details',
      'Invoice rejected for missing information'
    ]
  },
  'how-to-write-invoice-payment-terms': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'invoice payment terms examples',
      'how to write payment terms',
      'net 30 meaning',
      'payment terms for invoices'
    ],
    problemsSolved: [
      'Unsure what payment terms to use',
      'Clients confused by payment terms',
      'Need clear payment term language'
    ]
  },
  'invoice-numbering-best-practices': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to number invoices',
      'invoice numbering system',
      'invoice number format',
      'sequential invoice numbers'
    ],
    problemsSolved: [
      'Invoice numbering is disorganized',
      'Need a proper numbering system',
      'Tax authority invoice number requirements'
    ]
  },
  
  // Comparison content - commercial intent
  'cash-vs-accrual-accounting-explained': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'cash vs accrual accounting',
      'which accounting method',
      'cash basis vs accrual basis',
      'accounting method comparison'
    ],
    problemsSolved: [
      'Don\'t know which accounting method to use',
      'Need to choose between cash and accrual',
      'Considering switching accounting methods'
    ]
  },
  'estimate-vs-quote-vs-invoice-difference': {
    intent: 'commercial',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'estimate vs quote difference',
      'quote vs invoice',
      'when to use estimate or quote',
      'proposal vs quote vs estimate'
    ],
    problemsSolved: [
      'Confused about document types',
      'Don\'t know when to send quote vs estimate',
      'Client asked for quote but sent estimate'
    ]
  },
  'proforma-invoice-vs-commercial-invoice': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'proforma vs commercial invoice',
      'what is proforma invoice',
      'when to use proforma invoice',
      'proforma invoice for customs'
    ],
    problemsSolved: [
      'International shipping invoice requirements',
      'Client requesting proforma invoice',
      'Customs documentation needs'
    ]
  },
  
  // Problem-solving content
  'how-to-handle-late-payments-professionally': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'client not paying invoice',
      'how to collect late payment',
      'payment reminder email',
      'dealing with late payers'
    ],
    problemsSolved: [
      'Client invoice is overdue',
      'Need to follow up on payment professionally',
      'Recurring late payment issues with client'
    ]
  },
  'credit-notes-how-and-when-to-use-them': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to issue credit note',
      'when to use credit note',
      'credit note vs refund',
      'correct invoice with credit note'
    ],
    problemsSolved: [
      'Need to correct an invoice error',
      'Client returned goods',
      'Overcharged a client'
    ]
  },
  
  // Tax/Compliance content
  'small-business-tax-deductions-guide': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'small business tax deductions',
      'what can I deduct',
      'business expense deductions',
      'tax write offs for business'
    ],
    problemsSolved: [
      'Paying too much in taxes',
      'Don\'t know what expenses are deductible',
      'Preparing for tax season'
    ]
  },
  'how-to-prepare-business-tax-audit': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'advanced',
    queryPatterns: [
      'tax audit preparation',
      'what to do during audit',
      'audit documentation required',
      'survive tax audit'
    ],
    problemsSolved: [
      'Received audit notice',
      'Need to organize records for audit',
      'Worried about tax authority review'
    ]
  },
  
  // Freelancer content
  'pricing-your-freelance-services': {
    intent: 'problem-solving',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to price freelance work',
      'freelance rate calculator',
      'what to charge as freelancer',
      'freelance pricing strategy'
    ],
    problemsSolved: [
      'Don\'t know what to charge',
      'Undercharging for services',
      'Clients say prices are too high'
    ]
  },
  'freelance-contract-templates': {
    intent: 'transactional',
    stage: 'decision',
    experienceLevel: 'beginner',
    queryPatterns: [
      'freelance contract template',
      'freelance agreement',
      'contract for freelance work',
      'freelancer terms and conditions'
    ],
    problemsSolved: [
      'Need a contract for freelance work',
      'Client requesting service agreement',
      'Protecting myself as freelancer'
    ]
  },
  'top-10-freelance-websites': {
    intent: 'commercial',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'best freelance websites',
      'where to find freelance work',
      'top freelance platforms',
      'freelance job sites'
    ],
    problemsSolved: [
      'Need to find freelance clients',
      'Starting freelance career',
      'Looking for more work'
    ]
  }
};

// Get intent metadata for a post
export function getPostIntent(slug: string): ContentMetadata | undefined {
  return postIntentMetadata[slug];
}

// Filter posts by intent
export function filterPostsByIntent(slugs: string[], intent: ContentIntent): string[] {
  return slugs.filter(slug => {
    const metadata = postIntentMetadata[slug];
    return metadata?.intent === intent;
  });
}

// Filter posts by experience level
export function filterPostsByExperience(slugs: string[], level: ExperienceLevel): string[] {
  return slugs.filter(slug => {
    const metadata = postIntentMetadata[slug];
    return metadata?.experienceLevel === level;
  });
}

// Filter posts by stage
export function filterPostsByStage(slugs: string[], stage: ContentStage): string[] {
  return slugs.filter(slug => {
    const metadata = postIntentMetadata[slug];
    return metadata?.stage === stage;
  });
}

// Get recommended next content based on current post
export function getRecommendedNextContent(currentSlug: string): string[] {
  const metadata = postIntentMetadata[currentSlug];
  return metadata?.nextSteps || [];
}

// Search posts by query pattern match
export function searchByQueryPattern(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const matches: { slug: string; score: number }[] = [];
  
  Object.entries(postIntentMetadata).forEach(([slug, metadata]) => {
    let score = 0;
    
    // Check query patterns
    metadata.queryPatterns.forEach(pattern => {
      if (pattern.toLowerCase().includes(lowerQuery)) {
        score += 2;
      }
    });
    
    // Check problems solved
    metadata.problemsSolved.forEach(problem => {
      if (problem.toLowerCase().includes(lowerQuery)) {
        score += 1;
      }
    });
    
    if (score > 0) {
      matches.push({ slug, score });
    }
  });
  
  return matches
    .sort((a, b) => b.score - a.score)
    .map(m => m.slug);
}
