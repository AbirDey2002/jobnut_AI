import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Job from "@/models/job";
import User from "@/models/user";

export async function POST(req){
  try{
    const {owner, companyName, position, salary, responsibilities} = await req.json();
    
    await connectMongoDB();
    const job = await Job.create({owner, companyName, position, salary, responsibilities});
    
    return NextResponse.json({job},{status: 201});
  }catch(error){
    return NextResponse.json({message: "An error occured while new job creation"},{status: 500});
  }
}

export async function PUT(req){
  try{
    const { company_id, job_id } = await req.json();
    await connectMongoDB();
    const user = await User.findOne({_id:company_id});
    const job_ids = user.jobIds;
    job_ids.push(job_id);
    const jobIds = job_ids;
    await User.findByIdAndUpdate(company_id,{ jobIds })
    return NextResponse.json({message:"Job Posted under the company"},{status:200});
  }catch(error){
    return NextResponse.json({message: "Error fetching array"},{status:500});
  }
}

export async function GET(req){
  try {
    await connectMongoDB();
    const jobs = await Job.find();
    return NextResponse.json({jobs},{status:200});
  } catch (error) {
    return NextResponse.json({message: "failed to fetch jobs"},{status:500});
  }
}