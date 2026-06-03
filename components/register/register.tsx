"use server"


import { redirect } from "next/navigation"
import registerUser from '@/models/registerUser';
import { signIn } from 'next-auth/react';
import { auth } from "@/auth";

export default async function Register()
{
    if(await auth())
    {
        redirect("/profile");
    }

    return<>
    <div className="credentialsBox flex justify-center items-center h-screen">
        <div className="border-4 border-sky-600 rounded-lg p-10">
        <h1 className="text-6xl font-medium text-center mb-10">Register</h1>
        <form 
            action={async (formData) => 
                        {
                        "use server"
                        let user={
                            firstName:formData.get("firstName"),
                            lastName:formData.get("lastName"),
                            email:formData.get("email"),
                            password:formData.get("password"),                
                            birthDate:formData.get("birthDate"),
                        }
                        let confirmPassword=formData.get("confirmPassword");
                        
                        if(user.password!=confirmPassword)
                        {
                            return;
                        }
                        await registerUser(user);
                        await signIn("credentials",{email:user.email,password:user.password})
                        }
                    }
        >
            <label className="inline text-lg font-medium" htmlFor="firstNameInput">First Name</label>
            <input name="firstName" className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="firstNameInput" type="text"/>

            <label className="inline text-lg font-medium" htmlFor="lastNameInput">Last Name</label>
            <input name="lastName" className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="lastNameInput" type="text"/>

            <label className="inline text-lg font-medium" htmlFor="emailInput">Email</label>
            <input name="email" className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="emailInput" type="email"/>

            <label className="inline text-lg font-medium" htmlFor="passwordInput">Password</label>
            <input name="password" className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="passwordInput" type="password"/>

            <label className="inline text-lg font-medium" htmlFor="confirmPasswordInput">Confirm Password</label>
            <input name="confirmPassword" className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="confirmPasswordInput" type="password"/>

            <label className="inline text-lg font-medium" htmlFor="birthDateInput">Date Of Birth</label>
            <input name="birthDate" className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="birthDateInput" type="date"/>

            <button className="bg-teal-300 p-1 px-2 cursor-pointer mt-2 rounded-lg border-black border-2 text-black font-medium" type="submit">Register</button>
            <a className="block" href="./login">Already have an account? Log in now!</a>
        </form>
        </div>
    </div>
    </>
    
}