// middleware.ts
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
    const isAuthRoute = req.nextUrl.pathname.startsWith('/login') || 
                        req.nextUrl.pathname.startsWith('/logout')
    const isApiAuthRoute = req.nextUrl.pathname.startsWith('/api/auth')

    // Si non authentifié et essaie d'accéder à /admin, rediriger vers login
    if (!token && isAdminRoute) {
      const loginUrl = new URL('/login', req.url)
      return NextResponse.redirect(loginUrl)
    }

    // Si authentifié et essaie d'accéder à login, rediriger vers admin
    if (token && req.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/admin/blog', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // Le middleware s'occupe de la redirection
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/admin/:path*', '/login']
}