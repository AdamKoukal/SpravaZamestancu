"use server"

import Profile from '../../../components/profile/profile'
import profiles from "../../../models/testProfiles";



const page = async({params}:any) => {

  let id=(await params).id;
  let profile;

  for(let HProfile of profiles){
    
    if(HProfile.id==id){
      profile=HProfile;
      break;
    }
  }
  
  return (
    <>
    <Profile props={profile} />
    </>
  )
}

export default page