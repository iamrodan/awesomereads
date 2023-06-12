import { NextResponse } from "next/server";
import { isServerHeathGood } from "./service";

export function GET(request: Request) {
  const health = isServerHeathGood() ? "Good" : "Bad";
  const status = isServerHeathGood() ? 200 : 503;

  return NextResponse.json(
    { message: `Server heath is ${health}!` },
    { status }
  );
}
