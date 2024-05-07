"use client"

import DeleteButton from "./DeleteButton";

export default function Card({id, name, position, salary, desc}){

  return (
    <div className="overflow-auto scrollbar-hide flex flex-col justify-between bg-teal-400/15 w-[320px] shadow-xl border-2 border-teal-950 rounded-xl h-[225px]">
      <DeleteButton id={id}/>
      <div className="flex justify-center"><h2 className={`${name.length <= 8 ? 'text-6xl' : 'text-2xl'} px-5 font-bold text-6xl pt-2 text-teal-500/60`}>{name}</h2></div>
      <div className="px-5 justify-left gap-5 pt-7">
        <h4>{position}</h4>
        <h4>INR <span className="font-semibold">{salary}</span> pa</h4>
      </div>
      <div>
        <h2 className="px-5 text-xs pb-1">{desc}</h2>
      </div>
    </div>
  )
}