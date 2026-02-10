import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Blog - Invoicing, Accounting & Business Tips | InvoiceMonk',
  description: 'Expert guides and resources on invoicing, expense tracking, accounting, and small business financial management.',
  alternates: { canonical: 'https://invoicemonk.com/blog/' },
};

const BlogComponent = dynamic(() => import('@/pages/Blog'), { ssr: false });

export default function BlogPage() {
  return <BlogComponent />;
}
