import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/utils/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "You are not logged in" });
  }

  return NextResponse.json({
    name: session.user?.name,
    email: session.user?.email,
  });
}
