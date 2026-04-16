"use client"

import { useState } from 'react';
import { useRouter } from "next/navigation"
import registerUser from '@/models/registerUser';

export default function Register()
{
    const router = useRouter();
    
    const [first_name, setFirstName]=useState("")
    const [last_name, setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [birth_date, setDateOfBirth]=useState("");
    
    function handleSubmit(e:any)
    {
        e.preventDefault();
        if(password!=confirmPassword)
        {
            return;
        }
        registerUser({first_name,last_name,email,password,confirmPassword,birth_date});

    }


    return<>
    <div className="credentialsBox">
        <form onSubmit={handleSubmit} method="post">
            <label className="inline" htmlFor="firstNameInput">First Name</label>
            <input className="block border-black border-1" id="firstNameInput" type="text" onChange={(e)=>setFirstName(e.target.value)}/>

            <label className="inline" htmlFor="lastNameInput">Last Name</label>
            <input className="block border-black border-1" type="text" onChange={(e)=>setLastName(e.target.value)}/>

            <label className="inline" htmlFor="emailInput">Email</label>
            <input className="block border-black border-1" type="email" onChange={(e)=>setEmail(e.target.value)}/>

            <label className="inline" htmlFor="passwordInput">Password</label>
            <input className="block border-black border-1" type="password" onChange={(e)=>setPassword(e.target.value)}/>

            <label className="inline" htmlFor="confirmPasswordInput">Confirm Password</label>
            <input className="block border-black border-1" id="confirmPasswordInput" type="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>

            <label className="inline" htmlFor="dateOfBirthInput">Date Of Birth</label>
            <input className="block border-black border-1" id="dateOfBirthInput" type="date" onChange={(e)=>setDateOfBirth(e.target.value)}/>

            <button className="block border-black border-1" type="submit">Register</button>
            <a className="block" href="./login">Already have an account? Log in now!</a>
        </form>
    </div>

    {/* <h1>Name: {firstName}</h1>
    <h1>Last Name: {lastName}</h1>
    <h1>Email: {email}</h1>
    <h1>Password: {password}</h1>
    <h1>Confirm password: {confirmPassword}</h1>
    <h1>Date Of Birth: {dateOfBirth}</h1> */}
    </>
    
}