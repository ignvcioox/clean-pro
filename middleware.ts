/* import { NextResponse, type NextRequest } from 'next/server';

const AUTH_PAGES            = ['/auth/sign-in', '/auth/sign-up'];
const DEFAULT_AUTH_REDIRECT = '/';
const HOME_URL              = '/';

export function middleware(request: NextRequest) {
   
   const pathname = request.nextUrl.pathname;
   const token    = request.cookies.get('auth_token')?.value;

   if (AUTH_PAGES.includes(pathname) && token) {
      const url = new URL(HOME_URL, request.url);
      return NextResponse.redirect(url);
   }

   if (pathname.startsWith('/auth/') && !AUTH_PAGES.includes(pathname) && !token) {
      const url = new URL(DEFAULT_AUTH_REDIRECT, request.url);
      return NextResponse.redirect(url);
   }

   return NextResponse.next();
}

export const config = {
   matcher: ['/auth/:path*'],
} */

import { NextResponse, type NextRequest } from 'next/server';

const AUTH_PAGES            = ['/auth/sign-in', '/auth/sign-up'];
const DEFAULT_AUTH_REDIRECT = '/auth/sign-in';
const HOME_URL              = '/';

export function middleware(request: NextRequest) {

   const pathname = request.nextUrl.pathname;
   const token    = request.cookies.get('auth_token')?.value;

   if (pathname.startsWith('/auth/')) {
      if (token) {
         const url = new URL(HOME_URL, request.url);
         return NextResponse.redirect(url);
      }
      if (!AUTH_PAGES.includes(pathname)) {
         const url = new URL(DEFAULT_AUTH_REDIRECT, request.url);
         return NextResponse.redirect(url);
      }
   }
   return NextResponse.next();
}

export const config = {
   matcher: ['/auth/sign-in', '/auth/sign-up'],
}