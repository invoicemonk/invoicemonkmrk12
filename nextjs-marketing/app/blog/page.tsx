import { Metadata } from 'next';
import { DynamicBlog } from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'Blog - Invoicing, Accounting & Business Tips | InvoiceMonk',
  description: 'Expert guides and resources on invoicing, expense tracking, accounting, and small business financial management.',
  alternates: { canonical: 'https://invoicemonk.com/blog/' },
};

export default function BlogPage() {
  return <DynamicBlog />;
}
