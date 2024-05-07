"use client"

import { useRouter } from "next/navigation";

export default function ApplyButtonClient({id, applicant, status}){

  console.log(status);

  const router = useRouter();

  const subscribe = async() => {

    const res = await fetch(`http://localhost:3000/api/applyJob?id=${id}&applicant_id=${applicant}`, {
      method: "PUT",
    });
  };

  const unsubscribe = async() => {
    const confirmed = confirm('Are you sure?');

    if (confirmed){
      const res = await fetch(`http://localhost:3000/api/applyJob?id=${id}&applicant_id=${applicant}`, {
        method: "DELETE",
      });      
    }
  };

  return (
    <div>
      { status === true ? (
        <div onClick={unsubscribe} className="flex justify-center my-3"><button className="bg-red-500 py-1 px-3 text-white rounded-lg">Unsubscribe</button></div>
      ):(
        <div onClick={subscribe} className="flex justify-center my-3"><button className="bg-green-500 py-1 px-3 text-white rounded-lg">Apply</button></div>
      )}
    </div>
  )
}