import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/'];

const AUTH_PAGES = [
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/forgot-password',
  '/auth/verify-email',
  '/auth/recovery-password',
];

const PROTECTED_ROUTES = ['/auth/account/*'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get('access_token')?.value;

  const isAccountRoute = pathname.startsWith('/auth/account');
  const isDashboardRoute = pathname.startsWith('/dashboard');

  const isProtectedRoute =
    PROTECTED_ROUTES.includes(pathname) || isAccountRoute || isDashboardRoute;

  if (token && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
  }

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
  }

  if (token && isDashboardRoute) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isAdmin = payload.roles?.some(
        (role: string) => role.toLowerCase() === 'admin',
      );
      if (!isAdmin)
        return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
    } catch (error) {
      return NextResponse.redirect(new URL(PUBLIC_ROUTES[0], request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
