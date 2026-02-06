import { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { WaveProductTabs } from '@/components/home/WaveProductTabs';
import { WaveFeatureBenefits } from '@/components/home/WaveFeatureBenefits';
import { WaveTestimonials } from '@/components/home/WaveTestimonials';
import { WavePersonaSection } from '@/components/home/WavePersonaSection';
import { HomeBlogSection } from '@/components/home/HomeBlogSection';
import { FAQSection } from '@/components/home/FAQSection';
import { WaveCTASection } from '@/components/home/WaveCTASection';

export const metadata: Metadata = {
  title: 'InvoiceMonk - Invoicing, Expenses & Accounting Software for Small Businesses',
  description:
    'Professional invoicing, expense tracking, and accounting software for freelancers, consultants, contractors, and small businesses. Simple, powerful, and trusted by thousands.',
  openGraph: {
    title: 'InvoiceMonk - Invoicing, Expenses & Accounting Software',
    description:
      'Professional invoicing, expense tracking, and accounting software for freelancers and small businesses.',
    url: 'https://invoicemonk.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WaveProductTabs />
      <WaveFeatureBenefits />
      <WaveTestimonials />
      <WavePersonaSection />
      <HomeBlogSection />
      <FAQSection />
      <WaveCTASection />
    </Layout>
  );
}
