"use client"
import ProfileCard from "@/components/profile/profileCard/profileCard";


export default function Main({profiles}:any){

    return (
    
    <div className="p-5">
      
      
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-black rounded-lg p-2 w-60"
          onChange={(e)=>console.log(e.target.value)}
        />
      </div>

      
      <div className="grid grid-cols-4 gap-1">
        {profiles.map((p:any, index:any) => (
          <ProfileCard
         
            props={p}
          />
        ))}
      </div>
    </div>
  );
}