import UserDashboardClient from "@/components/UserDashboardClient";
import { getServerSession } from "next-auth";

const getIdByEmail = async(email) => {
  const res = await fetch(`http://localhost:3000/api/companyUser?email=${email}`,{
    method: "GET"
  });

  const {user} = await res.json();
  return user;
}

const getJobsById = async(id) => {
  const res = await fetch(`http://localhost:3000/api/appliedJobs?id=${id}`,{
    method:"GET"
  });

  const {appliedJobs} = await res.json();
  return appliedJobs;
}

export default async function UserDashboard(){

  const session = await getServerSession();
  const user = await getIdByEmail(session?.user?.email);
  const appliedJobs = await getJobsById(user[0]._id);

  return (
    <UserDashboardClient jobs={appliedJobs} user={user[0]._id}/>
  )
}