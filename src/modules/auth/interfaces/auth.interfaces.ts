export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

export interface User {
   id        : string;
   fullName  : string;
   email     : string;
   rol       : string;
   isActive  : boolean;
   createdAt?: string;
   photo     : string;
   phone     : string;
   region    : string;
}

export interface AuthResponse {
   message: string;
   success: boolean;
   token  : string;
   user   : User;
}

export interface RegisterResponse {
   email         : string;
   expiresAtLocal: string;
   expiresAtUTC  : Date;
   message       : string;
   success       : boolean;
}

export interface SignInCredentials {
   email   : string;
   password: string;
}

export interface SignUpCredentials {
   fullName: string;
   email   : string;
   password: string;
}


