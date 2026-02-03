import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';

const TermsOfService = () => {
  const seo = pageSEO['/terms-of-service'];
  return (
    <Layout>
      <SEOHead
        title={seo?.getTitle({} as any) || 'Terms of Service | Invoicemonk'}
        description={seo?.getDescription({} as any) || 'Read the Invoicemonk terms of service.'}
        canonical="https://invoicemonk.com/terms-of-service"
      />
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          
          <p className="text-body-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="text-heading-sm font-semibold text-foreground mb-4">Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-body text-muted-foreground columns-1 md:columns-2">
              <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction</a></li>
              <li><a href="#definitions" className="hover:text-primary transition-colors">Definitions</a></li>
              <li><a href="#acceptance" className="hover:text-primary transition-colors">Acceptance of Terms</a></li>
              <li><a href="#account" className="hover:text-primary transition-colors">Account Registration & Security</a></li>
              <li><a href="#service" className="hover:text-primary transition-colors">Description of Service</a></li>
              <li><a href="#acceptable-use" className="hover:text-primary transition-colors">Acceptable Use Policy</a></li>
              <li><a href="#payment" className="hover:text-primary transition-colors">Payment Terms</a></li>
              <li><a href="#intellectual-property" className="hover:text-primary transition-colors">Intellectual Property</a></li>
              <li><a href="#data-ownership" className="hover:text-primary transition-colors">Data Ownership & Portability</a></li>
              <li><a href="#third-party" className="hover:text-primary transition-colors">Third-Party Services</a></li>
              <li><a href="#availability" className="hover:text-primary transition-colors">Service Availability</a></li>
              <li><a href="#warranty" className="hover:text-primary transition-colors">Warranty Disclaimers</a></li>
              <li><a href="#liability" className="hover:text-primary transition-colors">Limitation of Liability</a></li>
              <li><a href="#indemnification" className="hover:text-primary transition-colors">Indemnification</a></li>
              <li><a href="#termination" className="hover:text-primary transition-colors">Termination</a></li>
              <li><a href="#dispute" className="hover:text-primary transition-colors">Dispute Resolution</a></li>
              <li><a href="#governing-law" className="hover:text-primary transition-colors">Governing Law & Jurisdiction</a></li>
              <li><a href="#general" className="hover:text-primary transition-colors">General Provisions</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Information</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                1. Introduction
              </h2>
              <p className="mb-4">
                Welcome to Invoicemonk. These Terms of Service ("Terms") constitute a legally binding 
                agreement between you ("User," "you," or "your") and Invoicemonk ("Company," "we," "us," 
                or "our") governing your access to and use of the Invoicemonk platform, including our 
                website, applications, and related services (collectively, the "Service").
              </p>
              <p className="mb-6">
                By accessing or using our Service, you acknowledge that you have read, understood, and 
                agree to be bound by these Terms and our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            {/* 2. Definitions */}
            <section id="definitions" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                2. Definitions
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>"Account"</strong> means a unique account created for you to access our Service.</li>
                <li><strong>"Content"</strong> means any data, text, images, or other materials uploaded, submitted, or transmitted through the Service.</li>
                <li><strong>"User Data"</strong> means all data, including personal data and business information, that you provide or generate through your use of the Service.</li>
                <li><strong>"Subscription"</strong> means your paid access to premium features of the Service.</li>
                <li><strong>"Free Tier"</strong> means the limited free version of our Service.</li>
              </ul>
            </section>

            {/* 3. Acceptance of Terms */}
            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                3. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By creating an account, clicking "I agree," or otherwise accessing or using the Service, 
                you confirm that:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>You are at least 18 years of age (or the age of legal majority in your jurisdiction)</li>
                <li>You have the legal authority to enter into these Terms</li>
                <li>If acting on behalf of an organization, you have the authority to bind that organization to these Terms</li>
                <li>You agree to comply with all applicable laws and regulations</li>
              </ul>
              <p className="mb-6">
                If you do not agree to these Terms, you must not access or use the Service.
              </p>
            </section>

            {/* 4. Account Registration & Security */}
            <section id="account" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                4. Account Registration & Security
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.1 Registration Requirements
              </h3>
              <p className="mb-4">
                To use certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password confidential and secure</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.2 Account Security
              </h3>
              <p className="mb-4">
                You are solely responsible for maintaining the security of your account credentials. 
                You must immediately notify us at{' '}
                <a href="mailto:security@invoicemonk.com" className="text-primary hover:underline">
                  security@invoicemonk.com
                </a>{' '}
                if you suspect any unauthorized access or security breach.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.3 Multi-User Accounts
              </h3>
              <p className="mb-6">
                Business accounts may have multiple authorized users. The account owner is responsible 
                for the actions of all users and for ensuring compliance with these Terms.
              </p>
            </section>

            {/* 5. Description of Service */}
            <section id="service" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                5. Description of Service
              </h2>
              <p className="mb-4">
                Invoicemonk is a compliance-first financial platform that provides:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Invoicing:</strong> Create, send, and manage professional invoices</li>
                <li><strong>Expense Tracking:</strong> Record and categorize business expenses</li>
                <li><strong>Payments:</strong> Accept and process payments from clients</li>
                <li><strong>Estimates:</strong> Create and send quotes and proposals</li>
                <li><strong>Receipts:</strong> Generate and manage digital receipts</li>
                <li><strong>Client Management:</strong> Organize and track client information</li>
                <li><strong>Reporting:</strong> Generate financial reports for compliance</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                5.1 Service Tiers
              </h3>
              <p className="mb-4">
                We offer different service tiers with varying features and limitations. Details of 
                current pricing and features are available on our <Link to="/pricing" className="text-primary hover:underline">Pricing page</Link>.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                5.2 Beta Features
              </h3>
              <p className="mb-6">
                We may offer beta or preview features that are still in development. Such features are 
                provided "as-is" and may be modified or discontinued without notice.
              </p>
            </section>

            {/* 6. Acceptable Use Policy */}
            <section id="acceptable-use" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                6. Acceptable Use Policy
              </h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Create fraudulent invoices, receipts, or financial documents</li>
                <li>Misrepresent your identity or impersonate others</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Interfere with or disrupt the Service or its infrastructure</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Violate the intellectual property rights of others</li>
                <li>Engage in money laundering, tax evasion, or financial fraud</li>
                <li>Use the Service for any activity that violates sanctions or export controls</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Resell or redistribute the Service without authorization</li>
              </ul>
            </section>

            {/* 7. Payment Terms */}
            <section id="payment" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                7. Payment Terms
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                7.1 Billing
              </h3>
              <p className="mb-4">
                Paid subscriptions are billed in advance on a monthly or annual basis, depending on 
                your chosen plan. Your subscription will automatically renew unless cancelled before 
                the renewal date.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                7.2 Currency and Taxes
              </h3>
              <p className="mb-4">
                All fees are quoted in the currency specified at checkout. You are responsible for 
                any applicable taxes, including VAT, GST, or sales tax, unless stated otherwise.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                7.3 Refund Policy
              </h3>
              <p className="mb-4">
                Subscription fees are generally non-refundable. However, if you are unsatisfied with 
                the Service, you may request a refund within 14 days of initial purchase. Pro-rated 
                refunds may be considered at our discretion for annual subscriptions cancelled within 
                30 days.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                7.4 Price Changes
              </h3>
              <p className="mb-6">
                We may modify our pricing at any time. Existing subscribers will be notified at least 
                30 days before any price increase takes effect on their next billing cycle.
              </p>
            </section>

            {/* 8. Intellectual Property */}
            <section id="intellectual-property" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                8. Intellectual Property
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                8.1 Our Ownership
              </h3>
              <p className="mb-4">
                The Service, including all software, designs, text, graphics, logos, and other content 
                (excluding User Data), is owned by Invoicemonk and protected by copyright, trademark, 
                and other intellectual property laws. You may not copy, modify, distribute, or create 
                derivative works without our express written permission.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                8.2 Your Content Ownership
              </h3>
              <p className="mb-4">
                You retain all ownership rights to the User Data you upload or create through the Service. 
                By using the Service, you grant us a limited, non-exclusive license to process your User 
                Data solely for the purpose of providing and improving the Service.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                8.3 Trademarks
              </h3>
              <p className="mb-6">
                "Invoicemonk" and our logo are trademarks of Invoicemonk. You may not use our trademarks 
                without prior written consent.
              </p>
            </section>

            {/* 9. Data Ownership & Portability */}
            <section id="data-ownership" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                9. Data Ownership & Portability
              </h2>
              <p className="mb-4">
                <strong>Your Data, Your Rights:</strong> You own all User Data you create or upload to 
                the Service. We do not claim any ownership of your invoices, client information, 
                financial records, or other content.
              </p>
              <p className="mb-4">
                <strong>Data Export:</strong> You may export your data at any time in standard formats 
                (CSV, PDF). We provide data export tools within the platform.
              </p>
              <p className="mb-6">
                <strong>Data on Termination:</strong> Upon account termination, you will have 30 days to 
                export your data. After this period, we will delete your User Data in accordance with 
                our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, 
                except where retention is required by law.
              </p>
            </section>

            {/* 10. Third-Party Services */}
            <section id="third-party" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                10. Third-Party Services
              </h2>
              <p className="mb-4">
                The Service may integrate with third-party services (e.g., payment processors, accounting 
                software). Your use of such integrations is subject to the third party's terms and conditions.
              </p>
              <p className="mb-6">
                We are not responsible for the content, privacy practices, or actions of third-party 
                services. Links to external websites do not constitute endorsement.
              </p>
            </section>

            {/* 11. Service Availability */}
            <section id="availability" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                11. Service Availability
              </h2>
              <p className="mb-4">
                We strive to maintain high availability of the Service. However, we do not guarantee 
                uninterrupted access. The Service may be temporarily unavailable due to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Scheduled maintenance (we will provide advance notice when possible)</li>
                <li>Emergency repairs or security updates</li>
                <li>Factors beyond our control (e.g., internet outages, natural disasters)</li>
              </ul>
              <p className="mb-6">
                <strong>Support Availability:</strong> Customer support is available during business hours. 
                Paid subscribers may have access to priority support as specified in their plan.
              </p>
            </section>

            {/* 12. Warranty Disclaimers */}
            <section id="warranty" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                12. Warranty Disclaimers
              </h2>
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <p className="uppercase font-semibold text-foreground mb-2">IMPORTANT:</p>
                <p className="mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR 
                  FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THE ACCURACY OR 
                  COMPLETENESS OF ANY INFORMATION PROVIDED THROUGH THE SERVICE.
                </p>
              </div>
              <p className="mb-6">
                Some jurisdictions do not allow the exclusion of certain warranties, so some of the 
                above exclusions may not apply to you.
              </p>
            </section>

            {/* 13. Limitation of Liability */}
            <section id="liability" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                13. Limitation of Liability
              </h2>
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <p className="mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, INVOICEMONK AND ITS OFFICERS, DIRECTORS, 
                  EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Any damages arising from your use or inability to use the Service</li>
                  <li>Any damages arising from unauthorized access to or alteration of your data</li>
                </ul>
                <p>
                  IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID 
                  US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100).
                </p>
              </div>
              <p className="mb-6">
                These limitations apply regardless of the legal theory (contract, tort, negligence, 
                strict liability, or otherwise) and even if we have been advised of the possibility 
                of such damages.
              </p>
            </section>

            {/* 14. Indemnification */}
            <section id="indemnification" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                14. Indemnification
              </h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless Invoicemonk and its officers, 
                directors, employees, contractors, and agents from and against any claims, damages, 
                losses, liabilities, costs, and expenses (including reasonable attorneys' fees) 
                arising from:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable law or regulation</li>
                <li>Your violation of any third party's rights</li>
                <li>Any User Data you upload or create through the Service</li>
              </ul>
            </section>

            {/* 15. Termination */}
            <section id="termination" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                15. Termination
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                15.1 Termination by You
              </h3>
              <p className="mb-4">
                You may terminate your account at any time through your account settings or by 
                contacting us. Termination does not entitle you to a refund of any fees already paid.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                15.2 Termination by Us
              </h3>
              <p className="mb-4">
                We may suspend or terminate your account immediately if:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You breach these Terms</li>
                <li>You engage in fraudulent or illegal activity</li>
                <li>Your payment fails and is not resolved within 30 days</li>
                <li>Continued use would violate applicable law</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                15.3 Effect of Termination
              </h3>
              <p className="mb-4">
                Upon termination, your right to use the Service ceases immediately. You will have 
                30 days to export your data. We may delete your data after this period.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                15.4 Survival
              </h3>
              <p className="mb-6">
                The following sections survive termination: Intellectual Property, Data Ownership, 
                Warranty Disclaimers, Limitation of Liability, Indemnification, Dispute Resolution, 
                and Governing Law.
              </p>
            </section>

            {/* 16. Dispute Resolution */}
            <section id="dispute" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                16. Dispute Resolution
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                16.1 Informal Resolution
              </h3>
              <p className="mb-4">
                Before initiating formal proceedings, you agree to first contact us at{' '}
                <a href="mailto:legal@invoicemonk.com" className="text-primary hover:underline">
                  legal@invoicemonk.com
                </a>{' '}
                to attempt to resolve the dispute informally. We will endeavor to resolve complaints 
                within 30 days.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                16.2 Arbitration
              </h3>
              <p className="mb-4">
                If informal resolution fails, any dispute shall be resolved by binding arbitration 
                in accordance with the rules of the applicable arbitration body in your jurisdiction, 
                except where prohibited by law.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                16.3 Class Action Waiver
              </h3>
              <p className="mb-4">
                To the extent permitted by law, you agree to resolve disputes on an individual basis 
                and waive the right to participate in class action lawsuits or class-wide arbitration.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                16.4 Small Claims Exception
              </h3>
              <p className="mb-6">
                Either party may bring an individual action in small claims court for disputes within 
                the court's jurisdictional limits.
              </p>
            </section>

            {/* 17. Governing Law & Jurisdiction */}
            <section id="governing-law" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                17. Governing Law & Jurisdiction
              </h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
              <p className="mb-4">
                <strong>For EU/EEA Users:</strong> If you are a consumer in the EU/EEA, you may benefit 
                from mandatory consumer protection laws of your country of residence, and nothing in 
                these Terms affects your rights as a consumer.
              </p>
              <p className="mb-6">
                <strong>International Users:</strong> If you access the Service from outside the United 
                States, you do so at your own risk and are responsible for compliance with local laws.
              </p>
            </section>

            {/* 18. General Provisions */}
            <section id="general" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                18. General Provisions
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.1 Entire Agreement
              </h3>
              <p className="mb-4">
                These Terms, together with our Privacy Policy and any other policies referenced herein, 
                constitute the entire agreement between you and Invoicemonk regarding the Service.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.2 Severability
              </h3>
              <p className="mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions 
                will continue in full force and effect.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.3 Waiver
              </h3>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms does not constitute a 
                waiver of such right or provision.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.4 Assignment
              </h3>
              <p className="mb-4">
                You may not assign or transfer your rights under these Terms without our written consent. 
                We may assign our rights to any affiliate or successor entity.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.5 Force Majeure
              </h3>
              <p className="mb-4">
                We shall not be liable for any failure or delay in performance due to circumstances 
                beyond our reasonable control, including but not limited to natural disasters, war, 
                terrorism, labor disputes, government actions, or internet outages.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.6 Notices
              </h3>
              <p className="mb-4">
                We may send notices to you via email to the address associated with your account. 
                You may send notices to us at{' '}
                <a href="mailto:legal@invoicemonk.com" className="text-primary hover:underline">
                  legal@invoicemonk.com
                </a>.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                18.7 Changes to Terms
              </h3>
              <p className="mb-6">
                We may modify these Terms at any time. Material changes will be notified via email or 
                through the Service at least 30 days before they take effect. Continued use after 
                changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            {/* 19. Contact Information */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                19. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-6 space-y-3">
                <p>
                  <strong>Legal Inquiries:</strong>{' '}
                  <a href="mailto:legal@invoicemonk.com" className="text-primary hover:underline">
                    legal@invoicemonk.com
                  </a>
                </p>
                <p>
                  <strong>General Support:</strong>{' '}
                  <a href="mailto:support@invoicemonk.com" className="text-primary hover:underline">
                    support@invoicemonk.com
                  </a>
                </p>
                <p>
                  <strong>Mailing Address:</strong>{' '}
                  Invoicemonk Legal Department, [Address to be updated]
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
