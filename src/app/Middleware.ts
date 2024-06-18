import { NextResponse } from "next/server";

export function middleware(request: Request) {
	const url = new URL(request.url);
	const locale = request.headers.get("accept-language")?.startsWith("fr") ? "fr" : "en";

	const response = NextResponse.next();
	response.cookies.set("locale", locale, { path: "/" });
	return response;
}

export const config = {
	matcher: "/",
};
