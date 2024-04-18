import { NextResponse } from "next/server";

const protectedRoutes = ["/dashboard"];

export default function middleware(req) {
  let isAuthenticated = req.cookies.get("jwt_token")?.value;
  console.log(isAuthenticated, "Authenticated");
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
