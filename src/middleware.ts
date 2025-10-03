// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  // Create a response object using NextResponse.next()
  const response = NextResponse.next();

  // 1. Basic Security Headers
  // These should be set directly on the response object.
  response.headers.set('X-Frame-Options', 'DENY'); // Prevents clickjacking
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // Restrict access to sensitive APIs (customize as needed)
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // 2. HSTS (Strict-Transport-Security)
  // Enforces HTTPS. Only active in production. Max-age is 1 year.
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  // 3. Content Security Policy (CSP)
  // Define the CSP directives. This is a secure starting point for Next.js.
  const cspDirectives = {
    'default-src': ["'self'"],
    // Next.js (with Tailwind/shadcn) requires 'unsafe-inline' for styles.
    'style-src': ["'self'", "'unsafe-inline'"],
    // In development, Next.js needs 'unsafe-eval' for Fast Refresh. We exclude it in production.
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''
    ].filter(Boolean),
    'img-src': ["'self'", 'data:', 'blob:'],
    'font-src': ["'self'"],
    // Allow connections for Vercel Analytics (if used) and other essential services
    'connect-src': ["'self'", 'https://vitals.vercel-insights.com'],
    'frame-ancestors': ["'none'"] // Reinforces X-Frame-Options: DENY
  } as const;

  // Flatten the directives into a CSP string
  const csp = Object.entries(cspDirectives)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ');

  // Set the CSP header. Use Content-Security-Policy-Report-Only during initial testing if needed.
  response.headers.set('Content-Security-Policy', csp);

  return response;
}

// Apply middleware to page routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
