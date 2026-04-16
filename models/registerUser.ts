"use server"

import prisma from "./prisma";
/*interface User{
    first_name:string;
    last_name:string;
    email:string;
    password:string;
    confirmPassword:string;
    birth_date:string;

}*/
export default async function registerUser(userData:any) 
{
    let userDataNew={first_name:userData.first_name,last_name:userData.last_name,email:userData.email,password:userData.password,birth_date:new Date(userData.birth_date)};
    console.log(userData);
    const user=await prisma.users.create(
        {
            data:userDataNew
        }
    )
}