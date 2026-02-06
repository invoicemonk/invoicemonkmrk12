/**
 * Content Templates for Gap Filling
 * Comparison articles, beginner content, and decision-stage content structures
 */

import { BlogPost } from './blogPosts';
import { defaultAuthor } from './authors';

export interface ComparisonArticle {
  slug: string;
  title: string;
  optionA: {
    name: string;
    pros: string[];
    cons: string[];
    bestFor: string;
  };
  optionB: {
    name: string;
    pros: string[];
    cons: string[];
    bestFor: string;
  };
  verdict: string;
  factors: string[];
}

export interface BeginnerGuide {
  slug: string;
  title: string;
  topic: string;
  prerequisites: string[];
  learningOutcomes: string[];
  steps: {
    title: string;
    description: string;
  }[];
  commonMistakes: string[];
  nextSteps: string[];
}

export interface DecisionGuide {
  slug: string;
  title: string;
  decision: string;
  criteria: {
    factor: string;
    weight: 'high' | 'medium' | 'low';
    questions: string[];
  }[];
  options: {
    name: string;
    scores: Record<string, number>;
    recommendation: string;
  }[];
  callToAction: string;
}

// Pre-defined comparison article templates
export const comparisonTemplates: ComparisonArticle[] = [
  {
    slug: 'invoice-software-vs-spreadsheets',
    title: 'Invoice Software vs Spreadsheets: Which is Right for Your Business?',
    optionA: {
      name: 'Invoicing Software',
      pros: [
        'Automated invoice generation and numbering',
        'Built-in payment tracking and reminders',
        'Professional templates with branding',
        'Tax calculations and compliance features',
        'Time-saving automation'
      ],
      cons: [
        'Monthly subscription cost',
        'Learning curve for new users',
        'Dependency on internet connection'
      ],
      bestFor: 'Businesses sending 5+ invoices per month or needing payment automation'
    },
    optionB: {
      name: 'Spreadsheets (Excel/Google Sheets)',
      pros: [
        'Free or included with existing software',
        'Full control over format',
        'No learning curve if already familiar',
        'Works offline'
      ],
      cons: [
        'Manual data entry for each invoice',
        'No payment tracking automation',
        'Higher risk of errors',
        'Time-consuming for recurring invoices',
        'Unprofessional appearance without design skills'
      ],
      bestFor: 'Occasional invoicing (1-2 per month) or very simple billing needs'
    },
    verdict: 'For most small businesses and freelancers sending regular invoices, dedicated invoicing software pays for itself in time saved and faster payments.',
    factors: ['Invoice volume', 'Need for automation', 'Budget', 'Technical comfort', 'Professional image']
  },
  {
    slug: 'hourly-vs-project-pricing',
    title: 'Hourly vs Project-Based Pricing: How to Choose for Your Services',
    optionA: {
      name: 'Hourly Pricing',
      pros: [
        'Fair compensation for all time worked',
        'Easier to adjust for scope changes',
        'Low risk for complex or uncertain projects',
        'Simple to calculate and explain'
      ],
      cons: [
        'Penalizes efficiency improvements',
        'Client may focus on time vs value',
        'Income limited by hours available',
        'Administrative burden of time tracking'
      ],
      bestFor: 'Ongoing work, consulting, uncertain scope, or early-career freelancers'
    },
    optionB: {
      name: 'Project-Based Pricing',
      pros: [
        'Rewards efficiency and expertise',
        'Predictable cost for clients',
        'Focus on value delivered vs time spent',
        'Potential for higher effective hourly rates'
      ],
      cons: [
        'Risk if project scope expands',
        'Requires accurate estimation skills',
        'May undercharge on complex projects',
        'Client may expect unlimited revisions'
      ],
      bestFor: 'Experienced freelancers with good estimation skills and well-defined deliverables'
    },
    verdict: 'Many successful freelancers use a hybrid approach—project pricing for well-defined work and hourly for consulting or scope-unclear projects.',
    factors: ['Scope clarity', 'Experience level', 'Client relationship', 'Project complexity', 'Industry norms']
  },
  {
    slug: 'sole-proprietor-vs-llc',
    title: 'Sole Proprietor vs LLC: Choosing Your Business Structure',
    optionA: {
      name: 'Sole Proprietorship',
      pros: [
        'Simplest and cheapest to set up',
        'No separate tax filings required',
        'Full control over all decisions',
        'Easy to dissolve if needed'
      ],
      cons: [
        'Personal liability for business debts',
        'May look less professional to clients',
        'Harder to raise capital',
        'Limited tax planning options'
      ],
      bestFor: 'Low-risk businesses, side projects, or testing a business idea'
    },
    optionB: {
      name: 'LLC (Limited Liability Company)',
      pros: [
        'Personal asset protection',
        'More professional appearance',
        'Tax flexibility (choose taxation method)',
        'Easier to bring in partners or investors'
      ],
      cons: [
        'Formation and annual fees',
        'More paperwork and compliance',
        'Varies significantly by state/country',
        'May need separate bank account and records'
      ],
      bestFor: 'Businesses with liability risk, growth plans, or seeking professional credibility'
    },
    verdict: 'An LLC provides meaningful protection and credibility for serious businesses, but sole proprietorship is fine for low-risk freelancing.',
    factors: ['Liability risk', 'Growth plans', 'Budget', 'Industry expectations', 'Tax situation']
  }
];

