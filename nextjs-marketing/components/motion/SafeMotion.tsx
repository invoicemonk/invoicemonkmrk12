'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ReactNode } from 'react';

// Re-export motion as m for consistency
export { m as motion };

// Wrapper to ensure LazyMotion features are loaded
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

// Safe motion div that handles SSR gracefully
export function MotionDiv({
  children,
  className,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  [key: string]: any;
}) {
  return (
    <m.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </m.div>
  );
}
