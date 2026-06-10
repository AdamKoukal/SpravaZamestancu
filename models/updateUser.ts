"use server"

import { auth } from "@/auth";
import getUserById from "./getUserById";
import prisma from "./prisma";
   
export default async function updateUser(updateId:string, user:any) 
{
    const session:any  = await auth();
    const bcrypt:any = require('bcrypt');
    const saltRounds = 10;
    
    if(user.password){
        let noHashPassword=user.password;
    console.log("?:"+user.password);
    user.password=await bcrypt.hash(noHashPassword,saltRounds);
    }
    



    let userPosition="";
    let userId="";

    if(session){
        userPosition=""+(await getUserById(session?.user?.id))?.position;
        userId=""+(await getUserById(session?.user?.id))?.id;
    }
    
    if((userId==updateId)||userPosition=="HR"||user.filled==false)
    {
            console.log("jo2");
            user.filled=true;
            if(await prisma.users.update({
            where: 
            {
                id: updateId,
            },
            data:user
            }))
            {
                console.log("jo");
                return true
            }
    }
    

   
}