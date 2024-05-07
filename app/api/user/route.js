import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const {name, email, password, userType } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({name: name, email:email, password:hashedPassword, type:userType, jobIds:[]});

    return NextResponse.json({message: "User Registered"}, {status: 201});
  } catch (error) {
    
    return NextResponse.json({message: "An error occured while new user registration"}, {status: 500});
  }
}

export async function PUT(req){
  try {
    const id = req.nextUrl.searchParams.get("id");
    const {newPassword} = await req.json();
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await connectMongoDB();
    await User.findByIdAndUpdate(id, {password:hashedPassword});
    return NextResponse.json({message:"Password Updated"},{status:200});
  } catch (error) {
    return NextResponse.json({message:"Failed Update"},{status:500});
  }
}