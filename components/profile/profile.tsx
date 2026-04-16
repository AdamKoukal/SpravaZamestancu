"use client"

import { useState } from "react"


type ProfileProps = {
  first_name: string;
  last_name:string;
  salary: number;
  position: string;
  birth_date:string;
};
export default function Profile({props}:any)
{
    
    
    const  [user,setUser]=useState({});

    const  [editing,setEditing]=useState(false);

    /*useEffect(() => {
        
        const wrap=async()=>
        {
            const uuser=await getUser(""+searchParams.get("id"));
            console.log(uuser);
            setUser(uuser);
        }
        

       wrap()
    }, []);*/
    
    


    return(
        
    <>
    <div>
        <img className="w-full h-96 pt-1 px-1 rounded-2xl object-cover" src="https://www.prosci.com/hubfs/worldwide-hero-banner-1920x700%20(1)-1.webp" alt="" />

        <div className="ml-35 absolute">
            <img className=" w-55 mt-[-50%]" src="https://cdn-icons-png.flaticon.com/512/12225/12225935.png" alt="" />
            
        </div>
        <h1 className="ml-90 mt-[-1.5em] text-white text-3xl">{props.first_name+" "+props.last_name}</h1>

        <div className="text-right mt-[-2em] mr-2.5">
            <button onClick={()=>{setEditing(true)}} className="px-2 rounded-lg text-white text-lg  border-4 border-white">Edit Profile</button>
        </div>
        
        
    </div>

    <h2 className="ml-45 mt-30 text-2xl">First Name: {props.first_name}</h2>
    <h2 className="ml-45 mt-3 text-2xl">Last Name: {props.last_name}</h2>
    <h2 className="ml-45 mt-3 text-2xl">Salary: {props.salary}</h2>
    <h2 className="ml-45 mt-3 text-2xl">Position: {props.position}</h2>
    <h2 className="ml-45 mt-3 text-2xl">Day Of Birth: {props.birth_date}</h2>
    
    
    
    
    </>)
}