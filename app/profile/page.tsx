

import { auth } from '@/auth'
import Profile from '../../components/profile/profile'



export default async function page(){
  
  const session =await auth()
  if(!session)
  {
    return(
      <div><h1>You are not logged in</h1></div>
    );
  }
  console.log(session.user)

  return (
    <>
    <Profile
    props=
    {{first_name:"Test", 
    last_name:"Knoflík", 
    position:"Marketing", 
    salary:2000, 
    birth_date:new Date("1.1.2000")
    }}/>
    </>
  )
}

