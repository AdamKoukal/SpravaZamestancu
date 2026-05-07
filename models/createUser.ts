"use server"

import prisma from "./prisma";

export default async function createUser(userData:any) 
{
    let userDataNew={first_name:userData.first_name,last_name:userData.last_name,email:userData.email,birth_date:new Date(userData.birth_date)};
    console.log(userData);
    const user=await prisma.users.create(
        {
            data:userDataNew
        }
    )
    return user;
}