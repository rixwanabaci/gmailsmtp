import { NextResponse } from "next/server";

export function middleware(request) {
  // Your middleware logic here
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};

export const runtime = "edge";
