"use server"

import getInterestsByUserId from '@/models/getInterestsByUserId';
import Profile from '../../../components/profile/profile'
import profiles from "../../../models/testProfiles";
import getUserById from '@/models/getUserById';



const page = async({params}:any) => {

  let id=(await params).id;
  let profile=await getUserById(id);
  let interests=await getInterestsByUserId(id);
  
  return (
    <>
    <Profile props={profile}
    interests={interests} />
    </>
  )
}

export default page