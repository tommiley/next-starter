import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Your middleware logic here
  // For example:
  // const response = NextResponse.next()
  // response.headers.set('x-hello-from-middleware', 'hello')
  // return response
  
  // If you don't need to modify the response, you can simply return
  return NextResponse.next();
}

// Optionally, you can specify which routes this middleware applies to
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}