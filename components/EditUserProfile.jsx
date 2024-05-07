"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function EditUserProfile({id, name, email, type, bio, x, site, profile, age, verified}){

  const router = useRouter();
  
  const [newName, setNewName] = useState(name);
  const [newBio, setNewBio] = useState(bio);
  const [newX, setNewX] = useState(x);
  const [newSite, setNewSite] = useState(site);
  const [newProfile, setNewProfile] = useState(profile);
  const [newAge, setNewAge] = useState(age);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async(e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://jobnut-ai.vercel.app/api/userUser?id=${id}`,{
        method:"PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newName, newBio, newX, newSite, newProfile, newAge}),
      });

      if(!res.ok){
        throw new Error("Failed To update profile");
      }

      router.push('/UserDashboard');
    } catch (error) {
      console.log("Error at EditUserProfile", error);
    }
  }

  const handleUpdatePassword = async(e) => {
    e.preventDefault();

    try {

      if(newPassword !== confirmPassword){
        setError("Missmatched Passwords");
        return;
      }

      const res = await fetch(`https://jobnut-ai.vercel.app/api/user?id=${id}`,{
        method:"PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newPassword}),
      });

      if(!res.ok){
        throw new Error("Failed To update profile");
      }

      router.push('/UserDashboard');
    } catch (error) {
      console.log("Error at EditUserProfile", error);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-pink-300/80 to-pink-500/60 w-full h-[675px] px-[55px] pt-20">
        <div className="bg-white rounded-lg py-[55px] px-2 grid place-items-center gap-1 shadow-2xl">
          <div><span className="font-semibold">Email:</span> {email}</div>
          <div><span className="font-semibold">Role:</span> {type === 2 ? "Employer":"Employee"}</div>
        </div>
      </div>
      <form onSubmit={handleUpdate} className="flex flex-col gap-3 w-full h-[635px] border-r-2 my-5 px-[50px] pt-[150px]">
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">User Name</h3><input onChange={(e) => setNewName(e.target.value)} className="border  bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={name} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Portfolio Website</h3><input onChange={(e) => setNewSite(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={site === "" ? "https://johndoe.com":site} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Bio</h3><input onChange={(e) => setNewBio(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={bio === "" ? "John Doe, Software Developer, 21, San Francisco, US":bio} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">X handle</h3><input onChange={(e) => setNewX(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={x === "" ? "@JohnDoe113":x} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Profile Tags</h3><input onChange={(e) => setNewProfile(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={profile === "" ? "Machine Learning, Analitics, Web Development":profile} /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Age</h3><input onChange={(e) => setNewAge(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder={age === "" ? "18":age} /></div>
        <div className="grid place-items-center"><button className=" w-fit px-2 py-2 rounded-lg bg-gradient-to-b from-pink-300/80 to-pink-500/60 shadow-xl mt-5 mb-5">Update Details</button></div>
      </form>
      <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3 w-full my-5 px-[50px] pt-[250px]">
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">New Password</h3><input onChange={(e) => setNewPassword(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="New Password" /></div>
        <div className="flex gap-3 justify-end"><h3 className="py-2 font-semibold">Confirm Password</h3><input onChange={(e) => setConfirmPassword(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="New Password" /></div>
        <div className="grid place-items-center"><button className=" w-fit px-2 py-2 rounded-lg bg-gradient-to-b from-pink-300/80 to-pink-500/60 shadow-xl mt-5 mb-5">Update Password</button></div>
        { error && (
            <div className="bg-red-500 text-white w-fit text-sm px-3 py-1 rounded-md mt-2 mb-5 shadow-lg">{error}</div>
          )
        }
      </form>
      
    </div>
  )
}