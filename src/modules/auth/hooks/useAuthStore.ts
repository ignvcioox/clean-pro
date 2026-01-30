import { baseURL } from '@/src/config/axios.config';

import { useAppDispatch, useAppSelector } from '@/src/store/app-redux';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '@/src/store/auth/authSlice';

import { SignInCredentials, AuthResponse, SignUpCredentials } from '@/modules/auth/interfaces/auth.interfaces';

export const useAuthStore = () => {

   const dispatch = useAppDispatch();

   const { status, user, errorMessage } = useAppSelector(state => state.auth);

   const startCheckStatus = async () => {
      dispatch(onChecking());
      try {
         const { data } = await baseURL.get('/auth/check-status');
         dispatch(onLogin({ user: data.user, token: data.token }));
      } catch (error) {
         dispatch(onLogout());
      }
   }

   const loginUser = async ({ email, password }: SignInCredentials): Promise<boolean> => {
      dispatch(onChecking());
      try {
         const { data } = await baseURL.post<AuthResponse>('/auth/sign-in', { email, password });
         dispatch(onLogin({ user: data.user, token: data.token }));
         return true;
      } catch (error: any) {
         const message = error.response?.data?.message
         dispatch(onLogout(message));
         return false;
      }
   };

   const registerUser = async ({ fullName, email, password }: SignUpCredentials): Promise<boolean> => {
      dispatch(onChecking());
      try {
         const { data } = await baseURL.post<AuthResponse>('/auth/sign-up', { fullName, email, password });
         localStorage.setItem('token', data.token);
         dispatch(onLogin({ user: data.user, token: data.token }));
         return true;
      } catch (error: any) {
         const message = error.response?.data?.message;
         dispatch(onLogout(message));
         return false;
      }
   };


   const startLogout = async () => {
      try {
         await baseURL.delete('/auth/sign-out');
         dispatch(onLogout());
      } catch (error) {
         return;
      }
   };

   const startClearErrorMessage = () => {
      dispatch(clearErrorMessage());
   };

   return {
      // Propiedades
      status,
      user,
      errorMessage,

      // Métodos
      loginUser,
      registerUser,
      startLogout,
      startCheckStatus,
      startClearErrorMessage,
   };
}