import { baseURL } from '@/config/axios.config';
import { useAppDispatch, useAppSelector } from '@/store/app-redux';

import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
  onSetVerificationEmail,
} from '@/store/auth/auth-slice';

import {
  SignInCredentials,
  SignUpCredentials,
  VerifyEmailCredentials,
  ResendVerificationCredentials,
  ResetPasswordCredentials,
  RegisterResponse,
  VerifyEmailResponse,
} from '@/modules/auth/interfaces/auth.interfaces';
import { AuthResponse } from '@/modules/shared/interfaces/user.interface';

export const useAuthStore = () => {
  const dispatch = useAppDispatch();

  const { status, user, errorMessage, verificationEmail } = useAppSelector(
    (state) => state.auth,
  );

  const startCheckStatus = async () => {
    dispatch(onChecking());
    try {
      const { data } = await baseURL.get('/auth/check-status');
      dispatch(onLogin({ user: data.user }));
    } catch (error) {
      dispatch(onLogout());
    }
  };

  // Método para iniciar sesión con email y contraseña.
  const loginUser = async ({
    email,
    password,
  }: SignInCredentials): Promise<boolean> => {
    dispatch(onChecking());
    try {
      const { data } = await baseURL.post<AuthResponse>('/auth/sign-in', {
        email,
        password,
      });
      dispatch(onLogin({ user: data.user }));
      return true;
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'No se pudo conectar con el servidor';
      dispatch(onLogout(message));
      return false;
    }
  };

  // Método para registrar un nuevo usuario con nombre completo, email y contraseña
  const registerUser = async ({
    fullName,
    email,
    password,
  }: SignUpCredentials): Promise<boolean> => {
    dispatch(onChecking());
    try {
      await baseURL.post<RegisterResponse>('/auth/sign-up', {
        fullName,
        email,
        password,
      });
      dispatch(onSetVerificationEmail(email));
      dispatch(onLogout());
      return true;
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'No se pudo conectar con el servidor';
      dispatch(onLogout(message));
      return false;
    }
  };

  // Método para verificar el correo electrónico utilizando el código de verificación.
  const verifyEmail = async ({
    email,
    code,
  }: VerifyEmailCredentials): Promise<boolean> => {
    dispatch(onChecking());
    try {
      const { data } = await baseURL.post<VerifyEmailResponse>(
        '/auth/verify-email',
        {
          email,
          code,
        },
      );
      dispatch(onLogin({ user: data.user }));
      return true;
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'No se pudo conectar con el servidor';
      dispatch(onLogout(message));
      return false;
    }
  };

  // Método para reenviar el código de verificación al correo electrónico.
  const resendVerificationCode = async ({
    email,
  }: ResendVerificationCredentials): Promise<boolean> => {
    try {
      await baseURL.post('/auth/resend-verification', { email });
      return true;
    } catch (error: any) {
      const message =
        error.response?.data?.message || 'No se pudo conectar con el servidor';
      dispatch(onLogout(message));
      return false;
    }
  };

  const forgotPassword = async ({
    email,
  }: {
    email: string;
  }): Promise<boolean> => {
    dispatch(onChecking());
    try {
      const { data } = await baseURL.post('/auth/forgot-password', { email });
      console.log(data);
      return true;
    } catch (error: any) {
      const message = error.response?.data?.message;
      dispatch(onLogout(message));
      return false;
    }
  };

  const resetPassword = async ({
    email,
    code,
    newPassword,
  }: ResetPasswordCredentials): Promise<boolean> => {
    dispatch(onChecking());

    // LOG PARA VER QUÉ ESTÁ SALIENDO
    console.log('🚀 Enviando a /auth/reset-password:', {
      email,
      code,
      newPassword,
    });

    try {
      const { data } = await baseURL.post('/auth/reset-password', {
        email,
        code,
        newPassword,
      });
      console.log('✅ Respuesta del servidor:', data);
      dispatch(onLogout());
      return true;
    } catch (error: any) {
      // LOG DETALLADO DEL ERROR
      console.error(
        '❌ Error en resetPassword:',
        error.response?.data || error.message,
      );

      const message = error.response?.data?.message || 'Error al restablecer';
      dispatch(onLogout(message));
      return false;
    }
  };

  // Método para cerrar sesión, eliminando el token del backend y cerrando las sesiones activas
  const startLogout = async () => {
    try {
      await baseURL.post('/auth/sign-out');
      dispatch(onLogout());
    } catch (error) {
      dispatch(onLogout());
      return;
    }
  };

  const startClearErrorMessage = () => dispatch(clearErrorMessage());

  return {
    // Propiedades
    status,
    user,
    errorMessage,
    verificationEmail,

    // Métodos
    loginUser,
    registerUser,
    verifyEmail,
    resendVerificationCode,
    forgotPassword,
    resetPassword,
    startLogout,
    startCheckStatus,
    startClearErrorMessage,
  };
};
