"use server"

import { auth } from "@/auth";
import prisma from "./prisma"
import getUserById from "./getUserById";

export default async function removeInterestById(removeId:string){

    const session:any  = await auth();
    
    let userPosition="";
    
    if(session)
    {
        userPosition=""+(await getUserById(session?.user?.id))?.position;
    }
    let profileUserId=(await prisma.interests.findUnique({where: 
        {
            id: removeId,
        },}))?.user_id;
    if(userPosition=="HR"||session?.user.id==profileUserId)
    {
    await prisma.interests.delete({
        where:{
            id:removeId
        }
    })
    }
}