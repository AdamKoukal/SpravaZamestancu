"use client"

import { useState } from 'react';
import { useRouter } from "next/navigation"




export default function Login()
{
    const router = useRouter();

    
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    function handleSubmit(e:any)
    {
        e.preventDefault();

        
        console.log({email,password});  
        

    }

    return<>
    <div className="credentialsBox">
        <form onSubmit={handleSubmit} method="post" >
            <label className="inline" htmlFor="emailInput">Email</label>
            <input className="block border-black border-1" id="emailInput" name="email" type="text" onChange={(e)=>setEmail(e.target.value)} />

            <label className="inline" htmlFor="passwordInput">Password</label>
            <input className="block border-black border-1" id="passwordInput" name="password" type="text" onChange={(e)=>setPassword(e.target.value)}/>

            <button className="block border-black border-1" type="submit">Login</button>
            <a className="inline" href="/register">Don' t have an account? Register now!</a>
        </form>
    </div> 
    </>
    
}