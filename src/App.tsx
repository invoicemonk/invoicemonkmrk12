import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Redirect } from "@/components/Redirect";
import { LocaleProvider } from "@/contexts/LocaleContext";

// Pages
import Index from "./pages/Index";
import Invoicing from "./pages/Invoicing";
import Expenses from "./pages/Expenses";
import Payments from "./pages/Payments";
import Accounting from "./pages/Accounting";
import Estimates from "./pages/Estimates";
import Receipts from "./pages/Receipts";
import Pricing from "./pages/Pricing";
import WhyInvoicemonk from "./pages/WhyInvoicemonk";
import Compliance from "./pages/Compliance";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// New pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogTopic from "./pages/BlogTopic";
import AuthorPage from "./pages/AuthorPage";
import FreeInvoiceGenerator from "./pages/FreeInvoiceGenerator";
import Freelancers from "./pages/Freelancers";
import Consultants from "./pages/Consultants";
import Contractors from "./pages/Contractors";
import SmallBusinesses from "./pages/SmallBusinesses";
import Developer from "./pages/Developer";
import ClientManagement from "./pages/features/ClientManagement";

// Guide pages
import GuidesIndex from "./pages/guides/GuidesIndex";
import InvoicingGuide from "./pages/guides/InvoicingGuide";
import GettingPaidGuide from "./pages/guides/GettingPaidGuide";
import BusinessFinancesGuide from "./pages/guides/BusinessFinancesGuide";
import TaxComplianceGuide from "./pages/guides/TaxComplianceGuide";
import FreelancingGuide from "./pages/guides/FreelancingGuide";
import EstimatesGuide from "./pages/guides/EstimatesGuide";
import Glossary from "./pages/Glossary";
import Explore from "./pages/Explore";

// Tool pages
import InternationalPaymentFeeCalculator from "./pages/tools/InternationalPaymentFeeCalculator";
import PaypalVsWiseFees from "./pages/tools/PaypalVsWiseFees";
import CheapestInternationalPayments from "./pages/tools/CheapestInternationalPayments";
import ReceiveCurrencyInCountry from "./pages/tools/ReceiveCurrencyInCountry";

const queryClient = new QueryClient();

// App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <LocaleProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Index />} />
            <Route path="/invoicing" element={<Invoicing />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/estimates" element={<Estimates />} />
            <Route path="/receipts" element={<Receipts />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/why-invoicemonk" element={<WhyInvoicemonk />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about" element={<About />} />
            
            {/* Core pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/topic/:topicId" element={<BlogTopic />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/author/:authorSlug" element={<AuthorPage />} />
            <Route path="/free-invoice-generator" element={<FreeInvoiceGenerator />} />
            
            {/* Audience pages */}
            <Route path="/freelancers" element={<Freelancers />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/contractors" element={<Contractors />} />
            <Route path="/small-businesses" element={<SmallBusinesses />} />
            <Route path="/developer" element={<Developer />} />
            
            {/* Feature sub-pages */}
            <Route path="/features/client-management" element={<ClientManagement />} />
            
            {/* Guide pages */}
            <Route path="/guides" element={<GuidesIndex />} />
            <Route path="/guides/invoicing" element={<InvoicingGuide />} />
            <Route path="/guides/getting-paid" element={<GettingPaidGuide />} />
            <Route path="/guides/business-finances" element={<BusinessFinancesGuide />} />
            <Route path="/guides/tax-compliance" element={<TaxComplianceGuide />} />
            <Route path="/guides/freelancing" element={<FreelancingGuide />} />
            <Route path="/guides/estimates" element={<EstimatesGuide />} />
            
            {/* Resources */}
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/explore" element={<Explore />} />
            
            {/* Payment Tools */}
            <Route path="/international-payment-fee-calculator" element={<InternationalPaymentFeeCalculator />} />
            <Route path="/paypal-vs-wise-fees" element={<PaypalVsWiseFees />} />
            <Route path="/cheapest-way-to-receive-international-payments" element={<CheapestInternationalPayments />} />
            <Route path="/receive-:currency-in-:country-cost" element={<ReceiveCurrencyInCountry />} />
            
            {/* Legacy redirects - maintain old WordPress URLs */}
            <Route path="/features" element={<Redirect to="/why-invoicemonk" />} />
            <Route path="/features/accept-payments" element={<Redirect to="/payments" />} />
            <Route path="/features/estimates" element={<Redirect to="/estimates" />} />
            <Route path="/features/send-invoices" element={<Redirect to="/invoicing" />} />
            <Route path="/features/business-expense-tracking-app" element={<Redirect to="/expenses" />} />
            
            {/* Short URL redirects for footer links */}
            <Route path="/privacy" element={<Redirect to="/privacy-policy" />} />
            <Route path="/terms" element={<Redirect to="/terms-of-service" />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LocaleProvider>
  </QueryClientProvider>
);

export default App;
