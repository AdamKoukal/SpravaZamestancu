import prisma from "./prisma";

export default async function getInterestsByUserId(profileUserId:string) 
{
    const interests=await prisma.interests.findMany({
        where:{
            user_id:profileUserId,
        }
    })
    return interests;
}