// Pre-defined beginner guide templates
export const beginnerTemplates: BeginnerGuide[] = [
  {
    slug: 'first-invoice-guide',
    title: 'Creating Your First Invoice: A Complete Beginner\'s Guide',
    topic: 'invoicing',
    prerequisites: [
      'A product or service to sell',
      'Basic contact information for your business',
      'Client contact and billing details'
    ],
    learningOutcomes: [
      'Understand what an invoice is and why it matters',
      'Know the essential elements every invoice needs',
      'Create a professional invoice from scratch',
      'Set appropriate payment terms',
      'Send your invoice effectively'
    ],
    steps: [
      {
        title: 'Gather your business information',
        description: 'Collect your business name, address, email, phone, and any tax registration numbers.'
      },
      {
        title: 'Get your client\'s billing details',
        description: 'Confirm the client\'s official business name, billing address, and who should receive the invoice.'
      },
      {
        title: 'Choose an invoice number system',
        description: 'Start with a simple sequential system like INV-001, INV-002, etc.'
      },
      {
        title: 'List your products or services',
        description: 'Describe what you provided, quantities, rates, and calculate totals.'
      },
      {
        title: 'Add payment terms and methods',
        description: 'Specify when payment is due and how clients can pay you.'
      },
      {
        title: 'Review and send',
        description: 'Double-check all details, then send via email with a professional message.'
      }
    ],
    commonMistakes: [
      'Forgetting to include payment due date',
      'Vague descriptions that confuse clients',
      'Missing contact information',
      'Waiting too long to send the invoice',
      'Not following up on unpaid invoices'
    ],
    nextSteps: [
      'Set up a system to track your invoices',
      'Create an invoice template for future use',
      'Learn about payment reminder best practices'
    ]
  },
  {
    slug: 'freelance-taxes-beginners',
    title: 'Freelance Taxes 101: What Every New Freelancer Needs to Know',
    topic: 'tax',
    prerequisites: [
      'Freelance income or plans to freelance',
      'Basic understanding of income vs expenses'
    ],
    learningOutcomes: [
      'Understand your tax obligations as a freelancer',
      'Know what records to keep',
      'Learn about common deductions',
      'Prepare for quarterly estimated payments',
      'Avoid common tax mistakes'
    ],
    steps: [
      {
        title: 'Understand self-employment tax',
        description: 'Unlike employees, you pay both employer and employee portions of social security/national insurance.'
      },
      {
        title: 'Set aside money for taxes',
        description: 'Save 25-30% of your freelance income for tax payments.'
      },
      {
        title: 'Track all income and expenses',
        description: 'Keep records of every payment received and business expense.'
      },
      {
        title: 'Learn your deductible expenses',
        description: 'Home office, equipment, software, travel, and professional development may be deductible.'
      },
      {
        title: 'Plan for estimated tax payments',
        description: 'Most freelancers need to pay taxes quarterly, not just at year-end.'
      },
      {
        title: 'Consider professional help',
        description: 'A tax professional can save you money and stress, especially your first year.'
      }
    ],
    commonMistakes: [
      'Not saving enough for taxes',
      'Missing deductible expenses',
      'Poor record keeping',
      'Missing estimated payment deadlines',
      'Mixing personal and business finances'
    ],
    nextSteps: [
      'Open a separate business bank account',
      'Set up expense tracking',
      'Research specific rules for your country/state'
    ]
  },
  {
    slug: 'first-client-onboarding',
    title: 'Landing Your First Client: From Proposal to Payment',
    topic: 'freelancing',
    prerequisites: [
      'A marketable skill or service',
      'Basic portfolio or work samples',
      'Pricing for your services'
    ],
    learningOutcomes: [
      'Respond professionally to client inquiries',
      'Create a winning proposal',
      'Set clear expectations with contracts',
      'Onboard clients smoothly',
      'Get paid on time'
    ],
    steps: [
      {
        title: 'Respond quickly to inquiries',
        description: 'Reply within 24 hours with a professional message showing interest and asking clarifying questions.'
      },
      {
        title: 'Have a discovery conversation',
        description: 'Understand the client\'s needs, timeline, and budget before proposing.'
      },
      {
        title: 'Create a tailored proposal',
        description: 'Show you understand their problem and explain how you\'ll solve it.'
      },
      {
        title: 'Use a contract',
        description: 'Protect both parties with clear terms about scope, payment, and deliverables.'
      },
      {
        title: 'Collect a deposit',
        description: 'Request 25-50% upfront before starting work.'
      },
      {
        title: 'Onboard professionally',
        description: 'Send a welcome email with next steps and set communication expectations.'
      }
    ],
    commonMistakes: [
      'Underpricing to get the job',
      'Starting work without a contract',
      'Not clarifying scope clearly',
      'Poor communication during the project',
      'Waiting too long to invoice'
    ],
    nextSteps: [
      'Create proposal and contract templates',
      'Set up an invoicing system',
      'Ask for testimonials after successful projects'
    ]
  }
];

