"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateJob(){

  const [companyName, setCompanyName] = useState();
  const [position, setPosition] = useState();
  const [salary, setSalary] = useState();
  const [responsibilities, setResponsibilities] = useState();
  const [error, setError] = useState("");

  const {data:session} = useSession();
  const email = session?.user?.email;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!companyName || !position || !salary || !responsibilities){
      setError("All fields Required !");
      return;
    }
    
    const userExists = await fetch("https://jobnut-ai.vercel.app/api/userExists", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({email}),
    });

    const {user} = await userExists.json();
    // console.log(user);

    if(!user){
      setError("No User In Session")
      return;
    }

    if(user.type === 1){
      router.push("/")
      setError("Not a Company")
    }

    const owner = user._id;
    // console.log(user);

    try {
      const res = await fetch('https://jobnut-ai.vercel.app/api/job', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          owner, companyName, position, salary, responsibilities
        })
      });

      const {job} = await res.json();

      const addJobList = await fetch('https://jobnut-ai.vercel.app/api/job',{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          company_id:owner, job_id:job._id,
        })
      })

      if(res.ok && addJobList.ok){
        const form = e.target;
        form.reset();
        setError("");
        router.push("/CompanyDashboard");
      }else{
        console.log("Job Creation Failed");
      }
    } catch (error) {
      console.log("Error during Job Creation", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-b from-blue-200 to-teal-200">
      <div className="bg-white px-[120px] py-10 h-fit w-fit rounded-lg shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-fit">
          <div className="flex flex-col gap-1 justify-end"><h3 className="font-semibold">Company Name</h3><input onChange={(e) => setCompanyName(e.target.value)} className="border  bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. JOBNUT.AI" /></div>
          <div className="flex flex-col gap-1 justify-end"><h3 className="font-semibold">Position</h3><input onChange={(e) => setPosition(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. Senior Data Analyst" /></div>
          <div className="flex flex-col gap-1 justify-end"><h3 className="font-semibold">Salary</h3><input onChange={(e) => setSalary(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. ₹ 1200000" /></div>
          <div className="flex flex-col gap-1 justify-end"><h3 className="font-semibold">Job Description</h3><input onChange={(e) => setResponsibilities(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. Description" /></div>
          <div className="grid place-items-center"><button className=" w-fit px-2 py-2 rounded-lg bg-gradient-to-b from-blue-300 to-blue-500/80 shadow-xl mt-5">Post Job</button></div>
          { error && (
              <div className="bg-red-500 text-white w-fit text-sm px-3 py-1 rounded-md mt-2 mb-5 shadow-lg">{error}</div>
            )
          }  
        </form>
      </div>
    </div>
  )
}