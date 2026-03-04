import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthStatus } from '@/modules/auth/interfaces/auth.interfaces';
import { User } from '@/modules/shared/interfaces/user.interface';
import { getCookie } from '@/modules/shared/utils/cookies';

interface AuthState {
  user: User | null;
  status: AuthStatus;
  errorMessage?: string;
  verificationEmail?: string;
}

const initialState: AuthState = {
  user: null,
  status: 'checking',
  verificationEmail: getCookie('pending_verify_email'),
};

// Redux slice para manejar el Estado Global de la autenticación del usuario.
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
      state.user = null;
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }: PayloadAction<{ user: User }>) => {
      state.status = 'authenticated';
      state.user = payload.user;
      state.errorMessage = undefined;
      state.verificationEmail = undefined;
    },
    onLogout: (state, { payload }: PayloadAction<string | undefined>) => {
      state.status = 'not-authenticated';
      state.user = null;
      state.errorMessage = payload;
    },
    onSetVerificationEmail: (state, { payload }: PayloadAction<string>) => {
      state.verificationEmail = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Exportamos las acciones para ser utilizadas en los componentes.
export const {
  onChecking,
  onLogin,
  onLogout,
  onSetVerificationEmail,
  clearErrorMessage,
} = authSlice.actions;
