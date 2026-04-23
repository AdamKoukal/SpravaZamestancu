"use server"

import Profile from '../../../components/profile/profile'
import profiles from "../../../models/testProfiles";
import getUserById from '@/models/getUserById';



const page = async({params}:any) => {

  let id=(await params).id;
  let profile=await getUserById(id);
  
  return (
    <>
    <Profile props={profile} />
    </>
  )
}

export default page