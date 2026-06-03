"use client"
import ProfileCard from "@/components/profile/profileCard/profileCard";
import { useEffect, useState } from "react";


export default function Main({profiles}:any){
    const [search,setSearch]=useState<String>("");
    const [originalProfiles,setOriginalProfiles]=useState<any>();
    const [searchedProfiles,setSearchedProfiles]=useState<any>();

    useEffect(() => {    
      setSearchedProfiles([...profiles]);         
      setOriginalProfiles([...profiles]);         
    }, []);
    
    return (
    
    <div className="mx-20 mt-5">
      
      
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          className="block border-y-4 border-y-sky-600 rounded-lg p-2 w-60"
          onChange={(e)=>{
            let helpProfiles=[];
            for(let a of originalProfiles)
            {
              if(a.first_name.toLowerCase().includes(e.target.value.toLowerCase())||a.last_name.toLowerCase().includes(e.target.value.toLowerCase())){
                helpProfiles.push(a)
              }
              
            }
            setSearchedProfiles(helpProfiles);
          }}
        />
      </div>

      
      <div className="grid grid-cols-4 gap-5 mt-5">
        {searchedProfiles?.map((p:any, index:any) => (
          <ProfileCard props={p}/>
        ))}
      </div>
    </div>
  );
}