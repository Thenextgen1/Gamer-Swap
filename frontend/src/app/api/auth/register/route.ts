import bcrypt from "bcryptjs";
import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/utils/dbConnect";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const { name, email, password } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
