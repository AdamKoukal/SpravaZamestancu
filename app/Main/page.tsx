'use server'

import profiles from "../../models/testProfiles";
import Main from "../../components/main/main";

export default async function ProfilesPage() 
{
  
  return(<Main profiles={profiles}/>)
  
}