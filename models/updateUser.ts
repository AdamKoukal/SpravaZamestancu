"use server"

import { auth } from "@/auth";
import getUserById from "./getUserById";
import prisma from "./prisma";
   
export default async function updateUser(updateId:string, user:any) 
{
    const session:any  = await auth();
    const bcrypt:any = require('bcrypt');
    const saltRounds = 10;
    let noHashPassword=user.password;
    
    await bcrypt.hash(noHashPassword, saltRounds, function(err:any, hash:string) {
        user.password=hash;
    });


    let userPosition="";
    let userId="";
    user.password=bcrypt;

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