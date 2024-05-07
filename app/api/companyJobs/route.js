import { connectMongoDB } from "@/lib/mongodb";
import Job from "@/models/job";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req){
  try {
    await connectMongoDB();
    const id = req.nextUrl.searchParams.get("id");
    const jobs = await Job.find({owner:id});
    return NextResponse.json({jobs},{status: 200});
  } catch (error) {
    return NextResponse.json({message:"unable to fetch jobs"},{status: 200});    
  }
}

export async function DELETE(req){
  try {
    await connectMongoDB();
    const id = req.nextUrl.searchParams.get("id");
    const job = await Job.findOne({_id:id});
    const owner_id = job.owner;
    const company = await User.findOne({_id:owner_id});
    const jobIds = company.jobIds;
    const index = jobIds.indexOf(id);
    if (index !== -1) {
      jobIds.splice(index, 1);
    }
    await User.findByIdAndUpdate(owner_id,{jobIds: jobIds});
    await Job.findByIdAndDelete({_id:id});
    return NextResponse.json({message:"Job Post Deleted"},{status:200});
  } catch (error) {
    return NextResponse.json({message:"Unable to delete Job Post"},{status:500});
  }
}