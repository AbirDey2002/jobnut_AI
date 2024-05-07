"use client"

import { FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DeleteButton({id}){

  const router = useRouter();
  const removeTopic = async() => {
    const confirmed = confirm('Are you sure?');

    if (confirmed){
      const res = await fetch(`https://jobnut-ai.vercel.app/api/companyJobs?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok){
        router.refresh();
      }
      
    }
  };

  return (
    <button onClick={removeTopic} className="flex justify-end"><FaTrash className="text-red-500 text-2xl pt-2 px-1"/></button>
  )
}