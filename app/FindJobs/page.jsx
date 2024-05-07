import FilteredJobs from "@/components/FilteredJobs";
import FindJobsClient from "@/components/FindJobsClient";
import { getServerSession } from "next-auth";

const getUserByEmail = async(email) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/companyUser?email=${email}`, {
    method: "GET"
  });

  const {user} = await res.json();
  return user;
  
}

const getAllJobs = async () => {
  const res = await fetch('https://jobnut-ai.vercel.app/api/job',{
    method: "GET"
  });

  const {jobs} = await res.json();
  return jobs;
}

export default async function FindJobs(req){

  const {query} = await req.searchParams;
  const session = await getServerSession();
  const email = session?.user?.email;
  const user = await getUserByEmail(email);
  const jobs = await getAllJobs();

  return (
    <div>
      <FindJobsClient/>
      <FilteredJobs query={query? query:""} jobs={jobs} user={user}/>
    </div>
  )
}