import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-display-sm lg:text-display-md font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          
          <p className="text-body-lg text-muted-foreground mb-8">
            <strong>Last updated:</strong> January 2025
          </p>

          {/* Table of Contents */}
          <nav className="bg-muted/50 rounded-xl p-6 mb-12">
            <h2 className="text-heading-sm font-semibold text-foreground mb-4">Contents</h2>
            <ol className="list-decimal list-inside space-y-2 text-body text-muted-foreground">
              <li><a href="#what-are-cookies" className="hover:text-primary transition-colors">What Are Cookies</a></li>
              <li><a href="#how-we-use" className="hover:text-primary transition-colors">How We Use Cookies</a></li>
              <li><a href="#cookie-types" className="hover:text-primary transition-colors">Types of Cookies We Use</a></li>
              <li><a href="#third-party" className="hover:text-primary transition-colors">Third-Party Cookies</a></li>
              <li><a href="#your-choices" className="hover:text-primary transition-colors">Your Cookie Choices</a></li>
              <li><a href="#cookie-list" className="hover:text-primary transition-colors">Cookie List</a></li>
              <li><a href="#updates" className="hover:text-primary transition-colors">Updates to This Policy</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            
            {/* 1. What Are Cookies */}
            <section id="what-are-cookies" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                1. What Are Cookies
              </h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device (computer, tablet, or mobile) 
                when you visit a website. They are widely used to make websites work more efficiently, 
                provide a better user experience, and give website owners useful information about how 
                their site is being used.
              </p>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                Types of Cookies by Duration
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Session Cookies:</strong> Temporary cookies that are deleted when you close 
                  your browser. They help with navigation and basic functionality during your visit.
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Cookies that remain on your device for a set 
                  period or until you delete them. They remember your preferences and settings for 
                  future visits.
                </li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                Types of Cookies by Source
              </h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>First-Party Cookies:</strong> Set by Invoicemonk directly on our domain.
                </li>
                <li>
                  <strong>Third-Party Cookies:</strong> Set by external services integrated into our 
                  platform (e.g., payment processors, analytics).
                </li>
              </ul>
            </section>

            {/* 2. How We Use Cookies */}
            <section id="how-we-use" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="mb-4">
                Invoicemonk uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Authentication:</strong> To keep you logged in and secure your session</li>
                <li><strong>Security:</strong> To detect and prevent fraud and unauthorized access</li>
                <li><strong>Preferences:</strong> To remember your settings (language, currency, etc.)</li>
                <li><strong>Performance:</strong> To understand how you use our platform and improve it</li>
                <li><strong>Functionality:</strong> To enable features and provide the services you request</li>
              </ul>
            </section>

            {/* 3. Types of Cookies We Use */}
            <section id="cookie-types" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                3. Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Essential Cookies (Required)</h4>
                  <p className="mb-2">
                    These cookies are necessary for the platform to function properly. Without them, 
                    you cannot use basic features like logging in or accessing secure areas.
                  </p>
                  <p className="text-sm">
                    <strong>Legal Basis:</strong> Legitimate interest (necessary for service delivery)
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Performance Cookies (Optional)</h4>
                  <p className="mb-2">
                    These cookies collect anonymized information about how you use our platform, 
                    such as which pages you visit most often. This helps us improve our services.
                  </p>
                  <p className="text-sm">
                    <strong>Legal Basis:</strong> Consent
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Functionality Cookies (Optional)</h4>
                  <p className="mb-2">
                    These cookies remember choices you make (such as your preferred language or region) 
                    to provide a more personalized experience.
                  </p>
                  <p className="text-sm">
                    <strong>Legal Basis:</strong> Consent
                  </p>
                </div>
              </div>
              
              <p className="mt-6 mb-6">
                <strong>Note:</strong> Invoicemonk does not use advertising or targeting cookies. 
                We do not track you across other websites or sell your data to advertisers.
              </p>
            </section>

            {/* 4. Third-Party Cookies */}
            <section id="third-party" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="mb-4">
                Some cookies on our platform are set by third-party services that we use to provide 
                and improve our services:
              </p>
              
              <div className="overflow-x-auto mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="min-w-full border border-border rounded-lg text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Provider</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm">Stripe</td>
                      <td className="px-4 py-3 text-sm">Payment processing and fraud prevention</td>
                      <td className="px-4 py-3 text-sm">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Paystack</td>
                      <td className="px-4 py-3 text-sm">Payment processing (Africa)</td>
                      <td className="px-4 py-3 text-sm">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Supabase</td>
                      <td className="px-4 py-3 text-sm">Authentication and database services</td>
                      <td className="px-4 py-3 text-sm">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">
                Each third-party service has its own privacy policy governing the use of cookies. 
                We encourage you to review their policies for more information.
              </p>
            </section>

            {/* 5. Your Cookie Choices */}
            <section id="your-choices" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                5. Your Cookie Choices
              </h2>
              <p className="mb-4">
                You have several options for managing cookies:
              </p>
              
              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                5.1 Browser Settings
              </h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Block all cookies</li>
                <li>Accept only first-party cookies</li>
                <li>Delete cookies when you close your browser</li>
                <li>Receive a warning before cookies are stored</li>
              </ul>
              <p className="mb-4">
                Common browser cookie settings:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                5.2 Opt-Out Links
              </h3>
              <p className="mb-4">
                For certain third-party analytics services, you can opt out directly:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Analytics Opt-Out
                  </a>
                </li>
              </ul>

              <h3 className="text-heading-sm font-medium text-foreground mt-6 mb-3">
                5.3 Impact of Blocking Cookies
              </h3>
              <p className="mb-6">
                Please note that blocking or deleting cookies may affect your experience on our platform. 
                Some features may not work properly, and you may need to re-enter information or 
                preferences on each visit.
              </p>
            </section>

            {/* 6. Cookie List */}
            <section id="cookie-list" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                6. Cookie List
              </h2>
              <p className="mb-4">
                Below is a list of the main cookies used on our platform:
              </p>
              
              <div className="overflow-x-auto mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="min-w-full border border-border rounded-lg text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 text-sm font-mono">sb-access-token</td>
                      <td className="px-4 py-3 text-sm">Authentication session</td>
                      <td className="px-4 py-3 text-sm">Session</td>
                      <td className="px-4 py-3 text-sm">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-mono">sb-refresh-token</td>
                      <td className="px-4 py-3 text-sm">Refresh authentication</td>
                      <td className="px-4 py-3 text-sm">7 days</td>
                      <td className="px-4 py-3 text-sm">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-mono">locale</td>
                      <td className="px-4 py-3 text-sm">Language preference</td>
                      <td className="px-4 py-3 text-sm">1 year</td>
                      <td className="px-4 py-3 text-sm">Functionality</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-mono">theme</td>
                      <td className="px-4 py-3 text-sm">Light/dark mode preference</td>
                      <td className="px-4 py-3 text-sm">1 year</td>
                      <td className="px-4 py-3 text-sm">Functionality</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-mono">cookie-consent</td>
                      <td className="px-4 py-3 text-sm">Cookie consent preference</td>
                      <td className="px-4 py-3 text-sm">1 year</td>
                      <td className="px-4 py-3 text-sm">Essential</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mb-6">
                This list may be updated as we add or remove functionality from our platform.
              </p>
            </section>

            {/* 7. Updates to This Policy */}
            <section id="updates" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                7. Updates to This Policy
              </h2>
              <p className="mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. The "Last updated" date at the 
                top of this policy indicates when it was last revised. We encourage you to review this 
                policy periodically.
              </p>
            </section>

            {/* 8. Contact Us */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="text-heading-md font-semibold text-foreground mt-10 mb-4">
                8. Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-muted/30 rounded-lg p-6 mb-6 space-y-3">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@invoicemonk.com" className="text-primary hover:underline">
                    privacy@invoicemonk.com
                  </a>
                </p>
                <p>
                  <strong>Privacy Policy:</strong>{' '}
                  <Link to="/privacy-policy" className="text-primary hover:underline">
                    View our Privacy Policy
                  </Link>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
