export interface HelpGuide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: 'getting-started' | 'core-features' | 'financial-tools' | 'administration';
  steps: Array<{ name: string; text: string }>;
  content: string;
  relatedGuides: string[];
  targetFeature: string;
  faq?: Array<{ question: string; answer: string }>;
  estimatedTime?: string;
}

export const categoryLabels: Record<HelpGuide['category'], string> = {
  'getting-started': 'Getting Started',
  'core-features': 'Core Features',
  'financial-tools': 'Financial Tools',
  'administration': 'Administration',
};

export const categoryOrder: HelpGuide['category'][] = [
  'getting-started',
  'core-features',
  'financial-tools',
  'administration',
];

export const helpGuides: HelpGuide[] = [
  // ─── Guide 1: Getting Started ───
  {
    slug: 'getting-started',
    title: 'Getting Started with Invoicemonk — Your First Invoice in 5 Minutes',
    description: 'Set up your account, complete your business profile, and issue your first compliance-ready invoice.',
    icon: 'Rocket',
    category: 'getting-started',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Create Your Account', text: 'Visit app.invoicemonk.com, click "Get Started Free", enter your details, and verify your email address.' },
      { name: 'Set Up Your Business Profile', text: 'Enter your business name, legal name, country, TIN, logo, address, and VAT details if applicable.' },
      { name: 'Choose Your Plan', text: 'Start with the free Starter plan or upgrade to Starter Paid, Professional, or Business for more features.' },
      { name: 'Set Up Payment Methods', text: 'Add your bank account or mobile money details so clients know how to pay you.' },
    ],
    relatedGuides: ['managing-clients', 'creating-invoices', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com/signup',
    faq: [
      { question: 'Is Invoicemonk free to use?', answer: 'Yes, the Starter plan is completely free. You can create invoices, manage clients, and track basic expenses at no cost. Upgrade for advanced features like reports, team management, and custom branding.' },
      { question: 'Do I need a TIN to use Invoicemonk?', answer: 'While not strictly required to create an account, adding your Tax Identification Number ensures your invoices are fully compliant with local regulations. For Nigerian businesses, this is your FIRS TIN.' },
      { question: 'How do I complete my business profile to 100%?', answer: 'Fill in all fields: business name, legal name, TIN, VAT number (if applicable), logo, full address, contact email, and phone number. Invoicemonk shows your completion percentage and highlights missing fields.' },
    ],
    content: `
      <h2>Step 1: Create Your Account</h2>
      <p>Getting started with Invoicemonk takes less than two minutes. Visit <a href="https://app.invoicemonk.com" target="_blank" rel="noopener noreferrer">app.invoicemonk.com</a> and click <strong>"Get Started Free"</strong>.</p>
      <ul>
        <li>Enter your full name, email address, and a secure password</li>
        <li>Verify your email address by clicking the link sent to your inbox</li>
        <li>Email verification is required before you can issue invoices</li>
      </ul>

      <h2>Step 2: Set Up Your Business Profile</h2>
      <p>After signing in, you'll be prompted to create your business. This information appears on all your invoices and ensures compliance.</p>
      <ul>
        <li>Enter your <strong>business name</strong> and <strong>legal name</strong></li>
        <li>Select your <strong>country/jurisdiction</strong></li>
        <li>Add your <strong>Tax Identification Number (TIN)</strong> — for Nigerian businesses this is your FIRS TIN</li>
        <li>Upload your <strong>business logo</strong> (appears on all invoices)</li>
        <li>Add your business address, contact email, and phone number</li>
        <li>If you're VAT-registered (Nigeria), toggle the VAT registration option and enter your VAT number</li>
      </ul>

      <h2>Step 3: Choose Your Plan</h2>
      <p>Invoicemonk offers a free Starter plan to get you going. As your business grows, upgrade for more features:</p>
      <ul>
        <li><strong>Starter (Free)</strong> — Basic invoicing and client management</li>
        <li><strong>Starter Paid</strong> — More invoices and expense tracking</li>
        <li><strong>Professional</strong> — Reports, team management, custom templates</li>
        <li><strong>Business</strong> — Full suite with audit logs, multi-currency, and priority support</li>
      </ul>
      <p>Pricing adjusts by region — Nigerian businesses see prices in Naira. Visit our <a href="/pricing">pricing page</a> for full details.</p>

      <h2>Step 4: Set Up Payment Methods</h2>
      <p>Go to <strong>Business Settings</strong> and add your payment details (bank account, mobile money, etc.). These appear on your invoices so clients know exactly how to pay you.</p>

      <div class="callout">
        <strong>Pro Tip:</strong> Complete your business profile to 100% — this ensures all your invoices are fully compliant with local regulations. Invoicemonk shows your completion percentage and highlights any missing fields.
      </div>
    `,
  },

  // ─── Guide 2: Managing Clients ───
  {
    slug: 'managing-clients',
    title: 'How to Build and Manage Your Client Database',
    description: 'Add clients, store their details, and quickly create invoices without re-entering information.',
    icon: 'Users',
    category: 'getting-started',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navigate to Clients', text: 'Click "Clients" in the sidebar to access your client database.' },
      { name: 'Add a New Client', text: 'Click "Add Client", choose Company or Individual, and enter their name, email, phone, country, and Tax ID.' },
      { name: 'Add Address Details', text: 'Expand the Address section to add their full business address for invoice compliance.' },
      { name: 'Search and Manage', text: 'Use the search bar to find clients by name or email. Click any client card to view details and invoice history.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'notifications-reminders'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Why is the client TIN required for B2B invoices?', answer: 'For Nigerian B2B transactions, tax regulations require the client\'s Tax Identification Number on invoices. Invoicemonk will warn you if you try to issue a B2B invoice without it.' },
      { question: 'Can I import clients from a spreadsheet?', answer: 'Currently, clients are added individually through the dashboard. Bulk import via CSV is on our roadmap for future release.' },
    ],
    content: `
      <h2>Adding a New Client</h2>
      <p>Before you can issue invoices, you need to add your clients. Invoicemonk stores all client details so you can quickly create invoices without re-entering information each time.</p>
      <ul>
        <li>Navigate to <strong>Clients</strong> from the sidebar</li>
        <li>Click <strong>Add Client</strong></li>
        <li>Choose the client type: <strong>Company</strong> or <strong>Individual</strong></li>
        <li>Enter the client's name, email, and phone number</li>
        <li>Select the client's country/location</li>
        <li>For compliance, add their <strong>Tax ID (TIN)</strong> — especially important for B2B transactions in Nigeria</li>
        <li>For companies, optionally add a <strong>CAC registration number</strong> and contact person</li>
        <li>Expand the <strong>Address</strong> section to add their full address</li>
      </ul>

      <h2>Searching and Managing Clients</h2>
      <ul>
        <li>Use the <strong>search bar</strong> to quickly find clients by name or email</li>
        <li>Click on any client card to view their details, invoice history, and total amount billed</li>
        <li>Edit client details at any time from the client detail page</li>
      </ul>

      <div class="callout">
        <strong>Compliance Note:</strong> For Nigerian B2B transactions, the client's TIN is required for invoice compliance. Invoicemonk will warn you if you try to issue a B2B invoice without the client's TIN.
      </div>
    `,
  },

  // ─── Guide 3: Creating Invoices ───
  {
    slug: 'creating-invoices',
    title: 'Creating Professional, Compliance-Ready Invoices',
    description: 'Create, issue, send, and download cryptographically verified invoices with a complete audit trail.',
    icon: 'FileText',
    category: 'core-features',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Start a New Invoice', text: 'Click "Create Invoice" from the dashboard or navigate to Invoices → New Invoice.' },
      { name: 'Select Client and Template', text: 'Choose a client from your database and select an invoice template.' },
      { name: 'Add Line Items', text: 'Enter descriptions, quantities, and unit prices. Tax is auto-calculated for VAT-registered businesses.' },
      { name: 'Save or Issue', text: 'Save as Draft for later editing, or Issue to lock the invoice, assign a number, and generate a verification QR code.' },
      { name: 'Send to Client', text: 'Click Send to email the invoice. The client receives a link to view it online.' },
    ],
    relatedGuides: ['managing-clients', 'payments-receipts', 'invoice-verification', 'credit-notes'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Can I edit an invoice after issuing it?', answer: 'No. Issued invoices are locked to maintain audit integrity. If you need to make changes, void the invoice and create a new one, or issue a credit note for adjustments.' },
      { question: 'What invoice statuses are available?', answer: 'Draft, Issued, Sent, Viewed, Paid, Voided, and Credited. Each status is tracked with timestamps in the audit trail.' },
      { question: 'Is VAT automatically calculated?', answer: 'Yes, for VAT-registered Nigerian businesses, the 7.5% VAT rate is automatically applied. You can mark individual line items as VAT-exempt if applicable.' },
    ],
    content: `
      <h2>Creating a New Invoice</h2>
      <p>The invoicing workflow is the heart of Invoicemonk. Every invoice is cryptographically verified and includes an immutable audit trail.</p>
      <ul>
        <li>Click <strong>Create Invoice</strong> from the dashboard or navigate to <strong>Invoices → New Invoice</strong></li>
        <li>Select a <strong>client</strong> from your database (or add a new one inline)</li>
        <li>Choose an <strong>invoice template</strong> (Professional plan and above)</li>
        <li>Set the <strong>issue date</strong> and <strong>due date</strong></li>
      </ul>

      <h2>Adding Line Items</h2>
      <ul>
        <li>Enter a <strong>description</strong> for each item</li>
        <li>Set the <strong>quantity</strong> and <strong>unit price</strong></li>
        <li>Tax rate is auto-calculated for VAT-registered Nigerian businesses (7.5%)</li>
        <li>Mark individual items as <strong>VAT-exempt</strong> if applicable</li>
        <li>Add optional notes, terms, and a summary</li>
        <li>Select the <strong>payment method</strong> to display on the invoice</li>
      </ul>

      <h2>Saving vs. Issuing</h2>
      <ul>
        <li><strong>Save as Draft:</strong> Saves the invoice without assigning an invoice number. You can edit it later.</li>
        <li><strong>Issue:</strong> Locks the invoice, assigns an official invoice number, creates a cryptographic hash, and generates a QR verification code. Issued invoices cannot be edited.</li>
      </ul>

      <h2>Invoice Statuses</h2>
      <ul>
        <li><strong>Draft</strong> — Saved but not yet issued</li>
        <li><strong>Issued</strong> — Officially issued with a number and verification code</li>
        <li><strong>Sent</strong> — Email delivered to the client</li>
        <li><strong>Viewed</strong> — Client has opened the invoice link</li>
        <li><strong>Paid</strong> — Full payment recorded</li>
        <li><strong>Voided</strong> — Cancelled (with reason logged)</li>
        <li><strong>Credited</strong> — A credit note has been issued against this invoice</li>
      </ul>

      <h2>Sending Invoices</h2>
      <p>From the invoice detail page, click <strong>Send</strong> to email the invoice to your client. The client receives a professional email with a link to view the invoice online. You'll be notified when the client views it.</p>

      <h2>Downloading PDFs</h2>
      <p>Click <strong>Download PDF</strong> on any issued invoice to get a professional PDF with your logo, QR code, and all compliance details.</p>
    `,
  },

  // ─── Guide 4: Payments & Receipts ───
  {
    slug: 'payments-receipts',
    title: 'How to Record Payments and Generate Receipts',
    description: 'Record full or partial payments and automatically generate cryptographically verified receipts.',
    icon: 'CreditCard',
    category: 'core-features',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Open the Invoice', text: 'Navigate to the Invoices page and open the invoice you want to record payment for.' },
      { name: 'Record Payment', text: 'Click "Record Payment", enter the amount, date, payment method, and optionally upload proof of payment.' },
      { name: 'Handle Partial Payments', text: 'Record multiple partial payments against a single invoice. The status updates to "Paid" only when the full amount is received.' },
      { name: 'View and Share Receipts', text: 'Navigate to Receipts to see all generated receipts. Download PDFs or share the verification link.' },
    ],
    relatedGuides: ['creating-invoices', 'invoice-verification', 'reports-exports'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Are receipts generated automatically?', answer: 'Yes. Every time you record a payment, an official receipt is automatically generated with a unique receipt number, verification ID, and all payment details.' },
      { question: 'Can I record partial payments?', answer: 'Yes. You can record multiple partial payments against a single invoice. The invoice shows the running total and only updates to "Paid" when the full amount is received.' },
    ],
    content: `
      <h2>Recording a Payment</h2>
      <p>When your client pays, recording the payment in Invoicemonk automatically generates an immutable receipt with cryptographic verification.</p>
      <ul>
        <li>Open the invoice from the <strong>Invoices</strong> page</li>
        <li>Click <strong>Record Payment</strong></li>
        <li>Enter the payment amount, date, and payment method</li>
        <li>Optionally upload proof of payment (bank transfer screenshot, etc.)</li>
        <li>Click <strong>Record</strong> — the invoice status updates to "Paid" if fully paid</li>
      </ul>

      <h2>Partial Payments</h2>
      <p>You can record multiple partial payments against a single invoice. The invoice shows the running total of payments received vs. the amount due. The status updates to "Paid" only when the full amount is received.</p>

      <h2>Automatic Receipts</h2>
      <ul>
        <li>Every payment automatically generates an official receipt</li>
        <li>Receipts include a unique receipt number, verification ID, and all payment details</li>
        <li>Navigate to <strong>Receipts</strong> to see all generated receipts</li>
        <li>Download receipt PDFs or share the verification link with clients</li>
      </ul>

      <h2>Receipt Verification</h2>
      <p>Each receipt has a public verification link that anyone can use to confirm its authenticity. Share the link or let clients scan the QR code on the PDF.</p>
    `,
  },

  // ─── Guide 5: Invoice Verification ───
  {
    slug: 'invoice-verification',
    title: 'QR Code Verification — Proving Invoice Authenticity',
    description: 'Understand how cryptographic verification and QR codes prove document authenticity.',
    icon: 'Shield',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Issue an Invoice', text: 'When you issue an invoice, Invoicemonk automatically creates a cryptographic hash and generates a unique verification ID and QR code.' },
      { name: 'Share with Confidence', text: 'Send the invoice to your client. The QR code is embedded in the PDF and online view.' },
      { name: 'Verify Authenticity', text: 'Anyone can scan the QR code or visit the verification URL to confirm the document is genuine and untampered.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: '/compliance',
    faq: [
      { question: 'Can anyone verify my invoices?', answer: 'Yes. The verification page is public. Anyone with the QR code or verification URL — clients, auditors, regulators — can independently confirm the document\'s authenticity.' },
      { question: 'What does the verification page show?', answer: 'The verification page displays the document status, amounts, dates, and confirms that the data matches the original cryptographic hash, proving the invoice hasn\'t been tampered with.' },
    ],
    content: `
      <h2>How Verification Works</h2>
      <p>Every issued invoice and receipt on Invoicemonk comes with a unique verification ID and QR code. This allows anyone — your client, an auditor, or a regulator — to independently verify the document's authenticity.</p>
      <ul>
        <li>When an invoice is issued, Invoicemonk creates a <strong>cryptographic hash</strong> of all invoice data</li>
        <li>A <strong>unique verification ID</strong> is assigned and a <strong>QR code</strong> is generated</li>
        <li>The QR code links to a public verification page showing the invoice details</li>
        <li>Anyone scanning the QR code or visiting the verification URL can confirm the invoice is genuine and hasn't been tampered with</li>
      </ul>

      <h2>Verifying an Invoice</h2>
      <ul>
        <li>Scan the <strong>QR code</strong> on any Invoicemonk invoice or receipt</li>
        <li>Or visit the <strong>verification URL</strong> directly</li>
        <li>The verification page shows the document status, amounts, dates, and confirmation that the data matches</li>
      </ul>
    `,
  },

  // ─── Guide 6: Credit Notes ───
  {
    slug: 'credit-notes',
    title: 'Issuing Credit Notes for Voided or Adjusted Invoices',
    description: 'Reverse or adjust issued invoices while maintaining a complete, auditable trail.',
    icon: 'RotateCcw',
    category: 'core-features',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navigate to the Original Invoice', text: 'Open the invoice that needs to be reversed or adjusted.' },
      { name: 'Void the Invoice', text: 'Click "Void" and provide a reason for the voiding. A credit note is automatically generated.' },
      { name: 'View Credit Notes', text: 'Navigate to Credit Notes from the sidebar to see all credit notes with their linked invoices.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'When should I issue a credit note?', answer: 'Issue a credit note when a client was overcharged, services were not delivered, an invoice was issued in error, or a partial refund is needed.' },
      { question: 'Can I edit a credit note after creation?', answer: 'No. Like invoices, credit notes are immutable once created. They receive their own unique number and verification ID for audit integrity.' },
    ],
    content: `
      <h2>When to Use Credit Notes</h2>
      <p>When you need to reverse or adjust an issued invoice, Invoicemonk supports credit notes that maintain a complete audit trail.</p>
      <ul>
        <li>Client was overcharged</li>
        <li>Services were not delivered</li>
        <li>Invoice was issued in error</li>
        <li>Partial refund needed</li>
      </ul>

      <h2>Creating a Credit Note</h2>
      <ul>
        <li>Navigate to the <strong>original invoice</strong></li>
        <li>Click <strong>Void</strong> and provide a reason</li>
        <li>A credit note is automatically generated referencing the original invoice</li>
        <li>The credit note gets its own unique number and verification ID</li>
      </ul>

      <h2>Viewing Credit Notes</h2>
      <ul>
        <li>Navigate to <strong>Credit Notes</strong> from the sidebar</li>
        <li>Search by credit note number, original invoice number, or client name</li>
        <li>Click on any credit note to see the full details and linked invoice</li>
      </ul>
    `,
  },

  // ─── Guide 7: Expense Tracking ───
  {
    slug: 'expense-tracking',
    title: 'Track and Categorize Your Business Expenses',
    description: 'Record expenses, categorize them, and see where your money is going with visual breakdowns.',
    icon: 'Receipt',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navigate to Expenses', text: 'Click "Expenses" in the sidebar to access the expense tracker.' },
      { name: 'Add an Expense', text: 'Click "Add Expense", enter the amount, date, description, category, vendor name, and optional notes.' },
      { name: 'Filter and Search', text: 'Filter by category, search by description or vendor, and switch between accounting periods.' },
      { name: 'Export Your Data', text: 'Export expenses as CSV or JSON for your accountant or tax filing, scoped to the selected period.' },
    ],
    relatedGuides: ['accounting-overview', 'reports-exports', 'business-settings'],
    targetFeature: '/expenses',
    faq: [
      { question: 'What expense categories are available?', answer: 'Invoicemonk provides default categories including Office Supplies, Travel, Software, Marketing, Professional Services, and Utilities. Categories help you see visual breakdowns of where your money goes.' },
      { question: 'Can I export expenses for my accountant?', answer: 'Yes. Export expenses as CSV or JSON format. Exports are scoped to the selected accounting period and currency account for accuracy.' },
    ],
    content: `
      <h2>Adding an Expense</h2>
      <p>Invoicemonk's expense tracker helps you record business expenses, categorize them, and see where your money is going — all scoped by currency account for accurate accounting.</p>
      <ul>
        <li>Navigate to <strong>Expenses</strong> from the sidebar</li>
        <li>Click <strong>Add Expense</strong></li>
        <li>Enter the amount, date, and description</li>
        <li>Select a category (Office Supplies, Travel, Software, Marketing, Professional Services, Utilities, etc.)</li>
        <li>Add vendor name and optional notes</li>
        <li>Save the expense</li>
      </ul>

      <h2>Filtering and Searching</h2>
      <ul>
        <li>Filter expenses by category using the dropdown</li>
        <li>Search by description, vendor, or notes</li>
        <li>Switch between accounting periods (monthly, quarterly, yearly)</li>
      </ul>

      <h2>Expense Breakdown</h2>
      <p>The dashboard shows a visual breakdown of expenses by category with percentages. See total expenses for the selected period at a glance.</p>

      <h2>Exporting Expenses</h2>
      <p>Export your expenses as CSV or JSON for your accountant or tax filing. Exports are scoped to the selected period and currency account.</p>
    `,
  },

  // ─── Guide 8: Accounting Overview ───
  {
    slug: 'accounting-overview',
    title: 'Your Financial Overview — Income, Expenses, and Results',
    description: 'Get a bird\'s-eye view of your finances with income, expense, and profit/loss views.',
    icon: 'Calculator',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'View Accounting Income', text: 'See all revenue from paid invoices, filtered by accounting period, with income trends over time.' },
      { name: 'Review Accounting Expenses', text: 'Review all recorded expenses with category breakdowns and period-over-period comparisons.' },
      { name: 'Check Accounting Results', text: 'View net income/loss calculation and profit margin, all scoped by currency account.' },
    ],
    relatedGuides: ['expense-tracking', 'reports-exports', 'analytics'],
    targetFeature: '/accounting',
    faq: [
      { question: 'Is Invoicemonk a replacement for accounting software?', answer: 'Invoicemonk\'s accounting features are a management tool for day-to-day visibility into your finances. For formal bookkeeping and tax filing, always consult with a qualified accountant.' },
      { question: 'Why are results scoped by currency account?', answer: 'To ensure accuracy, all financial data is kept in a single currency per account. No cross-currency mixing means your profit/loss calculations are always precise.' },
    ],
    content: `
      <h2>Accounting Income</h2>
      <p>The Accounting section gives you a bird's-eye view of your business finances with three key views.</p>
      <ul>
        <li>See all revenue from paid invoices</li>
        <li>Filter by accounting period</li>
        <li>View income trends over time</li>
      </ul>

      <h2>Accounting Expenses</h2>
      <ul>
        <li>Review all recorded expenses</li>
        <li>Category breakdown with visual charts</li>
        <li>Period-over-period comparison</li>
      </ul>

      <h2>Accounting Results</h2>
      <ul>
        <li>Net income/loss calculation (Income minus Expenses)</li>
        <li>See your profit margin at a glance</li>
        <li>All data scoped by currency account — no cross-currency mixing</li>
      </ul>

      <div class="callout">
        <strong>Important:</strong> Invoicemonk's accounting features are a management tool, not a substitute for professional accounting software. Always consult with a qualified accountant for tax filing.
      </div>
    `,
  },

  // ─── Guide 9: Reports & Exports ───
  {
    slug: 'reports-exports',
    title: 'Generate Compliance-Ready Reports',
    description: 'Generate professional reports across revenue, receipts, expenses, accounting, and compliance categories.',
    icon: 'BarChart3',
    category: 'financial-tools',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navigate to Reports', text: 'Click "Reports" in the sidebar to access the report generator.' },
      { name: 'Select Report Category', text: 'Choose from Revenue, Receipts, Expenses, Accounting, or Compliance report categories.' },
      { name: 'Set Parameters', text: 'Select the year and specific report type within the category.' },
      { name: 'Generate and Download', text: 'Click "Generate" to download as JSON or CSV format. All reports are scoped to your active currency account.' },
    ],
    relatedGuides: ['accounting-overview', 'expense-tracking', 'analytics', 'audit-logs'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'What report formats are available?', answer: 'Reports can be downloaded in JSON or CSV format. CSV is ideal for spreadsheet software like Excel or Google Sheets, while JSON works well for integrations.' },
      { question: 'Are reports single-currency?', answer: 'Yes. All reports are scoped to your active currency account to ensure accuracy. Switch currency accounts to generate reports for different currencies.' },
    ],
    content: `
      <h2>Report Categories</h2>
      <p>Invoicemonk generates professional reports across five categories. Reports are available on Professional and Business plans.</p>

      <h3>Revenue Reports</h3>
      <ul>
        <li>Revenue summary by period</li>
        <li>Revenue by client breakdown</li>
        <li>Aging analysis for outstanding invoices</li>
      </ul>

      <h3>Receipt Reports</h3>
      <ul>
        <li>Payment receipt register</li>
        <li>Receipt verification audit</li>
      </ul>

      <h3>Expense Reports</h3>
      <ul>
        <li>Expense summary by category</li>
        <li>Vendor-wise expense breakdown</li>
      </ul>

      <h3>Accounting Reports</h3>
      <ul>
        <li>Profit & loss statement</li>
        <li>Income vs. expenses comparison</li>
      </ul>

      <h3>Compliance Reports</h3>
      <ul>
        <li>Tax summary report</li>
        <li>Invoice register for audit</li>
      </ul>

      <h2>Generating a Report</h2>
      <ul>
        <li>Navigate to <strong>Reports</strong> from the sidebar</li>
        <li>Select the year and report category</li>
        <li>Click <strong>Generate</strong> to download as JSON or CSV</li>
        <li>All reports are scoped to your active currency account</li>
      </ul>

      <div class="callout">
        <strong>Compliance Note:</strong> All exports include verification hashes and timestamps. Reports are single-currency to ensure accuracy.
      </div>
    `,
  },

  // ─── Guide 10: Analytics ───
  {
    slug: 'analytics',
    title: 'Understand Your Business with Visual Analytics',
    description: 'View interactive charts for revenue, invoice status, payment aging, and monthly trends.',
    icon: 'PieChart',
    category: 'financial-tools',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navigate to Analytics', text: 'Click "Analytics" in the sidebar to access your business insights dashboard.' },
      { name: 'Select Time Period', text: 'Choose the quarter you want to analyze from the period selector.' },
      { name: 'Explore Charts', text: 'View Revenue by Client, Invoice Status Distribution, Payment Aging, and Monthly Comparison charts with hover details.' },
    ],
    relatedGuides: ['reports-exports', 'accounting-overview', 'payments-receipts'],
    targetFeature: 'https://app.invoicemonk.com',
    content: `
      <h2>Available Analytics</h2>
      <p>The Analytics page provides visual insights into your invoicing activity with interactive charts and breakdowns.</p>
      <ul>
        <li><strong>Revenue by Client</strong> — Bar chart showing which clients contribute the most revenue</li>
        <li><strong>Invoice Status Distribution</strong> — Pie chart of draft, issued, sent, viewed, paid, and voided invoices</li>
        <li><strong>Payment Aging</strong> — See how long it takes clients to pay on average</li>
        <li><strong>Monthly Comparison</strong> — Line chart comparing revenue month over month</li>
      </ul>

      <h2>Using Analytics</h2>
      <ul>
        <li>Navigate to <strong>Analytics</strong> from the sidebar</li>
        <li>Select the time period (quarter)</li>
        <li>View interactive charts with hover details</li>
        <li>Use insights to identify your best clients, track payment patterns, and spot trends</li>
      </ul>
    `,
  },

  // ─── Guide 11: Team Management ───
  {
    slug: 'team-management',
    title: 'Invite Your Team and Manage Roles',
    description: 'Invite team members, assign roles, and control access to your Invoicemonk business.',
    icon: 'UserPlus',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Navigate to Team', text: 'Click "Team" in the sidebar to access team management.' },
      { name: 'Invite a Member', text: 'Click "Invite Member", enter their email address, and select a role (Owner, Admin, or Member).' },
      { name: 'Manage Roles', text: 'Change a member\'s role, remove team members, or resend pending invitations from the team page.' },
    ],
    relatedGuides: ['business-settings', 'audit-logs', 'getting-started'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'What are the available team roles?', answer: 'Owner has full access including billing. Admin can manage invoices, clients, and settings but not billing. Member can create and view invoices and clients but cannot change settings.' },
      { question: 'Which plans support team management?', answer: 'Team management is available on Professional and Business plans. The Starter plans are single-user only.' },
    ],
    content: `
      <h2>Available Roles</h2>
      <p>On Professional and Business plans, you can invite team members to your Invoicemonk business and assign roles to control what they can do.</p>
      <ul>
        <li><strong>Owner</strong> — Full access to everything including billing and team management</li>
        <li><strong>Admin</strong> — Can manage invoices, clients, and settings, but cannot manage billing</li>
        <li><strong>Member</strong> — Can create and view invoices and clients, but cannot change settings</li>
      </ul>

      <h2>Inviting Team Members</h2>
      <ul>
        <li>Navigate to <strong>Team</strong> from the sidebar</li>
        <li>Click <strong>Invite Member</strong></li>
        <li>Enter their email address and select a role</li>
        <li>They'll receive an invitation email to join your business</li>
      </ul>

      <h2>Managing Team Members</h2>
      <ul>
        <li>Change a member's role from the team page</li>
        <li>Remove team members who no longer need access</li>
        <li>View pending invitations and resend if needed</li>
      </ul>
    `,
  },

  // ─── Guide 12: Multi-Currency ───
  {
    slug: 'multi-currency',
    title: 'Managing Multiple Currencies with Currency Accounts',
    description: 'Use currency accounts to keep finances cleanly separated across multiple currencies.',
    icon: 'Globe',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Understand Currency Accounts', text: 'Your default currency account is created automatically in your business\'s primary currency.' },
      { name: 'Add Currency Accounts', text: 'Add additional currency accounts (USD, GBP, EUR, etc.) for international invoicing.' },
      { name: 'Switch Between Accounts', text: 'Use the currency switcher in the sidebar. All invoices, expenses, reports, and analytics are scoped to the active account.' },
    ],
    relatedGuides: ['business-settings', 'reports-exports', 'creating-invoices'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Why does Invoicemonk separate currencies into accounts?', answer: 'Financial reports are always single-currency for accuracy. No confusing exchange rate calculations in your reports. Each currency account has its own payment methods.' },
    ],
    content: `
      <h2>How Currency Accounts Work</h2>
      <p>Invoicemonk supports multiple currencies through Currency Accounts. Each currency account keeps your finances cleanly separated — no cross-currency mixing.</p>
      <ul>
        <li>When you create a business, a default currency account is automatically created in your business's primary currency</li>
        <li>You can add additional currency accounts (e.g., USD, GBP, EUR) for international invoicing</li>
        <li>Switch between currency accounts using the switcher in the sidebar</li>
        <li>All invoices, expenses, reports, and analytics are scoped to the active currency account</li>
      </ul>

      <h2>Why This Matters</h2>
      <ul>
        <li>Financial reports are always single-currency for accuracy</li>
        <li>No confusing exchange rate calculations in your reports</li>
        <li>Each currency account has its own payment methods</li>
      </ul>
    `,
  },

  // ─── Guide 13: Notifications & Reminders ───
  {
    slug: 'notifications-reminders',
    title: 'Automate Payment Reminders and Manage Notifications',
    description: 'Set up automatic payment reminders and configure notification preferences.',
    icon: 'Bell',
    category: 'administration',
    estimatedTime: 'PT3M',
    steps: [
      { name: 'Open Notification Settings', text: 'Go to Settings → Notifications to configure your reminder preferences.' },
      { name: 'Enable Payment Reminders', text: 'Toggle on Payment Reminders and select when to send them (1, 3, 7, or 14 days before the due date).' },
      { name: 'Enable Overdue Reminders', text: 'Toggle on Overdue Reminders for follow-ups after the due date (1, 7, 14, or 30 days after).' },
      { name: 'Customize and Save', text: 'Optionally add a custom message to reminder emails and click Save Notification Settings.' },
    ],
    relatedGuides: ['creating-invoices', 'payments-receipts', 'business-settings'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'Can I customize the reminder email message?', answer: 'Yes. You can add a custom message that will be included in your payment reminder emails. This lets you maintain a professional, personalized tone with your clients.' },
      { question: 'What other notifications are available?', answer: 'Besides payment reminders, you can enable notifications for Invoice Issued (confirmation), Payment Received, and Overdue Alerts.' },
    ],
    content: `
      <h2>Setting Up Payment Reminders</h2>
      <p>Invoicemonk can automatically remind your clients about upcoming and overdue payments, so you don't have to chase them manually.</p>
      <ul>
        <li>Go to <strong>Settings → Notifications</strong></li>
        <li>Enable <strong>Payment Reminders</strong></li>
        <li>Select when to send reminders before the due date (1, 3, 7, or 14 days before)</li>
        <li>Enable <strong>Overdue Reminders</strong> to follow up after the due date (1, 7, 14, or 30 days after)</li>
        <li>Optionally add a custom message to your reminder emails</li>
        <li>Click <strong>Save Notification Settings</strong></li>
      </ul>

      <h2>Other Notification Options</h2>
      <ul>
        <li><strong>Invoice Issued</strong> — Get a confirmation when you issue an invoice</li>
        <li><strong>Payment Received</strong> — Get notified when a payment is recorded</li>
        <li><strong>Overdue Alerts</strong> — Get alerted about overdue invoices</li>
      </ul>
    `,
  },

  // ─── Guide 14: Business Settings ───
  {
    slug: 'business-settings',
    title: 'Configure Your Business for Compliance',
    description: 'Complete your business profile to ensure all invoices meet local regulatory requirements.',
    icon: 'Settings',
    category: 'administration',
    estimatedTime: 'PT5M',
    steps: [
      { name: 'Review Key Settings', text: 'Ensure your business name, legal name, TIN, VAT registration, logo, address, and contact details are complete.' },
      { name: 'Check Profile Completion', text: 'Aim for 100% completion. Invoicemonk highlights missing fields so you know exactly what to fill in.' },
      { name: 'Configure Payment Methods', text: 'Add bank accounts and mobile money details. Set a default payment method for new invoices.' },
    ],
    relatedGuides: ['getting-started', 'creating-invoices', 'multi-currency'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'What happens if my profile is incomplete?', answer: 'Your invoices may not include all required compliance fields. Invoicemonk shows a completion percentage and highlights missing information so you can fix it quickly.' },
      { question: 'Can I have multiple payment methods?', answer: 'Yes. Add as many bank accounts or mobile money details as needed. Set one as the default that appears on all new invoices. Payment methods are linked to currency accounts.' },
    ],
    content: `
      <h2>Key Settings</h2>
      <p>Your Business Profile is the foundation of compliance-ready invoicing. Complete it fully to ensure all your invoices meet local regulations.</p>
      <ul>
        <li><strong>Business Name & Legal Name</strong> — Must match your official registration</li>
        <li><strong>Tax Identification Number</strong> — Your FIRS TIN (Nigeria) or equivalent</li>
        <li><strong>VAT Registration</strong> — Toggle on if VAT-registered, and enter your VAT number</li>
        <li><strong>Business Logo</strong> — Appears on all invoices and receipts</li>
        <li><strong>Address</strong> — Full business address for invoice headers</li>
        <li><strong>Contact Details</strong> — Email and phone displayed on invoices</li>
        <li><strong>Default Currency</strong> — Set your primary operating currency</li>
      </ul>

      <h2>Profile Completion</h2>
      <ul>
        <li>Invoicemonk shows a completion percentage on your business profile</li>
        <li>Aim for 100% to ensure full compliance</li>
        <li>Missing fields are highlighted so you know exactly what to fill in</li>
      </ul>

      <h2>Payment Methods</h2>
      <ul>
        <li>Add bank accounts, mobile money details, or other payment methods</li>
        <li>Set a default payment method that appears on all new invoices</li>
        <li>Payment methods are linked to currency accounts</li>
      </ul>
    `,
  },

  // ─── Guide 15: Audit Logs ───
  {
    slug: 'audit-logs',
    title: 'Complete Audit Trail for Every Action',
    description: 'Review the immutable audit trail that logs every action for compliance and internal auditing.',
    icon: 'ScrollText',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navigate to Audit Logs', text: 'Click "Audit Logs" in the sidebar to access the complete activity trail.' },
      { name: 'Search and Filter', text: 'Search by action type, user, or description. Filter by action category to narrow results.' },
      { name: 'Review Log Entries', text: 'Each entry shows who performed the action, when it occurred, and exactly what changed.' },
    ],
    relatedGuides: ['invoice-verification', 'creating-invoices', 'team-management'],
    targetFeature: 'https://app.invoicemonk.com',
    faq: [
      { question: 'What actions are logged?', answer: 'Everything: invoice creation, issuance, sending, viewing, voiding, payment recording, business profile changes, team member additions and role changes, and settings modifications.' },
      { question: 'Can audit logs be modified?', answer: 'No. Audit logs are immutable by design. Once an action is logged, it cannot be edited or deleted. This ensures complete integrity for compliance reviews.' },
    ],
    content: `
      <h2>What's Logged</h2>
      <p>Every action in Invoicemonk is logged in an immutable audit trail. This is invaluable for compliance reviews and internal auditing.</p>
      <ul>
        <li>Invoice created, issued, sent, viewed, voided</li>
        <li>Payments recorded</li>
        <li>Business profile changes</li>
        <li>Team member additions and role changes</li>
        <li>Settings modifications</li>
      </ul>

      <h2>Using Audit Logs</h2>
      <ul>
        <li>Navigate to <strong>Audit Logs</strong> from the sidebar</li>
        <li>Search by action type, user, or description</li>
        <li>Filter by action category</li>
        <li>Each log entry shows who performed the action, when, and what changed</li>
      </ul>
    `,
  },

  // ─── Guide 16: Support ───
  {
    slug: 'support',
    title: 'Getting Help When You Need It',
    description: 'Submit support tickets and reach the Invoicemonk team directly from your dashboard.',
    icon: 'HelpCircle',
    category: 'administration',
    estimatedTime: 'PT2M',
    steps: [
      { name: 'Navigate to Support', text: 'Click "Contact Support" in the sidebar to access the support ticket system.' },
      { name: 'Submit a Ticket', text: 'Choose a category (Billing, Technical, Feature Request, etc.), describe your issue, and submit.' },
      { name: 'Track Your Ticket', text: 'View and track ticket status from the Support page in your dashboard.' },
    ],
    relatedGuides: ['getting-started', 'business-settings'],
    targetFeature: '/contact',
    content: `
      <h2>Submitting a Support Ticket</h2>
      <p>Invoicemonk provides an in-app support ticket system so you can reach our team directly from your dashboard.</p>
      <ul>
        <li>Navigate to <strong>Contact Support</strong> from the sidebar</li>
        <li>Choose a category (Billing, Technical, Feature Request, etc.)</li>
        <li>Describe your issue in detail</li>
        <li>Submit and track the ticket status from the Support page</li>
      </ul>

      <p>You can also reach us through our <a href="/contact">contact page</a> or via the live chat widget on our website.</p>
    `,
  },
];

export function getGuideBySlug(slug: string): HelpGuide | undefined {
  return helpGuides.find(g => g.slug === slug);
}

export function getGuidesByCategory(category: HelpGuide['category']): HelpGuide[] {
  return helpGuides.filter(g => g.category === category);
}
