import { Metadata } from 'next';
import BlogComponent from '@/pages/Blog';

export const metadata: Metadata = {
  title: 'Blog - Invoicing, Accounting & Business Tips | InvoiceMonk',
  description: 'Expert guides and resources on invoicing, expense tracking, accounting, and small business financial management. Learn best practices and tips.',
  openGraph: {
    title: 'InvoiceMonk Blog - Financial Management Tips & Guides',
    description: 'Expert guides and resources on invoicing, expense tracking, accounting, and small business financial management.',
    url: 'https://invoicemonk.com/blog/',
  },
  alternates: {
    canonical: 'https://invoicemonk.com/blog/',
  },
};

export default function BlogPage() {
  return <BlogComponent />;
}
