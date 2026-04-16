/*"use server"
import { PrismaClient } from './app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { supabase } from "./app/lib/supabase";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
    
const prisma = new PrismaClient({ adapter })  

export async function addUser(id:string,first_name:string, last_name:string, email:string,birth_date2:string) 
{
    let helpBirth_date=birth_date2.split("-");
    let birth_date=new Date(parseInt(helpBirth_date[2]),parseInt(helpBirth_date[1])-1,parseInt(helpBirth_date[0])+1);
    
    let salary=20000;

    const user=await prisma.users.create(
        {
            data:
            {
                id,
                first_name,
                last_name,
                email,
                birth_date,
                salary
                


            }
        }
    )
}

export async function getUser(id:string)
{
    const user=await prisma.users.findUnique({
        where:{id:id}
    })
    if(user)
    {
        return user;
    }
    
}

export async function getCurrentUser() {


  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const dbUser = await prisma.users.findUnique({
    where: { id: user.id }
  })
  return dbUser

}*/
