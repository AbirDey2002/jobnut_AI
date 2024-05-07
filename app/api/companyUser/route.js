import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function GET(req){
  
  try {
    await connectMongoDB();
    const email = req.nextUrl.searchParams.get("email");
    const user = await User.find({email:email});
    return NextResponse.json({user},{status:200});
  } catch (error) {
    return NextResponse.json({message: "Error getting companyUser"},{status:200});
  }
}

export async function PUT(req){
  try {
    const id = req.nextUrl.searchParams.get("id");
    const {newName:name, newBio:bio, newX:x, newSite:site} = await req.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, {name, bio, x, site});
    return NextResponse.json({message:"User Updated"},{status:200});
  } catch (error) {
    return NextResponse.json({message:"Failed Update"},{status:500});
  }
}