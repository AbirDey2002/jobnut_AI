import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req){
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({email: email});
    return NextResponse.json({user});
  } catch (error) {
    console.log(error);
  }
}