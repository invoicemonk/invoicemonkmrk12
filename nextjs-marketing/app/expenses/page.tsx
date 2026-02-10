'use client';

import dynamic from 'next/dynamic';

const ExpensesComponent = dynamic(() => import('@/pages/Expenses'), {
  ssr: false,
});

export default function ExpensesPage() {
  return <ExpensesComponent />;
}
