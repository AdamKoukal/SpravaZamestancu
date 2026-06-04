"use server"

import { auth } from "@/auth";
import prisma from "./prisma";
import getUserById from "./getUserById";

export default async function createUser(userData:any) 
{
    const session:any  = await auth();
    let userPosition="";
    if(session){
        userPosition=""+(await getUserById(session?.user?.id))?.position;
    }
    

    if(userPosition=="HR"){
        let userDataNew={first_name:userData.first_name,last_name:userData.last_name,email:userData.email,birth_date:new Date(userData.birth_date)};
        console.log(userData);
        const user=await prisma.users.create(
            {
                data:userDataNew
            }
        )
        return user;
    }

    
}