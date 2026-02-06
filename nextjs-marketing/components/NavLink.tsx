'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export function NavLink({ to, children, className = '', activeClassName = '', onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <NextLink
      href={to}
      className={`${className} ${isActive ? activeClassName : ''}`}
      onClick={onClick}
    >
      {children}
    </NextLink>
  );
}

// Also export Link as default for backward compatibility
export { NextLink as Link };
export default NavLink;
