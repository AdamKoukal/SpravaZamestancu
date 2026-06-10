"use client"

import { Interests } from "@/generated/prisma/client";
import removeInterestById from "@/models/removeInterestById";
import { redirect } from "next/navigation";



export default function InterestCard({interest}:{interest:Interests}) 
{
    return(
    <div className="border-4 border-sky-600 rounded-lg py-5 px-2 my-2">
        <h3 className="text-2xl font-semibold ">{interest.title}</h3>
        <p className="inline-block">{interest.description}</p>
        <button 
        onClick={async()=>{
          await removeInterestById(interest.id);
          redirect("/profile/"+interest.user_id);  
        }}
        className="border-black border-3 cursor-pointer bg-red-500 text-white rounded-lg text-xl p-1 float-right float"
        >Delete</button>
    </div>
    )
}