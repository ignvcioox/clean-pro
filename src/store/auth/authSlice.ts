import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, User } from '@/modules/auth/interfaces/auth.interfaces';

interface AuthState {
   errorMessage : string | undefined;
   status       : AuthStatus;
   user         : User | null;
}

const initialState: AuthState = {
   errorMessage: undefined,
   status      : 'checking',
   user        : null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      onChecking: (state) => {
         state.status = 'checking';
         state.user   = null;
         state.errorMessage = undefined;
      },
      onLogin: (state, action: PayloadAction<{ user: User, token: string }>) => {
         state.status       = 'authenticated';
         state.user         = action.payload.user;
         state.errorMessage = undefined;
      },
      onLogout: (state, action: PayloadAction<string | undefined>) => {
         state.status       = 'not-authenticated';
         state.user         = null;
         state.errorMessage = action.payload;
      },
      clearErrorMessage: (state) => {
         state.errorMessage = undefined;
      },
   },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;

