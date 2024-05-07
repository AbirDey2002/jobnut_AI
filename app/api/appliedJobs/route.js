import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Job from "@/models/job";
import User from "@/models/user";

export async function GET(req){
  try {
    await connectMongoDB();
    const id = req.nextUrl.searchParams.get("id");
    const jobs = await Job.find();
    const appliedJobs = [];
    jobs.forEach((job) => {
      const userIds = job.userIds;
      const applied = userIds.includes(id);
      if(applied === true){
        appliedJobs.push(job);
      }
    })
    return NextResponse.json({appliedJobs},{status:200});
  } catch (error) {
    return NextResponse.json({message:"unable to fetch jobs"},{status:200});
  }
}