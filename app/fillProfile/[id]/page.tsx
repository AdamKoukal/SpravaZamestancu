"use server"

import FillProfile from "@/components/profile/fillProfile/fillProfile";
import getUserById from "@/models/getUserById";
import { redirect } from "next/navigation";

export default async function Page({params}:any)
{
    const id=(await params).id;
    const profile=await getUserById(id);

    if(profile?.filled){
      redirect("/profile/"+id)
    }
    
    return (
      <>
        <FillProfile props={profile} />
      </>
    )
}