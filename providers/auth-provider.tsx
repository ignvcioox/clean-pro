'use client';
import { useEffect } from 'react';
import { useAuthStore } from '@/modules/auth/hooks/use-auth-store';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { startCheckStatus } = useAuthStore();

  useEffect(() => {
    startCheckStatus();
  }, []);

  return children;
};
