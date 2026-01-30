'use client';

import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { AuthStatusChecker } from '@/src/modules/shared/components/AuthStatusChecker';

export function Providers({ children }: { children: React.ReactNode }) {
   return (
      <Provider store={store}>
         <AuthStatusChecker>
            {children}
         </AuthStatusChecker>
      </Provider>
   );
};