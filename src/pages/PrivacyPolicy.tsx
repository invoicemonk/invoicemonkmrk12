import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-body-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="text-heading-sm font-semibold text-foreground mb-4">Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-body text-muted-foreground">
              <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction & Data Controller</a></li>
              <li><a href="#information-collected" className="hover:text-primary transition-colors">Information We Collect</a></li>
              <li><a href="#legal-basis" className="hover:text-primary transition-colors">Legal Basis for Processing</a></li>
              <li><a href="#how-we-use" className="hover:text-primary transition-colors">How We Use Your Information</a></li>
              <li><a href="#cookies" className="hover:text-primary transition-colors">Cookies & Tracking Technologies</a></li>
              <li><a href="#data-sharing" className="hover:text-primary transition-colors">Data Sharing & Third Parties</a></li>
              <li><a href="#international-transfers" className="hover:text-primary transition-colors">International Data Transfers</a></li>
              <li><a href="#data-retention" className="hover:text-primary transition-colors">Data Retention</a></li>
              <li><a href="#your-rights" className="hover:text-primary transition-colors">Your Privacy Rights</a></li>
              <li><a href="#children" className="hover:text-primary transition-colors">Children's Privacy</a></li>
              <li><a href="#security" className="hover:text-primary transition-colors">Data Security</a></li>
              <li><a href="#changes" className="hover:text-primary transition-colors">Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            
            {/* 1. Introduction & Data Controller */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                1. Introduction & Data Controller
              </h2>
              <p className="mb-4">
                Invoicemonk ("we," "us," or "our") is committed to protecting your privacy and ensuring 
                the security of your personal data. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you use our platform and services.
              </p>
              <p className="mb-4">
                <strong>Data Controller:</strong> For the purposes of the General Data Protection Regulation 
                (GDPR) and other applicable data protection laws, Invoicemonk is the data controller 
                responsible for your personal data.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <p className="mb-2"><strong>Data Protection Officer (DPO)</strong></p>
                <p className="mb-1">Email: <a href="mailto:dpo@invoicemonk.com" className="text-primary hover:underline">dpo@invoicemonk.com</a></p>
                <p>For privacy-related inquiries, you may contact our DPO at any time.</p>
              </div>
              <p className="mb-6">
                This policy applies to all users of Invoicemonk services worldwide, with specific provisions 
                for users in the European Union/European Economic Area (EU/EEA), United Kingdom, California 
                (USA), Brazil, Nigeria, Australia, and Canada.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                2.1 Information You Provide Directly
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, password, phone number</li>
                <li><strong>Business Information:</strong> Company name, business address, tax identification numbers (TIN, VAT, GST), business registration details</li>
                <li><strong>Financial Data:</strong> Invoice details, expense records, payment information, bank account details for payouts</li>
                <li><strong>Client Data:</strong> Information about your clients that you store in our system</li>
                <li><strong>Communications:</strong> Messages you send to us, support tickets, feedback</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                2.2 Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on the platform, click patterns</li>
                <li><strong>Log Data:</strong> Access times, error logs, referring URLs</li>
                <li><strong>Cookies & Similar Technologies:</strong> See our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for details</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                2.3 Information from Third Parties
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Payment Processors:</strong> Transaction confirmations from Stripe, Paystack, and other payment providers</li>
                <li><strong>Authentication Providers:</strong> If you sign in via Google or other OAuth providers</li>
                <li><strong>Business Partners:</strong> Information from integrations you authorize</li>
              </ul>
            </section>

            {/* 3. Legal Basis for Processing */}
            <section id="legal-basis" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                3. Legal Basis for Processing (GDPR Article 6)
              </h2>
              <p className="mb-4">
                We process your personal data only when we have a valid legal basis to do so. The legal 
                bases we rely on include:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Contract Performance (Art. 6(1)(b))</h4>
                  <p>Processing necessary to provide our services to you, including creating invoices, 
                  managing expenses, processing payments, and maintaining your account.</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Legitimate Interests (Art. 6(1)(f))</h4>
                  <p>Processing for our legitimate business interests, such as improving our services, 
                  analytics, fraud prevention, and security, where these interests are not overridden 
                  by your rights and freedoms.</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Legal Obligation (Art. 6(1)(c))</h4>
                  <p>Processing required to comply with applicable laws, including tax regulations, 
                  accounting requirements, and responding to legal requests.</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Consent (Art. 6(1)(a))</h4>
                  <p>Processing based on your explicit consent, such as marketing communications. 
                  You may withdraw consent at any time without affecting the lawfulness of processing 
                  based on consent before its withdrawal.</p>
                </div>
              </div>
            </section>

            {/* 4. How We Use Your Information */}
            <section id="how-we-use" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                4. How We Use Your Information
              </h2>
              <p className="mb-4">We use your personal data for the following purposes:</p>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.1 Service Delivery
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Creating and managing your account</li>
                <li>Generating invoices, estimates, and receipts</li>
                <li>Processing payments and refunds</li>
                <li>Managing expense tracking and reporting</li>
                <li>Providing customer support</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.2 Service Improvement
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Analyzing usage patterns to improve features</li>
                <li>Conducting research and development</li>
                <li>Testing new features and functionality</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.3 Communications
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sending transactional emails (invoices, receipts, account updates)</li>
                <li>Providing technical notices and security alerts</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Responding to inquiries and support requests</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                4.4 Legal & Compliance
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Complying with tax and accounting regulations</li>
                <li>Preventing fraud and unauthorized access</li>
                <li>Enforcing our terms of service</li>
                <li>Responding to legal requests and court orders</li>
              </ul>
            </section>

            {/* 5. Cookies & Tracking */}
            <section id="cookies" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                5. Cookies & Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your experience, analyze 
                usage, and deliver personalized content. Our cookies fall into the following categories:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how you use our services</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
              </ul>
              <p className="mb-6">
                For detailed information about the cookies we use and how to manage your preferences, 
                please see our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            {/* 6. Data Sharing */}
            <section id="data-sharing" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                6. Data Sharing & Third Parties
              </h2>
              <p className="mb-4">
                We do not sell your personal data. We may share your information with the following 
                categories of recipients:
              </p>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                6.1 Service Providers
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Payment Processors:</strong> Stripe, Paystack (for payment processing)</li>
                <li><strong>Cloud Infrastructure:</strong> Secure cloud hosting providers</li>
                <li><strong>Email Services:</strong> Transactional email delivery</li>
                <li><strong>Analytics:</strong> Usage analytics (anonymized where possible)</li>
              </ul>
              <p className="mb-4">
                All service providers are contractually bound to protect your data and may only use 
                it for the specific purposes we authorize.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                6.2 Legal Requirements
              </h3>
              <p className="mb-4">
                We may disclose your information when required by law, court order, or government 
                request, or when necessary to protect our rights, safety, or property.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                6.3 Business Transfers
              </h3>
              <p className="mb-6">
                In the event of a merger, acquisition, or sale of assets, your data may be transferred 
                as part of that transaction. We will notify you of any such change.
              </p>
            </section>

            {/* 7. International Transfers */}
            <section id="international-transfers" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                7. International Data Transfers
              </h2>
              <p className="mb-4">
                Invoicemonk operates globally, and your data may be transferred to and processed in 
                countries outside your country of residence, including countries that may not have 
                the same data protection laws as your jurisdiction.
              </p>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                7.1 Transfer Mechanisms
              </h3>
              <p className="mb-4">
                When transferring data from the EU/EEA or UK to countries without adequate data 
                protection, we implement appropriate safeguards including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved contractual terms</li>
                <li><strong>Adequacy Decisions:</strong> Transfers to countries deemed adequate by the European Commission</li>
                <li><strong>Binding Corporate Rules:</strong> Where applicable</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                7.2 Data Storage Locations
              </h3>
              <p className="mb-6">
                Your data is primarily stored in secure data centers located in the United States and 
                European Union. We ensure all data centers meet industry security standards.
              </p>
            </section>

            {/* 8. Data Retention */}
            <section id="data-retention" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                8. Data Retention
              </h2>
              <p className="mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes 
                for which it was collected, including:
              </p>
              
              <div className="overflow-x-auto mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="min-w-full border border-border rounded-lg text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Data Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Retention Period</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">Account Information</td>
                      <td className="px-4 py-3 text-sm">Duration of account + 30 days</td>
                      <td className="px-4 py-3 text-sm">Service provision</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Financial Records</td>
                      <td className="px-4 py-3 text-sm">7 years after creation</td>
                      <td className="px-4 py-3 text-sm">Tax/legal compliance</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Usage Logs</td>
                      <td className="px-4 py-3 text-sm">12 months</td>
                      <td className="px-4 py-3 text-sm">Security & analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Support Communications</td>
                      <td className="px-4 py-3 text-sm">3 years</td>
                      <td className="px-4 py-3 text-sm">Quality assurance</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Marketing Preferences</td>
                      <td className="px-4 py-3 text-sm">Until consent withdrawn</td>
                      <td className="px-4 py-3 text-sm">Consent-based</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">
                Upon account deletion, we will delete or anonymize your personal data within 30 days, 
                except where retention is required by law.
              </p>
            </section>

            {/* 9. Your Privacy Rights */}
            <section id="your-rights" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                9. Your Privacy Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                9.1 Rights for EU/EEA and UK Residents (GDPR)
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Right of Access (Art. 15):</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification (Art. 16):</strong> Correct inaccurate personal data</li>
                <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your personal data ("right to be forgotten")</li>
                <li><strong>Right to Restrict Processing (Art. 18):</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Right to Object (Art. 21):</strong> Object to processing based on legitimate interests</li>
                <li><strong>Rights Related to Automated Decision-Making (Art. 22):</strong> Not be subject to decisions based solely on automated processing</li>
              </ul>
              <p className="mb-4">
                <strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your 
                local data protection authority. For the UK, this is the Information Commissioner's Office 
                (ICO). For the EU, contact your national DPA.
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                9.2 Rights for California Residents (CCPA/CPRA)
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Right to Know:</strong> What personal information we collect and how we use it</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Opt-Out:</strong> We do not sell personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> Where applicable</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                9.3 Rights for Brazilian Residents (LGPD)
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Confirmation of the existence of processing</li>
                <li>Access to data</li>
                <li>Correction of incomplete, inaccurate, or outdated data</li>
                <li>Anonymization, blocking, or deletion of unnecessary data</li>
                <li>Data portability</li>
                <li>Deletion of data processed with consent</li>
                <li>Information about sharing with third parties</li>
                <li>Revocation of consent</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                9.4 Rights for Nigerian Residents (NDPR)
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Right to information about data processing</li>
                <li>Right to access personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to withdraw consent</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                9.5 Rights for Australian Residents (Privacy Act)
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Right to access personal information</li>
                <li>Right to correction of personal information</li>
                <li>Right to complain about privacy breaches</li>
                <li>Right to opt-out of direct marketing</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                9.6 Exercising Your Rights
              </h3>
              <p className="mb-6">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@invoicemonk.com" className="text-primary hover:underline">
                  privacy@invoicemonk.com
                </a>. We will respond to your request within 30 days (or sooner if required by 
                applicable law). We may need to verify your identity before processing your request.
              </p>
            </section>

            {/* 10. Children's Privacy */}
            <section id="children" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                10. Children's Privacy
              </h2>
              <p className="mb-6">
                Invoicemonk is not intended for use by individuals under the age of 18. We do not 
                knowingly collect personal information from children. If you are a parent or guardian 
                and believe your child has provided us with personal information, please contact us 
                immediately at{' '}
                <a href="mailto:privacy@invoicemonk.com" className="text-primary hover:underline">
                  privacy@invoicemonk.com
                </a>, and we will delete such information from our systems.
              </p>
            </section>

            {/* 11. Data Security */}
            <section id="security" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                11. Data Security
              </h2>
              <p className="mb-4">
                We implement comprehensive security measures to protect your personal data:
              </p>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                11.1 Technical Measures
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
                <li>Secure authentication with password hashing (bcrypt)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Automated threat detection and monitoring</li>
                <li>Firewall and intrusion detection systems</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                11.2 Organizational Measures
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Employee training on data protection</li>
                <li>Access controls and least-privilege principles</li>
                <li>Incident response procedures</li>
                <li>Regular policy reviews and updates</li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                11.3 Data Breach Notification
              </h3>
              <p className="mb-6">
                In the event of a personal data breach that poses a risk to your rights and freedoms, 
                we will notify the relevant supervisory authority within 72 hours as required by GDPR. 
                If the breach is likely to result in a high risk to your rights, we will also notify 
                you directly.
              </p>
            </section>

            {/* 12. Changes to This Policy */}
            <section id="changes" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                12. Changes to This Policy
              </h2>
              <p className="mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or applicable laws. When we make material changes, we will:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Update the "Last updated" date at the top of this policy</li>
                <li>Notify you via email (for registered users)</li>
                <li>Display a prominent notice on our platform</li>
                <li>Where required by law, obtain your consent to the changes</li>
              </ul>
            </section>

            {/* 13. Contact Us */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                13. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-6 space-y-3">
                <p>
                  <strong>General Privacy Inquiries:</strong>{' '}
                  <a href="mailto:privacy@invoicemonk.com" className="text-primary hover:underline">
                    privacy@invoicemonk.com
                  </a>
                </p>
                <p>
                  <strong>Data Protection Officer:</strong>{' '}
                  <a href="mailto:dpo@invoicemonk.com" className="text-primary hover:underline">
                    dpo@invoicemonk.com
                  </a>
                </p>
                <p>
                  <strong>Mailing Address:</strong>{' '}
                  Invoicemonk Legal Department, [Address to be updated]
                </p>
              </div>
              <p className="mb-6">
                We are committed to working with you to resolve any privacy concerns. If you are not 
                satisfied with our response, you have the right to lodge a complaint with your local 
                data protection authority.
              </p>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
