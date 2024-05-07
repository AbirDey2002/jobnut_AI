"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditCompanyProfile({id, name, email, type, bio, x, site}){

  const router = useRouter();
  
  const [newName, setNewName] = useState(name);
  const [newBio, setNewBio] = useState(bio);
  const [newX, setNewX] = useState(x);
  const [newSite, setNewSite] = useState(site);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/companyUser?id=${id}`,{
        method:"PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newName, newBio, newX, newSite}),
      });

      if(!res.ok){
        throw new Error("Failed To update profile");
      }

      router.push('/CompanyDashboard');
    } catch (error) {
      console.log("Error at EditCompanyProfile", error);
    }
  }

  const handleUpdatePassword = async(e) => {
    e.preventDefault();

    try {

      if(newPassword !== confirmPassword){
        setError("Missmatched Passwords");
        return;
      }

      const res = await fetch(`http://localhost:3000/api/user?id=${id}`,{
        method:"PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newPassword}),
      });

      if(!res.ok){
        throw new Error("Failed To update profile");
      }

      router.push('/CompanyDashboard');
    } catch (error) {
      console.log("Error at EditCompanyProfile", error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-blue-300 to-blue-500/80 w-full h-[675px] px-[55px] pt-20">
        <div className="bg-white rounded-lg py-[55px] px-2 grid place-items-center gap-1 shadow-2xl">
          <div><span className="font-semibold">Email:</span> {email}</div>
          <div><span className="font-semibold">Role:</span> {type === 2 ? "Employer":"Employee"}</div>
        </div>
      </div>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3 w-full h-[635px] border-r-2 my-5 px-[50px] pt-[200px]">
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Company Name</h3><input onChange={(e) => setNewName(e.target.value)} className="border  bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={name} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Company Website</h3><input onChange={(e) => setNewSite(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={site === "" ? "https://jobnut.co.in":site} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Description</h3><input onChange={(e) => setNewBio(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={bio === "" ? "A Job Portal":bio} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">X handle</h3><input onChange={(e) => setNewX(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={x === "" ? "Jobnut_AI":x} /></div>
        <div className="grid place-items-center"><button className=" w-fit px-2 py-2 rounded-lg bg-gradient-to-b from-blue-300 to-blue-500/80 shadow-xl mt-5 mb-5">Update Details</button></div>
      </form>
      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3 w-full my-5 px-[50px] pt-[250px]">
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">New Password</h3><input onChange={(e) => setNewPassword(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="New Password" /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Confirm Password</h3><input onChange={(e) => setConfirmPassword(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="New Password" /></div>
        <div className="grid place-items-center"><button className=" w-fit px-2 py-2 rounded-lg bg-gradient-to-b from-blue-300 to-blue-500/80 shadow-xl mt-5 mb-5">Update Password</button></div>
        { error && (
            <div className="bg-red-500 text-white w-fit text-sm px-3 py-1 rounded-md mt-2 mb-5 shadow-lg">{error}</div>
          )
        }
      </form>
      
    </div>
  )
}