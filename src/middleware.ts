import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (req: NextRequest) => {
  const url = req.nextUrl.clone()

  const redirectToPublic = () => {
    url.pathname = '/'
    const redirectResponse = NextResponse.redirect(url)
    redirectResponse.headers.set('x-middleware-cache', 'no-cache')
    return redirectResponse
  }

  try {
    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (req.cookies.has('token')) {
        return NextResponse.next()
      } else {
        return redirectToPublic()
      }
    } else {
      if (req.cookies.has('token')) {
        url.pathname = '/admin'
        const redirectResponse = NextResponse.redirect(url)
        redirectResponse.headers.set('x-middleware-cache', 'no-cache')
        return redirectResponse
      }
    }
    return NextResponse.next()
  } catch (e) {
    return redirectToPublic()
  }
  //   console.log(`req.cookies.has('token')`, req.cookies.has('token'))
  //   const url = req.nextUrl.clone()

  //   if (req.cookies.has('token')) {
  //     return NextResponse.next()
  //   }

  //   url.pathname = '/'
  //   const redirectResponse = NextResponse.redirect(url)
  //   redirectResponse.headers.set('x-middleware-cache', 'no-cache')
  //   return redirectResponse
}

// Supports both a single string value or an array of matchers.
export const config = {
  matcher: ['/', '/admin/:path*'],
}
