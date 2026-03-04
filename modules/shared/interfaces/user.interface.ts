export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  roles: string[];
  isActive: boolean;
  photo: string | null;
  phone: string | null;
  isEmailVerified: boolean;
  createdAt: Date;
}

export interface UsersResponse {
  users: User[];
  meta: {
    count: number;
    pages: number;
  };
}
