"use server"

import prisma from "./prisma";
   
export default async function updateUser(updateId:string, user:any) 
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