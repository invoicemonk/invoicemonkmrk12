'use client';

import dynamic from 'next/dynamic';

const FreelancersComponent = dynamic(() => import('@/pages/Freelancers'), {
  ssr: false,
});

export default function FreelancersPage() {
  return <FreelancersComponent />;
}
