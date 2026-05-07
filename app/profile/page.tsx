

import { auth } from '@/auth'
import Profile from '../../components/profile/profile'
import { redirect } from 'next/navigation';
import getUserById from '@/models/getUserById';



export default async function page(){
  
  const session =await auth()
  if(!session)
  {
    redirect("/login");
  }
  
  // else{
  //   redirect("/profile/"+session.user.id);
  // }


  return (
    <>
    <Profile
    props={await getUserById(session.user.id)}/>
    </>
  )
}

