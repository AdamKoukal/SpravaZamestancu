"use server"

import prisma from "./prisma";
   
export default async function getUserById(toFindId:any) 
{
    if(!toFindId)
    {
        return null
    }
    const user= await prisma.users.findUnique({
        where: 
        {
            id: toFindId,
        },
    });
    return user;
}