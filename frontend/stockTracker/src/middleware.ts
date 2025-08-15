import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const protectedRoutes: string[] = ["/dashboard"];
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    const JWT = request.cookies.get("jwtToken");

    // if (!JWT) {
    //   return NextResponse.redirect(new URL("/", request.url));
    // }
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
