"use client"

import Link from "next/link"
import SignInBtn from "./SignInBtn"
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Navbar(){

  const router = useRouter();

  const handleProduct = () => {
    router.push("/Product")
  }

  const handleServices = () => {
    router.push("/Services")
  }

  const handleAboutUs = () => {
    router.push("/AboutUs")
  }
  
  return(

    

    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      <Link className="text-cyan-600 font-bold flex gap-2 place-content-center" href={"/"}>
      <Image 
        src="/logo.jpg"
        width={50}
        height={20}
        quality={100}
        alt="logo"
      />
      <div className="flex flex-col pt-1 bg-gradient-to-r from-teal-600 to-teal-400 text-transparent bg-clip-text">
        <div>JOBNUT.AI</div>
        <span className="text-xs">Changing Lives</span>
      </div>      
      </Link>
      <div className="flex gap-7 ">
        <button onClick={handleProduct} className="py-1.5">Product</button>
        <button onClick={handleServices} className="py-1.5">Services</button>
        <button onClick={handleAboutUs} className="py-1.5">About Us</button>
        <SignInBtn />
      </div>
    </div>
  )
};