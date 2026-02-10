import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'InvoiceMonk - Invoicing, Expenses & Accounting Software for Small Businesses',
  description: 'Professional invoicing, expense tracking, and accounting software for freelancers, consultants, and small businesses.',
  openGraph: {
    title: 'InvoiceMonk - Invoicing, Expenses & Accounting Software',
    description: 'Professional invoicing, expense tracking, and accounting software for freelancers and small businesses.',
    url: 'https://invoicemonk.com/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/',
  },
};

// Dynamically import the page content to prevent SSR issues with animations
const HomePageContent = dynamic(() => import('@/components/home/HomePageContent'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-background" />,
});

export default function HomePage() {
  return <HomePageContent />;
}
