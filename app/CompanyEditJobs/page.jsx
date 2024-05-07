import CompanyEditJobsClient from "@/components/CompanyEditJobsClient";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const getUserByEmail = async(email) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/companyUser?email=${email}`, {
    method: "GET"
  });

  const {user} = await res.json();
  return user;
  
}

const getJobsById = async(id) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/companyJobs?id=${id}`,{
    method: "GET"
  });

  const {jobs} = await res.json();
  return jobs;

}

export default async function CompanyEditJobs(){

  const session = await getServerSession();
  const email = session?.user?.email;
  const user = await getUserByEmail(email);
  const id = user[0]._id;
  const jobs = await getJobsById(id);
  // console.log(jobs[0]);


  return (
    <CompanyEditJobsClient jobs={jobs}/>
  )
}