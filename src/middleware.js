import { NextResponse } from "next/server";

function redirectForNonAuthUser(reqUrl, defaultUrl) {
  const navigationUrl = new URL(defaultUrl, reqUrl);
  const response = NextResponse.redirect(navigationUrl);

  return response;
}

export function middleware(req) {
  const pathname = req.nextUrl.pathname;
  const url = req.url;

  if (pathname === "/") {
    return redirectForNonAuthUser(url, "/create");
  }
}

export const config = {
  matcher: ["/", "/create"],
};
