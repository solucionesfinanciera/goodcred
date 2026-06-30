import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(
  request: NextRequest
) {
  const token =
    request.cookies.get(
      'admin'
    )?.value;

  const logueado =
    token === 'ok';

  if (
    request.nextUrl.pathname.startsWith(
      '/admin-panel'
    )
  ) {
    if (!logueado) {
      return NextResponse.redirect(
        new URL(
          '/login',
          request.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin-panel/:path*',
  ],
};