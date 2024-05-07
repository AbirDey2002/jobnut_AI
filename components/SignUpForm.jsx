"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { Switch } from '@headlessui/react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";

export default function SignUpForm(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employer, setEmployer] = useState(false);
  const [error, setError] = useState("");
  const [userType, setUserType] = useState(1);
  const [user, setUser] = useState("Employee");

  function changeUser() {
    if(userType === 1){
      setError("")
      setUserType(2);
      setEmployer(true);
      setUser("Employer")
    }else{
      setError("")
      setUserType(1)
      setEmployer(false);
      setUser("Employee")
    }
    
  }

  const router = useRouter();

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    if(!email || !password || !name){
      setError("All fields mandatory !");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists" ,{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({email}),
      });
  
      const {user} = await resUserExists.json();
  
      if(user){
        setError("Email ID is already associated with a registered user.");
        return;
      }

      const res = await fetch('api/user', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password, userType, 
        })
      })

      if (res.ok) {
        const form = e.target;
        form.reset();
        setError("");
        router.push("/");
      }else{
        console.log("User Registration failed.");
      }
    } catch (error) {
      console.log("Error during Registration", error);
    }
  };  

  return (
    <div className="grid h-screen place-items-center -mt-[70px] bg-gradient-to-r from-white to-purple-100">
    <div className="flex place-items-center shadow-xl">
      <div className="flex flex-col bg-purple-300 w-[350px] h-[575px] rounded-l-xl gap-10 text-lg">
        <div className="flex gap-2 mt-10 mx-12 place-items-center text-white font-[700] text-xl"><FaMagnifyingGlass className="text-4xl"/>JOBNUT.AI</div>
        <div className="ml-12 text-white font-[500]">Welcome to JOBNUT <br></br> Join Us Now!</div>
        <Image 
          src = "/mobile.png"
          width = {350}
          height = {200}
        />
      </div>
      <div>
        <div className={`flex flex-col gap-5 px-10 w-fit bg-white h-[575px] rounded-r-xl`}>
          <h2 className="pt-10 font-bold text-lg flex justify-center">SignUp as an <a className={`pl-[5px] underline decoration-double ${employer ? 'decoration-sky-500':'decoration-pink-500'}`}>{user}</a></h2>
          <form onSubmit={handleSubmitUser} className="flex flex-col gap-3 pt-[25px] w-fit px-10">
            <div className="flex justify-end gap-5 pb-3">
              <div className="font-[500]">Employer</div>
              <Switch
                checked={employer}
                onChange={changeUser}
                className={`bg-purple-300 shadow-xl
                  relative inline-flex h-[20px] w-[39px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${employer ? 'translate-x-5' : 'translate-x-0'}
                    pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className="flex flex-col justify-end"><h3 className="py-2 font-[500]">Name</h3><input onChange={(e) => setName(e.target.value)} className="border  bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. john doe" /></div>
            <div className="flex flex-col justify-end"><h3 className="py-2 font-[500]">Email</h3><input onChange={(e) => setEmail(e.target.value)} className="border  bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. johndoe@gmail.com" /></div>
            <div className="flex flex-col justify-between"><h3 className="py-2 font-[500]">Password</h3><input onChange={(e) => setPassword(e.target.value)} className="border bg-zinc-50 rounded-sm py-2 px-3" type="text" placeholder="ex. Password" /></div>
            <div className="grid flex-col place-items-center"><button className={` w-fit px-2 py-2 rounded-lg bg-purple-300 shadow-xl mt-5 mb-5`}>Sign Up</button></div>
          </form>
          { error && (
              <div className="bg-red-500 text-white w-fit text-sm px-3 py-1 rounded-md mt-2 mb-5 shadow-lg">{error}</div>
            )
          }
        </div>
      </div>
    </div>
    </div>
  )
}

