"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import updateUser from "@/models/updateUser";
import { redirect } from "next/navigation"
import uploadBanner from "@/models/uploadBanner";
import URLcheck from "@/models/URLcheck";
import uploadProfilePicture from "@/models/uploadProfilePicture";
type ProfileProps = {
  first_name: string;
  last_name:string;
  salary: number;
  position: string;
  birth_date:string;
};

 

 
export default function Profile({props}:any)
{
    
    const  [editing,setEditing]=useState(false);
    const { data: session } = useSession()

    const [valid, setValid]=useState(props.valid)
    const [first_name, setFirstName]=useState(props.first_name)
    const [last_name, setLastName]=useState(props.last_name)
    const [email, setEmail]=useState(props.email)
    const [birth_date, setDateOfBirth]=useState(props.birth_date);
    const [salary, setSalary]=useState(props.salary);
    const [position, setPosition]=useState(props.position);
    const [banner, setBanner]=useState(props.banner);
    const [profile_picture, setProfilePicture]=useState(props.profile_picture);
    
    
    useEffect(() => {
        
        
        

       
    }, [editing]);
    
    async function update()
    {

        const user={valid:valid,first_name:first_name,last_name:last_name,email:email,birth_date:new Date(birth_date),salary:salary,banner:await uploadBanner(banner),profile_picture:await uploadProfilePicture(profile_picture)}
        if(typeof banner ==="string")
        {
            user.banner=banner;
        }
        if(typeof profile_picture ==="string")
        {
            user.profile_picture=profile_picture;
        }
        if(await updateUser(props.id,user))
        {
            setEditing(false);
            if(props.id==session?.user?.id)
            {
                redirect("/profile/");
            }
            else{
                redirect("/profile/"+props.id);
            }
            
            
        }
        
    }

    function cancelUpdate()
    {
        setEditing(false);

        setValid(props.valid);
        setFirstName(props.first_name);
        setLastName(props.last_name);
        setEmail(props.email);
        setEmail(props.email);
        setDateOfBirth(props.birth_date);
        setBanner(props.banner);
        setProfilePicture(props.profile_picture);
    }

    

    return(
    
    <>
    <div>
        {props.valid?
            <h4 className="absolute rounded-lg p-1 m-3 bg-green-400 text-white ">Valid</h4>
        :props.filled?
        <h4 className="absolute rounded-lg p-1 m-3 bg-orange-400 text-white ">Filled</h4>
            
        :   
            <h4 className="absolute rounded-lg p-1 m-3 bg-red-500 text-white ">Waiting</h4>
        }
        <img className="w-full h-96 pt-1 px-1 rounded-2xl object-cover" src={URLcheck(banner)} alt="" />

        <div className="ml-20 absolute">
            
            
            <img className="object-cover pointer-events-none w-55 h-55 mt-[-50%] rounded-full" src={URLcheck(profile_picture)} alt="" />
            {(props.id==session?.user?.id||session?.user?.position=="HR"&&editing==true)&&(
        
            <input onChange={(e)=>{setProfilePicture(e.target.files[0])}}  className="rounded-full cursor-pointer w-55 h-55 top-[-110] absolute" type="file" name="" id="" />
            )
            }
            
            
        </div>
        <h1 className="ml-80 mt-[-1.5em] text-white text-3xl">{props.first_name+" "+props.last_name}</h1>

        {(props.id==session?.user?.id||props.id==session?.user?.id||session?.user?.position=="HR")&&(
        <div className="text-right mt-[-2em] mr-2.5">
            {(props.id==session?.user?.id||session?.user?.position=="HR"&&editing==true)&&(
        
            <input onChange={(e)=>{setBanner(e.target.files[0])}}  className="cursor-pointer px-2 rounded-lg text-white text-lg  border-4 border-white mr-2 w-58" type="file" name="" id="" />
            )
            }
            <button onClick={()=>{setEditing(!editing)}} className="cursor-pointer px-2 rounded-lg text-white text-lg  border-4 border-white">Edit Profile</button>
            
        </div>)
        }
        
        
        
    </div>
    {session?.user?.position=="HR"&&editing==true ?
    <div>
        <label htmlFor="valid" className="ml-20 mt-30 text-2xl">Valid: </label>
        <select onChange={(e)=>setValid(e.target.value=="true")} name="valid" id="valid" defaultValue={props.valid.toString()} className="mt-30 text-2xl border-2">
            <option value="true">true</option>
            <option value="false">false</option>
        </select>
        {/* <input onChange={(e)=>setValid(e.target.value)} id="valid" className="mt-30 text-2xl border-2" defaultValue={props.valid}/> */}
    </div>
    :
    <h2 className="ml-20 mt-30 text-2xl">Valid: {props.valid.toString()}</h2> 
    }

    {(props.id==session?.user?.id||session?.user?.position=="HR")&&editing==true ?
    <div>
        <label htmlFor="first_name" className="ml-20 mt-30 text-2xl">First Name: </label>
        <input onChange={(e)=>setFirstName(e.target.value)} id="first_name" className="mt-3 text-2xl border-2" defaultValue={props.first_name}/>
    </div>
    :
    <h2 className="ml-20 mt-3 text-2xl">First Name: {props.first_name}</h2> 
    }

    {(props.id==session?.user?.id||session?.user?.position=="HR")&&editing==true ?
    <div>
        <label htmlFor="first_name" className="ml-20 text-2xl">Last Name: </label>
        <input onChange={(e)=>setLastName(e.target.value)} id="first_name" className="text-2xl mt-3 border-2" defaultValue={props.last_name}/>
    </div>:
    <h2 className="ml-20 mt-3 text-2xl">Last Name: {props.last_name}</h2> 
    }

    {props.position=="HR"&&editing==true ?
    <div>
        <label htmlFor="salary" className="ml-20 text-2xl">Salary: </label>
        <input onChange={(e)=>setSalary(e.target.value)} id="salary" className="text-2xl mt-1 border-2" defaultValue={props.salary}/>
    </div>:
    <h2 className="ml-20 mt-3 text-2xl">Salary: {props.salary}</h2>
    }
    
    {props.position=="HR"&&editing==true ?
    <div>
        <label htmlFor="position" className="ml-20 text-2xl">Position: </label>
        <input onChange={(e)=>setPosition(e.target.value)} id="position" className="text-2xl mt-3 border-2"  defaultValue={props.position}/>
    </div>:
    <h2 className="ml-20 mt-3 text-2xl">Position: {props.position}</h2>
    }

    {props.id==session?.user?.id&&editing==true ?
    <div>
        <label htmlFor="birth_date" className="ml-20 text-2xl">Day Of Birth: </label>
        <input type="date" onChange={(e)=>setDateOfBirth(e.target.value)} id="birth_date" className="text-2xl mt-3 border-2" defaultValue={new Date(props.birth_date).toISOString().split("T")[0]}/>
    </div>:
    <h2 className="ml-20 mt-3 text-2xl">Day Of Birth: {props.birth_date.toLocaleDateString("cs-CZ")}</h2>
    }
    {(props.id==session?.user?.id||session?.user?.position=="HR")&&editing==true ?
    <div className="mt-3 ml-20">
        <button onClick={()=>update()} className="px-2 rounded-lg text-black text-lg  border-4 border-black">Update Profile</button>
        <button onClick={()=>cancelUpdate()} className="px-2 rounded-lg text-black text-lg  border-4 border-black">Cancel</button>
    </div>
    :
    <></>
    }
    
   
    
    
    
    
    
    
    </>)
}