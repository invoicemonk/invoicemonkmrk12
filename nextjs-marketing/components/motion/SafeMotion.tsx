'use client';

import { MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

// Wrapper to configure framer-motion with reduced motion support and proper initialization
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
