"use client"
import ProfileCard from "@/components/profile/profileCard/profileCard";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


export default function Main({profiles}:any){
    const [search,setSearch]=useState<String>("");

    let filteredProfiles = profiles.filter((a: any) =>
    (a.first_name + a.last_name)
    .toLowerCase()
    .replaceAll(" ", "")
    .includes(search.toLowerCase().replaceAll(" ", "")) ||
    a.first_name.toLowerCase().includes(search.toLowerCase()) ||
    a.last_name.toLowerCase().includes(search.toLowerCase())
    );
    return (
    
    <div className="mx-20 mt-5">
      
      
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          className="block border-y-4 border-y-sky-600 rounded-lg p-2 w-60"
          onChange={(e)=>{
            setSearch(e.target.value);

            filteredProfiles = profiles.filter((a: any) =>
            (a.first_name + a.last_name)
            .toLowerCase()
            .replaceAll(" ", "")
            .includes(search.toLowerCase().replaceAll(" ", "")) ||
            a.first_name.toLowerCase().includes(search.toLowerCase()) ||
            a.last_name.toLowerCase().includes(search.toLowerCase())
            );
            
          }}
        />
      </div>

      
      <div className="grid grid-cols-4 gap-2 mt-5">
        {filteredProfiles?.map((p:any, index:any) => (
          <ProfileCard props={p}/>
        ))}
      </div>
    </div>
  );
}