// Pre-defined decision guide templates
export const decisionTemplates: DecisionGuide[] = [
  {
    slug: 'choose-invoicing-software',
    title: 'How to Choose the Right Invoicing Software for Your Business',
    decision: 'Selecting invoicing software',
    criteria: [
      {
        factor: 'Ease of Use',
        weight: 'high',
        questions: [
          'Can you create an invoice in under 5 minutes?',
          'Is the interface intuitive without training?',
          'Does it work well on mobile?'
        ]
      },
      {
        factor: 'Features',
        weight: 'high',
        questions: [
          'Does it support recurring invoices?',
          'Can you track expenses?',
          'Does it integrate with your payment processor?',
          'Are there reporting capabilities?'
        ]
      },
      {
        factor: 'Price',
        weight: 'medium',
        questions: [
          'Is there a free tier for starting out?',
          'Does pricing scale with your business?',
          'Are there hidden fees for payments or exports?'
        ]
      },
      {
        factor: 'Compliance',
        weight: 'medium',
        questions: [
          'Does it meet your country\'s tax requirements?',
          'Can it generate compliant tax reports?',
          'Does it calculate VAT/GST correctly?'
        ]
      },
      {
        factor: 'Support',
        weight: 'low',
        questions: [
          'Is customer support responsive?',
          'Are there good help docs and tutorials?',
          'Is there an active user community?'
        ]
      }
    ],
    options: [
      {
        name: 'Invoicemonk',
        scores: { 'Ease of Use': 5, 'Features': 5, 'Price': 5, 'Compliance': 5, 'Support': 4 },
        recommendation: 'Best for global small businesses and freelancers needing compliance'
      },
      {
        name: 'Basic Spreadsheet',
        scores: { 'Ease of Use': 2, 'Features': 1, 'Price': 5, 'Compliance': 1, 'Support': 1 },
        recommendation: 'Only for occasional, simple invoicing'
      }
    ],
    callToAction: 'Try Invoicemonk free and see how it works for your business'
  }
];

// Function to generate comparison article content
export function generateComparisonContent(template: ComparisonArticle): string {
  return `
    <p>Choosing between ${template.optionA.name} and ${template.optionB.name} is a common decision for business owners. This guide breaks down the key differences to help you make the right choice.</p>

    <h2>${template.optionA.name}</h2>
    <h3>Advantages</h3>
    <ul>
      ${template.optionA.pros.map(pro => `<li>${pro}</li>`).join('')}
    </ul>
    <h3>Disadvantages</h3>
    <ul>
      ${template.optionA.cons.map(con => `<li>${con}</li>`).join('')}
    </ul>
    <p><strong>Best for:</strong> ${template.optionA.bestFor}</p>

    <h2>${template.optionB.name}</h2>
    <h3>Advantages</h3>
    <ul>
      ${template.optionB.pros.map(pro => `<li>${pro}</li>`).join('')}
    </ul>
    <h3>Disadvantages</h3>
    <ul>
      ${template.optionB.cons.map(con => `<li>${con}</li>`).join('')}
    </ul>
    <p><strong>Best for:</strong> ${template.optionB.bestFor}</p>

    <h2>Key Factors to Consider</h2>
    <ul>
      ${template.factors.map(factor => `<li>${factor}</li>`).join('')}
    </ul>

    <h2>The Verdict</h2>
    <p>${template.verdict}</p>
  `;
}

// Function to generate beginner guide content
export function generateBeginnerContent(template: BeginnerGuide): string {
  return `
    <p>This step-by-step guide will take you from complete beginner to confidently ${template.topic === 'invoicing' ? 'creating professional invoices' : template.topic === 'tax' ? 'understanding your tax obligations' : 'managing your freelance business'}.</p>

    <h2>What You'll Need Before Starting</h2>
    <ul>
      ${template.prerequisites.map(prereq => `<li>${prereq}</li>`).join('')}
    </ul>

    <h2>What You'll Learn</h2>
    <ul>
      ${template.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
    </ul>

    <h2>Step-by-Step Guide</h2>
    ${template.steps.map((step, i) => `
      <h3>Step ${i + 1}: ${step.title}</h3>
      <p>${step.description}</p>
    `).join('')}

    <h2>Common Mistakes to Avoid</h2>
    <ul>
      ${template.commonMistakes.map(mistake => `<li>${mistake}</li>`).join('')}
    </ul>

    <h2>Next Steps</h2>
    <p>Now that you've completed this guide, here's what to do next:</p>
    <ul>
      ${template.nextSteps.map(step => `<li>${step}</li>`).join('')}
    </ul>
  `;
}
