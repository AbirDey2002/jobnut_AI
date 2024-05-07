"use client"

import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function CompanyDashboardClient({sessionEmail}){

  const router = useRouter();

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    try {
      const userExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({email: sessionEmail}),
      });
  
      const {user} = await userExists.json();
  
      if(user.type === 2){
        router.push("/CompanyEditProfile");
      }else{
        router.back();
      }
    } catch (error) {
      console.log("error at companydashboard/handlesubmit")
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();

    try {
      const userExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({email: sessionEmail}),
      });
  
      const {user} = await userExists.json();
  
      if(user.type === 2){
        router.push("/CompanyEditJobs");
      }else{
        router.back();
      }
    } catch (error) {
      console.log("error at companydashboard/handlesubmit")
    }
  }

  const handleSubmit3 = async (e) => {
    e.preventDefault();

    try {
      const userExists = await fetch("http://localhost:3000/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({email: sessionEmail}),
      });
  
      const {user} = await userExists.json();
  
      console.log(user.type);
      if(user.type === 2){
        router.push("/CreateJob");
      }else{
        router.back();
      }
    } catch (error) {
      console.log("error at companydashboard/handlesubmit")
    }
  }

  return (    
    <div>      
      <div className="flex">
        <button onClick={handleSubmit1} className="bg-green-400/20 border text-center py-[110px] w-full">Edit Company Profile</button>
        <button onClick={handleSubmit2} className="bg-cyan-400/20 border text-center py-[110px] w-full">Edit a Job Post</button>
        <button onClick={handleSubmit3} className="bg-purple-400/20 border text-center py-[110px] w-full">Create a Job Profile</button>
      </div>
      <Footer />
    </div>
  )
}