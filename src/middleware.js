import { match } from "assert";
import { NextResponse } from "next/server";

export function middleware(request) {
  const cookies = parseCookies(request.headers.get("cookie") || "");

  if (request.nextUrl.pathname == "/add-projects") {
    if (cookies["token"]!='' && cookies["token"]!=undefined) {
      if (request.nextUrl.pathname != "/add-projects") {
        return NextResponse.redirect(new URL("/add-projects", request.url));
      }
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

function parseCookies(cookieString) {
  const cookies = {};
  const items = cookieString.split("; ");

  for (const item of items) {
    const [name, value] = item.split("=");
    cookies[name] = decodeURIComponent(value);
  }

  return cookies;
}