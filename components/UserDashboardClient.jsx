"use client"

import Footer from "@/components/Footer";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import Card from "./cardApplied";


export default function UserDashboardClient({jobs,user}){

  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);

  const handleChange = () => {
    if(sidebar === false){
      setSidebar(true);
    }else{
      setSidebar(false);
    }
  }

  const handleFindJobs = () => {
    router.push("/FindJobs");
  }

  const handleProfileEdit = () => {
    router.push("/UserEditProfile");
  }

  const handleChatbot = () => {
    router.push("/UserDashboard");
  }

  return (
    <div>
      <div className="flex">
        { sidebar? (
          <div className="bg-teal-400/40 py-[22px] pl-[20px] absolute flex gap-[20px]">
            <div className="flex flex-col gap-5">
              <button onClick={handleChatbot} className="bg-teal-600 py-2 px-5 rounded-lg text-white font-semibold shadow-xl hover:text-teal-600 hover:bg-white">Chatbot</button>
              <button onClick={handleFindJobs} className="bg-teal-600 py-2 px-5 rounded-lg text-white font-semibold shadow-xl hover:text-teal-600 hover:bg-white">Find Jobs</button>
              <button onClick={handleProfileEdit} className="bg-teal-600 py-2 px-5 rounded-lg text-white font-semibold shadow-xl hover:text-teal-600 hover:bg-white">Profile</button>
              <button onClick={signOut} className="bg-teal-600 py-2 px-5 rounded-lg text-white font-semibold shadow-xl hover:text-teal-600 hover:bg-white">Sign Out</button>
            </div>
            <div>
              <button onClick={handleChange} className="pt-[98px] pr-2"><MdOutlineKeyboardDoubleArrowLeft className="text-teal-600 hover:text-white"/></button>
            </div>
          </div>
        ):(
          <button onClick={handleChange} className="bg-teal-400/40 py-[124px] px-2 absolute"><MdOutlineKeyboardDoubleArrowRight className="text-teal-600 hover:text-white"/></button>
        )}
        {jobs.length === 0 ? (
          <div className="py-[120px] mx-auto"><div>Looks empty :(</div></div>
        ):(
          <div className="flex gap-5 py-5 px-5">
            {jobs.map((job) => (
              <Card key={job._id} id={job._id} name={job.companyName} position={job.position} salary={job.salary} desc={job.responsibilities}/>
            ))}
          </div>
        )}
        
        
      </div>
      <Footer />
    </div>
  )
}