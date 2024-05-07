import EditCompanyProfile from "@/components/EditCompanyProfile";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const getUserByEmail = async(email) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/companyUser?email=${email}`, {
    method: "GET"
  });

  const {user} = await res.json();
  return user;
  
}

export default async function CompanyEditProfile(){

  const session = await getServerSession();
  const email = session?.user?.email;

  const users = await getUserByEmail(email);
  console.log(users[0])

  return (
    <EditCompanyProfile id={users[0]?._id} name={users[0]?.name} email={users[0]?.email} type={users[0]?.type} bio={users[0]?.bio} x={users[0]?.x} site={users[0]?.site}/>
  )
}