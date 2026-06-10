

import { auth } from '@/auth'
import Profile from '../../components/profile/profile'
import { redirect } from 'next/navigation';
import getUserById from '@/models/getUserById';
import getInterestsByUserId from '@/models/getInterestsByUserId';

export default async function page(){
  
  const session =await auth()
  if(!session)
  {
    redirect("/login");
  }
  
  // else{
  //   redirect("/profile/"+session.user.id);
  // }
  const user=await getUserById(session.user?.id);
  const interests=await getInterestsByUserId(session.user?.id);

  return (
    <>
    <Profile
    props={user}
    interests={interests}
    />
    </>
  )
}

