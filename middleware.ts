import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, parseSessionValue } from '@/lib/auth';

const PUBLIC_ADMIN_PATHS = ['/admin/worker', '/admin/boss'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  if (PUBLIC_ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const sessionCookie = req.cookies.get(SESSION_COOKIE)?.value;
  const role = parseSessionValue(sessionCookie);

  if (!role) {
    return NextResponse.redirect(new URL('/admin/worker', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};