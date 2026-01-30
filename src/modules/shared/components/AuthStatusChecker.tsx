'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/modules/auth/hooks/useAuthStore';

export const AuthStatusChecker = ({ children }: { children: React.ReactNode }) => {

   const { status, startCheckStatus } = useAuthStore();

   useEffect(() => {
      const checkStatus = async () => {
         if (status === 'checking') await startCheckStatus();
      }
      checkStatus();
   }, [startCheckStatus, status]);

   return children;
};