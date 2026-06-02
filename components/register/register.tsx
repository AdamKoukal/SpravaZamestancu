"use client"

import { useState } from 'react';
import { redirect, useRouter } from "next/navigation"
import registerUser from '@/models/registerUser';
import { signIn, useSession } from 'next-auth/react';

export default function Register()
{
    const { data: session } = useSession()
    if(session?.user)
    {
        redirect("/profile");
    }  
    const [first_name, setFirstName]=useState("")
    const [last_name, setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [birth_date, setDateOfBirth]=useState("");
    
    async function handleSubmit(e:any)
    {
        
        e.preventDefault();
        if(password!=confirmPassword)
        {
            return;
        }
        await registerUser({first_name,last_name,email,password,confirmPassword,birth_date});
        await signIn("credentials",{email:email,password:password});
    }


    return<>
    <div className="credentialsBox flex justify-center items-center h-screen">
        <div className="border-4 border-sky-600 rounded-lg p-10">
        <h1 className="text-6xl font-medium text-center mb-10">Register</h1>
        <form onSubmit={handleSubmit} method="post">
            <label className="inline text-lg font-medium" htmlFor="firstNameInput">First Name</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="firstNameInput" type="text" onChange={(e)=>setFirstName(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="lastNameInput">Last Name</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="text" onChange={(e)=>setLastName(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="emailInput">Email</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="email" onChange={(e)=>setEmail(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="passwordInput">Password</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" type="password" onChange={(e)=>setPassword(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="confirmPasswordInput">Confirm Password</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="confirmPasswordInput" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>

            <label className="inline text-lg font-medium" htmlFor="dateOfBirthInput">Date Of Birth</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="dateOfBirthInput" type="date" onChange={(e)=>setDateOfBirth(e.target.value)}/>

            <button className="bg-teal-300 p-1 px-2 cursor-pointer mt-2 rounded-lg border-black border-2 text-black font-medium" type="submit">Register</button>
            <a className="block" href="./login">Already have an account? Log in now!</a>
        </form>
        </div>
    </div>

    {/* <h1>Name: {firstName}</h1>
    <h1>Last Name: {lastName}</h1>
    <h1>Email: {email}</h1>
    <h1>Password: {password}</h1>
    <h1>Confirm password: {confirmPassword}</h1>
    <h1>Date Of Birth: {dateOfBirth}</h1> */}
    </>
    
}