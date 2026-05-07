"use client"
import ProfileCard from "@/components/profile/profileCard/profileCard";


export default function Main({profiles}:any){

    return (
    
    <div className="mx-20 mt-5">
      
      
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          className="block border-y-4 border-y-sky-600 rounded-lg p-2 w-60"
          onChange={(e)=>console.log(e.target.value)}
        />
      </div>

      
      <div className="grid grid-cols-4 gap-5 mt-5">
        {profiles.map((p:any, index:any) => (
          <ProfileCard
         
            props={p}
          />
        ))}
      </div>
    </div>
  );
}