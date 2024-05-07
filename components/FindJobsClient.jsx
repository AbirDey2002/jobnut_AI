"use client"

import { IoSearch } from "react-icons/io5";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function FindJobsClient(){

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch = (searchTerm) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query",searchTerm);
    }else{
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col mt-3">
      <div className="pt-2 relative mx-auto text-gray-600">
        <input onChange={(e) => {handleSearch(e.target.value);}} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <IoSearch />
        </button>
      </div>
    </div>
  )
}