import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '@/store/auth/auth-slice';
import { usersSlice } from '@/store/users/users-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
