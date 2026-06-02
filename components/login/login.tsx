


import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"



export default async function Login()
{
    
    if(await auth())
    {
        redirect("/profile");
    }
    return<>
    <div className="credentialsBox flex justify-center items-center h-screen">
        <div className="border-4 border-sky-600 rounded-lg p-10">
        <h1 className="text-6xl font-medium text-center mb-10">Log in</h1>
        <form 
        action={async (formData) => {
                "use server"
                
                await signIn("credentials", formData)
                
                }}  
         >
            <label className="inline text-lg font-medium" htmlFor="emailInput">Email</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="emailInput" name="email" type="text"  />

            <label className="inline text-lg font-medium" htmlFor="passwordInput">Password</label>
            <input className="block border-y-4 border-y-sky-600 rounded-lg py-1 w-100" id="passwordInput" name="password" type="text" />

            <button className="bg-teal-300 p-1 px-2 cursor-pointer mt-2 rounded-lg border-black border-2 text-black font-medium" type="submit">Login</button>
            <a className="inline ml-1" href="/register">Don' t have an account? Register now!</a>
        </form>
        </div>
    </div> 
    </>
    
}