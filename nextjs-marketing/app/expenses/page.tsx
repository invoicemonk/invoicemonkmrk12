'use client';

import dynamicImport from 'next/dynamic';

// Force dynamic rendering - must be before component definition
export const dynamic = 'force-dynamic';

const ExpensesComponent = dynamicImport(() => import('@/pages/Expenses'), {
  ssr: false,
  loading: () => <div style={{ minHeight: '100vh' }}></div>,
});

export default function ExpensesPage() {
  return <ExpensesComponent />;
}
