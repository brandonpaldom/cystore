import { NextResponse } from 'next/server'
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['((?!^/admin/).*)'],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    if (
      auth.userId &&
      !auth.orgId &&
      req.nextUrl.pathname !== '/auth/org-selection'
    ) {
      const orgSelection = new URL('/auth/org-selection', req.url)
      return NextResponse.redirect(orgSelection)
    }

    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next()
    }

    return NextResponse.next()
  },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
