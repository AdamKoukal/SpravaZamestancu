"use server"

import { auth } from "@/auth";
import getUserById from "./getUserById";
import prisma from "./prisma";
   
export default async function updateUser(updateId:string, user:any) 
{
    const session:any  = await auth();
    let userPosition="";
    let userId="";

    if(session){
        userPosition=""+(await getUserById(session?.user?.id))?.position;
        userId=""+(await getUserById(session?.user?.id))?.id;
    }
    if((userId==updateId)||userPosition=="HR")
    {
            if(await prisma.users.update({
            where: 
            {
                id: updateId,
            },
            data:user
            })){
                return true
            }
    }
    

   
}