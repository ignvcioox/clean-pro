import { User } from '@/modules/shared/interfaces/user.interface';
import RecoveryPassword from '../../../app/auth/(auth-pages)/recovery-password/page';

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

export interface RegisterResponse {
  message: string;
  success: boolean;
}

export interface VerifyEmailResponse {
  message: string;
  success: boolean;
  token: string;
  user: User;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  fullName: string;
  email: string;
  password: string;
}

export interface VerifyEmailCredentials {
  email: string;
  code: string;
}

export interface ResendVerificationCredentials {
  email: string;
}

export interface ResetPasswordCredentials {
  email: string;
  code: string;
  newPassword: string;
}
