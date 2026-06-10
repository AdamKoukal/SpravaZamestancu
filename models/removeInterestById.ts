"use server"

import prisma from "./prisma"

export default async function removeInterestById(removeId:string){
    console.log("jo");
    await prisma.interests.delete({
        where:{
            id:removeId
        }
    })
}