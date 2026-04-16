"use client"

import Profile from '../../components/profile/profile'



const page = () => {

  return (
    <>
    <Profile
    props=
    {{first_name:"Test", 
    last_name:"Knoflík", 
    position:"Marketing", 
    salary:2000, 
    dayOfBirth:"1.1.2000"
    }}/>
    </>
  )
}

export default page