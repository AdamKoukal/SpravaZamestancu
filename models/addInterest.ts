"use server"
import { Interests } from "@/generated/prisma/client";
import prisma from "./prisma";
import { auth } from "@/auth";
import getUserById from "./getUserById";

export default async function addInterest(interest:Interests){
    const session:any  = await auth();

    let userPosition="";

    if(session){
        userPosition=""+(await getUserById(session?.user?.id))?.position;
    }

    if(userPosition=="HR"||session?.user.id==interest.user_id)
    {
        let a={user_id:interest.user_id,title:interest.title,description:interest.description}
        const addedInterest= prisma.interests.create(
        {
            data:a,
        }
        )
        return addedInterest;
    }   
}