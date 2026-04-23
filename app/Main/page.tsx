'use server'

import Main from "../../components/main/main";
import getAllUsers from "@/models/getAllUsers";
export default async function ProfilesPage() 
{
  const profiles=await getAllUsers();
  return(<Main profiles={profiles}/>)
  
}