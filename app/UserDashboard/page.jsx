import UserDashboardClient from "@/components/UserDashboardClient";
import { getServerSession } from "next-auth";

const getIdByEmail = async(email) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/companyUser?email=${email}`,{
    method: "GET"
  });

  const {user} = await res.json();
  return user;
}

const getJobsById = async(id) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/appliedJobs?id=${id}`,{
    method:"GET"
  });

  const {appliedJobs} = await res.json();
  return appliedJobs;
}

export default async function UserDashboard(){

  return (
    <UserDashboardClient />
  )
}