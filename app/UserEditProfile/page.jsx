import EditUserProfile from "@/components/EditUserProfile";
import { getServerSession } from "next-auth/next";

const getUserByEmail = async(email) => {
  const res = await fetch(`http://localhost:3000/api/userUser?email=${email}`, {
    method: "GET"
  });

  const {user} = await res.json();
  return user;
  
}

export default async function UserEditProfile(){

  const session = await getServerSession();
  const email = session?.user?.email;

  const users = await getUserByEmail(email);

  return (
    <EditUserProfile id={users[0]?._id} name={users[0]?.name} email={users[0]?.email} type={users[0]?.type} bio={users[0]?.bio} x={users[0]?.x} site={users[0]?.site} profile={users[0]?.profile} age={users[0]?.age} verified={users[0]?.verified} />
  )
}