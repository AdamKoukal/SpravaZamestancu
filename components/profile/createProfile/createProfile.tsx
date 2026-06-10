"use client"

import { useEffect, useState } from 'react';

import createUser from '@/models/createUser';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function CreateProfile()
{
    const { data: session }:any = useSession()
    const { update: updateSession } = useSession();

    useEffect(() => {
        if(!session||!session.user){
            updateSession(); 
        }
        if(session?.user.position&&session?.user.position!=="HR")
        {
            redirect("/profile");
        }
        
             
    }, [session?.user]);
    
    
    const [first_name, setFirstName]=useState("")
    const [last_name, setLastName]=useState("")
    const [email, setEmail]=useState("")

    const [birth_date, setDateOfBirth]=useState("");

    const [link,setLink]=useState("");
    const [linkCopied,setLinkCopied]=useState(false);
    
    async function handleSubmit(e:any)
    {
        
        e.preventDefault();
        const user=await createUser({first_name:first_name,last_name:last_name,email:email,birth_date:birth_date});
        setLink("https://spravazamestnancu.vercel.app/fillProfile/"+user?.id);
        console.log(user);
        

    }
    


    return<>
    <div className="credentialsBox flex justify-center items-center h-screen">
        <div className="border-4 border-sky-600 rounded-lg p-10">
        <h1 className="text-6xl font-medium text-center mb-10">Create a Profile</h1>
        <form onSubmit={handleSubmit} method="post">
            <label className="inline text-lg font-medium" htmlFor="firstNameInput">First Name</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="firstNameInput" type="text" onChange={(e)=>setFirstName(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="lastNameInput">Last Name</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="text" onChange={(e)=>setLastName(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="emailInput">Email</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="email" onChange={(e)=>setEmail(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="dateOfBirthInput">Date Of Birth</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="dateOfBirthInput" type="date" onChange={(e)=>setDateOfBirth(e.target.value)}/>

            <button className="bg-teal-300 p-1 px-2 cursor-pointer mt-2 rounded-lg border-black border-2 text-black font-medium" type="submit">Create</button>
            {link && (
                <div>
                    <p>Link: <button onClick={()=>{navigator.clipboard.writeText(link);setLinkCopied(true)}}className="font-medium cursor-pointer text-sky-600">{link}</button></p>
                </div>
            )}
            {linkCopied&&(
                <p>Link succesfully copied</p>
            )}
        </form>
        </div>
    </div>

    </>
    
}