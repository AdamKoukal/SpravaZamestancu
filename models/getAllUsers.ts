"use server"

import { auth } from "@/auth";
import prisma from "./prisma";
import getUserById from "./getUserById";
   
export default async function getAllUsers() 
{
    
    const users=await prisma.users.findMany();
    return users;
    
   
}