import { useEffect } from 'react';
import { useNavigate } from 'next/link';

interface RedirectProps {
  to: string;
}

export const Redirect = ({ to }: RedirectProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);
  
  return null;
};
