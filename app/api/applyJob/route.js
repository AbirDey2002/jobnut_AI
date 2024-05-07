import { connectMongoDB } from "@/lib/mongodb";
import Job from "@/models/job";
import { NextResponse } from "next/server";

export async function PUT(req){
  try {
    await connectMongoDB();
    const id =  req.nextUrl.searchParams.get("id");
    const job = await Job.findOne({_id:id});
    const applicant_id = req.nextUrl.searchParams.get("applicant_id");
    const applicants = job.userIds;
    const includes = applicants.includes(applicant_id);
    if(includes === false){
      applicants.push(applicant_id);
      await Job.findByIdAndUpdate(id,{userIds:applicants})
      return NextResponse.json({message:"Applied"},{status:201})
    }
    return NextResponse.json({message:"Already applied"},{status:200})
  } catch (error) {
    return NextResponse.json({message:"Failed to apply"},{status:500})
  }
}

export async function GET(req){
    try {
      const id =  req.nextUrl.searchParams.get("id");
      const job = await Job.findOne({_id:id});
      const applicant_id = req.nextUrl.searchParams.get("applicant_id");
      const applicants = job.userIds;
      const applied = applicants.includes(applicant_id);
      return NextResponse.json({applied},{status:200});
    } catch (error) {
      return NextResponse.json({message:"can't fetch status"},{status:200});
    } 
    
}

export async function DELETE(req){
  try {
      const id =  req.nextUrl.searchParams.get("id");
      const job = await Job.findOne({_id:id});
      const applicant_id = req.nextUrl.searchParams.get("applicant_id");
      const applicants = job.userIds;
      const index = applicants.indexOf(applicant_id);
      if (index !== -1) {
        applicants.splice(index, 1);
      }
      await Job.findByIdAndUpdate(id,{userIds: applicants});
      return NextResponse.json({message:"Unsubscribed"},{status:200});

  } catch (error) {
    return NextResponse.json({message:"failed To unsubscribe"},{status:500});
  }
}