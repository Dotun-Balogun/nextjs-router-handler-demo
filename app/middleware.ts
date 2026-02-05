import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// // Force Login 
// export function middleware(request:NextRequest){
//     const  isLoggedIn = request.cookies.get("token")

//     if(!isLoggedIn){
//         return NextResponse.redirect(new URL("/login",request.url))
//     }
//     return NextResponse.next()
// }


// Auth Procted Dashboard
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
