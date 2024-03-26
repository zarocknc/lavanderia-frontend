import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import useLoginStore from "./store/loginStatus"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const isLogged = request.cookies.get('isLogged')?.value
    console.log(isLogged)
    if (isLogged === 'false') {
        console.log('redirecting to login')
        const res = NextResponse.redirect(new URL('/login', request.url))
        res.cookies.set('isLogged', 'false')
        return res
    } else if (isLogged === 'true') {
        console.log('user is logged in')
        return NextResponse.next()
    } else {
        console.log('user is not logged in')
        const res = NextResponse.redirect(new URL('/login', request.url))
        res.cookies.set('isLogged', 'false')
        return res
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}